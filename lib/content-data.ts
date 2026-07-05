export type CategorySection = {
  id: string;
  title: string;
  price?: string;
  payment?: string;
  details: string[];
  courseInfo: string[];
  obligations: string[];
  enrollment: string[];
  exam: string[];
};

export type CategoryGroup = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  href: string;
  sections: CategorySection[];
};

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    slug: "motociclete",
    title: "Motociclete",
    icon: "🏍️",
    summary: "Pregătire pentru categoriile A, A1, A2 și A1 automat — moto și triciclu.",
    href: "/categorii/motociclete",
    sections: [
      {
        id: "a",
        title: "Categoria A",
        price: "2000 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Motocicletă cu sau fără ataș și triciclu cu motor cu puterea de peste 15 kW.",
        ],
        courseInfo: [
          "Durata cursului este de 3 săptămâni când posedă permis de conducere categoria A2 cu vechime de până la 2 ani, timp în care efectuează 12 ore de pregătire teoretică și 20 ore de pregătire practică (poligon și traseu). Pregătirea teoretică precede pregătirea practică.",
          "Durata cursului este de 3 săptămâni când posedă permis de conducere categoria A2 cu o vechime minimă de 2 ani, timp în care efectuează 24 ore de pregătire teoretică și 10 ore de pregătire practică (poligon și traseu).",
          "Durata cursului este de 4 săptămâni când nu posedă permis de conducere, sau când posedă permis de conducere pentru alte categorii în afara de AM, A1 și A2, timp în care efectuează 24 ore de pregătire teoretică și 26 ore de pregătire practică (poligon și traseu).",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să posede asupra sa cartea (buletinul) de identitate și caietul cursantului",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
          "Să promoveze testele finale de absolvire a școlii",
        ],
        enrollment: [
          "24 ani fără trei luni, sau 20 ani dacă posedă categoria A2 de cel puțin 2 ani",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002, cu excepția cazurilor când a intervenit una din situațiile prevăzute la art.116 din alin.1 din OUG nr.195/2002",
        ],
        exam: [
          "Examenul constă într-o probă teoretică și una practică, în poligon",
          "Proba teoretică se susține pe calculator — chestionar cu 20 de întrebări, 20 minute, promovare cu minimum 17 răspunsuri corecte",
          "Proba practică constă în efectuarea unor manevre în poligon într-un anumit timp",
        ],
      },
      {
        id: "a1",
        title: "Categoria A1",
        price: "2000 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Motociclete cu cilindree maximă de 125 cm³, cu puterea maximă de 11 kW și cu raport putere/greutate de cel mult 0,1 kW/kg",
          "Tricicluri cu motor cu puterea maximă de 15 kW",
          "Motocicletă disponibilă: Piaggio Gilera Coguar 125 cm³",
        ],
        courseInfo: [
          "Durata cursului este de 3 săptămâni, când posedă permis de conducere categoria AM cu vechime minimă de la 2 ani — 24 ore teoretică și 10 ore practică (poligon și traseu)",
          "Durata cursului este de 4 săptămâni când nu posedă permis de conducere sau este posesor de permis pentru alte categorii în afară de AM — 24 ore teoretică și 26 ore practică",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să posede asupra sa cartea (buletinul) de identitate și caietul cursantului",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
          "Să promoveze testele finale de absolvire a școlii",
        ],
        enrollment: [
          "Vârsta: 16 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002",
          "Act notarial al reprezentantului legal că este de acord ca persoana minoră să susțină examenul pentru obținerea permisului de conducere",
        ],
        exam: [
          "Proba teoretică — chestionar cu 20 de întrebări, 20 minute, promovare cu minimum 17 răspunsuri corecte",
          "Proba practică — manevre în poligon într-un anumit timp",
        ],
      },
      {
        id: "a2",
        title: "Categoria A2",
        price: "2000 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Motociclete cu putere de până la 35 kW (raport putere/greutate max. 0,2 kW/kg), neprovenite dintr-un model cu mai mult de dublul puterii",
          "Pregătirea este axată pe control, manevre și condus în siguranță în trafic",
        ],
        courseInfo: [
          "Durata cursului este de 3 săptămâni, când posedă permis categoria AM cu vechime minimă de la 2 ani — 24 ore teoretică și 10 ore practică",
          "Durata cursului este de 4 săptămâni când nu posedă permis de conducere — 24 ore teoretică și 26 ore practică",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să posede asupra sa cartea (buletinul) de identitate și caietul cursantului",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
          "Să promoveze testele finale de absolvire a școlii",
        ],
        enrollment: [
          "Vârsta: 18 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002",
        ],
        exam: [
          "Proba teoretică — chestionar cu 20 de întrebări, 20 minute, promovare cu minimum 17 răspunsuri corecte",
          "Proba practică — manevre în poligon într-un anumit timp",
        ],
      },
      {
        id: "a1-automat",
        title: "Categoria A1 Automat",
        price: "2000 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Motociclete cu cilindree maximă de 125 cm³, cu puterea maximă de 11 kW",
          "Tricicluri cu motor cu puterea maximă de 15 kW",
          "Motocicletă disponibilă: Piaggio Gilera Coguar 125 cm³",
        ],
        courseInfo: [
          "Durata cursului este de 3 săptămâni, când posedă permis categoria AM cu vechime minimă de la 2 ani — 24 ore teoretică și 10 ore practică",
          "Durata cursului este de 4 săptămâni când nu posedă permis de conducere — 24 ore teoretică și 26 ore practică",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să posede asupra sa cartea (buletinul) de identitate și caietul cursantului",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
          "Să promoveze testele finale de absolvire a școlii",
        ],
        enrollment: [
          "Vârsta: 16 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
          "Act notarial al reprezentantului legal pentru persoanele minore",
        ],
        exam: [
          "Proba teoretică — chestionar cu 20 de întrebări, 20 minute, promovare cu minimum 17 răspunsuri corecte",
          "Proba practică — manevre în poligon într-un anumit timp",
        ],
      },
    ],
  },
  {
    slug: "autoturisme",
    title: "Autoturisme",
    icon: "🚗",
    summary: "Categoria B, B automat, BE și B96 — de la primul volan până la ansamblu cu remorcă.",
    href: "/categorii/autoturisme",
    sections: [
      {
        id: "b",
        title: "Categoria B",
        price: "2200 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Autoturisme cu masa totală maximă autorizată de până la 3.500 kg și maximum 8 pasageri (în afară de șofer). Include și ansambluri cu remorcă, în limitele prevăzute de legislație.",
        ],
        courseInfo: [
          "Cursul cuprinde pregătire teoretică (legislație rutieră, prioritate, semnalizare, conducere preventivă) și pregătire practică în trafic, cu accent pe manevre, parcări și situații reale de circulație.",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să posede asupra sa cartea (buletinul) de identitate și caietul cursantului",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
          "Să promoveze testele finale de absolvire a școlii",
        ],
        enrollment: [
          "18 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002",
        ],
        exam: [
          "Examenul include probă teoretică pe calculator și probă practică în traseu",
          "Pentru categoria B, testul teoretic are 26 întrebări / 30 minute, cu promovare la minimum 22 răspunsuri corecte",
        ],
      },
      {
        id: "b-automat",
        title: "Categoria B Automat",
        price: "2300 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Aceleași drepturi ca la categoria B, dar școlarizarea și proba practică se desfășoară pe un autovehicul cu transmisie automată. Pe permis poate apărea mențiunea specifică (cod 78).",
        ],
        courseInfo: [
          "Pregătire teoretică identică cu B + pregătire practică în trafic pe automată (manevre, parcări, plecări din rampă unde e cazul, adaptare la trafic).",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
        ],
        enrollment: [
          "18 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
        ],
        exam: [
          "Probă teoretică + probă practică în traseu pe vehicul cu transmisie automată",
        ],
      },
      {
        id: "be",
        title: "Categoria BE",
        price: "800 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Ansamblul format dintr-un autovehicul din categoria B și o remorcă/semiremorcă cu masa totală maximă autorizată de până la 3.500 kg.",
        ],
        courseInfo: [
          "Pregătirea pune accent pe conducerea cu remorcă: cuplare/decuplare, verificări înainte de plecare, manevre în spațiu restrâns, mers înapoi și traseu în trafic.",
        ],
        obligations: [
          "Să dețină permis categoria B",
          "Să respecte indicațiile instructorului auto",
        ],
        enrollment: [
          "Permis categoria B valabil",
          "Apt din punct de vedere medical și psihologic",
        ],
        exam: [
          "Probă teoretică + probă practică (traseu). Pentru BE, testul teoretic are 11 întrebări / 15 minute, cu promovare la minimum 9 răspunsuri corecte",
        ],
      },
      {
        id: "b96",
        title: "Categoria B96",
        price: "500 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Extensie pentru categoria B destinată ansamblurilor B + remorcă, atunci când masa totală maximă autorizată a ansamblului depășește 3.500 kg, dar nu depășește 4.250 kg.",
        ],
        courseInfo: [
          "Pregătire practică axată pe conducerea cu remorcă: manevre, mers înapoi, parcare, controlul balansului, cuplare/decuplare și conducere în siguranță cu ansamblul.",
        ],
        obligations: [
          "Să dețină permis categoria B",
          "Să respecte indicațiile instructorului auto",
        ],
        enrollment: [
          "Permis categoria B valabil",
          "Apt din punct de vedere medical și psihologic",
        ],
        exam: [
          "Probă practică cu ansamblu B + remorcă",
        ],
      },
    ],
  },
  {
    slug: "camioane",
    title: "Camioane",
    icon: "🚛",
    summary: "Categoriile C și CE — vehicule grele și ansambluri pentru transport marfă.",
    href: "/categorii/camioane",
    sections: [
      {
        id: "c",
        title: "Categoria C",
        price: "2500 RON",
        payment: "Plata acceptată și în rate",
        details: [
          "Autovehicule destinate transportului de marfă cu masa totală maximă autorizată mai mare de 3.500 kg (camioane), cu maximum 8 pasageri (în afară de șofer).",
        ],
        courseInfo: [
          "Teorie orientată pe conducerea vehiculelor grele (gabarit, frânare, unghiuri moarte, reguli specifice) + practică în trafic: manevre, întoarceri, parcări, încadrare și condus preventiv cu vehicul greu.",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
        ],
        enrollment: [
          "21 ani fără trei luni",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002",
        ],
        exam: [
          "Examenul include probă teoretică pe calculator și probă practică în traseu",
          "Pentru categoria C, testul teoretic are 26 întrebări / 30 minute, cu promovare la minimum 22 răspunsuri corecte",
        ],
      },
      {
        id: "ce",
        title: "Categoria CE",
        price: "3000 RON",
        payment: "Plata acceptată și în rate",
        details: [
          "Ansambluri de vehicule pentru transport marfă: autovehicul categoria C + remorcă/semiremorcă (categoria „E” aferentă), pentru conducerea ansamblurilor grele.",
        ],
        courseInfo: [
          "Accent pe: cuplare/decuplare, manevre cu semiremorcă/remorcă, mers înapoi, încadrare la viraje, anticipare și siguranță la frânare cu ansamblu.",
        ],
        obligations: [
          "Să dețină permis categoria C",
          "Să respecte indicațiile instructorului auto",
        ],
        enrollment: [
          "Permis categoria C valabil",
          "Apt din punct de vedere medical și psihologic",
        ],
        exam: [
          "Probă teoretică + probă practică (traseu cu ansamblu). Pentru CE, testul teoretic are 11 întrebări / 15 minute, cu promovare la minimum 9 răspunsuri corecte",
        ],
      },
    ],
  },
  {
    slug: "autobuze",
    title: "Autobuze",
    icon: "🚌",
    summary: "Categoria D — autobuze și transport public de persoane.",
    href: "/categorii/autobuze",
    sections: [
      {
        id: "d",
        title: "Categoria D — autobuze / transport public",
        price: "2500 RON",
        payment: "Plata acceptată și în 2 rate",
        details: [
          "Autovehicule destinate transportului de persoane cu mai mult de 8 locuri (în afară de șofer) — autobuze.",
        ],
        courseInfo: [
          "Pregătire teoretică și practică orientată pe siguranța pasagerilor: opriri/plecări din stații, gabarit, viraje, încadrare, conduită preventivă și anticipare în trafic.",
        ],
        obligations: [
          "Să se prezinte la orele de pregătire teoretică și practică în stare psiho-fizică corespunzătoare",
          "Să respecte programa de învățământ și indicațiile instructorului auto",
        ],
        enrollment: [
          "Vârsta minimă standard: 24 de ani împliniți",
          "Excepție: se poate elibera de la 21 de ani, doar dacă ai CPI (calificare profesională inițială) — cu înscrierea unui cod în permis (național sau european)",
          "Apt din punct de vedere medical și psihologic",
          "Să nu fi fost condamnat definitiv pentru infracțiunile prevăzute la art.24 alin.6 din OUG nr.195/2002",
        ],
        exam: [
          "Examenul include probă teoretică pe calculator și probă practică în traseu",
          "Pentru categoria D, testul teoretic are 26 întrebări / 30 minute, cu promovare la minimum 22 răspunsuri corecte",
        ],
      },
    ],
  },
];

