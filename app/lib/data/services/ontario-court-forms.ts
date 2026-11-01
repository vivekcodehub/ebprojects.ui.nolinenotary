import type { ServicePageData } from "./types";

export const ontarioCourtForms: ServicePageData = {
  slug: "ontario-court-forms",
  meta: {
    title: "Ontario Court Forms | Affidavit Commissioning Online",
    description:
      "Need an Ontario court affidavit commissioned? Online commissioning for eligible Ontario court forms, Affidavits of Service, civil, family and estate affidavits. From $45.",
    keywords: [
      "ontario court forms",
      "ontario court affidavit",
      "court affidavit ontario",
      "commission court affidavit",
      "court affidavit online ontario",
      "ontario court forms online",
      "commissioner for court affidavit",
      "form 4d affidavit",
      "form 16b affidavit of service",
      "form 14a affidavit",
      "form 6b affidavit of service",
    ],
    ogImage: "/images/contact.png",
  },
  hero: {
    tag: "ONTARIO COURT FORMS",
    title: "Ontario Court Forms Commissioning & Notary Services",
    description: [
      "Need an Ontario court form sworn, affirmed, commissioned or notarized?",
      "No Line Notary provides convenient document services for individuals completing forms for the Ontario Superior Court of Justice, Ontario Court of Justice, Small Claims Court and Family Court.",
      "If your court document contains an affidavit, statutory declaration or other sworn statement, an eligible document may be commissioned online by secure live video.",
    ],
    backgroundImage: "/images/service-coverImage.jpg",
    backgroundImageAlt: "Courthouse columns",
    card: {
      title: "Online Commissioning From",
      price: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book an online court form appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
  breadcrumbLabel: "Ontario Court Forms",

  imageTextLeft: {
    image: "/images/affidavits-online-ontario/1.png",
    imageAlt: "Need an Ontario Court Form Commissioned?",
    title: "Need an Ontario Court Form Commissioned?",
    paragraphs: [
      "Many Ontario court proceedings require a person to provide evidence by affidavit.",
      "An affidavit is a written statement of facts that the person making the affidavit swears or solemnly affirms to be true.",
      "Depending upon the proceeding, an affidavit may be required to:",
      "Provide evidence to the court",
      "Support a motion",
      "Confirm service of documents",
      "Provide evidence in an application",
      "Support an estate proceeding",
      "Provide financial information",
      "Explain particular facts",
      "Prove execution of a document",
      "Satisfy another procedural requirement",
      "If your Ontario court form contains an affidavit that must be sworn or affirmed before a Commissioner for Taking Affidavits, No Line Notary can commission eligible documents.",
    ],
  },

  imageTextRight: {
    image: "/images/affidavits-online-ontario/2.png",
    imageAlt: "Can Ontario Court Affidavits Be Commissioned Online?",
    title: "Can Ontario Court Affidavits Be Commissioned Online?",
    paragraphs: [
      "Yes, where the affidavit is eligible for remote commissioning.",
      "Ontario permits eligible affidavits to be commissioned remotely where the applicable legal requirements are satisfied.",
      "During your online appointment, you meet with the Commissioner through live video.",
      "The Commissioner will:",
      "Confirm your identity",
      "Administer the oath or solemn affirmation",
      "Have you confirm that the contents of your affidavit are true",
      "Supervise the required signing process",
      "Complete the commissioning portion of the document",
      "This means that you may not need to travel to a courthouse, lawyer's office or notary office simply to have an eligible Ontario court affidavit commissioned.",
    ],
    imagePosition: "right",
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "Already Have Your Court Form?",
    buttonText: "BOOK YOUR APPOINTMENT",
    buttonHref: "/#BookAppointmentSection",
    steps: [
      {
        id: 1,
        title: "COMPLETE YOUR FORM",
        description:
          "Complete the substantive information in your affidavit.\nDo not sign the affidavit yet.",
      },
      {
        id: 2,
        title: "BOOK YOUR APPOINTMENT",
        description: "Choose an available online commissioning appointment.",
      },
      {
        id: 3,
        title: "UPLOAD THE COURT FORM",
        description: "Provide the completed but unsigned affidavit.",
      },
      {
        id: 4,
        title: "PROVIDE IDENTIFICATION",
        description: "Provide acceptable government-issued identification.",
      },
      {
        id: 5,
        title: "SWEAR OR AFFIRM YOUR AFFIDAVIT",
        description:
          "Meet with the Commissioner by live video.\nYou will swear an oath or make a solemn affirmation confirming that the contents of the affidavit are true.",
      },
      {
        id: 6,
        title: "SIGN THE AFFIDAVIT",
        description:
          "Sign the document according to the Commissioner's instructions.",
      },
      {
        id: 7,
        title: "RECEIVE YOUR COMMISSIONED DOCUMENT",
        description:
          "Once the commissioning process is complete, your document can be returned electronically where appropriate.\nYou remain responsible for filing the document with the appropriate court unless separate filing services have been arranged.",
      },
    ],
  },

  documentsCommission: {
    title: "Ontario Superior Court of Justice Forms",
    description: [
      "The Ontario Superior Court of Justice hears a wide range of civil, family and estate matters.",
      "Depending upon your proceeding, you may need to complete an affidavit or other document requiring commissioning.",
    ],
    cards: [
      {
        id: 1,
        title: "Ontario Civil Court Forms",
        description:[
          "Ontario civil proceedings use prescribed forms under the Rules of Civil Procedure.",
        ],
        features: [
          "Affidavits supporting motions",
          "Affidavits responding to motions",
          "Affidavits of service",
          "Affidavits used on applications",
          "Affidavits concerning documents",
          "Supplementary affidavits",
          "Other sworn evidence",
        ],
        variant: "light",
      },
      {
        id: 2,
        title: "Ontario Family Court Forms",
        description:[
          "Ontario family proceedings frequently require affidavits and financial disclosure.",
        ],
        features: [
          "Divorce",
          "Parenting",
          "Decision-making responsibility",
          "Parenting time",
          "Child support",
          "Spousal support",
          "Property",
          "Motions",
          "Changes to existing orders",
          "Enforcement",
          "Other family-law matters",
        ],
        variant: "dark",
      },
      {
        id: 3,
        title: "Ontario Estate and Probate Forms",
        description:[
          "Applications involving estates may require affidavits or other sworn evidence.",
        ],
        features: [
          "Execution of a will",
          "Service of documents",
          "Circumstances surrounding an estate",
          "Beneficiaries",
          "Missing information",
          "Proof of particular facts",
          "Other matters required by the court",
        ],
        variant: "light",
      },
    ],
    notice:
      "No Line Notary can commission eligible affidavits but does not determine which court form you should use unless separate legal services have been arranged.",
    contactMessage:
      "Not sure whether your document qualifies? Contact us before booking.",
  },

  onlineAffidavit: {
    title: "Form 16B – Affidavit of Service",
    description: [
      "An Affidavit of Service provides sworn evidence concerning the service of court documents.",
      "In Ontario civil proceedings, Form 16B – Affidavit of Service is commonly used to establish that a document was served.",
      "The affidavit is ordinarily sworn or affirmed by the person who actually served the document.",
      "The deponent may be required to identify:",
    ],
    items: [
      "What document was served",
      "Who was served",
      "When service occurred",
      "Where service occurred",
      "How service was completed",
      "Other circumstances relevant to service",
    ],
    footer: ["Eligible Affidavits of Service may be commissioned online."],
  },

  statutoryDeclaration: {
    title: "Form 4D – Affidavit",
    description: [
      "Form 4D – Affidavit is a general affidavit form used in Ontario court proceedings.",
      "If you have completed a Form 4D affidavit, do not sign it before your commissioning appointment.",
      "The Commissioner must administer the oath or solemn affirmation before the affidavit is completed.",
    ],
  },

  osapAffidavit: {
    tag: "AFFIDAVIT PREPARATION",
    title: "Can You Prepare My Court Affidavit?",
    buttonText: "ASK ABOUT AFFIDAVIT PREPARATION",
    buttonHref: "/#BookAppointmentSection",
    description: [
      "Commissioning and preparing an affidavit are different services.",
      "If you already have your affidavit, you can simply book a commissioning appointment.",
      "If you need assistance drafting an affidavit for a court proceeding, that may constitute a separate legal service.",
      "The appropriate document will depend upon:",
    ],
    items: [
      "Your court proceeding",
      "The relief being requested",
      "The evidence being presented",
      "The applicable court rules",
      "Your particular circumstances",
    ],
  },

  courtDocuments: {
    title: "Small Claims Court Forms",
    description: [
      "Ontario Small Claims Court proceedings also involve forms that may require affidavits or sworn evidence.",
      "Depending upon the proceeding, you may require a document relating to:",
    ],
    documents: [
      { id: 1, title: "Service" },
      { id: 2, title: "Motions" },
      { id: 3, title: "Enforcement" },
      { id: 4, title: "Substituted service" },
      { id: 5, title: "Assessment of damages" },
      { id: 6, title: "Garnishment" },
      { id: 7, title: "Debtor examinations" },
      { id: 8, title: "Another procedural step" },
    ],
    footer: [
      "If your Small Claims Court document contains an affidavit that needs to be sworn or affirmed, No Line Notary can commission eligible documents.",
    ],
  },

  commissionerVsNotary: {
    title: "Swearing vs. Affirming a Court Affidavit",
    description: [
      "You do not have to take a religious oath to complete an Ontario court affidavit.",
      "You can generally either:",
      "Swear that the contents of your affidavit are true",
      "or",
      "Solemnly affirm that the contents are true.",
      "Both are formal methods of confirming the truth of the evidence contained in the affidavit.",
    ],
    notice: "Tell the Commissioner if you prefer to affirm.",
  },

  appointmentRequirements: {
    tag: "DOCUMENTS REQUIRED",
    title: "What Should I Have for My Appointment?",
    intro: "Have the following ready:",
    requirements: [
      "Your completed but unsigned court affidavit",
      "All exhibits referred to in the affidavit",
      "Valid government-issued identification",
      "Any court or lawyer instructions concerning execution",
      "A computer, tablet or smartphone with a camera and microphone",
      "A reliable internet connection",
    ],
    notice: "Make sure the affidavit is complete before the appointment.",
  },

  locations: {
    tag: "LOCATIONS",
    title: "Online Court Affidavit Commissioning Across Ontario",
    description: [
      "No Line Notary provides online commissioning services throughout Ontario, including:",
    ],
    mapImage: "/images/bg-map.png",
    mapAlt:
      "Map illustrating online court affidavit commissioning coverage across Ontario",
    locations: [
      "Toronto",
      "North York",
      "Scarborough",
      "Etobicoke",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Markham",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Hamilton",
      "St. Catharines",
      "Niagara Falls",
      "Oshawa",
      "Whitby",
      "Ajax",
      "Pickering",
      "Newmarket",
      "Aurora",
      "Barrie",
      "Kitchener",
      "Waterloo",
      "Cambridge",
      "Guelph",
      "London",
      "Windsor",
      "Kingston",
      "Peterborough",
      "Ottawa",
      "Sudbury",
      "North Bay",
      "Thunder Bay",
    ],
    footer: [
      "and communities throughout Ontario.",
      "Where your court affidavit is eligible for remote commissioning, you can complete the process without travelling to a courthouse or notary office.",
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Ontario Court Forms",
    items: [
      {
        id: 1,
        question: "Can an Ontario court affidavit be commissioned online?",
        answer:
          "Yes. Eligible affidavits may be remotely commissioned in Ontario where the applicable legal requirements are satisfied.",
      },
      {
        id: 2,
        question: "Who can commission an Ontario court affidavit?",
        answer:
          "An affidavit must be sworn or affirmed before a person authorized to take affidavits, such as a Commissioner for Taking Affidavits or another person authorized by law.",
      },
      {
        id: 3,
        question: "Do I need a Notary Public for an Ontario court affidavit?",
        answer:
          "Usually, an Ontario court affidavit requiring commissioning does not require a Notary Public merely because it is an affidavit. Follow the requirements printed on the particular form.",
      },
      {
        id: 4,
        question: "Can you commission Form 4D?",
        answer:
          "Where the Form 4D affidavit is eligible for remote commissioning, we can provide the applicable commissioning service.",
      },
      {
        id: 5,
        question: "Can you commission Form 16B Affidavit of Service?",
        answer:
          "Eligible Affidavits of Service can be commissioned. The person who actually performed the service ordinarily swears or affirms the affidavit.",
      },
      {
        id: 6,
        question: "Can you commission Family Court Form 14A?",
        answer:
          "Eligible Ontario Family Court affidavits may be commissioned where the applicable requirements are satisfied.",
      },
      {
        id: 7,
        question: "Can you commission Form 6B Affidavit of Service?",
        answer: "Eligible Form 6B Affidavits of Service may be commissioned.",
      },
      {
        id: 8,
        question: "Can you commission probate and estate affidavits?",
        answer:
          "Yes, many estate affidavits may be eligible for commissioning. The appropriate court form depends upon the estate proceeding and circumstances.",
      },
      {
        id: 9,
        question: "Do I sign my affidavit before seeing the Commissioner?",
        answer:
          "Generally, no. Wait until the Commissioner administers the oath or affirmation and follow the Commissioner's signing instructions.",
      },
      {
        id: 10,
        question: "Can you tell me which court form I need?",
        answer:
          "Commissioning a document does not include legal advice concerning which court form you should use. If you require legal advice or document preparation, that is a separate service.",
      },
      {
        id: 11,
        question: "Can you file the form with the court for me?",
        answer:
          "Court filing is separate from commissioning. Unless filing services have specifically been arranged, you remain responsible for filing the document with the appropriate court.",
      },
      {
        id: 12,
        question: "How much does it cost?",
        answer:
          "Online commissioning starts at $45 for the first signature or stamp, with reduced pricing for additional signatures or stamps during the same appointment.",
      },
    ],
  },

  pricingCTA: {
    title: "Get Your Ontario Court Form Commissioned Online",
    description: [
      "Have an Ontario court affidavit ready to sign?",
      "Complete the commissioning process without travelling to a courthouse or notary office.",
      "Upload your court form. Verify your identity. Meet your Commissioner online. Swear or affirm your affidavit. Receive your completed document.",
    ],
    card: {
      title: "Online Commissioning",
      startingLabel: "Starting at",
      startingPrice: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book your online court form appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
};
