import { PortfolioData } from '../types/portfolio';

export const FACTUAL_PORTFOLIO_DATA: PortfolioData = {
  profile: {
    honorific: 'Mr.',
    name: 'Atsbaha Gebreslassie Weldeanenia',
    title: 'Department Head & Engineering Lecturer',
    department: 'Dept. of Electronics & Communication Engineering',
    institution: 'Mekelle University',
    location: 'Mekelle, Ethiopia',
    email: 'atsbaha.gebreslassie@mu.edu.et',
    phone: '(+251) 914436804',
    linkedin: 'https://www.linkedin.com/in/atsbaha-gebreslassie-4176a288/',
    officeLocation: 'Mekelle Institute of Technology (MIT Campus), Block B',
    officeHours: 'Monday – Thursday: 10:00 AM – 12:30 PM (or by appointment)',
    bio: 'Department Head and Engineering Lecturer at Mekelle University with over 9 years of academic leadership, higher education instruction, and research in communication systems. Experienced in department management, wireless communication protocols, antenna design, embedded microcontrollers, and modern academic program development.',
    avatarUrl: '/assets/aistudio/photo_2026-11-10_15-05-23_c84d4bbf.jpg',
  },

  experience: [
    {
      id: 'exp1',
      role: 'Department Head',
      institution: 'Mekelle University',
      period: 'Apr 2023 – Present',
      description:
        'Overseeing overall functioning of the Dept. of Electronics & Communication Engineering. Providing strategic leadership and promoting an innovative academic environment.',
    },
    {
      id: 'exp2',
      role: 'Engineering Lecturer',
      institution: 'Mekelle University',
      period: 'Oct 2020 – Present',
      description:
        'Undertaking advanced course instruction, leading research initiatives, and mentoring students for academic and professional growth.',
    },
    {
      id: 'exp3',
      role: 'Assistant Lecturer',
      institution: 'Mekelle University',
      period: 'Jul 2015 – Oct 2020',
      description:
        'Contributed to course instruction, supported department research projects, and collaborated with faculty members to enhance student learning.',
    },
  ],

  degrees: [
    {
      id: 'deg1',
      degree: 'M.Sc. in Communication Engineering',
      field: 'Wireless Communications & Network Protocols',
      institution: 'Mekelle University',
      period: '2016 – 2019',
      description: 'Advanced focus on wireless communications, network protocols, and system designs.',
    },
    {
      id: 'deg2',
      degree: 'B.Sc. in Electronics & Communication Eng.',
      field: 'Electronics, Embedded Systems & Telecommunications',
      institution: 'Mekelle University (MIT)',
      period: '2010 – 2015',
      gpa: '3.65/4.0',
      description:
        'Focus on Analog/Digital Electronics, Embedded Systems, Signal Processing, and Telecommunication Networks.',
    },
  ],

  certifications: [
    {
      id: 'cert1',
      title: 'Endpoint Security',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 2023',
      description: 'Threat mitigation, malware analysis from packet captures, and network security configuration.',
    },
    {
      id: 'cert2',
      title: 'Network Addressing & Troubleshooting',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 2023',
      description: 'IPv6 addressing schemes, router/switch configuration, and physical/data link layer operations.',
    },
    {
      id: 'cert3',
      title: 'Strategies for Successful Online Learning',
      issuer: 'ASU / Mastercard Foundation',
      date: 'Oct 2023',
      description: 'Advanced methodologies for online course delivery and digital instructional design.',
    },
  ],

  projects: [
    {
      id: 'proj1',
      title: 'Frequency Reconfigurable Antenna Array',
      category: 'Research Project',
      period: '2018 – 2019',
      description:
        'Heterogeneous array of Minkowski Fractal and Hexagonal Patch Antennas for adaptable WLAN and WPAN applications.',
      tags: ['HFSS', 'Minkowski Fractal', 'Hexagonal Patch', 'WLAN/WPAN'],
    },
    {
      id: 'proj2',
      title: 'Patch Antenna for Telemetry Downlink',
      category: 'B.Sc. Thesis Project',
      period: '2015',
      description:
        'Designed a patch antenna focusing on frequency optimization, gain, and radiation patterns for efficient signal transmission.',
      tags: ['Patch Antenna', 'Telemetry', 'Signal Transmission', 'Gain Optimization'],
    },
    {
      id: 'proj3',
      title: 'Digital Modulation Synchronization',
      category: 'Research Project',
      period: '2014',
      description:
        'Analyzed and developed synchronization techniques to enhance accuracy across diverse digital modulation schemes.',
      tags: ['Digital Modulation', 'Synchronization', 'Signal Processing', 'MATLAB'],
    },
  ],

  skills: [
    { name: 'HFSS (Antenna Design)', category: 'hardware', level: 'Advanced' },
    { name: 'C / C++', category: 'software', level: 'Proficient' },
    { name: 'MATLAB', category: 'software', level: 'Advanced' },
    { name: 'Assembly (8085, 8086, 8051)', category: 'hardware', level: 'Proficient' },
    { name: 'VHDL', category: 'hardware', level: 'Proficient' },
    { name: 'CAD', category: 'hardware', level: 'Proficient' },
    { name: 'Cisco Packet Tracer', category: 'networking', level: 'Advanced' },
    { name: 'IPv6 & Routing', category: 'networking', level: 'Advanced' },
    { name: 'Endpoint Security', category: 'networking', level: 'Certified' },
    { name: 'TensorFlow / PyTorch', category: 'software', level: 'Intermediate' },
    { name: 'Graphic Design', category: 'software', level: 'Proficient' },
    { name: 'Hardware Troubleshooting', category: 'hardware', level: 'Expert' },
  ],
};
