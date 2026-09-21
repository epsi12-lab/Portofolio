import { l, type L } from '../i18n'

export type MissionIcon = 'needs' | 'recette' | 'bug' | 'planning' | 'docs' | 'rollout'

export type Mission = { icon: MissionIcon; title: L; body: L }

/**
 * Missions de l'alternance, d'après la fiche de poste CNP Assurances
 * « Pilotage gestion évolutions SI ». Volontairement génériques : aucun détail interne.
 * À affiner avec le tuteur une fois en poste.
 */
export const missions: Mission[] = [
  {
    icon: 'needs',
    title: l('Besoins & User Stories', 'Needs & User Stories'),
    body: l(
      'Cadrer et challenger les besoins utilisateurs avec le Business Analyst, puis les spécifier, de façon générale et détaillée, en intégrant les retours des différents acteurs.',
      'Frame and challenge user needs alongside the Business Analyst, then specify them at both high and detailed level, folding in feedback from every stakeholder.',
    ),
  },
  {
    icon: 'recette',
    title: l('Recette & tests métier', 'Acceptance & business testing'),
    body: l(
      'Contribuer à la préparation de recette (sanity check, stratégie, plan de tests) et réaliser les tests métier avec les Test Managers pour garantir la qualité des livrables.',
      'Help prepare acceptance (sanity check, strategy, test plan) and run business tests with the Test Managers to secure the quality of what ships.',
    ),
  },
  {
    icon: 'bug',
    title: l('Anomalies & indicateurs', 'Defects & KPIs'),
    body: l(
      'Participer au suivi des anomalies et rédiger les rapports d’anomalies en lien avec les équipes de test.',
      'Help track defects and write defect reports together with the test teams.',
    ),
  },
  {
    icon: 'planning',
    title: l('Planning & pilotage', 'Planning & steering'),
    body: l(
      'Participer à la cohérence du planning et alerter le métier et le chef de projet en cas de risque.',
      'Help keep the schedule coherent and alert the business side and the project manager when something slips.',
    ),
  },
  {
    icon: 'docs',
    title: l('Documentation', 'Documentation'),
    body: l(
      'Rédiger la documentation nécessaire à la compréhension de la solution et au suivi des évolutions, pour garantir la continuité des connaissances.',
      'Write the documentation needed to understand the solution and follow its changes, so knowledge outlives the project.',
    ),
  },
  {
    icon: 'rollout',
    title: l('Déploiement & accompagnement', 'Rollout & user support'),
    body: l(
      'Participer au déploiement sur les entités concernées et accompagner les utilisateurs avec formation et supports de prise en main.',
      'Help roll the solution out across the entities involved and support users with training and onboarding material.',
    ),
  },
]
