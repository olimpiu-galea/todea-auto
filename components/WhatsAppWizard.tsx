"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ALL_LICENSE_OPTIONS } from "@/lib/content-data";
import { whatsappUrl } from "@/lib/site-config";
import styles from "./whatsapp-wizard.module.css";

type Intent = "inscriere" | "info" | "program" | "altele";

type FormData = {
  intent: Intent | "";
  category: string;
  name: string;
  phone: string;
  email: string;
  age: string;
  hasLicense: string;
  otherLicense: string;
  schedule: string;
  startWhen: string;
  infoTopic: string;
  message: string;
  gdpr: boolean;
};

type StepId = "intent" | "category" | "enrollment" | "infoTopic" | "availability" | "message" | "contact" | "review";

type StepConfig = { id: StepId; title: string; hint?: string };

const INITIAL: FormData = {
  intent: "",
  category: "",
  name: "",
  phone: "",
  email: "",
  age: "",
  hasLicense: "",
  otherLicense: "",
  schedule: "",
  startWhen: "",
  infoTopic: "",
  message: "",
  gdpr: false,
};

const INTENTS: { value: Intent; label: string; icon: string }[] = [
  { value: "inscriere", label: "Vreau să mă înscriu", icon: "📋" },
  { value: "info", label: "Informații despre categorii / prețuri", icon: "💬" },
  { value: "program", label: "Programare ore / disponibilitate", icon: "📅" },
  { value: "altele", label: "Altceva", icon: "✉️" },
];

const SCHEDULES = ["Dimineața", "După-amiaza", "Seara", "Flexibil / orice"];

const START_WHEN = ["Cât mai curând", "Luna aceasta", "Peste câteva luni", "Nu știu încă"];

const INFO_TOPICS = [
  { value: "pret", label: "Preț și plată în rate" },
  { value: "conditii", label: "Condiții de înscriere / vârstă" },
  { value: "durata", label: "Durata cursului" },
  { value: "general", label: "Informații generale" },
];

function getSteps(intent: Intent | ""): StepConfig[] {
  const base: StepConfig = { id: "intent", title: "Cu ce te putem ajuta?" };

  switch (intent) {
    case "inscriere":
      return [
        base,
        { id: "category", title: "Ce categorie vrei?", hint: "Alege permisul pe care vrei să-l obții." },
        {
          id: "enrollment",
          title: "Detalii pentru înscriere",
          hint: "Ne ajută să-ți pregătim oferta potrivită.",
        },
        { id: "contact", title: "Datele tale", hint: "Ca să te putem contacta rapid." },
        { id: "review", title: "Verifică și trimite" },
      ];
    case "info":
      return [
        base,
        {
          id: "category",
          title: "Despre ce categorie?",
          hint: "Spune-ne la ce permis te gândești.",
        },
        {
          id: "infoTopic",
          title: "Ce vrei să afli?",
          hint: "Alegi subiectul — răspundem punctual pe WhatsApp.",
        },
        { id: "contact", title: "Datele tale", hint: "Ca să-ți trimitem informațiile." },
        { id: "review", title: "Verifică și trimite" },
      ];
    case "program":
      return [
        base,
        { id: "category", title: "Pentru ce categorie?", hint: "Orele se programează pe categorie." },
        {
          id: "availability",
          title: "Când ai disponibilitate?",
          hint: "Ne ajută să găsim un interval potrivit.",
        },
        { id: "contact", title: "Datele tale", hint: "Te contactăm cu opțiunile de program." },
        { id: "review", title: "Verifică și trimite" },
      ];
    case "altele":
      return [
        base,
        {
          id: "message",
          title: "Spune-ne pe scurt",
          hint: "Scrie ce ai nevoie — răspundem personalizat.",
        },
        { id: "contact", title: "Datele tale", hint: "Ca să știm cui să răspundem." },
        { id: "review", title: "Verifică și trimite" },
      ];
    default:
      return [base];
  }
}

function infoTopicLabel(value: string) {
  return INFO_TOPICS.find((t) => t.value === value)?.label ?? value;
}