export const SERVICES = [
  {
    title: "Pregătire teoretică (Sala)",
    text: "Explicăm legislația rutieră clar și pe înțelesul tuturor, cu teste actualizate și suport constant până la promovare.",
  },
  {
    title: "Program flexibil",
    text: "Ne adaptăm programul în funcție de timpul tău: dimineața, după-amiaza sau seara, fără stres inutil.",
  },
  {
    title: "Pregătire practică auto",
    text: "Ore de conducere structurate, pe trasee reale din Dej, alături de instructori răbdători care te ajută să conduci corect și sigur.",
  },
  {
    title: "Categorii auto și moto",
    text: "Pregătire pentru mai multe categorii de permis, atât auto cât și moto, în funcție de nevoile tale.",
  },
  {
    title: "Instructori experimentați",
    text: "Lucrezi cu instructori autorizați, calmi și atenți, care se adaptează nivelului tău și te ajută să câștigi încredere la volan.",
  },
  {
    title: "Suport până la examen",
    text: "Te ajutăm pas cu pas până la promovare, atât la sala, cât și la traseu. Nu ești lăsat singur pe drum.",
  },
];

export const WHY_US = [
  {
    title: "Nu te grăbim. Nu te stresăm. Te învățăm.",
    text: "Instructorii noștri se adaptează ritmului tău, indiferent dacă înveți repede sau ai emoții la volan. Fără țipete, fără presiune inutilă.",
  },
  {
    title: "Exersezi exact unde vei da examenul.",
    text: "Faci ore pe trasee reale din Dej, în condiții reale de trafic. Știi ce urmează înainte să ajungi la examen.",
  },
  {
    title: "Peste 2.300 de cursanți pregătiți cu succes",
    text: "Rezultatele noastre nu sunt întâmplătoare. Sunt rezultatul unui sistem clar de pregătire și instructori cu experiență.",
  },
  {
    title: "Nu te lăsăm singur după înscriere",
    text: "Te ajutăm pas cu pas: înscriere, sală, traseu, programări. Știi mereu ce urmează.",
  },
];

