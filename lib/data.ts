export type Product = {
  name: string;
  slug: string;
  use: string;
  image?: string;
};

export const products: Product[] = [
  { name: 'Biscuit Flour', slug: 'biscuit-flour', use: 'Biscuits & cookies', image: '/biscuit-flour.png' },
  { name: 'Multi-Purpose Flour', slug: 'multi-purpose-flour', use: 'Everyday recipes', image: '/multi-purpose-flour.png' },
  { name: 'Baker Flour', slug: 'baker-flour', use: 'Artisan bread', image: '/baker-flour.png' },
  { name: 'Baker Plus Flour', slug: 'baker-plus-flour', use: 'Signature loaves', image: '/baker-plus-flour.png' },
  { name: 'Super Baker Flour', slug: 'super-baker-flour', use: 'Professional baking', image: '/super-baker-flour.png' },
  { name: 'Noodle and Pasta Flour', slug: 'noodle-and-pasta-flour', use: 'Pasta & noodles', image: '/noodle-and-pasta-flour.png' },
];

export const values = [
  'Yüksek Kaliteli Hammadde',
  'Değirmencilik Sektöründe 30+ Yıllık Deneyim',
  'Modern Teknoloji ve Ekipman',
  'İş ve Risk Yönetimi',
  'Ortaklık ve Destek',
  'Ürün ve Pazar Takibi',
];

export const suppliers = ['ADM', 'Bunge', 'Cargill', 'Louis Dreyfus', 'Glencore', 'Viterra', 'Olam'];

export const stats: [string, string][] = [
  ['30+', 'Yıl deneyim'],
  ['1M+', 'Ton buğday'],
  ['50+', 'Ülkeye ihracat'],
];