# Design System — Isak.dev Portfolio

> Dokumen referensi desain untuk menjaga konsistensi visual di seluruh halaman.
> Selalu perbarui dokumen ini jika ada perubahan token, komponen, atau pola baru.

---

## 1. Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + TSX |
| Styling | Tailwind CSS v3 + CSS Custom Properties |
| Icons | Material Symbols Outlined (Google Fonts) |
| Animation | GSAP 3 + ScrollTrigger |
| Theme | Dark / Light via `.dark` class pada `<html>` |

---

## 2. Tipografi

### Font Families

| Nama Token | Font | Kegunaan |
|---|---|---|
| `font-grotesk` / `font-sans` | **Hanken Grotesk** | Headline, body text, nama, semua teks utama |
| `font-geist` | **Geist** | Label, badge, nav tooltip, uppercase small text, metadata |
| *(Material Symbols)* | Material Symbols Outlined | Semua ikon UI |

> **Aturan:** `Hanken Grotesk` = konten utama. `Geist` = UI kecil, label, uppercase tracker.

### Font Weights

| Weight | Kegunaan |
|---|---|
| `400` (Regular) | Body text biasa |
| `500` (Medium) | Label, section label |
| `600` (SemiBold) | Sub-heading, nama profil |
| `700` (Bold) | Headline utama, stat number |

### Type Scale (Tailwind tokens)

| Token | Size | Line Height | Letter Spacing | Weight |
|---|---|---|---|---|
| `text-display-lg` | 80px | 90px | -0.04em | 600 |
| `text-headline-lg` | 48px | 56px | -0.02em | 500 |
| `text-headline-lg-mobile` | 32px | 40px | -0.01em | 500 |
| `text-body-md` | 18px | 28px | — | 400 |
| `text-label-sm` | 12px | 16px | 0.05em | 500 |

### Ukuran Umum yang Dipakai (inline)

| Konteks | Size |
|---|---|
| Nav tooltip | `11px` + `letter-spacing: 0.1em` + uppercase |
| Section label | `12px` + `letter-spacing: 0.1em` + uppercase |
| Stat number | `clamp(48px, 8vw, 80px)` |
| Headline hero | `clamp(36px, 6vw, 72px)` |
| Hero panel name | `clamp(22px, 3.5vw, 32px)` |
| Panel description | `15px` |
| Skill name | `13px` + uppercase + `tracking-wider` |
| Timeline company | `12px` + uppercase + `tracking-wider` |
| Button CTA | `11px` + `letter-spacing: 0.05em` + uppercase + bold |

---

## 3. Warna

Semua warna didefinisikan sebagai **CSS Custom Properties** di `globals.css` dan dimapping ke Tailwind di `tailwind.config.ts`. Gunakan token Tailwind — **jangan hardcode hex** kecuali pada overlay transparan.

### 3.1 Palette — Light Mode (`:root`)

#### Core Surfaces

| Token CSS | Tailwind Class | Light Value | Kegunaan |
|---|---|---|---|
| `--color-background` | `bg-background` | `#eeeee8` | Background halaman |
| `--color-on-background` | `text-on-background` | `#1a1a1a` | Teks di atas background |
| `--color-surface` | `bg-surface` | `#f5f5f0` | Surface card/panel |
| `--color-on-surface` | `text-on-surface` | `#1a1a1a` | Teks utama di atas surface |
| `--color-surface-variant` | `bg-surface-variant` | `#e0e0d8` | Surface sekunder |
| `--color-on-surface-variant` | `text-on-surface-variant` | `#5a6355` | Teks muted/subtitle |
| `--color-surface-container` | `bg-surface-container` | `#ffffff` | Container dalam card |
| `--color-surface-container-high` | `bg-surface-container-high` | `#e8e8e2` | Skill bar background |

#### Primary — Hijau Brand

| Token CSS | Tailwind Class | Light Value | Dark Value | Kegunaan |
|---|---|---|---|---|
| `--color-primary` | `text-primary` | `#3aab52` | `#77fd8c` | Brand utama, scrollbar hover |
| `--color-primary-container` | `bg-primary-container` | `#3aab52` | `#59e073` | CTA button, badge, skill bar, accent |
| `--color-on-primary` | `text-on-primary` | `#ffffff` | `#003912` | Teks di atas primary |
| `--color-on-primary-container` | `text-on-primary-container` | `#003912` | `#006023` | Teks di atas primary-container |

> **Primary color** digunakan untuk: CTA buttons, active nav indicator, stat suffix, link aksen, "Available for Work" dot, skill bar fill.

#### Secondary

