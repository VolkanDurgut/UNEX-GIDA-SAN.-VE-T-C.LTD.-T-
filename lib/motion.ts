/**
 * Sitenin marka animasyon eğrisi (custom cubic-bezier, "ease-out expo"
 * benzeri bir his verir). Önceden `motion-primitives.tsx`, `together.tsx`,
 * `header.tsx` ve `product-preview.tsx` içinde birbirinden habersiz 4 ayrı
 * yerde tanımlıydı — artık tek kaynak burası. Marka animasyon hissi
 * değiştirilmek istendiğinde tek bir yerden güncellenir.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;