import { l, type L } from '../i18n'

export type ProjectCategory = 'dev' | 'data' | 'network'

export const categoryLabels: Record<ProjectCategory, L> = {
  dev: l('Développement', 'Development'),
  data: l('Data & IA', 'Data & AI'),
  network: l('Réseau & cybersécurité', 'Network & security'),
}

export type Shot = { src: string; alt: L; caption: L; width: number; height: number }

/**
 * Contenu du panneau « En savoir plus ». Pour les dépôts publics, tiré du README
 * du dépôt GitHub correspondant (pas du code source entier) : rien ici n'est
 * inventé au-delà de ce que le dépôt documente lui-même.
 */
export type ProjectDetail = {
  context: L
  approach: L
  /** Points factuels courts, sourcés du dépôt (chiffres, mesures, choix précis). */
  points?: L[]
  /** Précision quand l'information est volontairement limitée (dépôt privé, refonte en cours…). */
  note?: L
}

export type Project = {
  id: string
  category: ProjectCategory
  title: L
  period?: string
  summary: L
  /** Résultat mesurable ou point marquant, affiché sous le résumé. */
  outcome?: L
  tags: string[]
  live?: string
  code?: string
  privateRepo?: boolean
  inProgress?: boolean
  /** Texte du badge quand inProgress est vrai (sinon le texte générique "En cours"). */
  status?: L
  gallery?: Shot[]
  detail?: ProjectDetail
}

const shot = (src: string, width: number, height: number, caption: L, alt: L = caption): Shot => ({ src, width, height, caption, alt })

