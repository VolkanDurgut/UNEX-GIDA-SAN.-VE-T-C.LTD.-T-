import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  Mail,
  Menu,
  MapPin,
  Minus,
  PackageOpen,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'quality' | 'catalog' | 'contact' | 'product';
type Product = { name: string; slug: string; use: string; image?: string };

const products: Product[] = [
  { name: 'Biscuit Flour', slug: 'biscuit-flour', use: 'Biscuits & cookies' },
  { name: 'Multi-Purpose Flour', slug: 'multi-purpose-flour', use: 'Everyday recipes' },
  { name: 'Baker Flour', slug: 'baker-flour', use: 'Artisan bread' },
  { name: 'Baker Plus Flour', slug: 'baker-plus-flour', use: 'Signature loaves', image: '/25ce55938c2d8dd67319689ec105827b.jpeg' },
  { name: 'Super Baker Flour', slug: 'super-baker-flour', use: 'Professional baking' },
  { name: 'Noodle and Pasta Flour', slug: 'noodle-and-pasta-flour', use: 'Pasta & noodles' },
];

const values = ['High Quality Raw Materials', '+30 Years Experience In Milling Industry', 'Modern Technology & Equipment', 'Business & Risk Management', 'Partnership & Support', 'Product & Market Follow up'];
const suppliers = ['ADM', 'Bunge', 'Cargill', 'Louis Dreyfus', 'Glencore', 'Viterra', 'Olam'];

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash());
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[3]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [page]);

  const navigate = (nextPage: Page, product?: Product) => {
    if (product) setSelectedProduct(product);
    setMobileOpen(false);
    setProductsOpen(false);
    window.location.hash = product ? `product/${product.slug}` : nextPage === 'home' ? '' : nextPage;
  };

  return (
    <div className="site-shell">
      <Header page={page} mobileOpen={mobileOpen} productsOpen={productsOpen} setMobileOpen={setMobileOpen} setProductsOpen={setProductsOpen} navigate={navigate} />
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'about' && <About navigate={navigate} />}
      {page === 'products' && <Products navigate={navigate} />}
      {page === 'quality' && <Quality navigate={navigate} />}
      {page === 'catalog' && <Catalog navigate={navigate} />}
      {page === 'contact' && <Contact />}
      {page === 'product' && <ProductDetail product={selectedProduct} navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  );
}

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('product/')) return 'product';
  return (['about', 'products', 'quality', 'catalog', 'contact'].includes(hash) ? hash : 'home') as Page;
}

function Header({ page, mobileOpen, productsOpen, setMobileOpen, setProductsOpen, navigate }: { page: Page; mobileOpen: boolean; productsOpen: boolean; setMobileOpen: (value: boolean) => void; setProductsOpen: (value: boolean) => void; navigate: (page: Page, product?: Product) => void }) {
  return <header className="header">
    <div className="container header-inner">
      <button className="brand" onClick={() => navigate('home')} aria-label="Unex ana sayfa">
        <img src="/logo.png" alt="Unex" />
        <span>UNEX GIDA</span>
      </button>
      <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü aç">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
        <NavLink active={page === 'home'} onClick={() => navigate('home')}>Anasayfa</NavLink>
        <NavLink active={page === 'about'} onClick={() => navigate('about')}>Hakkımızda</NavLink>
        <div className="nav-dropdown">
          <button className={`nav-link ${page === 'products' || page === 'product' ? 'active' : ''}`} onClick={() => setProductsOpen(!productsOpen)}>Ürünlerimiz <ChevronDown size={14} /></button>
          {productsOpen && <div className="dropdown-menu">{products.map(product => <button key={product.slug} onClick={() => navigate('product', product)}>{product.name}<ArrowUpRight size={14} /></button>)}</div>}
        </div>
        <NavLink active={page === 'quality'} onClick={() => navigate('quality')}>Kalitemiz</NavLink>
        <NavLink active={page === 'catalog'} onClick={() => navigate('catalog')}>Katalog</NavLink>
        <button className="nav-contact" onClick={() => navigate('contact')}>İletişim <ArrowUpRight size={15} /></button>
      </nav>
    </div>
  </header>;
}

