import { l } from '../i18n'

/** URL d'un fichier du dossier public/, en tenant compte du base path (/Portofolio/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const site = {
  name: 'Bruce TUMPA MADILA',
  url: 'https://epsi12-lab.github.io/Portofolio/',
  linkedin: 'https://www.linkedin.com/in/bruce-tumpa-madila-a4a184223',
  github: 'https://github.com/epsi12-lab',
  repo: 'https://github.com/epsi12-lab/Portofolio',
  cv: 'docs/CV_Bruce_TUMPA_MADILA.pdf',
  formEndpoint: 'https://formspree.io/f/mqedngpb',
}

export const sections = [
  { id: 'alternance', label: l('Alternance', 'Work-study') },
  { id: 'projets', label: l('Projets', 'Projects') },
  { id: 'competences', label: l('Compétences', 'Skills') },
  { id: 'parcours', label: l('Parcours', 'Background') },
  { id: 'contact', label: l('Contact', 'Contact') },
] as const

export type SectionId = (typeof sections)[number]['id']
