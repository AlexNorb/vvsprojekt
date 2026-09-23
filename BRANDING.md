# VVS Projekt – Branding & Style Guide

Visuell identitet för VVS Projekt. Alla färger, typografi och UI-stilar definieras i `src/styles/global.css`.

---

## 🎨 Färgpalett

| Namn | Variabel | Hex | Användning |
|------|----------|-----|------------|
| **Brand Primary** | `--color-brand-primary` | `#003ca6` | Huvudfärg, rubriker, primära knappar |
| **Brand Dark** | `--color-brand-dark` | `#002a75` | Mörkare nyanser, hover, kontrast |
| **Brand Accent** | `--color-brand-accent` | `#C75746` | CTA, highlights, accenter (koppar) |
| **Brand Gray** | `--color-brand-gray` | `#f8fafc` | Bakgrunder, subtila sektioner |
| **Surface Dark** | `--color-slate-900` | `#0f172a` | Mörka bakgrunder, footer |
| **Hover Accent** | *(Hårdkodad)* | `#b24333` | `.btn-accent:hover` |

### Tailwind-alias
* `--color-vvsblue` → `--color-brand-primary`
* `--color-vvscopper` → `--color-brand-accent`

---

## ✍️ Typografi

### Primär Font (Brödtext & UI)
* **Familj**: `Inter`
* **Variabel**: `--font-sans`
* **Vikter**: 300, 400, 500, 600, 700
* **Källa**: [Google Fonts](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap)

### Display Font (Rubriker & Logga)
* **Familj**: `Bank Gothic Light`
* **Variabel**: `--font-display`
* **Källa**: Lokala assets (`public/fonts/`)
* **Användning**: Logotyp, stilistiska rubriker

---

## 🧩 UI-komponenter

### Knappar

#### Accent Button (`.btn-accent`)
* **Bakgrund**: Koppar (`#C75746`)
* **Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
* **Hover**: bakgrund `#b24333`, transform `-1px`, skugga `rgba(199, 87, 70, 0.3)`

### Skuggor
| Namn | Variabel | Värde | Användning |
|------|----------|-------|------------|
| Soft Shadow | `--shadow-soft` | `0 4px 20px -2px rgba(0,0,0,0.05)` | Kort, containers |
| Glow Shadow | `--shadow-glow` | `0 0 15px rgba(199,87,70,0.3)` | Fokus, aktiva element |

### Special-klasser
* `.logo-text` – Bank Gothic Light, letter-spacing `-1px`

---

## 🎬 Animationer

### Fade In Up
* **Namn**: `fadeInUp`
* **Längd**: `0.8s`
* **Easing**: `ease-out`
* **Variabel**: `--animate-fade-in-up`

---

## 🔧 Central Konfiguration

All företagsdata (kontaktinfo, sociala medier, serviceområden etc.) finns i **`src/config.ts`**.
Uppdatera denna fil för att ändra information på hela siten.

## 🛠 Teknik
* **Ramverk**: Astro 5
* **CSS**: Tailwind CSS v4 (Vite plugin)
* **Stilar**: `src/styles/global.css`
* **Config**: `src/config.ts`
