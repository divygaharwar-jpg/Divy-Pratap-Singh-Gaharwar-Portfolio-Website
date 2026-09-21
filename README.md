# Modern Developer Portfolio Website 🚀

A high-performance, accessible, and responsive developer portfolio website built for **Divy Pratap Singh Gaharwar** using **React.js (Vite)**, **Tailwind CSS**, and **Framer Motion**.

Designed with a sleek obsidian & emerald dark theme default, glassmorphic cards, smooth micro-interactions, and a decoupled architecture where all profile information lives in `src/data/`.

---

## 🌟 Key Features

- **Creative & Original UI**:
  - Deep obsidian/navy (`#070A10`) dark theme default with glowing **Emerald** accents (`#10B981` / `#34D399`).
  - Warm off-white light theme with rich slate typography.
  - Numbered section headings (`01 — About`, `02 — Skills`, etc.).
  - "DPS" Monogram badge with ambient emerald glow.
  - Typography powered by Google Fonts: **Sora** (headings) & **Inter** (body).
  - Ambient glowing background blobs and glassmorphic card borders.

- **Hero Section**:
  - Animated rotating roles (*Frontend Developer in the Making*, *Hackathon Enthusiast*, *Web Development Explorer*, *React & Tailwind Crafter*).
  - Pulsating "Open to opportunities" live badge.
  - One-click actions: View Projects, Download Resume, GitHub, LinkedIn.

- **About Me ("01 — About")**:
  - Bio highlighting web development learning journey and hackathon passion.
  - 4 animated highlight metric cards (Hackathons, Events & Workshops, Web Projects, Main Domain).

- **Skills Section ("02 — Skills")**:
  - Modular skill cards with category filtering (*All*, *Frontend*, *Styling*, *Tools*).
  - Animated progress bars triggered on scroll into view.
  - "Intermediate" vs "Learning" level badges.

- **Projects Showcase ("03 — Projects")**:
  - Filterable by domain (*All*, *Hackathons*, *Frontend*, *Web Apps*).
  - Interactive switcher between **Curated Featured Projects** and **Live GitHub Repositories**.
  - GitHub REST API integration with loading skeleton states and resilient fallback.

- **Education & Experience ("04 — Journey")**:
  - Interactive dual-view timeline (*Hackathons & Events* vs *Education*).
  - Displays event name, year, what was built, tech stack used, and certificate badges.

- **Engineering Blog ("05 — Blog")**:
  - 3 rich articles on hackathons, React state transitions, and Tailwind CSS.
  - Full article detail view with reading progress bar via **React Router DOM** (`/blog/:slug`).

- **Validated Contact Section ("06 — Contact")**:
  - Real-time input validation (name, email format, subject, message character counter).
  - Interactive submit animation with confetti celebration effect.
  - Quick-copy email button and direct phone/LinkedIn/GitHub cards.

- **Theme Switcher**:
  - Smooth sun/moon toggle saved in `localStorage`.
  - Anti-FOUC (Flash of Unstyled Content) script in `index.html`.

- **Accessibility & Performance**:
  - Zero linter errors and optimized production build (`< 1.5s`).
  - Respects `prefers-reduced-motion` for motion-sensitive users.
  - Fully responsive across mobile (360px), tablet (768px), and desktop (1440px+).

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React + custom SVG brand icons
- **Routing**: React Router DOM v7
- **Effects**: Canvas-Confetti

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg              # DPS monogram icon
│   └── resume.pdf               # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackgroundBlobs.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── BlogSection.jsx
│   │       ├── Contact.jsx
│   │       ├── Experience.jsx
│   │       ├── Hero.jsx
│   │       ├── Projects.jsx
│   │       └── Skills.jsx
│   ├── data/
│   │   ├── blog.js              # Blog posts & content
│   │   ├── experience.js        # Education & Hackathon timeline
│   │   ├── personal.js          # Bio, contact, roles, social links
│   │   ├── projects.js          # Curated showcase projects
│   │   └── skills.js            # Technical skills & percentages
│   ├── hooks/
│   │   ├── useGitHubRepos.js    # Live GitHub repos fetcher
│   │   ├── useScrollSpy.js      # Active section detector
│   │   └── useTheme.js          # Dark/Light theme manager
│   ├── pages/
│   │   ├── BlogPost.jsx         # Full article detail view
│   │   └── Home.jsx             # Portfolio single page
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### 4. Run Linter
```bash
npm run lint
```

---

## ✏️ How to Customize Your Information

All user content is separated from the UI logic. You only need to edit files in `src/data/`:

| File | What to update |
| --- | --- |
| `src/data/personal.js` | Your name, bio, social links (GitHub, LinkedIn), email, phone, and rotating roles. |
| `src/data/skills.js` | Add, remove, or adjust proficiency percentages and skill level tags. |
| `src/data/projects.js` | Replace placeholder projects with your real project titles, descriptions, and demo links. |
| `src/data/experience.js`| Add your real college name, degrees, and specific hackathons or events you participated in. |
| `src/data/blog.js` | Add new blog posts or modify existing articles. |
| `public/resume.pdf` | Replace with your latest resume PDF. |

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live with free SSL and continuous deployment!

### Deploying to GitHub Pages

1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Add a deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`.

---

© 2026 Divy Pratap Singh Gaharwar. Built with passion and precision.
