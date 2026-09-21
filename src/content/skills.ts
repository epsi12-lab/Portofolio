import { l, type L } from '../i18n'

export type SkillIcon = 'project' | 'security' | 'network' | 'code' | 'data' | 'database' | 'systems' | 'learning' | 'watch' | 'lang'

export type SkillGroup = {
  id: string
  icon: SkillIcon
  title: L
  items: (string | L)[]
  /** Largeur dans la grille de 12 colonnes (4 par défaut). */
  span?: 4 | 8 | 12
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'project',
    icon: 'project',
    title: l('Gestion de projet & SI', 'Project management & IS'),
    items: ['Trello', 'Gantt', l('Agilité (notions)', 'Agile (basics)')],
  },
  {
    id: 'code',
    icon: 'code',
    title: l('Développement', 'Development'),
    items: ['Kotlin', 'Python', 'PHP', 'Dart', 'C / C++', 'Bash', 'PowerShell', 'Ktor', 'Flutter', 'REST API', 'WebSockets'],
    span: 8,
  },
  {
    id: 'network',
    icon: 'network',
    title: l('Réseaux', 'Networking'),
    items: ['TCP/IP', 'IPv4 / IPv6', 'OSPF', 'EIGRP', 'VLAN', 'VRRP / HSRP', 'DHCP / DHCPv6', 'DNS', 'QoS', 'Wi-Fi', l('Tunnel 6in4', '6in4 tunnel')],
    span: 8,
  },
  {
    id: 'security',
    icon: 'security',
    title: l('Cybersécurité', 'Cybersecurity'),
    items: ['pfSense', 'JWT', l('Authentification', 'Authentication'), 'IAM', l('GPO de durcissement', 'Hardening GPOs'), l('PKI (notions)', 'PKI (basics)'), l('Triade CIA', 'CIA triad'), 'SecNumacadémie ANSSI'],
  },
  {
    id: 'data',
    icon: 'data',
    title: l('Data & IA', 'Data & AI'),
    items: ['Python', 'Pandas', 'scikit-learn', l('Machine learning supervisé', 'Supervised ML'), 'matplotlib / seaborn', l('Analyse de données', 'Data analysis')],
  },
  {
    id: 'database',
    icon: 'database',
    title: l('Bases de données', 'Databases'),
    items: ['SQL', 'PostgreSQL', 'Redis', 'SQLite'],
  },
  {
    id: 'learning',
    icon: 'learning',
    title: l('En apprentissage', 'Learning'),
    items: ['Cloud', 'DevOps', 'DevSecOps', 'CI/CD', 'IoT', 'NLP'],
  },
  {
    id: 'systems',
    icon: 'systems',
    title: l('Systèmes & outils', 'Systems & tools'),
    items: ['Linux', 'Windows Server 2022', 'Active Directory', 'Cisco IOS', 'VyOS', 'QEMU/KVM', 'Docker', 'Git / GitHub', 'GNS3', 'Wireshark', 'Packet Tracer'],
    span: 8,
  },
  {
    id: 'watch',
    icon: 'watch',
    title: l('Veille technologique', 'Tech watch'),
    items: [l('Cybersécurité (CERT-FR, ANSSI)', 'Cybersecurity (CERT-FR, ANSSI)'), l('Cloud, systèmes & IPv6', 'Cloud, systems & IPv6'), 'Kotlin Multiplatform'],
  },
  {
    id: 'lang',
    icon: 'lang',
    title: l('Langues & certifications', 'Languages & certifications'),
    items: [
      l('Français : C1', 'French: C1'),
      l('Anglais : B1', 'English: B1'),
      l('SecNumacadémie ANSSI (2026)', 'ANSSI SecNumacadémie (2026)'),
      l('Cisco Networking Academy (2019)', 'Cisco Networking Academy (2019)'),
    ],
    span: 12,
  },
]

export const softSkills: L[] = [
  l('Rigueur', 'Rigour'),
  l('Analyse et synthèse', 'Analysis & synthesis'),
  l('Autonomie et initiative', 'Autonomy & initiative'),
  l('Travail en équipe', 'Teamwork'),
  l('Adaptabilité', 'Adaptability'),
  l('Apprentissage continu', 'Continuous learning'),
  l('Communication', 'Communication'),
]
