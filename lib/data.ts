export type Product = {
  name: string;
  slug: string;
  use: string;
  image?: string;
  description: string;
  specs: [string, string][];
};

export const products: Product[] = [
  {
    name: 'Biscuit Flour',
    slug: 'biscuit-flour',
    use: 'Bisküvi ve kurabiye',
    image: '/biscuit-flour.png',
    description: 'Lezzetin unu. Bisküvi, gofret, kek, samosa ve anjera ekmeği üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%9,5 min.'],
      ['Gluten', '%22 min.'],
      ['Kül', '%0,65 max.'],
      ['Nem', '%14 max.'],
    ],
  },
  {
    name: 'Multi-Purpose Flour',
    slug: 'multi-purpose-flour',
    use: 'Günlük tarifler',
    image: '/multi-purpose-flour.png',
    description: 'Çok yönlü kullanım alanına sahiptir. Kek, hamur işleri, chapati ve roti ekmeği üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%10,5 min.'],
      ['Gluten', '%25 min.'],
      ['Kül', '%0,65 max.'],
      ['Nem', '%14 max.'],
    ],
  },
  {
    name: 'Baker Flour',
    slug: 'baker-flour',
    use: 'El yapımı ekmek',
    image: '/baker-flour.png',
    description:
      'Kalite ve maliyet dengesini en iyi şekilde sağlayan bir fırıncılık unudur. En çok tercih edilen buğday unumuzdur. Baget, batard ve francala ekmeği üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%11,5 min.'],
      ['Gluten', '%27 min.'],
      ['Kül', '%0,65 max.'],
      ['Nem', '%14 max.'],
    ],
  },
  {
    name: 'Baker Plus Flour',
    slug: 'baker-plus-flour',
    use: 'Özel ekmek çeşitleri',
    image: '/baker-plus-flour.png',
    description:
      'Fırınlar için yüksek kalite ve yüksek performanslı bir buğday unudur. Baget, batard ve francala ekmeği üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%12,5 min.'],
      ['Gluten', '%29 min.'],
      ['Kül', '%0,60 max.'],
      ['Nem', '%14 max.'],
    ],
  },
  {
    name: 'Super Baker Flour',
    slug: 'super-baker-flour',
    use: 'Profesyonel fırıncılık',
    image: '/super-baker-flour.png',
    description:
      'Daha yüksek verim için özel olarak tasarlanmış sert buğday unudur. Hamburger ekmeği, tost ekmeği ve beyaz somun üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%13,0 min.'],
      ['Gluten', '%32 min.'],
      ['Kül', '%0,55 max.'],
      ['Nem', '%14 max.'],
    ],
  },
  {
    name: 'Noodle and Pasta Flour',
    slug: 'noodle-and-pasta-flour',
    use: 'Makarna ve erişte',
    image: '/noodle-and-pasta-flour.png',
    description: 'Sofranızdaki lezzet. Son ürüne mükemmel bir renk kazandırır. Noodle ve makarna üretiminde kullanılabilir.',
    specs: [
      ['Protein', '%13,5 min.'],
      ['Gluten', '%32 min.'],
      ['Kül', '%0,55 max.'],
      ['Nem', '%14 max.'],
    ],
  },
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

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 30, suffix: '+', label: 'Yıl deneyim' },
  { value: 1, suffix: 'M+', label: 'Ton buğday' },
  { value: 50, suffix: '+', label: 'Ülkeye ihracat' },
];