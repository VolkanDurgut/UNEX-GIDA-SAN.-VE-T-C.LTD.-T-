/**
 * İhracat haritasında vurgulanacak ülkeler (ISO 3166-1 numeric kodları,
 * world-atlas/countries-110m.json'daki `geo.id` değerleriyle eşleşir).
 *
 * "50+ ülke" iddiasını temsilen ~50 ülke seçildi; Unex'in gerçek ihracat
 * ağırlığına uygun olarak Afrika (Batı, Orta, Doğu ve Kuzey Afrika) ağırlıklı,
 * geri kalanı Orta Doğu, Kafkasya, Güney/Orta Asya ve Balkanlar'dan oluşuyor.
 * Bu liste temsili bir tahmindir — gerçek ihracat ülke listeniz elinize
 * geçtiğinde bu diziyi güncellemek tek satırlık bir değişiklik.
 */
export const EXPORT_COUNTRY_CODES: number[] = [
  // Batı Afrika
  566, // Nijerya
  288, // Gana
  384, // Fildişi Sahili
  686, // Senegal
  204, // Benin
  768, // Togo
  324, // Gine
  694, // Sierra Leone
  430, // Liberya
  466, // Mali
  562, // Nijer
  854, // Burkina Faso
  // Orta Afrika
  120, // Kamerun
  266, // Gabon
  178, // Kongo Cumhuriyeti
  180, // Kongo Demokratik Cumhuriyeti
  148, // Çad
  // Doğu Afrika
  231, // Etiyopya
  706, // Somali
  404, // Kenya
  834, // Tanzanya
  729, // Sudan
  728, // Güney Sudan
  // Güney Afrika
  24, // Angola
  508, // Mozambik
  450, // Madagaskar
  // Kuzey Afrika
  818, // Mısır
  434, // Libya
  12, // Cezayir
  504, // Fas
  788, // Tunus
  // Orta Doğu
  368, // Irak
  760, // Suriye
  422, // Lübnan
  400, // Ürdün
  887, // Yemen
  682, // Suudi Arabistan
  784, // Birleşik Arap Emirlikleri
  512, // Umman
  // Kafkasya / Orta Asya
  268, // Gürcistan
  31, // Azerbaycan
  4, // Afganistan
  586, // Pakistan
  50, // Bangladeş
  144, // Sri Lanka
  // Balkanlar / Doğu Avrupa
  8, // Arnavutluk
  70, // Bosna-Hersek
  807, // Kuzey Makedonya
  498, // Moldova
  804, // Ukrayna
];

/** Türkiye — kaynak/merkez ülke, haritada ayrı renkte vurgulanır. */
export const ORIGIN_COUNTRY_CODE = 792;
