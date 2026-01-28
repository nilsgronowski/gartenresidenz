# Gartenresidenz am Denkmal – Website

Standalone Single Page Application für das Immobilienprojekt "Gartenresidenz am Denkmal" in Meerbusch.

## 📋 Übersicht

Website für 8 Eigentumswohnungen mit Kontaktformular, PDF-Exposés und Galerieansicht. Komplett unabhängig von externen Backend-Services – alle Daten lokal, E-Mail-Versand über Resend API.

**Projekt:** Niederlöricker Straße 4, 40667 Meerbusch  
**Objekte:** WE 01-08 (93-183 m², 3-4 Zimmer, 650K-1.249M EUR)  
**Kontakt:** Fohrer Immobilien, Lars Gronowski

---

## 🛠 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS + Radix UI Components
- **Routing:** React Router v6
- **Forms:** React Hook Form
- **E-Mail:** Resend API (über Netlify Functions)
- **Deployment:** Netlify (empfohlen)

---

## 📁 Projektstruktur

```
.
├── src/
│   ├── components/
│   │   ├── sections/          # Sektionen der Landing Page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ApartmentsSection.tsx
│   │   │   ├── ContactSection.tsx  ← Kontaktformular
│   │   │   └── ...
│   │   └── ui/                # Radix UI Components
│   ├── pages/
│   │   ├── Index.tsx          # Haupt-Landing-Page
│   │   ├── Impressum.tsx
│   │   ├── Datenschutz.tsx
│   │   └── AGB.tsx
│   ├── data/
│   │   └── projectData.ts     ← Alle Wohnungsdaten (8 Objekte)
│   ├── types/
│   │   └── index.ts           # TypeScript Interfaces
│   └── App.tsx                # Router-Setup
│
├── netlify/
│   └── functions/
│       └── contact.js         ← Serverless Function für E-Mail-Versand
│
├── public/
│   ├── assets/
│   │   └── units/             # Visualisierungen (we1-1.jpg, we2-1.png, ...)
│   └── favicon.svg
│
├── netlify.toml               # Netlify Konfiguration
├── vite.config.ts             # Vite mit Proxy für lokale Netlify Functions
└── .env                       # Environment Variables (nicht committen!)
```

---

## 🚀 Setup & Installation

### Voraussetzungen

- Node.js 18+ und npm
- Git

### 1. Repository klonen & Dependencies installieren

```bash
git clone <repo-url>
cd "Projekt 2026"
npm install
```

### 2. Environment Variables einrichten

Erstelle `.env` im Root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_FROM=noreply@gartenresidenz-meerbusch.de
CONTACT_TO=lars.gronowski@fohrer-immobilien.de
```

**Wichtig:**

- `CONTACT_FROM` muss von verifizierter Resend-Domain sein
- `CONTACT_TO` ist die Zieladresse für alle Formular-Anfragen
- `.env` NICHT in Git committen (steht in `.gitignore`)

### 3. Resend konfigurieren

1. Account auf [resend.com](https://resend.com/signup) erstellen
2. API Key holen: Dashboard → API Keys → Create API Key
3. Domain verifizieren:
   - Dashboard → Domains → Add Domain
   - Domain eingeben (z.B. `gartenresidenz-meerbusch.de`)
   - 3 DNS TXT-Records (DKIM) in Domain-Panel eintragen
   - Warten bis Status "Verified" (5-30 Min)

### 4. Dev-Server starten

```bash
npm run dev
```

Öffne [http://localhost:8080](http://localhost:8080)

**Hinweis:** Läuft mit Netlify Dev auf Port 9999 im Hintergrund für Functions-Support.

---

## 💻 Entwicklung

### Wichtige Befehle

```bash
npm run dev          # Development Server (Port 8080)
npm run build        # Production Build
npm run preview      # Preview Production Build
npm run lint         # ESLint
npm test             # Vitest
```

### Daten bearbeiten

**Wohnungen hinzufügen/ändern:**  
→ [src/data/projectData.ts](src/data/projectData.ts)

```typescript
export const realEstateObjects: RealEstateObject[] = [
  {
    id: "WE-01",
    title: "WE 01 · EG Links",
    rooms: 3,
    size: 98.63,
    price: 765000,
    features: ["Gartenanteil", "2 Badezimmer"],
    images: ["/assets/units/we1-1.jpg"],
  },
  // ...
];
```

**Bilder:**  
→ `public/assets/units/` (we1-1.jpg, we2-1.png, ...)

**Texte/Sections:**  
→ `src/components/sections/` (HeroSection.tsx, AboutSection.tsx, ...)

---

## 📧 Kontaktformular – So funktioniert's

### Lokale Entwicklung

1. `npm run dev` startet **Netlify Dev** mit Vite
2. Vite-Proxy leitet `/api/contact` zu `/.netlify/functions/contact`
3. Function lädt Env-Variablen aus `.env`
4. Resend sendet E-Mail an `CONTACT_TO`

### Production (Netlify)

1. Netlify baut Code + Functions automatisch
2. Functions nutzen Netlify Environment Variables
3. Route `/api/contact` → `/.netlify/functions/contact`

### Flow

```
User füllt Formular aus
    ↓
