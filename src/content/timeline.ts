import { l, type L } from '../i18n'

export type TimelineItem = {
  id: string
  date: L
  title: L
  org: L
  detail?: L
  current?: boolean
}

/** Colonne « Formation » (du plus récent au plus ancien). */
export const education: TimelineItem[] = [
  {
    id: 'miage',
    date: l('Sept. 2026 – 2028', 'Sept. 2026 – 2028'),
    title: l('Master MIAGE en alternance', 'MIAGE Master’s (work-study)'),
    org: l('Université de Haute-Alsace · FST, Mulhouse', 'Université de Haute-Alsace · FST, Mulhouse'),
    detail: l('Contrat d’apprentissage : 15 jours à l’université, 15 jours en entreprise.', 'Apprenticeship contract: 15 days at university, 15 days at the company.'),
    current: true,
  },
  {
    id: 'licence',
    date: l('2022 – 2026', '2022 – 2026'),
    title: l('Licence Informatique', 'Bachelor’s in Computer Science'),
    org: l('Université de Strasbourg', 'Université de Strasbourg'),
    detail: l('Algorithmique, systèmes d’exploitation, réseaux, bases de données, développement logiciel.', 'Algorithms, operating systems, networks, databases, software development.'),
  },
  {
    id: 'upn',
    date: l('2015 – 2020', '2015 – 2020'),
    title: l('Diplôme de niveau Bac+5, Mathématiques, option Réseaux Informatiques', 'Bac+5-level diploma, Mathematics, Computer Networks track'),
    org: l('Université Pédagogique Nationale, Kinshasa (R.D. Congo)', 'Université Pédagogique Nationale, Kinshasa (D.R. Congo)'),
    detail: l('Mathématiques pures, modélisation, réseaux informatiques.', 'Pure mathematics, modelling, computer networks.'),
  },
]

/** Colonne « Expérience ». */
export const experience: TimelineItem[] = [
  {
    id: 'cnp',
    date: l('Depuis sept. 2026', 'Since Sept. 2026'),
    title: l('Alternant : pilotage & évolutions SI', 'Work-study: IS change steering'),
    org: l('CNP Assurances · Garges-lès-Gonesse (95)', 'CNP Assurances · Garges-lès-Gonesse (France)'),
    detail: l('Recette métier, spécifications, suivi des anomalies, documentation et déploiement.', 'Business acceptance, specifications, defect tracking, documentation and rollout.'),
    current: true,
  },
  {
    id: 'lidl',
    date: l('05/2022 – 08/2026', '05/2022 – 08/2026'),
    title: l('Opérateur logistique (CDI)', 'Logistics operator (permanent contract)'),
    org: l('LIDL, direction régionale · Strasbourg', 'LIDL, regional headquarters · Strasbourg'),
    detail: l(
      'Application rigoureuse des procédures qualité : zéro incident signalé sur 4 ans ; délais maintenus en coordination avec l’équipe.',
      'Rigorous application of quality procedures: no reported incident over 4 years; deadlines met in coordination with the team.',
    ),
  },
  {
    id: 'occ',
    date: l('Août 2018 · 4 semaines', 'Aug. 2018 · 4 weeks'),
    title: l('Stage : systèmes d’information', 'Internship: information systems'),
    org: l('Office Congolais de Contrôle, département SI · Kinshasa', 'Office Congolais de Contrôle, IS department · Kinshasa'),
    detail: l('Participation à la gestion de systèmes d’information avec WinDev.', 'Took part in managing information systems with WinDev.'),
  },
  {
    id: 'teaching',
    date: l('2018 & 2020 · stages', '2018 & 2020 · internships'),
    title: l('Stages d’enseignement : mathématiques', 'Teaching internships: mathematics'),
    org: l('Lycée de Kimwenza · R.D. Congo', 'Lycée de Kimwenza · D.R. Congo'),
    detail: l('Analyse, algèbre et statistique au collège (8 semaines) puis au lycée (12 semaines).', 'Analysis, algebra and statistics at middle school (8 weeks) then high school (12 weeks).'),
  },
]
