import { l, type L } from '../i18n'

export type ProjectCategory = 'dev' | 'data' | 'network'

export const categoryLabels: Record<ProjectCategory, L> = {
  dev: l('Développement', 'Development'),
  data: l('Data & IA', 'Data & AI'),
  network: l('Réseau & cybersécurité', 'Network & security'),
}

export type Shot = { src: string; alt: L; caption: L; width: number; height: number }

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
    outcome: l('Évaluation des modèles sur F1 et ROC-AUC.', 'Models evaluated on F1 and ROC-AUC.'),
    tags: ['Python', 'Pandas', 'scikit-learn', 'EDA', 'matplotlib / seaborn'],
    code: 'https://github.com/epsi12-lab/telco-churn-pipeline',
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
    outcome: l('Bascule de passerelle démontrée ; délai diagnostiqué par analyse des caches ARP.', 'Gateway failover demonstrated; delay diagnosed through ARP cache analysis.'),
    tags: ['GNS3', 'VyOS', 'OSPF', 'VRRP', 'pfSense', 'VLAN', 'dnsmasq', 'Docker'],
    code: 'https://github.com/epsi12-lab/gns3-infra-securisee',
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
    inProgress: true,
    status: l('Refonte en cours', 'Redesign in progress'),
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
  },
]