| Token CSS | Tailwind Class | Light Value | Dark Value |
|---|---|---|---|
| `--color-secondary` | `text-secondary` | `#5a6355` | `#c6c6c7` |
| `--color-secondary-container` | `bg-secondary-container` | `#dde8d6` | `#454747` |

#### Tertiary — Warm Orange (aksen)

| Token CSS | Tailwind Class | Light Value | Dark Value |
|---|---|---|---|
| `--color-tertiary` | `text-tertiary` | `#7a4526` | `#ffdbca` |
| `--color-tertiary-container` | `bg-tertiary-container` | `#ffdbca` | `#ffb68f` |

> Dipakai untuk skill bar Framer & Webflow sebagai variasi warna.

#### Outline / Divider

| Token CSS | Tailwind Class | Light | Dark |
|---|---|---|---|
| `--color-outline` | `text-outline` | `#73796e` | `#879484` |
| `--color-outline-variant` | `bg-outline-variant` | `#c2c9bc` | `#3d4a3c` |

### 3.2 Palette — Dark Mode (`.dark`)

| Surface | Dark Value |
|---|---|
| `--color-background` | `#121414` |
| `--color-surface` | `#121414` |
| `--color-surface-container` | `#1f2020` |
| `--color-surface-container-high` | `#292a2a` |

### 3.3 Component-Specific Tokens

| Token | Light | Dark | Kegunaan |
|---|---|---|---|
| `--glass-panel-bg` | `rgba(255,255,255,0.72)` | `rgba(22,22,22,0.5)` | `.glass-panel` background |
| `--glass-panel-border` | `rgba(0,0,0,0.07)` | `rgba(255,255,255,0.06)` | `.glass-panel` border |
| `--card-border-color` | `#c2c2be` | `#636363` | Border kartu LeftPanel |
| `--card-shadow` | lihat globals.css | lihat globals.css | Shadow kartu LeftPanel |
| `--notch-bg` | `#e8e8e2` | `#2a2a2a` | "Available for Work" notch |
| `--notch-border` | `#c2c2be` | `#636363` | Border notch |
| `--badge-color` | `rgba(30,30,30,0.55)` | `rgba(255,255,255,0.35)` | Rotating badge text |
| `--divider-color` | `rgba(0,0,0,0.10)` | `rgba(255,255,255,0.08)` | Garis pemisah horizontal |
| `--avatar-border` | `rgba(0,0,0,0.10)` | `rgba(255,255,255,0.10)` | Border avatar |

### 3.4 Warna Hardcoded yang Diizinkan

Hanya untuk elemen di atas foto/background gelap (tidak berubah dengan tema):

| Nilai | Konteks |
|---|---|
| `rgba(15,15,15,0.80)` | Background logo & social icon di atas foto LeftPanel |
| `rgba(255,255,255,0.50)` | Teks deskripsi di atas foto LeftPanel |
| `#59e073` | CTA button & "Available" dot (selalu di konteks gelap) |
| `#003912` | Teks di atas `#59e073` di LeftPanel |
| `rgba(89,224,115,0.22)` | Drop shadow gambar 3D hero |
| `rgba(89,224,115,0.28)` | Glow effect tombol CTA |

---

## 4. Spacing (Tailwind Custom)

| Token | Nilai | Kegunaan |
|---|---|---|
| `left-panel-width` | `396px` | Lebar LeftPanel (default) |
| `left-panel-width-lg` | `516px` | Lebar LeftPanel di `xl` |
| `stack-sm` | `8px` | Jarak antar elemen kecil |
| `stack-md` | `24px` | Jarak antar elemen medium |
| `stack-lg` | `48px` | Jarak antar section |
| `gutter` | `32px` | Gap grid |
| `container-padding` | `64px` | Padding main content |

---

## 5. Border Radius

| Token | Nilai | Dipakai pada |
|---|---|---|
| `rounded` | 4px | — |
| `rounded-lg` | 8px | Nav tooltip |
| `rounded-xl` | 12px | Logo box, social icons |
| `rounded-2xl` | 16px | Mobile dropdown |
| `rounded-3xl` | 24px | — |
| `rounded-full` | 9999px | Nav rail, CTA buttons, skill bar, avatar |
| inline `40px` | 40px | LeftPanel card border radius |

---

## 6. Komponen Global

### `.glass-panel`
```css
background: var(--glass-panel-bg);
backdrop-filter: blur(20px);
border: 1px solid var(--glass-panel-border);
```
Digunakan oleh: NavRail, MobileHeader, mobile dropdown.

### `.stat-number`
```css
font-family: 'Hanken Grotesk'; font-weight: 700;
font-size: clamp(48px, 8vw, 80px); letter-spacing: -0.04em;
```

