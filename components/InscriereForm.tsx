"use client";



import { FormEvent, useMemo, useState } from "react";

import Link from "next/link";

import { ALL_LICENSE_OPTIONS } from "@/lib/content-data";

import { LICENSE_ICON, LICENSE_ICON_ALT, LICENSE_VISUAL } from "@/lib/license-visuals";

import { whatsappUrl } from "@/lib/site-config";

import styles from "./inscriere-form.module.css";



function buildMessage(data: {

  category: string;

  name: string;

  phone: string;

  email: string;

  message: string;

}) {

  const lines = [

    "Bună ziua! Vreau să mă înscriu la școala TODEA AUTO-MOTO din Dej.",

    "",

    `🏷️ Categorie: ${data.category}`,

    `👤 Nume: ${data.name.trim()}`,

    `📞 Telefon: ${data.phone.trim()}`,

  ];

  if (data.email.trim()) lines.push(`📧 Email: ${data.email.trim()}`);

  if (data.message.trim()) lines.push("", `💬 Mesaj: ${data.message.trim()}`);

  lines.push("", "Aștept răspunsul dumneavoastră. Mulțumesc!");

  return lines.join("\n");

}



export default function InscriereForm() {

  const [category, setCategory] = useState("");

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [gdpr, setGdpr] = useState(false);

  const [error, setError] = useState("");



  const waLink = useMemo(

    () =>

      whatsappUrl(

        buildMessage({ category: category || "—", name: name || "—", phone: phone || "—", email, message })

      ),

    [category, name, phone, email, message]

  );



  const isValid =

    !!category && name.trim().length >= 2 && phone.trim().replace(/\s/g, "").length >= 9 && gdpr;



  function handleSubmit(e: FormEvent) {

    e.preventDefault();

    setError("");



    if (!category) {

      setError("Alege categoria de permis.");

      return;

    }

    if (name.trim().length < 2) {

      setError("Introdu numele complet.");

      return;

    }

    if (phone.trim().replace(/\s/g, "").length < 9) {

      setError("Introdu un număr de telefon valid.");

      return;

    }

    if (!gdpr) {

      setError("Bifează acordul pentru prelucrarea datelor.");

      return;

    }



    window.open(waLink, "_blank", "noopener,noreferrer");

  }



  return (

    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      <fieldset className={styles.fieldset}>

        <legend>Categoria de permis *</legend>

        <div className={styles.catGrid}>

          {ALL_LICENSE_OPTIONS.map((cat) => {

            const visual = LICENSE_VISUAL[cat] ?? "help";

            const active = category === cat;

            return (

              <button

                key={cat}

                type="button"

                className={`${styles.catOption} ${active ? styles.catOptionActive : ""}`}

                onClick={() => setCategory(cat)}

                aria-pressed={active}

              >

                <span className={styles.catIconWrap}>

                  <img

                    src={LICENSE_ICON[visual]}

                    alt={LICENSE_ICON_ALT[visual]}

                    className={styles.catIconImg}

                    loading="lazy"

                    decoding="async"

                  />

                </span>

                <span className={styles.catLabel}>{cat}</span>

              </button>

            );

          })}

        </div>

      </fieldset>



      <div className={styles.fields}>

        <label>

          Nume complet *

          <input

            type="text"

            name="name"

            value={name}

            onChange={(e) => setName(e.target.value)}

            placeholder="Ex: Popescu Ion"

            autoComplete="name"

            required

          />

        </label>

        <label>

          Telefon *

          <input

            type="tel"

            name="phone"

            value={phone}

            onChange={(e) => setPhone(e.target.value)}

            placeholder="Ex: 0767 123 456"

            autoComplete="tel"

            required

          />

        </label>

        <label>

          Email

          <input

            type="email"

            name="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            placeholder="optional@email.ro"

            autoComplete="email"

          />

        </label>

        <label>

          Mesaj (opțional)

          <textarea

            name="message"

            value={message}

            onChange={(e) => setMessage(e.target.value)}

            placeholder="Întrebări sau detalii suplimentare..."

            rows={3}

          />

        </label>

      </div>



      <label className={styles.gdpr}>

        <input

          type="checkbox"

          checked={gdpr}

          onChange={(e) => setGdpr(e.target.checked)}

          required

        />

        Sunt de acord cu prelucrarea datelor personale conform{" "}

        <Link href="/politica-de-confidentialitate">Politicii de confidențialitate</Link>.

      </label>



      {error && (

        <p className={styles.error} role="alert">

          {error}

        </p>

      )}



      <button type="submit" className={`btn btn-whatsapp ${styles.submit}`} disabled={!isValid}>

        Trimite pe WhatsApp

      </button>



      <p className={styles.hint}>

        Se deschide WhatsApp cu mesajul completat — apasă Send acolo pentru a trimite înscrierea.

      </p>

    </form>

  );

}