/** Recenzii reale de pe Facebook — actualizare manuală (API Facebook necesită backend). */
export const FACEBOOK_REVIEWS_STATS = {
  recommend: "100%",
  count: 361,
};

export type FacebookReview = {
  author: string;
  text: string;
};

export const FACEBOOK_REVIEWS: FacebookReview[] = [
  {
    author: "Crina Hugel",
    text: "O experiență cu adevărat deosebită! Mulțumesc instructorului pentru calm, profesionalism și încurajările oferite la fiecare lecție.",
  },
  {
    author: "Cristian P.",
    text: "Instructor de încredere, seriozitate și profesionalism. Am făcut categoria D și am luat categoria la prima examinare.",
  },
  {
    author: "Ramona Opriș",
    text: "Recomand cu căldură această școală de șoferi. Mulțumiri instructorului meu pentru calm, răbdare și încurajări.",
  },
  {
    author: "Muri Paul",
    text: "Nu doar că e cea mai bună școală de șoferi din oraș, ci înveți foarte pe înțelesul tău, mai ales cu domnul instructor Todea.",
  },
  {
    author: "Andreea M.",
    text: "Am luat sala și orașul din prima, în doar 7 zile. Tot meritul îi aparține domnului Todea — calm, răbdător și foarte clar în explicații.",
  },
  {
    author: "Alexandra D.",
    text: "Cea mai bună academie auto — răbdare, devotament și dedicare. Mulțumesc echipei pentru implicare. Recomand cu mare drag!",
  },
  {
    author: "Mihai R.",
    text: "Mulțumesc instructorilor pentru toată răbdarea acordată! Recomand cu încredere Todea Auto Moto, cea mai tare școală de șoferi.",
  },
  {
    author: "Elena V.",
    text: "O experiență nemaipomenită! Mulțumesc domnului Ovidiu Todea — profesionalism, empatie, promptitudine și seriozitate.",
  },
  {
    author: "Ioana S.",
    text: "Mulțumesc întregii echipe TODEA AUTO MOTO pentru profesionalismul și răbdarea. Un instructor excepțional!",
  },
  {
    author: "Vlad T.",
    text: "Recomand cu încredere! Instructori calmi, atenți, devotați. Cu ajutorul lor ceea ce îți dorești devine realitate.",
  },
  {
    author: "Denisa L.",
    text: "Super experiența! Profesionalism, calm, explicații foarte clare, exact ce trebuie. Recomand cu cel mai mare drag!",
  },
  {
    author: "Florin G.",
    text: "Serviciu extraordinar. Domnul Ovidiu foarte calm, cu explicații clare, repetate până s-au înțeles — exact cum trebuie.",
  },
  {
    author: "Bianca N.",
    text: "Cea mai tare școală de șoferi din Dej! Instructorii știu să explice și se mulează după nevoile elevilor.",
  },
  {
    author: "Paul C.",
    text: "Școala foarte bine organizată, spațiul de învățare excelent, instructori foarte buni — se reflectă în rezultate.",
  },
  {
    author: "Marcel M.",
    text: "Mulțumiri pentru sfaturi, calm, răbdare și încurajări. Un profesionalism desăvârșit și un instructor de aur!",
  },
  {
    author: "Adela H.",
    text: "Am venit de la altă școală fără succes. La TODEA am găsit un instructor calm și încredere maximă. Recomand!",
  },
  {
    author: "Răzvan P.",
    text: "Categoria B din prima! Instructorul a explicat tot pe înțelesul meu, cu seriozitate și răbdare la fiecare lecție.",
  },
  {
    author: "Simona F.",
    text: "Echipă minunată, program flexibil și sprijin până la examen. Mulțumesc TODEA AUTO MOTO din tot sufletul!",
  },
  {
    author: "Cosmin A.",
    text: "Am găsit un instructor calm cum rar întâlnești — chiar dacă greșești, reușește să-ți dea încredere. Recomand cu căldură!",
  },
  {
    author: "Diana K.",
    text: "Recomand cu căldură școala Todea — o echipă frumoasă și amabilă. Profesionalism și dedicare la fiecare pas.",
  },
];