function buildMessage(data: FormData): string {
  const intentLabel = INTENTS.find((i) => i.value === data.intent)?.label ?? data.intent;
  const lines = ["Bună ziua! Am completat formularul de pe site-ul TODEA AUTO-MOTO.", ""];

  switch (data.intent) {
    case "inscriere":
      lines.push(`📋 Solicitare: ${intentLabel}`);
      lines.push(`🏷️ Categorie dorită: ${data.category}`);
      if (data.hasLicense) {
        lines.push(
          `🪪 Alt permis deținut: ${data.hasLicense}${data.otherLicense ? ` (${data.otherLicense})` : ""}`
        );
      }
      if (data.schedule) lines.push(`🕐 Program preferat: ${data.schedule}`);
      if (data.startWhen) lines.push(`📅 Când vrei să începi: ${data.startWhen}`);
      break;
    case "info":
      lines.push(`💬 Solicitare: ${intentLabel}`);
      lines.push(`🏷️ Categorie: ${data.category}`);
      lines.push(`❓ Informații despre: ${infoTopicLabel(data.infoTopic)}`);
      break;
    case "program":
      lines.push(`📅 Solicitare: ${intentLabel}`);
      lines.push(`🏷️ Categorie: ${data.category}`);
      if (data.schedule) lines.push(`🕐 Disponibilitate: ${data.schedule}`);
      if (data.message) lines.push(`📝 Note programare: ${data.message}`);
      break;
    case "altele":
      lines.push(`✉️ Solicitare: ${intentLabel}`);
      if (data.message) lines.push(`💬 Mesaj: ${data.message}`);
      break;
    default:
      lines.push(`📌 Solicitare: ${intentLabel}`);
  }

  lines.push("", `👤 Nume: ${data.name}`, `📞 Telefon: ${data.phone}`);
  if (data.email) lines.push(`📧 Email: ${data.email}`);
  if (data.intent === "inscriere" && data.age) lines.push(`🎂 Vârstă: ${data.age}`);
  if (data.intent === "info" && data.message) lines.push(`💬 Întrebare suplimentară: ${data.message}`);

  lines.push("", "Aștept răspunsul dumneavoastră. Mulțumesc!");
  return lines.join("\n");
}

function intentResetFields(): Partial<FormData> {
  return {
    category: "",
    age: "",
    hasLicense: "",
    otherLicense: "",
    schedule: "",
    startWhen: "",
    infoTopic: "",
    message: "",
    gdpr: false,
  };
}

function canAdvance(stepId: StepId, data: FormData): boolean {
  switch (stepId) {
    case "intent":
      return !!data.intent;
    case "category":
      return !!data.category;
    case "enrollment":
      return !!data.schedule && !!data.startWhen;
    case "infoTopic":
      return !!data.infoTopic;
    case "availability":
      return !!data.schedule;
    case "message":
      return data.message.trim().length >= 8;
    case "contact":
      return data.name.trim().length >= 2 && data.phone.trim().replace(/\s/g, "").length >= 9;
    case "review":
      return data.gdpr;
    default:
      return false;
  }
}

function initialStep(defaultIntent?: string) {
  if (defaultIntent && INTENTS.some((i) => i.value === defaultIntent)) return 1;
  return 0;
}

