# CV (Curriculum Vitae)

Jednostránkové CV postavené na **React** a **Vite**, nasazené na **GitHub Pages** jako projektové stránky.

## Lokální vývoj

```bash
npm install
npm run dev
```

Aplikace používá `base: '/curriculum-vitae/'` – v prohlížeči otevři adresu, kterou vypíše Vite (typicky `http://localhost:5173/curriculum-vitae/`), aby odpovídala produkci na GitHubu.

## Úprava obsahu

Veškerý text a struktura CV jsou v souboru [`src/data/cv.ts`](src/data/cv.ts). Komponenty jen vykreslují tato data.

## Build

```bash
npm run build
```

Výstup je ve složce `dist/`.

## Nasazení na GitHub Pages

1. Vytvoř na GitHubu repozitář se **stejným názvem** jako v `vite.config.ts` u položky `base` (výchozí: `curriculum-vitae`).
2. Nahraj kód a nastav výchozí větev na `main`.
3. V repozitáři: **Settings → Pages → Build and deployment → Source**: zvol **GitHub Actions**.
4. Po pushi do `main` spustí workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) build a nasazení.

Veřejná URL bude ve tvaru:

`https://<tvůj-username>.github.io/curriculum-vitae/`

### Přejmenování repozitáře

Pokud repozitář na GitHubu pojmenuješ jinak, uprav v [`vite.config.ts`](vite.config.ts) hodnotu `base` na `'/<nový-název-repo>/'` (vždy s lomítky na začátku i konci) a znovu pushni – jinak se nenačtou JS a CSS.

## Tisk / PDF

V prohlížeči použij **Tisk → Uložit jako PDF**. Styl pro tisk je v [`src/App.css`](src/App.css) (`@media print`).