export const TESTIMONIALS = [
  "Am luat sala și orașul din prima, în doar 7 zile. Tot meritul îi aparține domnului Todea, un instructor extraordinar — calm, răbdător și foarte clar în explicații. Recomand din toată inima!",
  "Cea mai bună academie auto — răbdare, devotament și dedicare. Mulțumesc lui Andrei Todea și echipei pentru implicare. Seriozitate și profesionalism. Recomand cu mare drag!",
  "Mulțumesc instructorilor pentru toată răbdarea acordată și timpul dedicat! Recomand cu încredere Todea Auto Moto, cea mai tare școală de șoferi!",
  "O experiență nemaipomenită alături de oameni care îți inspiră încrederea că ești capabil să dai tot ce e mai bun din tine! Mulțumesc domnului Ovidiu Todea — profesionalism, empatie, promptitudine și seriozitate!",
  "Vreau să mulțumesc întregii echipe TODEA AUTO MOTO pentru profesionalismul, răbdarea și dedicarea. Un mulțumesc special domnului TODEA — instructor excepțional!",
  "Recomand cu încredere! Instructori foarte bine pregătiți, calmi, atenți, devotați. Împreună cu ajutorul lor ceea ce îți dorești devine realitate.",
  "Super experiența! Profesionalism, calm, explicații foarte clare, exact ce trebuie. Recomand cu cel mai mare drag!",
  "Extraordinar serviciul, profesionist. Domnul Ovidiu foarte calm, cu explicații clare, repetate până s-au înțeles — exact cum trebuie să fie un instructor auto!",
  "Cea mai tare școală de șoferi din Dej! Instructorii super de treabă și cu experiență care știu să explice. Se mulează și după nevoile elevilor.",
  "Școala foarte bine organizată, spațiul de învățare este foarte bun pentru toate tipurile de cursanți, cu instructori foarte buni — fapt care se reflectă în rezultate.",
];