export default function WhatsAppWizard({ defaultIntent }: { defaultIntent?: string }) {
  const [stepIndex, setStepIndex] = useState(() => initialStep(defaultIntent));
  const [data, setData] = useState<FormData>({
    ...INITIAL,
    intent: (defaultIntent as Intent) || "",
  });

  const steps = useMemo(() => getSteps(data.intent), [data.intent]);
  const currentStep = steps[stepIndex] ?? steps[0];
  const isLastInputStep = currentStep?.id !== "review" && stepIndex === steps.length - 2;

  const update = (patch: Partial<FormData>) => setData((d) => ({ ...d, ...patch }));

  const waLink = useMemo(() => whatsappUrl(buildMessage(data)), [data]);

  const goNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const reviewHint =
    data.intent === "inscriere"
      ? "După trimitere, te contactăm pentru finalizarea înscrierii."
      : data.intent === "program"
        ? "După trimitere, revenim cu opțiuni de program."
        : "După trimitere, răspundem pe WhatsApp în cel mai scurt timp.";

  return (
    <div className={styles.wrap}>
      {steps.length > 1 && (
        <div className={styles.progress}>
          {steps.map((s, i) => (
            <button
              key={`${s.id}-${i}`}
              type="button"
              className={`${styles.stepDot} ${i <= stepIndex ? styles.stepDone : ""} ${i === stepIndex ? styles.stepActive : ""}`}
              onClick={() => i < stepIndex && setStepIndex(i)}
              aria-label={s.title}
              disabled={i > stepIndex}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <h2 className={styles.stepTitle}>{currentStep.title}</h2>
      {currentStep.hint && <p className={styles.stepHint}>{currentStep.hint}</p>}

      {currentStep.id === "intent" && (
        <div className={styles.options}>
          {INTENTS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`${styles.option} ${data.intent === item.value ? styles.optionActive : ""}`}
              onClick={() => {
                update({
                  intent: item.value,
                  ...intentResetFields(),
                });
                setStepIndex(0);
              }}
            >
              <span className={styles.optionIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {currentStep.id === "category" && (
        <div className={styles.categoryGrid}>
          {ALL_LICENSE_OPTIONS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.catChip} ${data.category === cat ? styles.catChipActive : ""}`}
              onClick={() => update({ category: cat })}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {currentStep.id === "enrollment" && (
        <div className={styles.fields}>
          <fieldset className={styles.fieldset}>
            <legend>Deții permis pentru altă categorie?</legend>
            <div className={styles.radioRow}>
              {["Da", "Nu"].map((v) => (
                <label key={v} className={styles.radio}>
                  <input
                    type="radio"
                    name="hasLicense"
                    checked={data.hasLicense === v}
                    onChange={() =>
                      update({ hasLicense: v, otherLicense: v === "Nu" ? "" : data.otherLicense })
                    }
                  />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>
          {data.hasLicense === "Da" && (
            <label>
              Ce categorie deții?
              <input
                type="text"
                value={data.otherLicense}
                onChange={(e) => update({ otherLicense: e.target.value })}
                placeholder="Ex: AM, A1"
              />
            </label>
          )}
          <fieldset className={styles.fieldset}>
            <legend>Când preferi orele?</legend>
            <div className={styles.scheduleGrid}>
              {SCHEDULES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.catChip} ${data.schedule === s ? styles.catChipActive : ""}`}
                  onClick={() => update({ schedule: s })}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>Când vrei să începi?</legend>
            <div className={styles.scheduleGrid}>
              {START_WHEN.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.catChip} ${data.startWhen === s ? styles.catChipActive : ""}`}
                  onClick={() => update({ startWhen: s })}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {currentStep.id === "infoTopic" && (
        <div className={styles.fields}>
          <div className={styles.options}>
            {INFO_TOPICS.map((topic) => (
              <button
                key={topic.value}
                type="button"
                className={`${styles.option} ${data.infoTopic === topic.value ? styles.optionActive : ""}`}
                onClick={() => update({ infoTopic: topic.value })}
              >
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
          <label>
            Întrebare suplimentară (opțional)
            <textarea
              value={data.message}
              onChange={(e) => update({ message: e.target.value })}
              placeholder="Ex: Cât costă categoria B cu plată în rate?"
              rows={3}
            />
          </label>
        </div>
      )}

      {currentStep.id === "availability" && (
        <div className={styles.fields}>
          <fieldset className={styles.fieldset}>
            <legend>Interval preferat pentru ore</legend>
            <div className={styles.scheduleGrid}>
              {SCHEDULES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.catChip} ${data.schedule === s ? styles.catChipActive : ""}`}
                  onClick={() => update({ schedule: s })}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
          <label>
            Detalii programare (opțional)
            <textarea
              value={data.message}
              onChange={(e) => update({ message: e.target.value })}
              placeholder="Ex: Prefer sâmbăta dimineața, am nevoie de 2 ore pe săptămână..."
              rows={3}
            />
          </label>
        </div>
      )}

      {currentStep.id === "message" && (
        <div className={styles.fields}>
          <label>
            Mesajul tău *
            <textarea
              value={data.message}
              onChange={(e) => update({ message: e.target.value })}
              placeholder="Ex: Am o întrebare despre transferul de la altă școală..."
              rows={5}
            />
          </label>
        </div>
      )}

      {currentStep.id === "contact" && (
        <div className={styles.fields}>
          <label>
            Nume complet *
            <input
              type="text"
              value={data.name}
              onChange={(e) => update({ name: e.target.value })}
              placeholder="Ex: Popescu Ion"
              autoComplete="name"
            />
          </label>
          <label>
            Telefon *
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              placeholder="Ex: 0767 123 456"
              autoComplete="tel"
            />
          </label>
          <label>
            Email (opțional)
            <input
              type="email"
              value={data.email}
              onChange={(e) => update({ email: e.target.value })}
              placeholder="optional@email.ro"
              autoComplete="email"
            />
          </label>
          {data.intent === "inscriere" && (
            <label>
              Vârsta (opțional)
              <input
                type="text"
                value={data.age}
                onChange={(e) => update({ age: e.target.value })}
                placeholder="Ex: 18"
              />
            </label>
          )}
        </div>
      )}

      {currentStep.id === "review" && (
        <div className={styles.review}>
          <pre className={styles.preview}>{buildMessage(data)}</pre>
          <label className={styles.gdpr}>
            <input
              type="checkbox"
              checked={data.gdpr}
              onChange={(e) => update({ gdpr: e.target.checked })}
            />
            Sunt de acord cu prelucrarea datelor personale conform{" "}
            <Link href="/politica-de-confidentialitate">Politicii de confidențialitate</Link>.
          </label>
          <a
            href={waLink}
            className={`btn btn-whatsapp ${styles.sendBtn}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!data.gdpr}
            onClick={(e) => {
              if (!data.gdpr) e.preventDefault();
            }}
          >
            Trimite pe WhatsApp
          </a>
          <p className={styles.hint}>{reviewHint}</p>
        </div>
      )}

      {currentStep.id !== "review" && (
        <div className={styles.nav}>
          {stepIndex > 0 ? (
            <button type="button" className="btn btn-ghost" onClick={goBack}>
              Înapoi
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            className="btn btn-primary"
            disabled={!canAdvance(currentStep.id, data)}
            onClick={goNext}
          >
            {isLastInputStep ? "Verifică mesajul" : "Continuă"}
          </button>
        </div>
      )}

      {currentStep.id === "review" && stepIndex > 0 && (
        <div className={styles.nav}>
          <button type="button" className="btn btn-ghost" onClick={goBack}>
            Înapoi
          </button>
        </div>
      )}
    </div>
  );
}
