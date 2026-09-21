// Prérendu statique : injecte le HTML de <App/> (rendu côté serveur) dans dist/index.html.
// Le navigateur (et les robots) reçoivent ainsi le contenu sans exécuter de JavaScript ; React hydrate ensuite.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = process.cwd()
const template = path.join(root, 'dist', 'index.html')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const html = await readFile(template, 'utf8')

if (!html.includes('<!--app-html-->')) throw new Error('Marqueur <!--app-html--> introuvable dans dist/index.html')

await writeFile(template, html.replace('<!--app-html-->', render()))
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true })
// GitHub Pages : sans ce fichier, Jekyll ignorerait certains dossiers.
await writeFile(path.join(root, 'dist', '.nojekyll'), '')
console.log('✓ Prérendu terminé : dist/index.html')