/** Ordre = ordre d'affichage. */
export const projects: Project[] = [
  {
    id: 'chess',
    category: 'dev',
    title: l('Material Chess', 'Material Chess'),
    period: '2026',
    summary: l(
      'Jeu d’échecs multiplateforme en temps réel : architecture client-serveur, WebSockets, gestion des sessions, persistance des données et authentification sécurisée. Projet intégrateur de L3, conçu en équipe et déployé publiquement.',
      'Real-time cross-platform chess game: client-server architecture, WebSockets, session handling, data persistence and secure authentication. L3 capstone project, built as a team and publicly deployed.',
    ),
    outcome: l('Sessions sécurisées, zéro perte de session constatée.', 'Secure sessions, no session loss observed.'),
    tags: ['Kotlin', 'Ktor', 'WebSockets', 'JWT', 'PostgreSQL', 'Redis'],
    live: 'https://chess.ailurus.fr/',
    detail: {
      context: l(
        'Projet intégrateur de fin de L3, réalisé en équipe : concevoir un jeu d’échecs jouable en temps réel entre deux joueurs, avec une vraie architecture client-serveur plutôt qu’un jeu purement local.',
        'End-of-L3 capstone project, built as a team: design a chess game playable in real time between two players, with a real client-server architecture rather than a purely local game.',
      ),
      approach: l(
        'Le serveur (Kotlin/Ktor) fait autorité sur l’état des parties ; les clients communiquent en WebSockets pour un affichage instantané, avec authentification JWT et persistance des comptes et parties (PostgreSQL, sessions Redis).',
        'The server (Kotlin/Ktor) is authoritative over game state; clients communicate over WebSockets for instant updates, with JWT authentication and persistent accounts and games (PostgreSQL, Redis sessions).',
      ),
      note: l(
        'Projet d’équipe : le dépôt n’est pas accessible publiquement.',
        'Team project: the repository isn’t publicly accessible.',
      ),
    },
  },
  {
    id: 'churn',
    category: 'data',
    title: l('Prédiction du churn client', 'Customer churn prediction'),
    period: '2026',
    summary: l(
      'Pipeline Data & ML de bout en bout sur le dataset Telco Customer Churn (IBM) : analyse exploratoire, nettoyage, feature engineering, modélisation supervisée et évaluation. Code structuré en notebooks et modules Python réutilisables.',
      'End-to-end Data & ML pipeline on the IBM Telco Customer Churn dataset: exploratory analysis, cleaning, feature engineering, supervised modelling and evaluation. Code organised as notebooks and reusable Python modules.',
    ),
    outcome: l(
      'Régression logistique : AUC 0,836. Seuil ajusté de 0,50 à 0,35 : le rappel passe de 57 % à 72 %.',
      'Logistic regression: 0.836 AUC. Threshold adjusted from 0.50 to 0.35: recall rises from 57% to 72%.',
    ),
    tags: ['Python', 'Pandas', 'scikit-learn', 'EDA', 'matplotlib / seaborn'],
    code: 'https://github.com/epsi12-lab/telco-churn-pipeline',
    detail: {
      context: l(
        'Le dataset Telco Customer Churn (IBM) sert à repérer à l’avance les clients d’un opérateur télécom susceptibles de résilier, pour cibler des actions de rétention plutôt que d’agir après coup.',
        'The IBM Telco Customer Churn dataset is used to flag customers likely to leave a telecom operator ahead of time, to target retention efforts instead of reacting after the fact.',
      ),
      approach: l(
        'Pipeline scikit-learn (nettoyage, encodage des variables catégorielles, standardisation) comparant une régression logistique à une forêt aléatoire, avec ajustement du seuil de décision pour privilégier le rappel plutôt que la seule précision.',
        'A scikit-learn pipeline (cleaning, categorical encoding, scaling) comparing logistic regression against a random forest, with the decision threshold tuned to favour recall over raw accuracy.',
      ),
      points: [
        l(
          'Régression logistique plus performante que la forêt aléatoire (AUC 0,836 contre 0,816) : le problème est majoritairement linéaire, et le modèle reste plus facile à expliquer.',
          'Logistic regression outperforms the random forest (0.836 vs 0.816 AUC): the problem is largely linear, and the model stays easier to explain to stakeholders.',
        ),
        l(
          'Seuil de décision déplacé de 0,50 à 0,35 : le rappel passe de 57 % à 72 %, soit environ 3 clients à risque sur 4 repérés à l’avance.',
          'Decision threshold moved from 0.50 to 0.35: recall rises from 57% to 72%, roughly 3 out of 4 at-risk customers flagged ahead of time.',
        ),
      ],
    },
  },
  {
    id: 'infra',
    category: 'network',
    title: l('Infrastructure réseau d’entreprise sécurisée', 'Secured enterprise network'),
    period: '2026',
    summary: l(
      'Lab GNS3 d’une infrastructure PME multi-sites : segmentation en 4 VLAN, routage dynamique OSPF, haute disponibilité VRRP, services DHCP/DNS centralisés (dnsmasq) et filtrage pfSense avec politique de refus explicite.',
      'GNS3 lab of a multi-site SME infrastructure: 4 VLANs, OSPF dynamic routing, VRRP high availability, centralised DHCP/DNS (dnsmasq) and pfSense filtering with an explicit deny policy.',
    ),
    outcome: l(
      'Bascule de passerelle VRRP mesurée à environ 35 secondes ; délai attribué à l’expiration du cache ARP.',
      'VRRP gateway failover measured at about 35 seconds; delay attributed to ARP cache expiry.',
    ),
    tags: ['GNS3', 'VyOS', 'OSPF', 'VRRP', 'pfSense', 'VLAN', 'dnsmasq', 'Docker'],
    code: 'https://github.com/epsi12-lab/gns3-infra-securisee',
    detail: {
      context: l(
        'Reproduire, dans un lab GNS3, l’architecture réseau d’une PME multi-sites autour de trois piliers : segmentation, disponibilité et filtrage.',
        'Reproduce, in a GNS3 lab, the network architecture of a multi-site SME around three pillars: segmentation, availability and filtering.',
      ),
      approach: l(
        'Routage dynamique OSPF (VyOS, zone unique), haute disponibilité VRRP entre deux routeurs, services DHCP/DNS centralisés par relais (dnsmasq), et pfSense positionné en coupure du VLAN utilisateurs avec politique de refus implicite.',
        'Dynamic OSPF routing (VyOS, single area), VRRP high availability between two routers, centralised DHCP/DNS via relay (dnsmasq), and pfSense positioned in-line on the user VLAN with an implicit deny policy.',
      ),
      points: [
        l(
          'Bascule de passerelle VRRP mesurée à environ 35 secondes ; l’expiration du cache ARP identifiée comme principal facteur de délai.',
          'VRRP gateway failover measured at about 35 seconds; ARP cache expiry identified as the main delay factor.',
        ),
        l(
          'Séquence DHCP complète (DORA) capturée, avec marqueurs anti-usurpation (Option 82).',
          'Full DHCP sequence (DORA) captured, with anti-spoofing markers (Option 82).',
        ),
        l(
          'Accès au VLAN admin bloqué pour les utilisateurs et confirmé pour les serveurs autorisés, avec journalisation de tous les paquets refusés.',
          'Access to the admin VLAN blocked for users and confirmed for authorised servers, with every denied packet logged.',
        ),
      ],
    },
    gallery: [
      shot('images/gns3-infra/00a_topologie_initiale.webp', 651, 624, l('Topologie initiale', 'Initial topology'), l('Topologie initiale du lab GNS3', 'Initial topology of the GNS3 lab')),
      shot('images/gns3-infra/00b_topologie_finale.webp', 1040, 663, l('Topologie finale', 'Final topology'), l('Topologie finale du lab GNS3', 'Final topology of the GNS3 lab')),
      shot('images/gns3-infra/15_bascule_ping_trou_puis_reprise.webp', 825, 645, l('Bascule VRRP démontrée', 'VRRP failover demonstrated'), l('Bascule VRRP démontrée par un ping continu', 'VRRP failover shown by a continuous ping')),
      shot('images/gns3-infra/31_logs_pfsense_paquets_bloques.webp', 1032, 800, l('Logs pfSense : paquets bloqués', 'pfSense logs: blocked packets'), l('Logs pfSense montrant des paquets bloqués', 'pfSense logs showing blocked packets')),
    ],
  },
  {
    id: 'ad',
    category: 'network',
    title: l('Domaine Active Directory durci', 'Hardened Active Directory domain'),
    period: '2026',
    summary: l(
      'Lab GNS3 : domaine Windows Server 2022 avec AD DS et DNS intégré, structure d’annuaire (OU, groupes de sécurité), jonction d’un poste client, puis durcissement par GPO alignées sur les recommandations de l’ANSSI.',
      'GNS3 lab: Windows Server 2022 domain with AD DS and integrated DNS, directory structure (OUs, security groups), client domain join, then hardening through GPOs aligned with ANSSI guidance.',
    ),
    outcome: l('10 mesures ANSSI appliquées (mots de passe, privilèges, audit des événements 4624/4625).', '10 ANSSI measures applied (passwords, privileges, 4624/4625 event auditing).'),
    tags: ['Windows Server 2022', 'Active Directory', 'GPO', 'PowerShell', 'ANSSI', 'IAM'],
    code: 'https://github.com/epsi12-lab/gns3-active-directory',
    detail: {
      context: l(
        'Déployer un domaine Active Directory minimal (un contrôleur de domaine, un poste client) puis le durcir selon des mesures alignées sur les recommandations de l’ANSSI, plutôt que de garder une configuration par défaut.',
        'Deploy a minimal Active Directory domain (one domain controller, one client workstation) then harden it with measures aligned to ANSSI guidance, rather than leaving a default configuration.',
      ),
      approach: l(
        'Structure d’annuaire en unités d’organisation (utilisateurs, groupes, ordinateurs, serveurs), avec un compte administrateur séparé du compte utilisateur standard, selon le principe du moindre privilège.',
        'Directory structure in organisational units (users, groups, computers, servers), with an administrator account kept separate from the standard user account, following the principle of least privilege.',
      ),
      points: [
        l(
          'Politique de mots de passe : 12 caractères minimum, historique de 24 mots de passe, expiration à 90 jours, verrouillage après 5 échecs en 30 minutes.',
          'Password policy: 12-character minimum, 24-password history, 90-day expiry, lockout after 5 failures in 30 minutes.',
        ),
        l(
          'Panneau de configuration, éditeur de registre et invite de commandes bloqués par GPO pour les utilisateurs standard, avec exemption pour les administrateurs.',
          'Control Panel, Registry Editor and Command Prompt blocked by GPO for standard users, with an exemption for administrators.',
        ),
        l(
          'Audit des connexions réussies (4624) et échouées (4625) pour la détection d’intrusion.',
          'Auditing of successful (4624) and failed (4625) logons for intrusion detection.',
        ),
      ],
    },
    gallery: [
      shot('images/gns3-ad/00_topologie_ad.webp', 697, 419, l('Topologie du domaine', 'Domain topology'), l('Topologie du domaine Active Directory', 'Active Directory domain topology')),
      shot('images/gns3-ad/05_structure_ou.webp', 980, 552, l('Structure des OU', 'OU structure'), l('Structure des unités d’organisation', 'Organisational unit structure')),
      shot('images/gns3-ad/10a_admin_controlpanel_ok.webp', 1024, 814, l('Admin : accès autorisé', 'Admin: access granted'), l('Accès autorisé pour le compte administrateur', 'Access granted for the administrator account')),
      shot('images/gns3-ad/10b_user_controlpanel_bloque.webp', 1024, 808, l('Utilisateur : accès bloqué', 'User: access blocked'), l('Accès bloqué pour le compte utilisateur', 'Access blocked for the standard user account')),
      shot('images/gns3-ad/12_event_4625_echec_connexion.webp', 1028, 807, l('Audit : événement 4625', 'Audit: event 4625'), l('Audit de l’événement 4625 : échec de connexion', 'Audit of event 4625: failed logon')),
    ],
  },
  {
    id: 'likelemba',
    category: 'dev',
    title: l('Likelemba', 'Likelemba'),
    summary: l(
      'Application mobile de gestion collaborative d’épargne : logique métier, conception UI/UX et structuration des données. Une seule base de code pour Android et iOS, avec persistance PostgreSQL.',
      'Mobile app for collaborative savings groups: business logic, UI/UX design and data modelling. A single codebase for Android and iOS, backed by PostgreSQL.',
    ),
    tags: ['Flutter', 'Dart', 'PostgreSQL'],
    live: 'https://likelemba-7au3.onrender.com',
    privateRepo: true,
    inProgress: true,
    detail: {
      context: l(
        'Application de « likelemba » (tontine/épargne tournante collaborative) encore en développement actif.',
        'App for a “likelemba” (rotating collaborative savings group), still in active development.',
      ),
      approach: l(
        'Une seule base de code Flutter/Dart pour Android et iOS, avec persistance PostgreSQL pour les groupes, membres et cotisations.',
        'A single Flutter/Dart codebase for Android and iOS, with PostgreSQL persistence for groups, members and contributions.',
      ),
      note: l(
        'Dépôt privé : cette page se limite à la démonstration publique et aux captures, sans détail technique supplémentaire pour l’instant.',
        'Private repository: this page is limited to the public demo and screenshots, with no further technical detail for now.',
      ),
    },
    gallery: [
      shot('images/likelemba_web.jpg', 1600, 804, l('Version web', 'Web version'), l('Capture de Likelemba, version web', 'Likelemba screenshot, web version')),
      ...[1, 2, 3, 4, 5, 6].map((n) =>
        shot(`images/likelemba_app${n}.jpg`, 720, 1480, l(`Application mobile ${n}`, `Mobile app ${n}`), l(`Capture mobile de Likelemba ${n}`, `Likelemba mobile screenshot ${n}`)),
      ),
    ],
  },
  {
    id: 'partitheco',
    category: 'dev',
    title: l('Partithéco 2025', 'Partithéco 2025'),
    period: '2025',
    summary: l(
      'Plateforme web de dépôt et de consultation de partitions musicales : structuration des données, persistance et gestion des contenus.',
      'Web platform to upload and browse sheet music: data modelling, persistence and content management.',
    ),
    tags: ['PHP', 'SQLite', 'HTML5', 'CSS'],
    code: 'https://github.com/epsi12-lab/Partitheco',
    inProgress: true,
    status: l('Refonte en cours', 'Redesign in progress'),
    detail: {
      context: l(
        'Plateforme inspirée de « Chantons en Église », pensée pour les chorales et les animateurs de messe : retrouver une partition selon le moment de la messe, le temps liturgique, la tonalité ou la voix.',
        'Platform inspired by French liturgical songbook “Chantons en Église”, built for choirs and mass animators: find a piece by point in the mass, liturgical season, key or voice part.',
      ),
      approach: l(
        'Backend PHP natif (PSR-4), PostgreSQL (Supabase en production), visionneuse PDF et lecteurs audio/vidéo intégrés, comptes utilisateurs avec favoris et playlists partageables par lien unique.',
        'Native PHP backend (PSR-4), PostgreSQL (Supabase in production), built-in PDF viewer and audio/video players, user accounts with favourites and playlists shareable via a unique link.',
      ),
      points: [
        l(
          'Sécurité : jetons CSRF, mots de passe hashés, requêtes préparées (PDO).',
          'Security: CSRF tokens, hashed passwords, prepared statements (PDO).',
        ),
        l(
          'Interface bilingue français/anglais, mode sombre, design responsive, chargement progressif.',
          'Bilingual French/English interface, dark mode, responsive design, infinite scroll.',
        ),
      ],
      note: l(
        'Nouvelle version en cours de développement : disponible dans les jours à venir.',
        'New version in development: available in the coming days.',
      ),
    },
    gallery: [
      shot('images/partitheco_web1.jpg', 1600, 804, l('Page d’accueil', 'Home page'), l('Page d’accueil de Partithéco', 'Partithéco home page')),
      shot('images/partitheco_web2.jpg', 1600, 804, l('Interface web', 'Web interface'), l('Interface web de Partithéco', 'Partithéco web interface')),
    ],
  },
  {
    id: 'ipv6',
    category: 'network',
    title: l('Architecture IPv6', 'IPv6 architecture'),
    period: '2020',
    summary: l(
      'Mémoire de fin d’études : conception et déploiement d’une infrastructure IPv6 sécurisée entre deux sites distants (tunnel 6in4, routage dynamique, segmentation VLAN, analyse de trafic Wireshark). Les concepts ont depuis été remis en œuvre sur GNS3 avec de vraies images système.',
      'Final-year thesis: design and deployment of a secured IPv6 infrastructure between two remote sites (6in4 tunnel, dynamic routing, VLAN segmentation, Wireshark traffic analysis). The concepts were later rebuilt on GNS3 with real system images.',
    ),
    tags: ['GNS3', 'IPv6', 'OSPF', 'VLAN', 'Tunnel 6in4', 'Wireshark'],
  },
  {
    id: 'portfolio',
    category: 'dev',
    title: l('Ce portfolio', 'This portfolio'),
    period: '2026',
    summary: l(
      'Refonte complète : React 19 et TypeScript, prérendu statique pour le SEO, thèmes clair/sombre, FR/EN, CSS moderne (animations pilotées par le scroll, View Transitions) et déploiement automatisé, avec un CV compilé depuis LaTeX.',
      'Full rebuild: React 19 and TypeScript, static prerendering for SEO, light/dark themes, FR/EN, modern CSS (scroll-driven animations, View Transitions) and automated deployment, with a CV compiled from LaTeX.',
    ),
    tags: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Actions', 'LaTeX'],
    code: 'https://github.com/epsi12-lab/Portofolio',
    detail: {
      context: l(
        'Refonte 2026 du portfolio : passer d’un site HTML/CSS/JS statique à une base React, sans perdre en vitesse ni en référencement.',
        '2026 rebuild of the portfolio: move from a static HTML/CSS/JS site to a React codebase, without losing speed or search visibility.',
      ),
      approach: l(
        'React 19 et TypeScript avec Vite. Le contenu est pré-rendu en HTML au moment du build (rendu serveur) puis hydraté par React, pour rester lisible sans JavaScript. Déploiement automatique par GitHub Actions, CV recompilé depuis sa source LaTeX à chaque modification.',
        'React 19 and TypeScript with Vite. Content is pre-rendered to HTML at build time (server rendering) then hydrated by React, so it stays readable without JavaScript. Automatic deployment via GitHub Actions, with the CV recompiled from its LaTeX source on every change.',
      ),
    },
  },
]
