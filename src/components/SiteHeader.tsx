import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile, siteNavigation } from "../content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="主导航">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-role">AI / 应用实践</span>
        </a>

        <div className="nav-links">
          {siteNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>

        <a className="nav-cta" href="#contact">聊聊机会 <span aria-hidden="true">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "关闭菜单" : "打开菜单"}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {siteNavigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
