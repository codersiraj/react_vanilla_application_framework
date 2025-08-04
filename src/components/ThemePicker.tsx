import React, { useRef, useState, useEffect } from "react";
import { Paintbrush } from "lucide-react";

const themes = [
  {
    name: "Default",
    primary: "#1A365D",
    accent: "#ED8936",
    background: "#F7FAFC",
    sidebar: "#1A365D",
    textPrimary: "#2D3748",
    hover: "#ffa94d",
    preview: "#ED8936",
    buttontext: "#FFFFFF",
    header:"#FFFFFF"
  },
  {
    name: "Emerald",
    primary: "#2F855A",
    accent: "#68D391",
    background: "#F0FFF4",
    sidebar: "#22543D",
    textPrimary: "#2D3748",
    hover: "#A7F3D0",
    preview: "#68D391",
    buttontext: "#FFFFFF",
    header:"#FFFFFF"
  },
  {
    name: "Royal",
    primary: "#3B82F6",
    accent: "#F59E42",
    background: "#F7FAFC",
    sidebar: "#1E3A8A",
    textPrimary: "#1E293B",
    hover: "#A5B4FC",
    preview: "#3B82F6",
    buttontext: "#FFFFFF",
    header:"#FFFFFF"
  },
  {
  name: "Modern Dark",
  primary: "#23272F",        // Deep navy gray (for header/topnav)
  accent: "#FFD700",         // Gold accent (for buttons, icons, highlights)
  background: "#F7FAFC",     // Almost-black, soft on the eyes (overall bg)
  sidebar: "#23272F",        // Sidebar matches header for seamlessness
  textPrimary: "#23272F",    // White-ish text, high readability
  hover: "#F7FAFC",          // Hover: lighter gray for surfaces (e.g. cards, sidebar items)
  preview: "#FFD700",         // Gold for the color swatch
  buttontext: "#FFFFFF",
  header:"#FFFFFF"
}
];

function setThemeColors(theme: typeof themes[0]) {
  const root = document.documentElement;
  root.style.setProperty('--hrms-primary', theme.primary);
  root.style.setProperty('--hrms-accent', theme.accent);
  root.style.setProperty('--hrms-background', theme.background);
  root.style.setProperty('--hrms-sidebar', theme.sidebar);
  root.style.setProperty('--hrms-text-primary', theme.textPrimary);
  root.style.setProperty('--hrms-hover', theme.hover);
  root.style.setProperty('--hrms-buttontext', theme.buttontext);
  root.style.setProperty('--hrms-header', theme.header);
}

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Default");
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close picker on click outside
    const handler = (e: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={pickerRef}
      className="fixed z-50 flex flex-col items-end"
      style={{
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        minWidth: "56px",
      }}
    >
      {/* FAB */}
      <button
        aria-label="Theme Picker"
        onClick={() => setOpen((o) => !o)}
        className="bg-hrms-accent text-hrms-buttontext w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110 focus:outline-none mr-3"
      >
        <Paintbrush size={24} />
      </button>
      {/* Popover */}
      {open && (
        <div className="mt-2 mr-3 w-64 rounded-2xl shadow-2xl bg-white p-5 border border-gray-100 animate-fadeIn">
          <div className="font-semibold mb-2 text-gray-900 text-sm">Theme Colors</div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {themes.map((theme) => (
              <button
                key={theme.name}
                title={theme.name}
                aria-label={theme.name}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${selected === theme.name ? "border-hrms-buttontext ring-2 ring-hrms-buttontext" : "border-gray-200"}
                  transition`}
                style={{ background: theme.preview }}
                onClick={() => {
                  setThemeColors(theme);
                  setSelected(theme.name);
                  setOpen(false);
                }}
              />
            ))}
          </div>
          <div className="text-xs text-gray-400">Pick a theme color for your dashboard</div>
        </div>
      )}
    </div>
  );
}

// Optional: Add this animation to index.css
/*
@keyframes fadeIn { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: none; } }
.animate-fadeIn { animation: fadeIn 0.2s cubic-bezier(.32,1.4,.53,1) both; }
*/
