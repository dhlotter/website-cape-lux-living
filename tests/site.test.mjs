// Checks a built copy of the site. scripts/prepush builds into a temp folder and passes it in SITE_DIST,
// so the tracked docs/ folder is never touched. Without SITE_DIST it reads dist/.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const out = process.env.SITE_DIST || path.join(root, 'dist')
const SITE = 'https://capeluxliving.co.za/'
const read = f => readFileSync(path.join(out, f), 'utf8')

test('the build exists', () => {
  assert.ok(existsSync(path.join(out, 'index.html')), `${out}/index.html is missing, build first`)
})

test('the custom domain and the crawler files ship with the build', () => {
  assert.equal(read('CNAME').trim(), 'capeluxliving.co.za') // without it GitHub Pages drops the domain
  assert.ok(read('sitemap.xml').includes(`<loc>${SITE}</loc>`))
  assert.match(read('robots.txt'), /Sitemap:\s*https:\/\/capeluxliving\.co\.za\/sitemap\.xml/i)
})

test('the page has its title, description, canonical and share image', () => {
  const html = read('index.html')
  assert.match(html, /<title>[^<]{10,}<\/title>/)
  assert.match(html, /<meta name="description" content="[^"]{40,}"/)
  assert.ok(html.includes(`<link rel="canonical" href="${SITE}"`))
  const og = html.match(/property="og:image" content="([^"]+)"/)?.[1] ?? ''
  assert.ok(og.startsWith(SITE) && existsSync(path.join(out, og.slice(SITE.length))), `share image ${og} is not in the build`)
})

test('every local script, style and image the page loads is in the build', () => {
  const html = read('index.html')
  const missing = [...html.matchAll(/(?:src|href)="(\/[^"/][^"]*)"/g)]
    .map(m => m[1].split(/[?#]/)[0])
    .filter(url => !existsSync(path.join(out, url)))
  assert.deepEqual(missing, [])
  const js = readdirSync(path.join(out, 'assets')).filter(f => f.endsWith('.js'))
  assert.ok(js.length > 0, 'no JavaScript bundle was built')
})

// The contact details are the point of the site, a typo here loses enquiries.
const config = readFileSync(path.join(root, 'src/config/contact.ts'), 'utf8')
const field = name => config.match(new RegExp(`${name}:\\s*"([^"]+)"`))?.[1]

test('the contact details agree with each other and reach the built page', () => {
  const phone = field('phone'), whatsapp = field('whatsapp'), email = field('email')
  assert.match(phone, /^\+27\d{9}$/)
  assert.equal(whatsapp, phone.slice(1), 'the WhatsApp number must be the phone number without the plus')
  assert.match(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const bundle = readdirSync(path.join(out, 'assets'))
    .filter(f => f.endsWith('.js'))
    .map(f => readFileSync(path.join(out, 'assets', f), 'utf8'))
    .join('')
  for (const value of [phone, whatsapp, email]) assert.ok(bundle.includes(value), `${value} is not in the built page`)
  assert.ok(bundle.includes('wa.me/') && bundle.includes('mailto:') && bundle.includes('tel:'))
})
