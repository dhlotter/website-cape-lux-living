import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import houseLinesFavicon from '@/assets/capelux_house_lines.svg'

const faviconEl = document.getElementById("favicon") as HTMLLinkElement | null;
if (faviconEl) {
  faviconEl.href = houseLinesFavicon;
}

createRoot(document.getElementById("root")!).render(<App />);