export const FAQ_ITEMS = [
  {
    q: "Ce categorii de permis oferiți?",
    a: "Oferim pregătire pentru A, A1, A2, A1 automat, B, BE, B automat, B96, C, CE și D — atât auto cât și moto.",
  },
  {
    q: "Unde vă aflați?",
    a: "Ne găsiți pe Strada 1 Mai Nr 6 ET:1, Dej, România. Program: Luni – Sâmbătă, 08:00 – 18:00.",
  },
  {
    q: "Cum mă pot înscrie?",
    a: "Completează formularul interactiv de pe site (trimite mesaj pe WhatsApp) sau sună la 0767 083 669. Vei fi contactat(ă) în cel mai scurt timp.",
  },
  {
    q: "Acceptați plata în rate?",
    a: "Da, pentru majoritatea categoriilor plata este acceptată și în 2 rate. Detaliile exacte le primești la înscriere.",
  },
  {
    q: "Ce vârstă minimă am nevoie pentru categoria B?",
    a: "18 ani fără trei luni, apt din punct de vedere medical și psihologic.",
  },
  {
    q: "Fac ore pe traseele din Dej?",
    a: "Da. Exersezi pe trasee reale din Dej, în condiții reale de trafic — exact acolo unde vei da examenul.",
  },
  {
    q: "Pot alege programul orelor?",
    a: "Da. Ne adaptăm programul: dimineața, după-amiaza sau seara, în funcție de disponibilitatea ta.",
  },
  {
    q: "Cum vă pot contacta?",
    a: "Telefon: 0767 083 669, WhatsApp sau vizită la sediu în program de lucru.",
  },
];

export function getCategoryGroup(slug: string) {
  return CATEGORY_GROUPS.find((g) => g.slug === slug);
}

/** Navigare meniu — doar grupurile mari */
export const CATEGORY_NAV = {
  href: "/categorii",
  label: "Categorii",
  groups: CATEGORY_GROUPS.map((g) => ({
    title: g.title,
    href: g.href,
  })),
};

export const ALL_LICENSE_OPTIONS = [
  "A", "A1", "A2", "A1 automat", "B", "B automat", "BE", "B96", "C", "CE", "D", "Nu știu încă",
];
