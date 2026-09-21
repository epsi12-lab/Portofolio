# Portfolio — Bruce TUMPA MADILA

Portfolio personnel : systèmes d'information, gestion de projet, développement logiciel, cybersécurité, réseaux et Data & IA.
Alternant en Master MIAGE (Université de Haute-Alsace) chez CNP Assurances.

🔗 En ligne : https://epsi12-lab.github.io/Portofolio/

## Stack

- **React 19 + TypeScript**, bundlé avec **Vite**
- **Prérendu statique** au build (SSR → HTML injecté dans `dist/index.html`) : le contenu est lisible sans JavaScript (SEO, aperçus de liens), puis React hydrate la page
- **CSS moderne**, sans framework : OKLCH + `light-dark()`, animations pilotées par le scroll (`animation-timeline`), View Transitions (changement de thème), `<dialog>` natif, `@starting-style`, `color-mix()`
- Bilingue FR/EN, thème clair/sombre (préférence système puis choix mémorisé), palette de commandes `Ctrl/⌘ + K`
- Aucune ressource externe : polices (`@fontsource`), icônes (`lucide-react`) et images sont embarquées
- Accessibilité : navigation clavier, `prefers-reduced-motion`, lien d'évitement, attributs ARIA sur la palette et la galerie

## Structure

```
├── index.html                 # Point d'entrée : balises SEO, JSON-LD, script anti-flash du thème
├── src/
│   ├── content/               # ★ Tout le contenu du site (FR + EN), séparé de l'interface
│   │   ├── ui.ts              #   textes d'interface, hero, intros de sections
│   │   ├── mission.ts         #   missions de l'alternance
│   │   ├── projects.ts        #   projets et captures
│   │   ├── skills.ts          #   compétences
│   │   ├── timeline.ts        #   formation et expérience
│   │   └── site.ts            #   liens, sections de navigation
│   ├── components/            # Header, Hero, Alternance, Projects, Skills, Background, Contact…
│   ├── styles/                # tokens.css (palette), base.css, components.css
│   ├── i18n.tsx               # Contexte FR/EN (type L = { fr, en })
│   ├── theme.ts               # Bascule de thème avec View Transition
│   ├── App.tsx / main.tsx     # Application et hydratation
│   └── entry-server.tsx       # Rendu serveur utilisé par le prérendu
├── scripts/prerender.mjs      # Injecte le HTML rendu dans dist/index.html
├── public/                    # Copié tel quel : images, favicons, CV PDF, robots.txt, sitemap.xml
├── cv/CV_Bruce_Portfolio.tex  # Source LaTeX du CV
└── .github/workflows/         # deploy.yml (build + Pages) et generate_pdf.yml (CV)
```

## Modifier le contenu

Tout se passe dans `src/content/` : chaque texte est un couple `l('français', 'english')`. Ajouter un projet = ajouter un objet dans `projects.ts` (les captures y sont déclarées aussi). Aucun composant à toucher.

## Développement local

Node.js ≥ 18 (Node 22 recommandé, c'est la version utilisée par la CI).

```bash
npm install
npm run dev        # serveur de dev sur http://localhost:5173/Portofolio/
npm run build      # typecheck + build + prérendu → dist/
npm run preview    # sert dist/ sur http://localhost:4173/Portofolio/
```

## CV (pipeline LaTeX → PDF)

La source de vérité du CV est `cv/CV_Bruce_Portfolio.tex`. À chaque push qui la modifie, le workflow `generate_pdf.yml` la compile avec `latexmk` (`xu-cheng/latex-action`) et commit le résultat dans `public/docs/CV_Bruce_TUMPA_MADILA.pdf`, lié depuis le site. Le site est ensuite redéployé automatiquement.

Ne jamais éditer le PDF à la main : toujours passer par le `.tex`.

## Déploiement

GitHub Pages **via GitHub Actions** (`Settings → Pages → Build and deployment → Source : GitHub Actions`). Chaque push sur `main` lance `deploy.yml` : `npm ci`, `npm run build`, publication de `dist/`. L'URL est sous `/Portofolio/` (voir `base` dans `vite.config.ts`).

## Auteur

**Bruce TUMPA MADILA**
[LinkedIn](https://www.linkedin.com/in/bruce-tumpa-madila-a4a184223) · [GitHub](https://github.com/epsi12-lab)
