import type { Project, RealEstateObject, Company } from '@/types';

export const project: Project = {
  name: 'Gartenresidenz am Denkmal',
  location: 'Niederlöricker Straße 4, 40667 Meerbusch',
  objectCount: 8,
  description: 'Acht hochwertige Eigentumswohnungen in denkmalnaher Rheinlage von Meerbusch – mit großzügigen Grundrissen und viel Grün.'
};

export const realEstateObjects: RealEstateObject[] = [
  {
    id: 'WE-01',
    title: 'WE 01 · EG links',
    rooms: 3,
    size: 98.63,
    price: 765000,
    floor: 'Garten / EG',
    features: ['Terrasse', 'Gartenanteil', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we1-1.jpg', '/assets/units/we1-2.jpg']
  },
  {
    id: 'WE-02',
    title: 'WE 02 · EG rechts',
    rooms: 4,
    size: 120.19,
    price: 949000,
    floor: 'Garten / EG',
    features: ['Terrasse', 'Große Wohnküche', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we2-1.jpg', '/assets/units/we2-2.jpg']
  },
  {
    id: 'WE-03',
    title: 'WE 03 · 1. OG links',
    rooms: 3,
    size: 93.36,
    price: 650000,
    floor: '1. OG',
    features: ['Balkon', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we3-1.jpg']
  },
  {
    id: 'WE-04',
    title: 'WE 04 · 1. OG rechts',
    rooms: 4,
    size: 122.24,
    price: 849000,
    floor: '1. OG',
    features: ['Balkon', 'Großer Wohnbereich', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we4-1.jpg', '/assets/units/we4-2.jpg']
  },
  {
    id: 'WE-05',
    title: 'WE 05 · Maisonette links',
    rooms: 4,
    size: 132.95,
    price: 1049000,
    floor: '2. OG / DG',
    features: ['Balkon', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we5-1.jpg']
  },
  {
    id: 'WE-06',
    title: 'WE 06 · Maisonette rechts',
    rooms: 4,
    size: 133.82,
    price: 1049000,
    floor: '2. OG / DG',
    features: ['Balkon', '2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we6-1.jpg', '/assets/units/we6-2.jpg']
  },
  {
    id: 'WE-07',
    title: 'WE 07 · Gartenwohnung im Denkmal',
    rooms: 4,
    size: 183.14,
    price: 1249000,
    floor: 'EG Denkmal',
    features: ['3 Schlafzimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we7-1.jpg']
  },
  {
    id: 'WE-08',
    title: 'WE 08 · Maisonettewohnung im Denkmal ',
    rooms: 4,
    size: 117.83,
    price: 799000,
    floor: '1. OG / DG Denkmal',
    features: ['2 Badezimmer', 'Tiefgarage vorhanden'],
    status: 'available',
    images: ['/assets/units/we8-1.jpg']
  }
];

export const company: Company = {
  name: 'Premium Immobilien GmbH',
  logo: '/logo.svg',
  url: 'https://example.com'
};
