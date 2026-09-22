import { l } from '../i18n'

/** Textes d'interface et de présentation (hero, intros de sections, formulaire…). */
export const ui = {
  skip: l('Aller au contenu', 'Skip to content'),
  menuOpen: l('Ouvrir le menu', 'Open menu'),
  menuClose: l('Fermer le menu', 'Close menu'),
  themeToggle: l('Changer de thème', 'Toggle theme'),
  langSwitch: l('Changer de langue', 'Change language'),
  paletteOpen: l('Recherche rapide', 'Quick search'),

  hero: {
    status: l('Alternant MOA (Maîtrise d’ouvrage) · CNP Assurances', 'Work-study Business Analyst (MOA) · CNP Assurances'),
    lead: l(
      'Je fais le lien entre les besoins métier et les systèmes d’information, avec une base technique en réseaux, cybersécurité, développement et data.',
      'I bridge business needs and information systems, backed by a technical foundation in networks, cybersecurity, software development and data.',
    ),
    ctaProjects: l('Voir mes projets', 'View my projects'),
    ctaCv: l('Télécharger mon CV', 'Download my CV'),
    photoAlt: l('Portrait de Bruce TUMPA MADILA', 'Portrait of Bruce TUMPA MADILA'),
    facts: [
      { label: l('Formation', 'Programme'), value: l('Master MIAGE', 'MIAGE Master’s'), sub: l('Université de Haute-Alsace · 2026 – 2028', 'Université de Haute-Alsace · 2026 – 2028') },
      { label: l('Entreprise', 'Company'), value: l('CNP Assurances', 'CNP Assurances'), sub: l('Alternance · depuis sept. 2026', 'Work-study · since Sept. 2026') },
      { label: l('Rythme', 'Schedule'), value: l('15 j / 15 j', '15 d / 15 d'), sub: l('université / entreprise', 'university / company') },
    ],
  },

  alternance: {
    eyebrow: l('Alternance', 'Work-study'),
    title: l('Mon alternance chez CNP Assurances', 'My work-study at CNP Assurances'),
    intro: l(
      'Depuis septembre 2026, je suis alternant chez l’assureur de personnes CNP Assurances (Garges-lès-Gonesse, 95), sur le pilotage et la gestion des évolutions du système d’information, au plus près du cycle de vie d’une évolution : du besoin au déploiement.',
      'Since September 2026 I’ve been a work-study student at CNP Assurances, a life-insurance company (Garges-lès-Gonesse, France), on steering and managing evolutions of the information system, close to the whole life cycle of a change: from need to rollout.',
    ),
    role: l('Pilotage & gestion des évolutions SI', 'IS change steering & management'),
    step: l('Étape', 'Step'),
    note: l(
      'Site personnel : les projets et propos présentés n’engagent pas CNP Assurances.',
      'Personal site: the projects and views presented do not represent CNP Assurances.',
    ),
    rhythm: {
      label: l('Rythme d’alternance', 'Work-study rhythm'),
      aria: l(
        'Alternance de 15 jours en entreprise et 15 jours à l’université, répétée tout au long du contrat.',
        'Alternating 15 days at the company and 15 days at university, repeated throughout the contract.',
      ),
      company: l('CNP Assurances · 15 jours', 'CNP Assurances · 15 days'),
      school: l('Université de Haute-Alsace · 15 jours', 'Université de Haute-Alsace · 15 days'),
    },
  },

  projects: {
    eyebrow: l('Projets', 'Projects'),
    title: l('Ce que j’ai construit', 'What I’ve built'),
    intro: l(
      'Des projets personnels et universitaires, du réseau à l’application mobile, avec du code, des labs et des résultats mesurables.',
      'Personal and university projects, from networking to mobile apps, with code, labs and measurable results.',
    ),
    all: l('Tous', 'All'),
    live: l('Démo', 'Live demo'),
    code: l('Code', 'Code'),
    captures: l('Captures', 'Screenshots'),
    privateRepo: l('Dépôt privé', 'Private repo'),
    inProgress: l('En cours', 'In progress'),
    result: l('Résultat', 'Outcome'),
    close: l('Fermer', 'Close'),
    prev: l('Précédente', 'Previous'),
    next: l('Suivante', 'Next'),
    of: l('sur', 'of'),
  },

  skills: {
    eyebrow: l('Compétences', 'Skills'),
    title: l('Boîte à outils', 'Toolbox'),
    intro: l(
      'Une pratique technique diversifiée, mise au service des systèmes d’information.',
      'A varied technical practice, put to work for information systems.',
    ),
    soft: l('Savoir-être', 'Soft skills'),
  },

  background: {
    eyebrow: l('Parcours', 'Background'),
    title: l('Formation & expérience', 'Education & experience'),
    profile: l(
      'Licencié en informatique (Université de Strasbourg) et titulaire d’un diplôme de niveau Bac+5 en mathématiques, option réseaux informatiques (Université Pédagogique Nationale, Kinshasa), je m’appuie sur une formation généraliste pour contribuer à l’évolution des systèmes d’information. Ma pratique technique (sécurisation d’infrastructures, applications distribuées, analyse de données) m’aide à comprendre à la fois le besoin et sa mise en œuvre.',
      'With a Computer Science degree (Université de Strasbourg) and a Bac+5-level diploma in mathematics, computer networks track (Université Pédagogique Nationale, Kinshasa), I rely on a broad education to contribute to the evolution of information systems. My hands-on technical practice (infrastructure hardening, distributed applications, data analysis) helps me understand both the need and how it gets built.',
    ),
    education: l('Formation', 'Education'),
    experience: l('Expérience', 'Experience'),
    current: l('En cours', 'Ongoing'),
  },

  contact: {
    eyebrow: l('Contact', 'Contact'),
    title: l('Discutons', 'Let’s talk'),
    intro: l(
      'Un échange sur les systèmes d’information, un projet, une opportunité ? Écrivez-moi, je réponds dès que possible.',
      'A chat about information systems, a project, an opportunity? Write to me, I reply as soon as I can.',
    ),
    name: l('Nom complet', 'Full name'),
    email: l('Email', 'Email'),
    subject: l('Objet', 'Subject'),
    message: l('Message', 'Message'),
    send: l('Envoyer le message', 'Send message'),
    sending: l('Envoi…', 'Sending…'),
    success: l('Merci ! Votre message a bien été envoyé, je vous réponds rapidement.', 'Thank you! Your message was sent, I’ll get back to you shortly.'),
    error: l('L’envoi a échoué. Réessayez, ou contactez-moi via LinkedIn.', 'Sending failed. Please try again, or reach me on LinkedIn.'),
    another: l('Envoyer un autre message', 'Send another message'),
    based: l('Garges-lès-Gonesse (95) · Mulhouse (68)', 'Garges-lès-Gonesse (France) · Mulhouse (France)'),
  },

  footer: {
    rights: l('Tous droits réservés.', 'All rights reserved.'),
    built: l('Conçu avec React, TypeScript & Vite · déployé avec GitHub Pages', 'Built with React, TypeScript & Vite · deployed with GitHub Pages'),
    top: l('Haut de page', 'Back to top'),
  },

  palette: {
    placeholder: l('Aller à une section, lancer une action…', 'Jump to a section, run an action…'),
    empty: l('Aucun résultat', 'No results'),
    sections: l('Sections', 'Sections'),
    actions: l('Actions', 'Actions'),
    links: l('Liens', 'Links'),
    hint: l('↑↓ pour naviguer · ↵ pour valider · échap pour fermer', '↑↓ to navigate · ↵ to select · esc to close'),
    home: l('Accueil', 'Home'),
    cv: l('Télécharger le CV (PDF)', 'Download CV (PDF)'),
    theme: l('Basculer clair / sombre', 'Toggle light / dark'),
    lang: l('Passer en anglais', 'Switch to French'),
  },
}
