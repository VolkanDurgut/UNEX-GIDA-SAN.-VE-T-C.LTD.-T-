export type Product = {
  name: string;
  slug: string;
  use: string;
  image?: string;
};

export const products: Product[] = [
  { name: 'Biscuit Flour', slug: 'biscuit-flour', use: 'Biscuits & cookies' },
  { name: 'Multi-Purpose Flour', slug: 'multi-purpose-flour', use: 'Everyday recipes' },
  { name: 'Baker Flour', slug: 'baker-flour', use: 'Artisan bread' },
  {
    name: 'Baker Plus Flour',
    slug: 'baker-plus-flour',
    use: 'Signature loaves',
    image: '/25ce55938c2d8dd67319689ec105827b.jpeg',
  },
  { name: 'Super Baker Flour', slug: 'super-baker-flour', use: 'Professional baking' },
  { name: 'Noodle and Pasta Flour', slug: 'noodle-and-pasta-flour', use: 'Pasta & noodles' },
];

export const values = [
  'High Quality Raw Materials',
  '+30 Years Experience In Milling Industry',
  'Modern Technology & Equipment',
  'Business & Risk Management',
  'Partnership & Support',
  'Product & Market Follow up',
];

export const suppliers = ['ADM', 'Bunge', 'Cargill', 'Louis Dreyfus', 'Glencore', 'Viterra', 'Olam'];

export const stats: [string, string][] = [
  ['30+', 'Yıl deneyim'],
  ['1M+', 'Ton buğday'],
  ['50+', 'Ülkeye ihracat'],
];