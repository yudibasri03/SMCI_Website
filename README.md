# SMCI Community Website

Website resmi SMCI Community — Smart Money Concept Indonesia.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Wouter** (routing)

## Pages
- `/` — Home
- `/products` — Products (Mentoring, Indicators, Ebook)
- `/mentors` — Our Mentors
- `/testimonials` — Testimonials
- `/faq` — FAQ
- `/contact` — Contact

## Setup Lokal

```bash
npm install
npm run dev
```

## Deploy ke Vercel

### Via GitHub (Recommended)

1. Push ke GitHub repo
2. Import repo di [vercel.com](https://vercel.com)
3. Settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

### Manual via Vercel CLI

```bash
npm install -g vercel
vercel
```

## Kustomisasi

### Ganti Konten
- **Mentor**: Edit `src/pages/Mentors.tsx`
- **Produk**: Edit `src/pages/Products.tsx`  
- **Testimoni**: Edit `src/pages/Testimonials.tsx`
- **FAQ**: Edit `src/pages/FAQ.tsx`
- **Kontak WA**: Cari `6281234567890` dan ganti dengan nomor WA SMCI

### Ganti Warna
Edit `src/index.css` bagian `:root`:
```css
--cyan: #22C1DC;   /* Warna aksen utama */
--gold: #F0B429;   /* Warna aksen sekunder */
```

### Tambah Logo
Taruh file logo di `public/` lalu import di komponen Navbar dan Footer.

## Struktur Folder

```
src/
├── components/
│   ├── AnimatedBackground.tsx
│   ├── FadeIn.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Mentors.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
public/
└── favicon.svg
```
