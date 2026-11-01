import type { ServicePageData } from "./types";

export const affidavitsOnlineOntario: ServicePageData = {
  slug: "affidavits-online-ontario",
  meta: {
    title: "Affidavit Online Ontario | Commission an Affidavit From $45",
    description:
      "Get your affidavit commissioned online in Ontario. Swear or affirm eligible affidavits by secure live video with an Ontario Commissioner. From $45.",
    keywords: [
      "affidavit online Ontario",
      "commission affidavit online",
      "affidavit commissioner Ontario",
      "swear affidavit online",
    ],
    ogImage: "/images/contact.png",
  },
  hero: {
    tag: "AFFIDAVITS ONLINE IN ONTARIO",
    title: "Get Your Affidavit Commissioned Online",
    description: [
      "Need to swear or affirm an affidavit in Ontario?",
      "No Line Notary provides convenient online affidavit commissioning throughout Ontario. Complete eligible affidavits remotely by secure live video without travelling to a lawyer's or notary's office.",
      "Upload your affidavit, verify your identity, meet with an authorized Commissioner for Taking Affidavits online, and complete your affidavit from home, work or virtually anywhere in Ontario.",
    ],
    backgroundImage: "/images/service-coverImage.jpg",
    backgroundImageAlt: "Courthouse columns",
    card: {
      title: "Online Affidavit Commissioning From",
      price: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book an online appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
  breadcrumbLabel: "Affidavits Online in Ontario",

  imageTextLeft: {
    image: "/images/affidavits-online-ontario/1.png",
    imageAlt: "What Is an Affidavit?",
    title: "What Is an Affidavit?",
    paragraphs: [
      "An affidavit is a written statement of facts that a person swears or solemnly affirms to be true.",
      "The person making the affidavit is commonly called the deponent.",
      "Unlike an ordinary signed statement, an affidavit is made under oath or solemn affirmation before a person authorized to administer the oath or affirmation, such as a Commissioner for Taking Affidavits.",
    ],
    listContent: [
      "Court proceedings",
      "Government applications",
      "Immigration matters",
      "Estate matter",
      "Financial and educational applications",
      "Court proceedings",
      "Insurance matters",
      "Proof of identity",
      "Proof of service",
      "Family and relationship matters",
      "Other situations where formally sworn evidence is required",
    ],
  },

  imageTextRight: {
    image: "/images/affidavits-online-ontario/2.png",
    imageAlt: "Can I Get an Affidavit Commissioned Online in Ontario?",
    title: "Can I Get an Affidavit Commissioned Online in Ontario?",
    paragraphs: [
      "Yes.",
      "Ontario permits eligible affidavits to be commissioned remotely when the legal requirements for remote commissioning are satisfied.",
      "This means that you do not necessarily have to attend a lawyer's, notary's or Commissioner's office in person simply to swear or affirm an affidavit.",
      "During your online appointment, you and the Commissioner communicate by live video. The participants must be able to see, hear and communicate with one another in real time throughout the transaction.",
      "The Commissioner must confirm your identity and comply with Ontario's requirements governing the remote administration of an oath or declaration.",
      "Once those requirements are satisfied, an eligible affidavit can be commissioned remotely.",
    ],
    ctaUrl: "/#BookAppointmentSection",
    ctaLabel: "GET YOUR AFFIDAVIT COMMISSIONED ONLINE",
    imagePosition: "right",
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "How to Get an Affidavit Commissioned Online",
    buttonText: "BOOK AN ONLINE APPOINTMENT",
    buttonHref: "/#BookAppointmentSection",
    steps: [
      {
        id: 1,
        title: "BOOK YOUR APPOINTMENT",
        description: "Choose an available online appointment time.",
      },
      {
        id: 2,
        title: "UPLOAD YOUR AFFIDAVIT",
        description:
          "Upload the affidavit that you need commissioned.\nIf the affidavit requires your signature to be sworn or affirmed, do not sign it before your appointment unless specifically instructed otherwise.",
      },
      {
        id: 3,
        title: "PROVIDE IDENTIFICATION",
        description:
          "Provide acceptable government-issued identification so that the Commissioner can confirm your identity.",
      },
      {
        id: 4,
        title: "MEET THE COMMISSIONER BY LIVE VIDEO",
        description:
          "At your appointment time, connect with the Commissioner by live video.\nYou must be able to see, hear and communicate with the Commissioner in real time throughout the commissioning process.",
      },
      {
        id: 5,
        title: "SWEAR OR AFFIRM YOUR AFFIDAVIT",
        description:
          "The Commissioner will ask whether you wish to swear an oath or make a solemn affirmation and will administer the appropriate oath or affirmation.\nYou will confirm that the contents of your affidavit are true and sign the document as instructed.",
      },
      {
        id: 6,
        title: "RECEIVE YOUR COMPLETED AFFIDAVIT",
        description:
          "Once the commissioning requirements have been completed, the Commissioner completes the applicable portion of the affidavit and the completed document can be returned electronically where appropriate.",
      },
    ],
  },

  documentsCommission: {
    title: "What Types of Affidavits Can Be Commissioned Online?",
    description: [
      "Many common Ontario affidavits may be eligible for online commissioning.",
    ],
    cards: [
      {
        id: 1,
        title: "Affidavit of Identity",
        description: [
          "An Affidavit of Identity is used when a person needs to formally confirm their identity or particular facts relating to their identity.",
        ],
        listTitle: "It may be requested in connection with:",
        features: [
          "Government applications",
          "Immigration matters",
          "Replacement identification",
          "Discrepancies between identification documents",
          "Educational institutions",
          "Financial institutions",
          "Foreign administrative requirements",
        ],
        button: {
          label: "Learn more about Affidavits of Identity",
          href: "/services/affidavit-of-identity-ontario",
        },
        variant: "light",
      },
      {
        id: 2,
        title: "Affidavit of Service",
        description: [
          "An Affidavit of Service provides sworn evidence about the service of documents.",
          "Affidavits of Service are commonly required in Ontario court proceedings after documents have been served on another party.",
          "The person who actually served the document ordinarily swears or affirms the Affidavit of Service.",
        ],
        button: {
          label: "Learn more about Affidavits of Service",
          href: "/#BookAppointmentSection",
        },
        variant: "dark",
      },
      {
        id: 3,
        title: "OSAP Affidavits",
        description: [
          "The Ontario Student Assistance Program may require a student to provide an affidavit concerning information relevant to an OSAP application.",
        ],
        listTitle:
          "Depending upon the circumstances, an OSAP affidavit may address:",
        features: [
          "Marital status",
          "Common-law status",
          "Parental information",
          "Family circumstances",
          "Income",
          "Financial circumstances",
          "Another matter requiring sworn confirmation",
        ],
        footer: ["Eligible OSAP affidavits can be commissioned online."],
        button: {
          label: "Learn more about OSAP Affidavits",
          href: "/services/osap-affidavit-online",
        },
        variant: "light",
      },
      {
        id: 4,
        title: "Court Affidavits",
        description: [
          "Affidavits are frequently used as evidence in Ontario court proceedings.",
        ],
        listTitle: "Examples may include affidavits filed in:",
        features: [
          "Civil proceedings",
          "Family proceedings",
          "Estate proceedings",
          "Motions",
          "Applications",
          "Other proceedings requiring affidavit evidence",
        ],
        footer: [
          "Where the affidavit is eligible for remote commissioning, the oath or affirmation can be administered through an online appointment.",
          "No Line Notary commissions affidavits. Unless you have separately retained a lawyer to provide legal services, you remain responsible for the contents of your affidavit, the correct court form and compliance with applicable filing requirements.",
        ],
        variant: "dark",
      },
      {
        id: 5,
        title: "Affidavits Concerning Family or Relationships",
        description: [
          "An affidavit may be required to formally establish facts concerning a family or personal relationship.",
        ],
        listTitle: "Examples can include:",
        features: [
          "Parentage",
          "Family relationships",
          "Marital history",
          "Common-law relationships",
          "Separation",
          "Dependency",
          "Financial support",
          "Other family circumstances",
        ],
        variant: "light",
      },
      {
        id: 6,
        title: "Affidavits for Immigration or International Purposes",
        description: [
          "Immigration authorities, foreign governments, consulates, universities and other organizations sometimes request sworn evidence concerning matters such as:",
        ],
        features: [
          "Identity",
          "Family relationships",
          "Financial support",
          "Residence",
          "Employment",
          "Marital status",
          "Invitations",
          "Accommodation",
          "Other personal circumstances",
        ],
        footer: [
          "Whether remote commissioning is appropriate depends upon the document and the requirements of the organization receiving it.",
          "Documents intended for use outside Canada may also require notarization, translation, an apostille, authentication or legalization.",
        ],
        variant: "dark",
      },
      {
        id: 7,
        title: "Affidavits Concerning Lost or Missing Documents",
        description: [
          "You may be asked to provide an affidavit explaining the loss or absence of a document.",
        ],
        listTitle:
          "Depending upon the circumstances, the affidavit may describe:",
        features: [
          "What document was lost",
          "When it was last in your possession",
          "The circumstances in which it disappeared",
          "Attempts made to locate it",
          "Other relevant facts",
        ],
        variant: "light",
      },
      {
        id: 8,
        title: "Financial and Income Affidavits",
        description: [
          "Affidavits may be required to confirm income, assets, financial circumstances or other financial information.",
        ],
        listTitle: "These may arise in connection with:",
        features: [
          "Court proceedings",
          "Government benefits",
          "Educational assistance",
          "Financial institutions",
          "Insurance matters",
          "Other administrative applications",
        ],
        variant: "dark",
      },
      {
        id: 9,
        title: "General Affidavits",
        description: [
          "Not every affidavit falls into a particular category. If you have been provided with an affidavit by a lawyer, government agency, court, school, financial institution or another organization, we may be able to commission it online even if it is not listed above.",
        ],
        button: {
          label: "Book an affidavit appointment",
          href: "/#BookAppointmentSection",
        },
        variant: "light",
      },
    ],
  },

  onlineAffidavit: {
    title: "Affidavits for Immigration or International Purposes",
    description: [
      "Immigration authorities, foreign governments, consulates, universities and other organizations sometimes request sworn evidence concerning matters such as:",
    ],
    items: [
      "Identity",
      "Family relationships",
      "Financial support",
      "Residence",
      "Employment",
      "Marital status",
      "Invitations",
      "Accommodation",
      "Other personal circumstances",
    ],
    footer: [
      "Whether remote commissioning is appropriate depends upon the document and the requirements of the organization receiving it.",
      "Documents intended for use outside Canada may also require notarization, translation, an apostille, authentication or legalization.",
    ],
  },

  statutoryDeclaration: {
    title: "Do You Prepare Affidavits?",
    description: [
      "If you already have a completed affidavit, you can simply book an appointment to have it commissioned.",
      "If you do not have an affidavit yet, document-preparation services may also be available for certain types of affidavits.",
      "Document preparation is a separate service from commissioning and may involve an additional fee.",
    ],
  },

  DoNotSignYourAppointment: {
    title: "Do Not Sign Your Affidavit Before Your Appointment",
    description: [
      "If your signature must be sworn or affirmed, you should generally wait until your appointment before signing your affidavit.",
      "The Commissioner must administer the oath or affirmation and comply with the applicable commissioning requirements.",
      "If you have already signed your affidavit, tell the Commissioner before the appointment begins.",
    ],
  },

  osapAffidavit: {
    tag: "STUDENT ASSISTANCE PROGRAM",
    title: "OSAP Affidavits",
    buttonText: "LEARN MORE ABOUT OSAP AFFIDAVITS",
    buttonHref: "/#BookAppointmentSection",
    description: [
      "The Ontario Student Assistance Program may require a student to provide an affidavit concerning information relevant to an OSAP application.",
      "Depending upon the circumstances, an OSAP affidavit may address:",
    ],
    items: [
      "Marital status",
      "Common-law status",
      "Parental information",
      "Family circumstances",
      "Income",
      "Financial circumstances",
      "Another matter requiring sworn confirmation",
    ],
  },

  courtDocuments: {
    title: "Court Affidavits",
    description: [
      "Affidavits are frequently used as evidence in Ontario court proceedings.",
      "Examples may include affidavits filed in:",
    ],
    documents: [
      { id: 1, title: "Civil proceedings" },
      { id: 2, title: "Family proceedings" },
      { id: 3, title: "Estate proceedings" },
      { id: 4, title: "Motions" },
      { id: 5, title: "Applications" },
      { id: 6, title: "Other proceedings requiring affidavit evidence" },
    ],
    footer: [
      "Where the affidavit is eligible for remote commissioning, the oath or affirmation can be administered through an online appointment.",
      "No Line Notary commissions affidavits. Unless you have separately retained a lawyer to provide legal services, you remain responsible for the contents of your affidavit, the correct court form and compliance with applicable filing requirements.",
    ],
  },

  commissionerVsNotary: {
    title: "Swearing vs. Affirming an Affidavit",
    description: [
      "You do not have to take a religious oath to complete an affidavit.",
      "A person making an affidavit can generally swear an oath or solemnly affirm that the contents of the affidavit are true.",
      "Both methods are intended to formally establish the truth of the statements contained in the affidavit.",
    ],
    notice:
      "If you prefer not to swear a religious oath, simply tell the Commissioner that you wish to affirm.",
  },

  appointmentRequirements: {
    tag: "DOCUMENTS REQUIRED",
    title: "What Do I Need for My Online Affidavit Appointment?",
    intro: "Have the following ready:",
    requirements: [
      "Your affidavit",
      "Acceptable government-issued identification",
      "A computer, smartphone or tablet with a camera and microphone",
      "A reliable internet connection",
      "Access to your email",
    ],
    notice:
      "Your document should be complete before the appointment unless you have arranged separately for document-preparation services.",
  },

  locations: {
    tag: "LOCATIONS",
    title: "Online Affidavit Commissioner Across Ontario",
    description: [
      "No Line Notary provides online affidavit commissioning throughout Ontario.",
      "Because eligible affidavits can be commissioned remotely, you don't need to spend time searching for an “affidavit commissioner near me.”",
      "Our online service is available to clients in communities including:",
    ],
    mapImage: "/images/bg-map.png",
    mapAlt:
      "Map illustrating online affidavit commissioning coverage across Ontario",
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
    footer: ["and communities throughout Ontario."],
  },

  whyChooseUs: {
    tag: "TRUST",
    title: "Why Have Your Affidavit Commissioned With No Line Notary?",
    description: [],
    benefits: [
      {
        id: 1,
        title: "COMPLETE IT ONLINE",
        description: "Avoid travelling to an office for an eligible affidavit.",
      },
      {
        id: 2,
        title: "ONTARIO-WIDE SERVICE",
        description:
          "Meet with a Commissioner remotely from communities throughout Ontario.",
      },
      {
        id: 3,
        title: "CONVENIENT APPOINTMENTS",
        description:
          "Choose an available appointment time and complete the process by live video.",
      },
      {
        id: 4,
        title: "TRANSPARENT PRICING",
        description: "Online affidavit commissioning starts at $45.",
      },
      {
        id: 5,
        title: "PROFESSIONAL SERVICE",
        description:
          "Your affidavit is commissioned by an authorized professional familiar with Ontario's remote commissioning requirements.",
      },
      {
        id: 6,
        title: "SECURE PROCESS",
        description:
          "Documents and identification are handled through secure electronic processes designed to protect confidential information.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Affidavits",
    items: [
      {
        id: 1,
        question: "Can I swear an affidavit online in Ontario?",
        answer:
          "Yes. Eligible affidavits can be remotely commissioned in Ontario where the legal requirements governing remote administration of an oath or declaration are satisfied.",
      },
      {
        id: 2,
        question: "What does it mean to swear an affidavit?",
        answer:
          "When you swear an affidavit, you take an oath confirming that the statements contained in the affidavit are true. You may generally choose to make a solemn affirmation instead of taking a religious oath.",
      },
      {
        id: 3,
        question: "Who can commission an affidavit in Ontario?",
        answer:
          "Ontario law authorizes various persons to take affidavits, including Commissioners for Taking Affidavits and persons whose office gives them that authority.",
      },
      {
        id: 4,
        question: "Do I need a Notary Public for an affidavit?",
        answer:
          "Not necessarily. If the document simply requires an affidavit to be sworn or affirmed, a person authorized to take affidavits may be sufficient. If the document specifically requires a Notary Public, certification of an original document or another notarial act, different requirements may apply.",
      },
      {
        id: 5,
        question: "Can I commission a court affidavit online?",
        answer:
          "Many affidavits can be remotely commissioned where the applicable requirements are satisfied. You should ensure that the document is appropriate for remote commissioning and complies with any requirements of the receiving court or organization.",
      },
      {
        id: 6,
        question: "Can an Affidavit of Service be commissioned online?",
        answer:
          "An Affidavit of Service may be eligible for remote commissioning. The person who performed the service ordinarily needs to swear or affirm the affidavit.",
      },
      {
        id: 7,
        question: "Can an OSAP affidavit be commissioned online?",
        answer:
          "Eligible OSAP affidavits can be remotely commissioned. The affidavit should contain the information required by OSAP or the relevant financial aid office.",
      },
      {
        id: 8,
        question: "Can you write my affidavit for me?",
        answer:
          "Document-preparation services may be available separately for certain affidavits. Commissioning an affidavit and preparing its contents are separate services.",
      },
      {
        id: 9,
        question: "Do I need identification?",
        answer:
          "Yes. The Commissioner must be able to confirm the identity of the person making the affidavit.",
      },
      {
        id: 10,
        question: "Can I use an affidavit commissioned online outside Canada?",
        answer:
          "Possibly, but foreign authorities may impose different requirements. A document intended for use outside Canada may require notarization, an apostille, translation, authentication or legalization. Confirm the requirements of the receiving organization or contact us about our international document and apostille services.",
      },
      {
        id: 11,
        question:
          "Will every organization accept a remotely commissioned affidavit?",
        answer:
          "Not necessarily. Although Ontario permits remote commissioning, the organization receiving the affidavit may have its own requirements. Where there is any uncertainty, confirm the recipient's requirements before your appointment.",
      },
    ],
  },
  pricingCtaList: {
    title: "How Much Does It Cost to Commission an Affidavit Online?",
    intro: "No Line Notary offers straightforward pricing.",
    tiers: [
      {
        id: 1,
        title: "First Signature or Stamp — $45",
        description: "Your first notarial signature or stamp is $45.",
      },
      {
        id: 2,
        title: "Second Signature or Stamp — $15",
        description:
          "A second signature or stamp during the same appointment is $15.",
      },
      {
        id: 3,
        title: "Each Additional Signature or Stamp — $10",
        description:
          "Every additional signature or stamp after the first two is $10 each.",
      },
    ],
    note: "Document preparation, translation, apostille, courier and other additional services are priced separately where required.",
    card: {
      title: "Examples",
      items: [
        { label: "1 signature/stamp", price: "$45" },
        { label: "2 signatures/stamps", price: "$60" },
        { label: "3 signatures/stamps", price: "$70" },
        { label: "4 signatures/stamps", price: "$80" },
        { label: "5 signatures/stamps", price: "$90" },
      ],
      ctaLabel: "Book an online appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },

  pricingCTA: {
    title: "Get Your Affidavit Commissioned Online Today",
    description: [
      "Need to swear or affirm an affidavit?",
      "Complete your eligible affidavit online without travelling to an office.",
      "Upload your affidavit. Meet your Commissioner by video. Swear or affirm your document. Receive your completed affidavit.",
    ],
    card: {
      title: "Online Affidavit Commissioning",
      startingLabel: "Starting at",
      startingPrice: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book your online affidavit appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
};