### `.section-label`
```css
font-family: 'Geist'; font-size: 12px; letter-spacing: 0.1em;
font-weight: 500; text-transform: uppercase;
```

### `.glow-effect:hover`
```css
box-shadow: 0 0 24px rgba(89, 224, 115, 0.2);
```

---

## 7. Layout Halaman

### Template Semua Halaman
```tsx
<div className="flex min-h-screen bg-background">
  <MobileHeader />   {/* Fixed top, md:hidden */}
  <LeftPanel />      {/* Fixed left, xl:fixed */}
  <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen
                   p-8 md:px-container-padding md:py-container-padding md:pr-24">
    {/* Konten halaman */}
  </main>
  <NavRail />        {/* Fixed right, hidden md:flex */}
</div>
```

### Routes

| Route | Label | Icon Material |
|---|---|---|
| `/` | Home | `home` |
| `/about` | About | `person` |
| `/work` | Work | `work` |
| `/services` | Services | `auto_awesome` |
| `/blog` | Blog | `description` |
| `/contact` | Contact | `send` |

---

## 8. Animasi (GSAP)

### Entrance (sekali saat mount)

| Elemen | From | To | Durasi | Ease |
|---|---|---|---|---|
| LeftPanel | `opacity:0, x:-30` | `opacity:1, x:0` | 0.8s | power3.out |
| NavRail | `opacity:0, x:30` | `opacity:1, x:0` | 0.8s | power3.out |
| MobileHeader | `opacity:0, y:-20` | `opacity:1, y:0` | 0.6s | power2.out |
| Hero headline words | `opacity:0, y:50, rotateX:-15` | full | 0.85s + stagger 0.07 | power3.out |
| Hero image | `opacity:0, scale:0.88, y:24` | full | 1.1s | power3.out |

### Continuous

| Elemen | Animasi |
|---|---|
| Rotating badge | rotation 360°, 14s, repeat:-1 |
| Hero image float | y:-10, 2.8s, yoyo, repeat:-1 |
| "Available" dot | `animate-pulse` Tailwind |

### Scroll-triggered (ScrollTrigger)

- `start: "top 80-85%"`, `once: true`
- Dipakai untuk: stat counter, skill bars, about sections

---

## 9. Dark/Light Mode

### Implementasi
1. Anti-flash script di `<head>` membaca `localStorage('theme')` atau OS preference
2. Menambah/hapus class `.dark` pada `<html>`
3. Semua token CSS otomatis berubah via `.dark { }` di globals.css

### Aturan
- Semua warna elemen tema harus pakai token CSS
- Gunakan prefix `dark:` Tailwind untuk kasus edge
- **Jangan** hardcode warna untuk elemen yang berubah antar tema

---

## 10. Ikon

```tsx
<span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
  icon_name
</span>

// Active (filled)
fontVariationSettings: '"FILL" 1'
// Inactive (outlined)
fontVariationSettings: '"FILL" 0'
```

### Ukuran per Konteks

| Konteks | Size |
|---|---|
| NavRail | 20px |
| Panel social | 15px |
| Panel logo | 17px |
| Clients bar | 18px |
| Badge center | 20px |
| Mobile header | 22px |
| CTA arrow | 16px |

---

## 11. Coding Guidelines

### Do ?
```tsx
// Pakai token Tailwind
className="text-on-surface-variant font-geist text-label-sm uppercase tracking-widest"

// CSS vars untuk nilai tanpa token
style={{ color: "var(--badge-color)" }}

// clamp() untuk typography responsif
style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}
```

### Don't ?
```tsx
// Hardcode warna yang sudah ada tokennya
style={{ color: "#5a6355" }}  // ? pakai text-on-surface-variant

// Duplikasi komponen yang sudah ada
// Tambah dependency baru tanpa justifikasi
// Abstraksi yang tidak diminta
```

---

## 12. File Referensi

| File | Isi |
|---|---|
| `app/globals.css` | CSS custom properties, base styles, component classes |
| `tailwind.config.ts` | Token mapping, spacing, fontSize, borderRadius custom |
| `app/layout.tsx` | Root layout, metadata, anti-flash script |
| `components/LeftPanel.tsx` | Panel foto fixed kiri, typing effect, CTA |
| `components/NavRail.tsx` | Nav vertikal kanan + theme toggle |
| `components/MobileHeader.tsx` | Header mobile + dropdown |
| `components/HeroSection.tsx` | Konten utama homepage |
| `components/StatsSection.tsx` | Animated stat counter |
| `components/TopNavbar.tsx` | Navbar horizontal fixed top, desktop only (md+) |

---

*Terakhir diperbarui: 28 Agustus 2026*