ContactSection.tsx: POST /api/contact
    ↓
Netlify Function: contact.js
    ↓
Resend API
    ↓
E-Mail an lars.gronowski@fohrer-immobilien.de
```

**ReplyTo:** Automatisch auf Nutzer-E-Mail gesetzt → Direktantwort möglich

---

## 🚢 Deployment (Netlify)

### Erstmalig deployen

1. **Netlify Site erstellen:**
   - [netlify.com](https://netlify.com) → New site from Git
   - Repository verbinden
   - Build Settings prüfen:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Functions directory: `netlify/functions`

2. **Environment Variables setzen:**
   - Site Settings → Environment variables
   - Hinzufügen:
     ```
     RESEND_API_KEY=re_...
     CONTACT_FROM=noreply@gartenresidenz-meerbusch.de
     CONTACT_TO=lars.gronowski@fohrer-immobilien.de
     ```

3. **Deploy triggern:**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push
   ```

### Updates deployen

Einfach pushen – Netlify baut automatisch:

```bash
git add .
git commit -m "Update content"
git push
```

### Domain einrichten

- Netlify: Domain settings → Add custom domain
- DNS bei Domain-Provider: CNAME auf Netlify subdomain

---

## 🔧 Konfiguration

### Vite Proxy ([vite.config.ts](vite.config.ts))

```typescript
proxy: {
  '/api': {
    target: 'http://localhost:9999',  // Netlify Dev Port
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '/.netlify/functions'),
  },
}
```

Leitet lokale `/api/contact` Requests zu Netlify Functions.

### Netlify ([netlify.toml](netlify.toml))

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[dev]
  command = "vite"
  targetPort = 8080
  port = 9999

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

---

## 🔑 Wichtige Dateien

| Datei                                        | Zweck                                  |
| -------------------------------------------- | -------------------------------------- |
| `src/data/projectData.ts`                    | Alle Wohnungsdaten (8 Objekte)         |
| `src/components/sections/ContactSection.tsx` | Kontaktformular mit Validation         |
| `netlify/functions/contact.js`               | Serverless Function für E-Mail-Versand |
| `src/pages/Impressum.tsx`                    | Impressum (rechtlich erforderlich)     |
| `src/pages/Datenschutz.tsx`                  | Datenschutzerklärung (DSGVO)           |
| `src/pages/AGB.tsx`                          | AGB aus PDF extrahiert                 |
| `public/assets/units/`                       | Visualisierungen der Wohnungen         |
| `.env`                                       | Lokale Secrets (NICHT committen!)      |
| `netlify.toml`                               | Netlify Build & Routing-Konfiguration  |

