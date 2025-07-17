import { useEffect, useState } from "react";
import './ToggleTheme.css';

export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
  })

  const toggleTheme = (newTheme) => {
    setTheme(newTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="toggle-theme">
      <button onClick={() => toggleTheme('light')} className={"toggle-btn" + (theme === 'light' ? ' active' : '')}>
        <span className="btn-checkbox"></span>
        light
      </button>
      <button onClick={() => toggleTheme('dark')} className={"toggle-btn" + (theme === 'dark' ? ' active' : '')}>
        <span className="btn-checkbox"></span>
        dark
      </button>
    </div>
  )
}