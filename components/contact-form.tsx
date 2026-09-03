'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <p className="eyebrow">MESAJ GÖNDERİN</p>
      <h3>Mesajınız mı var?</h3>
      <p className="form-intro">
        Herhangi bir sorunuz varsa, lütfen bize bir mesaj göndermekten çekinmeyin. 24 saat içinde yanıtlıyoruz!
      </p>
      <div className="form-row">
        <label>
          Ad Soyad
          <input required placeholder="Adınız ve soyadınız" />
        </label>
        <label>
          E-posta
          <input required type="email" placeholder="ornek@email.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Telefon
          <input placeholder="+90" />
        </label>
        <label>
          Konu
          <input required placeholder="Nasıl yardımcı olabiliriz?" />
        </label>
      </div>
      <label>
        Mesaj
        <textarea required rows={5} placeholder="Mesajınızı buraya yazın..." />
      </label>
      <button className="button button-gold" type="submit">
        {sent ? (
          <>
            Mesajınız alındı <Check size={17} />
          </>
        ) : (
          <>
            Mesajı Gönder <ArrowRight size={17} />
          </>
        )}
      </button>
    </form>
  );
}
