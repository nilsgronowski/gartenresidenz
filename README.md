# Immobilien Exposé - Single Page Application

Eine moderne, modulare React-Onepage-Anwendung zur Darstellung eines Immobilien-Exposés. Komplett lokal, ohne externe Backend-Abhängigkeiten.

## ✨ Features

- **Modulare Architektur**: Jede Sektion ist eine wiederverwendbare React-Komponente
- **Typsicher**: Vollständig mit TypeScript implementiert
- **Datengetrieben**: Klare Trennung von Daten, Logik und Präsentation
- **Kein Backend nötig**: Alle Daten werden lokal aus `src/data/` geladen
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Tests ausführen
npm test
```

Die Anwendung läuft unter: **http://localhost:8080**

## 📁 Projektstruktur

```
src/
├── components/           # UI-Komponenten
│   ├── sections/        # Seiten-Sektionen (Hero, About, Contact, etc.)
│   └── ui/              # Wiederverwendbare UI-Komponenten
├── data/                # Lokale Daten
│   └── projectData.ts   # Projekt-, Objekt- und Firmendaten
├── types/               # TypeScript Interfaces
│   └── index.ts         # Project, RealEstateObject, Company
├── pages/               # Seiten-Komponenten
├── lib/                 # Utility-Funktionen
└── App.tsx              # Haupt-App-Komponente
```

## 🏗️ Datenmodelle

### Project

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
