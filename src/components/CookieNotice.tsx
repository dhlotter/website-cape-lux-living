import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-notice-dismissed";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 bg-foreground/95 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 flex items-center gap-3 shadow-luxury animate-in fade-in slide-in-from-bottom-2 duration-300">
      <p className="flex-1">This site uses cookies for analytics.</p>
      <button
        onClick={dismiss}
        className="shrink-0 px-3 py-1 rounded-md bg-white/15 hover:bg-white/25 transition-colors text-sm font-medium"
      >
        OK
      </button>
    </div>
  );
};

export default CookieNotice;