---

## 🐛 Troubleshooting

### "404 /api/contact"

- **Lokal:** `npm run dev` nutzen (nicht `npm run dev:vite`)
- **Production:** Env-Variablen in Netlify gesetzt? Functions-Ordner korrekt?

### "missing_resend_key"

- `.env` Datei existiert? Richtige Variablennamen?
- Netlify: Environment variables in Dashboard gesetzt?

### E-Mail wird nicht versendet

- Resend Dashboard → Emails → Fehler prüfen
- Domain verifiziert? (DKIM-Records korrekt?)
- `CONTACT_FROM` muss verifizierte Domain nutzen

### Bilder laden nicht

- Pfade in `projectData.ts` prüfen: `/assets/units/we1-1.jpg`
- Dateien in `public/assets/units/` vorhanden?
- Build neu ausführen: `npm run build`

---

## 📝 Hinweise

### Resend Limits (Free Tier)

- 100 E-Mails/Tag
- 3.000 E-Mails/Monat
- Für mehr: Paid Plan aktivieren

### Security

- API Keys NIEMALS im Frontend-Code
- `.env` in `.gitignore` (bereits konfiguriert)
- Netlify Functions laden Secrets serverseitig

### Content-Updates ohne Code

Für kleine Textänderungen:

1. `src/data/projectData.ts` oder Section-Files bearbeiten
2. `git commit` + `git push`
3. Netlify baut automatisch neu

---

## 📞 Support

**Entwicklung:** GitHub Issues  
**Immobilien-Anfragen:** lars.gronowski@fohrer-immobilien.de  
**Resend Support:** [resend.com/support](https://resend.com/support)

---

**Letztes Update:** Januar 2026

```typescript
interface Project {
  name: string;
  location: string;
  objectCount: number;
  description?: string;
}
```

### RealEstateObject

```typescript
interface RealEstateObject {
  id: string;
  title: string;
  rooms: number;
  size: number;
  price?: number;
  images: string[];
  floor?: string;
  features?: string[];
  status?: "available" | "reserved" | "sold";
}
```

### Company

```typescript
interface Company {
  name: string;
  logo: string;
  url?: string;
}
```

## 🎨 Anpassung

### Eigene Daten einbinden

Bearbeite die Datei `src/data/projectData.ts`:

```typescript
export const project: Project = {
  name: "Dein Projektname",
  location: "Deine Adresse",
  objectCount: 12,
  description: "Deine Beschreibung",
};

export const realEstateObjects: RealEstateObject[] = [
  // Deine Wohnungen
];

export const company: Company = {
  name: "Deine Firma",
  logo: "/pfad/zu/logo.svg",
  url: "https://deine-website.de",
};
```

### Neue Sektionen hinzufügen

1. Erstelle eine neue Komponente in `src/components/sections/`
2. Definiere Props-Interface mit TypeScript
3. Importiere und verwende in `src/pages/Index.tsx`

## 🛠️ Technologie-Stack

- **React 18** mit TypeScript
- **Vite** als Build-Tool
- **Tailwind CSS** für Styling
- **Radix UI** für barrierefreie UI-Komponenten
- **React Hook Form** für Formulare
- **Lucide React** für Icons

## 📦 Deployment

### Static Hosting

```bash
npm run build
```

Der Output-Ordner `dist/` kann auf beliebigen Static-Hosting-Plattformen deployed werden:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Formular-Backend (Optional)

Das Kontaktformular simuliert aktuell eine Submission. Für Production:

1. Erstelle einen API-Endpoint (z.B. Serverless Function)
2. Ersetze die Submit-Logik in `ContactSection.tsx`
3. Integriere E-Mail-Service (SendGrid, Mailgun, etc.)

## 📄 Lizenz

Dieses Projekt ist frei verwendbar und anpassbar.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
