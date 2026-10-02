"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { siteConfig, mailUrl } from "@/lib/site-config";
import styles from "./inscriere-form.module.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  category: string;
  age: string;
  hasOtherLicense: "" | "da" | "nu";
  buletinName: string;
  permisName: string;
  gdpr: boolean;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  category: "",
  age: "",
  hasOtherLicense: "",
  buletinName: "",
  permisName: "",
  gdpr: false,
};

function buildMailBody(data: FormState) {
  const lines = [
    "Înscriere online — TODEA AUTO-MOTO Dej",
    "",
    `Nume: ${data.name.trim()}`,
    `Telefon: ${data.phone.trim()}`,
    `Email: ${data.email.trim() || "—"}`,
    `Categoria de interes: ${data.category.trim() || "—"}`,
    `Vârsta: ${data.age.trim() || "—"}`,
    `Deține permis pentru altă categorie: ${data.hasOtherLicense === "da" ? "DA" : data.hasOtherLicense === "nu" ? "NU" : "—"}`,
    `Copie buletin: ${data.buletinName || "neatașat pe site — de atașat în email"}`,
    `Copie permis: ${data.permisName || (data.hasOtherLicense === "da" ? "neatașat pe site — de atașat în email" : "N/A")}`,
    "",
    "Mesaj generat din formularul de pe todea-auto.ro",
  ];
  return lines.join("\n");
}

export default function InscriereForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState("");

  const mailHref = useMemo(() => {
    const subject = `Înscriere online — ${form.name.trim() || "cursant"} (${form.category.trim() || "categorie"})`;
    return mailUrl(subject, buildMailBody(form));
  }, [form]);

  const isValid =
    form.name.trim().length >= 2 &&
    form.phone.trim().replace(/\s/g, "").length >= 9 &&
    form.category.trim().length >= 1 &&
    !!form.buletinName &&
    form.hasOtherLicense !== "" &&
    (form.hasOtherLicense === "nu" || !!form.permisName) &&
    form.gdpr;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (form.name.trim().length < 2) {
      setError("Introdu numele complet.");
      return;
    }
    if (form.phone.trim().replace(/\s/g, "").length < 9) {
      setError("Introdu un număr de telefon valid.");
      return;
    }
    if (!form.category.trim()) {
      setError("Introdu categoria de interes.");
      return;
    }
    if (!form.buletinName) {
      setError("Încarcă o copie după buletin.");
      return;
    }
    if (!form.hasOtherLicense) {
      setError("Selectează DA sau NU pentru permisul existent.");
      return;
    }
    if (form.hasOtherLicense === "da" && !form.permisName) {
      setError("Încarcă o copie după permis.");
      return;
    }
    if (!form.gdpr) {
      setError("Bifează acordul pentru prelucrarea datelor.");
      return;
    }

    // Deschide clientul de email — fără trimitere automată de test
    window.location.href = mailHref;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.accent} aria-hidden />

      <header className={styles.head}>
        <h2 className={styles.title}>Înregistrare</h2>
        <p className={styles.subtitle}>Școala de șoferi Dej</p>
      </header>

      <div className={styles.fields}>
        <label>
          <span>
            Nume: <em>*</em>
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Numele complet"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>
            Telefon <em>*</em>
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Număr de telefon"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="Adresa de email"
            autoComplete="email"
          />
        </label>

        <label>
          <span>Categoria de interes</span>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            placeholder="Ex: B"
            list="license-categories"
            required
          />
          <datalist id="license-categories">
            <option value="A" />
            <option value="A1" />
            <option value="A2" />
            <option value="A1 automat" />
            <option value="B" />
            <option value="B automat" />
            <option value="BE" />
            <option value="B96" />
            <option value="C" />
            <option value="CE" />
            <option value="D" />
          </datalist>
        </label>

        <label>
          <span>Vârsta</span>
          <input
            type="number"
            name="age"
            min={16}
            max={99}
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
            placeholder=""
            inputMode="numeric"
          />
        </label>

        <label>
          <span>
            Copie buletin <em>*</em>
          </span>
          <input
            type="file"
            name="buletin"
            accept="image/*,.pdf"
            onChange={(e) => update("buletinName", e.target.files?.[0]?.name ?? "")}
            required
          />
        </label>

        <fieldset className={`${styles.choice} ${styles.spanFull}`}>
          <legend>
            Deții permis de conducere pentru altă categorie decât cea pentru care aplici?
          </legend>
          <div className={styles.choiceRow}>
            <label className={styles.check}>
              <input
                type="radio"
                name="hasOtherLicense"
                checked={form.hasOtherLicense === "da"}
                onChange={() => update("hasOtherLicense", "da")}
              />
              DA
            </label>
            <label className={styles.check}>
              <input
                type="radio"
                name="hasOtherLicense"
                checked={form.hasOtherLicense === "nu"}
                onChange={() => update("hasOtherLicense", "nu")}
              />
              NU
            </label>
          </div>
        </fieldset>

        {form.hasOtherLicense === "da" && (
          <label className={styles.spanFull}>
            <span>
              Încarcă copie permis <em>*</em>
            </span>
            <input
              type="file"
              name="permis"
              accept="image/*,.pdf"
              onChange={(e) => update("permisName", e.target.files?.[0]?.name ?? "")}
              required
            />
          </label>
        )}

        <label className={`${styles.gdpr} ${styles.spanFull}`}>
          <input
            type="checkbox"
            checked={form.gdpr}
            onChange={(e) => update("gdpr", e.target.checked)}
            required
          />
          <span>
            Sunt de acord cu prelucrarea datelor personale conform{" "}
            <Link href="/politica-de-confidentialitate">Politicii de confidențialitate</Link>.{" "}
            <em>*</em>
          </span>
        </label>
      </div>

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={!isValid}>
        Trimite
      </button>

      <p className={styles.hint}>
        Se deschide aplicația ta de email către {siteConfig.email}. Atașează manual copia de buletin
        {form.hasOtherLicense === "da" ? " și copia de permis" : ""} în mesajul care se deschide,
        apoi apasă Trimite.
      </p>
    </form>
  );
}
