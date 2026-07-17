# Portfolio — Bruce TUMPA MADILA

Portfolio personnel : réseaux, cybersécurité, développement logiciel, systèmes d'information et Data & IA.

🔗 En ligne : https://epsi12-lab.github.io/Portofolio/

## Fonctionnalités

- Bilingue FR/EN via un système i18n léger (`js/translations.js`)
- Thème clair/sombre
- Responsive, animations au scroll (AOS)
- SEO : meta Open Graph/Twitter Card, données structurées JSON-LD (`Person`), `sitemap.xml` et `robots.txt`
- Aucune dépendance CDN externe : polices, icônes et librairies sont auto-hébergées (`assets/fonts/`, `assets/vendor/`)
- CV compilé automatiquement depuis une source LaTeX (format ATS-friendly)

## Structure du projet

```
├── index.html                          # Page principale
├── *-captures.html                     # Pages de captures dédiées par projet (Likelemba, Partithéco, GNS3 x2)
├── merci.html                          # Page de confirmation du formulaire de contact
├── css/style.css
├── js/translations.js                  # Système i18n FR/EN
├── assets/
│   ├── images/                         # Photos, captures de projets
│   ├── favicon/
│   ├── fonts/                          # Manrope auto-hébergée
│   ├── vendor/                         # Font Awesome + AOS auto-hébergés
│   └── docs/                           # CV PDF généré
├── cv/CV_Bruce_Portfolio.tex           # Source LaTeX du CV
├── .github/workflows/generate_pdf.yml  # Compile le CV en PDF à chaque modification du .tex
└── robots.txt / sitemap.xml
```

## Développement local

Site statique pur, aucune dépendance ni étape de build.

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## CV (pipeline LaTeX → PDF)

La source de vérité du CV est `cv/CV_Bruce_Portfolio.tex`. À chaque `git push` modifiant ce fichier, le workflow GitHub Actions `generate_pdf.yml` recompile le PDF via `latexmk` (image Docker `ghcr.io/xu-cheng/texlive-full`) et commit automatiquement le résultat dans `assets/docs/CV_Bruce_TUMPA_MADILA.pdf`, lié depuis le site ("Mon CV").

Ne jamais éditer le PDF à la main — toujours passer par le `.tex`.

## Déploiement

Hébergé via GitHub Pages depuis la branche `main` (pas de domaine personnalisé).

## Auteur

**Bruce TUMPA MADILA**
[LinkedIn](https://www.linkedin.com/in/bruce-tumpa-madila-a4a184223) · [GitHub](https://github.com/epsi12-lab)