function NavLink({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) { return <button className={`nav-link ${active ? 'active' : ''}`} onClick={onClick}>{children}</button>; }

function Home({ navigate }: { navigate: (page: Page, product?: Product) => void }) {
  return <main>
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow light"><span /> FROM GRAIN TO GREATNESS</p>
        <h1>What is your <em>flavor?</em></h1>
        <p className="hero-copy">A warm bread? Soothing biscuits? A romantic pasta night? Or do you just want to create art through the palette of our flours?</p>
        <button className="button button-gold" onClick={() => navigate('products')}>Ürünlerimizi Keşfedin <ArrowRight size={17} /></button>
      </div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><div /></div>
    </section>
    <section className="intro-section section-padding">
      <div className="container intro-grid"><div><p className="eyebrow">A LEGACY IN EVERY GRAIN</p><h2>Lezzetin başladığı<br /><em>yerde.</em></h2></div><div className="intro-copy"><p>Ham buğday tanesinden, dünyanın her mutfağındaki lezzete uzanan bir dönüşüm hikayesi.</p><p>30 yılı aşkın deneyimimizle yüksek kaliteli buğday unlarını, ortaklarımızın başarısını büyütmek için üretiyoruz.</p><button className="text-link" onClick={() => navigate('about')}>Hikayemizi keşfedin <ArrowUpRight size={17} /></button></div></div>
    </section>
    <Together />
    <ProductPreview navigate={navigate} />
    <section className="statement-band"><div className="container statement-inner"><Sparkles size={25} /><h2>Every recipe has a beginning.<br /><em>Make yours matter.</em></h2><button className="button button-outline" onClick={() => navigate('contact')}>Bize Ulaşın <ArrowRight size={17} /></button></div></section>
  </main>;
}

function Together() { return <section className="together section-padding"><div className="wheat-glow" /><div className="container together-grid"><div className="together-image"><img src="/unex1.jpeg" alt="Together We Grow buğday illüstrasyonu" /></div><div className="together-copy"><p className="eyebrow light"><span /> OUR PROMISE</p><h2>Together<br /><em>We Grow</em></h2><div className="value-list">{values.map((value, index) => <div className="value-item" key={value}><span>0{index + 1}</span><Check size={16} />{value}</div>)}</div></div></div></section>; }

function ProductPreview({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <section className="products-section section-padding"><div className="container"><div className="section-heading"><div><p className="eyebrow">THE UNEX PALETTE</p><h2>Ürünlerimiz</h2></div><button className="text-link" onClick={() => navigate('products')}>Tüm ürünleri gör <ArrowUpRight size={17} /></button></div><div className="product-strip">{products.slice(0, 4).map(product => <ProductCard key={product.slug} product={product} onClick={() => navigate('product', product)} />)}</div><div className="strip-controls"><span>01 — 04</span><div><button aria-label="Önceki"><ChevronLeft size={18} /></button><button aria-label="Sonraki"><ChevronRight size={18} /></button></div></div></div></section>; }

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) { return <article className="product-card" onClick={onClick}><div className={`product-visual ${product.image ? 'has-image' : ''}`}>{product.image ? <img src={product.image} alt={product.name} /> : <div className="placeholder"><PackageOpen size={25} /><span>Görsel<br />yakında</span></div>}<span className="product-number">01 / 06</span></div><div className="product-card-info"><div><p className="product-use">{product.use}</p><h3>{product.name}</h3></div><ArrowUpRight size={19} /></div></article>; }

function Products({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <main className="page-main"><PageHero eyebrow="THE UNEX PALETTE" title={<>Ürünlerimiz<span>.</span></>} text="Her un, iyi bir fikrin ve daha iyi bir lezzetin başlangıcıdır." image="/unex3.jpeg" /><section className="section-padding product-list-section"><div className="container"><div className="product-grid">{products.map(product => <ProductCard key={product.slug} product={product} onClick={() => navigate('product', product)} />)}</div><div className="placeholder-note"><Minus size={16} /> Beş ürün görseli, taslak sonrası gerçek torba fotoğraflarıyla değiştirilecektir.</div></div></section></main>; }

function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: React.ReactNode; text: string; image: string }) { return <section className="page-hero"><img src={image} alt="" /><div className="page-hero-shade" /><div className="container page-hero-content"><p className="eyebrow light"><span /> {eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>; }

function About({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <main className="page-main"><PageHero eyebrow="WHO WE ARE" title={<>Kökümüz güçlü,<br /><em>bakışımız ileri.</em></>} text="Kalite, dinamizm ve profesyonellik ile dünyanın dört bir yanına ulaşan bir ortaklık." image="/unex.jpeg" /><section className="section-padding about-story"><div className="container about-grid"><div><p className="eyebrow">ABOUT UNEX</p><h2>Birlikte büyüyen<br /><em>30+ yıllık hikaye.</em></h2></div><div className="body-copy"><p>Uluslararası buğday unu ve emtia piyasasında 30 yılı aşkın tecrübemizle 1.000.000 tonun üzerinde buğday unu elleçledik. Kalite, dinamizm ve profesyonellik gibi temel değerlerimiz, Türkiye'nin en büyük buğday unu ihracatçılarından biri olmamızı sağlamıştır.</p><p>Bugüne kadar 50'den fazla ülkeye yaptığımız ihracat sayesinde kaliteli buğday unlarımızı dünyanın her köşesinden müşterilerimize ulaştırmanın gururunu yaşıyoruz. Müşterilerimize uzmanlığımızı ve deneyimimizi sunarak onlarla stratejik bir ortak olmaya çalışıyoruz. Kendi başarımızın doğrudan ortaklarımızın başarısından kaynaklandığına kuvvetle inanıyoruz.</p></div></div></section><Stats /><section className="cta-block"><div className="container"><p className="eyebrow light">LET'S GROW TOGETHER</p><h2>Ortaklığınızı<br /><em>güçlendirelim.</em></h2><button className="button button-gold" onClick={() => navigate('contact')}>Bize Ulaşın <ArrowRight size={17} /></button></div></section></main>; }

function Stats() { return <section className="stats"><div className="container stats-grid">{[['30+', 'Yıl deneyim'], ['1M+', 'Ton buğday'], ['50+', 'Ülkeye ihracat']].map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>; }

function Quality({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <main className="page-main"><PageHero eyebrow="OUR QUALITY" title={<>Güven,<br /><em>kalitemizle başlar.</em></>} text="Bugünün ihtiyaçlarını anlayan, yarının pazarlarına hazırlanan bir üretim anlayışı." image="/unex1.jpeg" /><section className="section-padding quality-copy"><div className="container quality-layout"><div><p className="eyebrow">PARTNERSHIP & SUPPORT</p><h2>İşinizi<br /><em>ileri taşırız.</em></h2></div><div className="body-copy"><p>Başarımızın anahtarı ve her zaman korumaya çalıştığımız değer, ortaklarımızla oluşturduğumuz güvendir. Hem tedarikçi hem de alıcı tarafta yer alan bir firma olarak emtia piyasalarında zamanlamanın ve iş pozisyonları almanın önemini çok iyi biliyoruz.</p><p>Sadece yüksek kaliteli buğday unlarımızı değil, ortaklarımıza kendi alanlarında rekabetçi olmaları için gerekli araçları sağlamanın da sorumluluğunu her zaman hissediyoruz.</p></div></div></section><section className="supplier-band"><div className="container"><p className="eyebrow">TRUSTED COUNTERPARTIES</p><div className="supplier-list">{suppliers.map(supplier => <span key={supplier}>{supplier}</span>)}</div></div></section><section className="quality-bottom"><div className="container quality-bottom-inner"><ShieldCheck size={32} /><div><h3>Güvenilir tedarik. Kesintisiz destek.</h3><p>Dünya tahıl piyasasını yakından takip ediyor, ortaklarımızın risklerini azaltan iş planları sunuyoruz.</p></div><button className="text-link" onClick={() => navigate('contact')}>Birlikte çalışalım <ArrowUpRight size={17} /></button></div></section></main>; }

function Contact() { const [sent, setSent] = useState(false); return <main className="page-main"><PageHero eyebrow="GET IN TOUCH" title={<>Bir fikriniz mi<br /><em>var?</em></>} text="İyi ortaklıklar iyi bir konuşmayla başlar." image="/unex3.jpeg" /><section className="section-padding contact-section"><div className="container contact-grid"><div className="contact-details"><p className="eyebrow">CONTACT UNEX</p><h2>Size nasıl<br /><em>yardımcı olabiliriz?</em></h2><div className="contact-item"><MapPin size={20} /><div><strong>Bize Ulaşın</strong><p>İstiklal Mahallesi Cemal Ünlü Saraç Caddesi No:20 Süleymanpaşa / Tekirdağ / Türkiye</p></div></div><div className="contact-item"><Phone size={20} /><div><strong>Bizi Arayın</strong><p>Tel +90 282 440 08 70<br />Faks +90 282 440 08 69</p></div></div><div className="contact-item"><Mail size={20} /><div><strong>Bize Yazın</strong><p>info@unex.com.tr</p></div></div></div><form className="contact-form" onSubmit={event => { event.preventDefault(); setSent(true); }}><p className="eyebrow">SEND A MESSAGE</p><h3>Mesajınız mı var?</h3><p className="form-intro">Herhangi bir sorunuz varsa, lütfen bize bir mesaj göndermekten çekinmeyin. 24 saat içinde yanıtlıyoruz!</p><div className="form-row"><label>Ad Soyad<input required placeholder="Adınız ve soyadınız" /></label><label>E-posta<input required type="email" placeholder="ornek@email.com" /></label></div><div className="form-row"><label>Telefon<input placeholder="+90" /></label><label>Konu<input required placeholder="Nasıl yardımcı olabiliriz?" /></label></div><label>Mesaj<textarea required rows={5} placeholder="Mesajınızı buraya yazın..." /></label><button className="button button-gold" type="submit">{sent ? <>Mesajınız alındı <Check size={17} /></> : <>Mesajı Gönder <ArrowRight size={17} /></>}</button></form></div></section></main>; }

function Catalog({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <main className="page-main"><PageHero eyebrow="RESOURCES" title={<>Unex'i<br /><em>yakından tanıyın.</em></>} text="Ürünlerimiz ve uzmanlığımız hakkında daha fazlası." image="/unex.jpeg" /><section className="section-padding catalog-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">DOWNLOAD CENTRE</p><h2>Kataloglar</h2></div><button className="text-link" onClick={() => navigate('contact')}>Sorularınız mı var? <ArrowUpRight size={17} /></button></div><div className="catalog-grid">{['Unex Gıda — Katalog 01', 'Unex Gıda — Katalog 02'].map((title, index) => <article className="catalog-card" key={title}><div className="catalog-icon"><Download size={27} /></div><span>PDF / 2025</span><h3>{title}</h3><p>Ürün portföyümüzü ve çalışma alanlarımızı keşfedin.</p><button className="button button-gold" onClick={() => alert('Katalog taslağı hazırlandığında buradan indirilebilecek.')}>İndir <Download size={16} /></button><strong>0{index + 1}</strong></article>)}</div></div></section></main>; }

function ProductDetail({ product, navigate }: { product: Product; navigate: (page: Page, product?: Product) => void }) { return <main className="page-main"><section className="product-detail section-padding"><div className="container detail-grid"><div className={`detail-visual ${product.image ? 'has-image' : ''}`}>{product.image ? <img src={product.image} alt={product.name} /> : <div className="placeholder large"><PackageOpen size={38} /><span>Gerçek ürün görseli<br />taslak sonrası eklenecek</span></div>}</div><div className="detail-copy"><p className="eyebrow">UNEX FLOUR SERIES</p><h1>{product.name}</h1><p className="detail-lead">Her üretim fikrinin ihtiyaç duyduğu güvenilir temel. Ürününüz için doğru performansı birlikte bulalım.</p><div className="tabs"><button className="tab active">Açıklama</button><button className="tab" onClick={() => navigate('contact')}>Sipariş</button></div><p className="body-copy">Ürün detayları ve teknik spesifikasyonlar güncellenmektedir. Daha fazla bilgi ve numune talepleriniz için bizimle iletişime geçebilirsiniz.</p><div className="specs">{[['Protein', product.name === 'Biscuit Flour' ? '%9,5 min.' : 'İçerik güncellenecek'], ['Gluten', product.name === 'Biscuit Flour' ? '%22 min.' : 'İçerik güncellenecek'], ['Ash', product.name === 'Biscuit Flour' ? '%0,65 max.' : 'İçerik güncellenecek'], ['Moisture', product.name === 'Biscuit Flour' ? '%14 max.' : 'İçerik güncellenecek']].map(([label, value]) => <div className="spec" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><button className="button button-gold" onClick={() => navigate('contact')}>Sipariş hakkında konuşalım <ArrowRight size={17} /></button></div></div></section><section className="related section-padding"><div className="container"><p className="eyebrow">THE REST OF THE PALETTE</p><h2>İlginizi çekebilir</h2><div className="related-strip">{products.filter(item => item.slug !== product.slug).slice(0, 5).map(item => <ProductCard key={item.slug} product={item} onClick={() => navigate('product', item)} />)}</div></div></section></main>; }

function Footer({ navigate }: { navigate: (page: Page, product?: Product) => void }) { return <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-about"><img src="/logo.png" alt="Unex" /><p>Başarımızın anahtarı ve her zaman korumaya çalıştığımız değer, ortaklarımızla oluşturduğumuz güvendir. Hem tedarikçi hem de alıcı tarafta yer alan bir firma olarak emtia piyasalarında zamanlamanın ve iş pozisyonları almanın önemini çok iyi biliyoruz.</p></div><div className="footer-column"><h4>KURUMSAL</h4><button onClick={() => navigate('quality')}>Kalitemiz</button><button onClick={() => navigate('catalog')}>Katalog</button><button>Referanslar</button></div><div className="footer-column"><h4>ÜRÜN GRUPLARI</h4>{products.map(product => <button key={product.slug} onClick={() => navigate('product', product)}>{product.name}</button>)}</div><div className="footer-column"><h4>ÇALIŞMA SAATLERİ</h4><p><Clock3 size={15} /> Pazartesi–Cuma<br />08:30–18:00</p><p>Cumartesi 08:30–15:00<br />Pazar KAPALI</p></div></div><div className="footer-bottom"><span>Copyright © 2025 Web sitemiz Tasdix ile tasdiklenmiştir.</span><span>Herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir.</span><span className="footer-mark">UNEX / GROWING TOGETHER</span></div></div></footer>; }

export default App;
