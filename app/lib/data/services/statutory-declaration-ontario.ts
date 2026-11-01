import type { ServicePageData } from "./types";

export const statutoryDeclarationOntario: ServicePageData = {
  slug: "statutory-declaration-ontario",
  meta: {
    title: "Statutory Declaration Online Ontario | From $45 | No Line Notary",
    description:
      "Need a statutory declaration commissioned in Ontario? Make eligible statutory declarations by secure live video with an Ontario Commissioner. From $45.",
    keywords: [
      "statutory declaration Ontario",
      "statutory declaration online",
      "commission statutory declaration online",
      "statutory declaration commissioner",
      "statutory declaration near me",
    ],
    ogImage: "/images/contact.png",
  },
  hero: {
    tag: "STATUTORY DECLARATIONS ONLINE IN ONTARIO",
    title: "Get Your Statutory Declaration Commissioned Online",
    description: [
      "Need to complete a statutory declaration in Ontario?",
      "No Line Notary provides convenient online statutory declaration commissioning throughout Ontario. Eligible statutory declarations can be completed remotely by secure live video without travelling to a lawyer's, notary's or Commissioner's office.",
      "Upload your declaration, verify your identity, meet with an authorized Commissioner for Taking Affidavits online, and make your declaration from home, work or virtually anywhere in Ontario.",
    ],
    backgroundImage: "/images/service-coverImage.jpg",
    backgroundImageAlt: "Courthouse columns",
    card: {
      title: "Online Statutory Declaration Commissioning From",
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
  breadcrumbLabel: "Statutory Declarations Online in Ontario",

  imageTextLeft: {
    image: "/images/affidavits-online-ontario/1.png",
    imageAlt: "What Is a Statutory Declaration?",
    title: "What Is a Statutory Declaration?",
    paragraphs: [
      "A statutory declaration is a formal written statement in which a person solemnly declares that the information contained in the document is true.",
      "The person making the declaration is commonly called the declarant.",
      "Unlike an ordinary signed statement, a statutory declaration is made before a person legally authorized to take the declaration, such as a Commissioner for Taking Affidavits.",
    ],
  },

  imageTextRight: {
    image: "/images/affidavits-online-ontario/2.png",
    imageAlt: "Can I Make a Statutory Declaration Online in Ontario?",
    title: "Can I Make a Statutory Declaration Online in Ontario?",
    paragraphs: [
      "Yes.",
      "Ontario law permits eligible declarations to be administered remotely when the requirements governing remote commissioning are satisfied.",
      "This means you may not need to attend a physical notary or Commissioner's office simply to make an eligible statutory declaration.",
      "During your online appointment, you and the Commissioner communicate by live video. The participants must be able to see, hear and communicate with one another in real time throughout the transaction.",
      "The Commissioner confirms your identity, administers the declaration and complies with the requirements applicable to remote commissioning.",
    ],
    imagePosition: "right",
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "How to Complete a Statutory Declaration Online",
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
        title: "UPLOAD YOUR STATUTORY DECLARATION",
        description:
          "Upload the completed statutory declaration that requires commissioning.\nIf your signature must be made before the Commissioner, do not sign the declaration before your appointment unless specifically instructed otherwise.",
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
          "At your scheduled appointment, connect with the Commissioner through live video.\nYou and the Commissioner must be able to see, hear and communicate with one another in real time throughout the commissioning process.",
      },
      {
        id: 5,
        title: "MAKE YOUR DECLARATION",
        description:
          "The Commissioner will administer the required solemn declaration.\nYou will formally declare that the statements contained in your document are true and sign the declaration as instructed.",
      },
      {
        id: 6,
        title: "RECEIVE YOUR COMPLETED DECLARATION",
        description:
          "Once the commissioning requirements have been completed, the Commissioner completes the appropriate portion of the document and the completed declaration can be returned to you electronically where appropriate.",
      },
    ],
  },

  documentsCommission: {
    title: "What Types of Statutory Declarations Can Be Commissioned Online?",
    description: [
      "Many common statutory declarations may be eligible for remote commissioning.",
    ],
    cards: [
      {
        id: 1,
        title: "Common-Law Statutory Declarations",
        description: [
          "A statutory declaration may be required to confirm that two people are living in a common-law relationship.",
        ],
          features: [
          "Immigration applications",
          "Government benefits",
          "Pensions",
          "Insurance",
          "Employment benefits",
          "Financial matters",
          "Other administrative requirements",
        ],
        variant: "light",
      },
      {
        id: 2,
        title: "Statutory Declarations of Identity",
        description: [
          "A Statutory Declaration of Identity may be used to formally confirm a person's identity or facts relating to their identity.",
        ],
          features: [
          "Names appear differently on different documents",
          "A person's legal name has changed",
          "Identification has been lost or replaced",
          "An organization requires formal confirmation of identity",
          "Personal information needs to be formally confirmed",
        ],
        variant: "dark",
      },
      {
        id: 3,
        title: "Lost or Missing Document Declarations",
        description: [
          "A statutory declaration may be required to formally explain the loss or absence of an important document.",
        ],
          features: [
          "The missing document",
          "When it was last in your possession",
          "How it was lost",
          "Efforts made to locate it",
          "Other relevant circumstances",
        ],
        variant: "light",
      },
    ],
    notice:
      "Federal, provincial and municipal governments and administrative bodies use statutory declarations for many different purposes. If you have been given a statutory declaration by a government department, school, employer, bank or another organization, we may be able to commission it online even if the particular form is not listed on this page.",
    contactMessage:
      "Not sure whether your document qualifies? Contact us before booking.",
  },

  onlineAffidavit: {
    title: "Immigration Statutory Declarations",
    description: [
      "Immigration and citizenship processes sometimes require formal declarations concerning matters such as:",
    ],
    items: [
      "Identity",
      "Family relationships",
      "Common-law relationships",
      "Financial support",
      "Residence",
      "Employment",
      "Invitations",
      "Other relevant circumstances",
    ],
    footer: [
      "The receiving immigration authority may prescribe its own form or execution requirements.",
      "Make sure you are using the required document before your appointment.",
    ],
  },

  statutoryDeclaration: {
    title: "Statutory Declaration vs. Affidavit: What's the Difference?",
    description: [
      "Affidavits and statutory declarations are both formal written statements used to confirm facts, but they are not identical.",
      "An affidavit is generally a written statement of facts sworn or affirmed before an authorized person.",
      "A statutory declaration is a written statement in which the declarant solemnly declares that the contents are true.",
      "Which document you need usually depends upon the law, form or organization requiring the statement.",
      "If you have been specifically asked for an affidavit, you should not simply substitute a statutory declaration, and vice versa.",
    ],
  },

  osapAffidavit: {
    tag: "INTERNATIONAL USE",
    title: "Single-Status and Marital-Status Declarations",
    buttonText: "ASK ABOUT INTERNATIONAL DOCUMENT SERVICES",
    buttonHref: "/#BookAppointmentSection",
    description: [
      "A person may be asked to formally declare their current marital status, particularly when dealing with a foreign government or authority.",
      "These declarations may be requested in connection with:",
    ],
    items: [
      "Marriage abroad",
      "Foreign civil-registration requirements",
      "Immigration",
      "Citizenship",
      "Foreign property transactions",
      "Other international matters",
    ],
  },

  courtDocuments: {
    title: "Vehicle-Related Statutory Declarations",
    description: [
      "Certain vehicle transactions may require a statutory declaration or sworn statement.",
      "These can involve matters such as:",
    ],
    documents: [
      { id: 1, title: "Vehicle ownership" },
      { id: 2, title: "Transfers between family members" },
      { id: 3, title: "Gifts of vehicles" },
      { id: 4, title: "Missing information or documents" },
      {
        id: 5,
        title:
          "Other circumstances relating to vehicle registration or ownership",
      },
    ],
    footer: [
      "You should use the current form required by ServiceOntario or the receiving authority where a prescribed form exists.",
    ],
  },

  commissionerVsNotary: {
    title: "Commissioner of Oaths vs. Notary Public for a Statutory Declaration",
    description: [
      "If your document simply requires you to make a statutory declaration before a Commissioner for Taking Affidavits, you may not need a formal notarial act.",
      "If the receiving organization specifically requires a Notary Public, notarization, certification of a true copy, a notarial certificate or notarization for international use, different requirements may apply.",
    ],
    notice:
      "If you aren't sure whether your document requires a Commissioner of Oaths or a Notary Public, send us the document or tell us exactly what the receiving organization has requested.",
  },

  appointmentRequirements: {
    tag: "DOCUMENTS REQUIRED",
    title: "What Do I Need for My Online Appointment?",
    intro: "Before your appointment, have:",
    requirements: [
      "Your statutory declaration",
      "Acceptable government-issued identification",
      "A computer, smartphone or tablet with a camera and microphone",
      "A reliable internet connection",
      "Access to your email",
    ],
    notice:
      "Your declaration should generally be complete before the appointment unless you have separately arranged for document-preparation services.",
  },

  locations: {
    tag: "LOCATIONS",
    title: "Online Statutory Declaration Services Across Ontario",
    description: [
      "No Line Notary provides online statutory declaration commissioning throughout Ontario.",
      "Because eligible declarations can be completed remotely, you don't need to spend time searching for a “Commissioner of Oaths near me” or travelling across town for an appointment.",
      "Our online service is available to clients in:",
    ],
    mapImage: "/images/bg-map.png",
    mapAlt: "Map illustrating online statutory declaration coverage across Ontario",
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
    title: "Why Use No Line Notary?",
    description: [],
    benefits: [
      {
        id: 1,
        title: "COMPLETE YOUR DECLARATION ONLINE",
        description:
          "Complete an eligible statutory declaration without travelling to an office.",
      },
      {
        id: 2,
        title: "ONTARIO-WIDE SERVICE",
        description:
          "Meet with a Commissioner online from communities throughout Ontario.",
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
        description: "Online commissioning starts at $45.",
      },
      {
        id: 5,
        title: "PROFESSIONAL SERVICE",
        description:
          "Your statutory declaration is commissioned by an authorized professional familiar with Ontario's remote commissioning requirements.",
      },
      {
        id: 6,
        title: "SECURE PROCESS",
        description:
          "Documents and identification are handled using secure electronic processes designed to protect confidential information.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Statutory Declarations",
    items: [
      {
        id: 1,
        question: "Can I make a statutory declaration online in Ontario?",
        answer:
          "Yes. Eligible statutory declarations may be remotely commissioned in Ontario when the legal requirements governing remote administration of declarations are satisfied.",
      },
      {
        id: 2,
        question: "Who can commission a statutory declaration in Ontario?",
        answer:
          "A statutory declaration must be made before a person legally authorized to take the declaration, such as a Commissioner for Taking Affidavits or another person authorized by law.",
      },
      {
        id: 3,
        question: "Do I need a lawyer to make a statutory declaration?",
        answer:
          "Not necessarily. What is required is an appropriately authorized person. However, if you require legal advice or need a custom legal document prepared, that is separate from the commissioning service.",
      },
      {
        id: 4,
        question: "Do I need a Notary Public for a statutory declaration?",
        answer:
          "Not always. If the document only requires a Commissioner for Taking Affidavits, a formal notarial act may not be necessary. If the receiving organization specifically says “notarized” or requires a Notary Public, confirm those requirements before booking.",
      },
      {
        id: 5,
        question:
          "Can I sign a statutory declaration before seeing the Commissioner?",
        answer:
          "Generally, you should wait to sign until your appointment where your signature forms part of the declaration being administered.",
      },
      {
        id: 6,
        question: "What identification do I need?",
        answer:
          "You will need acceptable identification that allows the Commissioner to confirm your identity. Government-issued photo identification is generally preferred.",
      },
      {
        id: 7,
        question: "Can a common-law statutory declaration be completed online?",
        answer:
          "Many common-law statutory declarations may be eligible for remote commissioning. Make sure you are using the particular form required by the organization receiving it.",
      },
      {
        id: 8,
        question:
          "Can I complete a statutory declaration for ServiceOntario online?",
        answer:
          "It depends upon the particular form and ServiceOntario requirement. Ontario permits remote commissioning generally, but a receiving organization may have specific requirements for a particular transaction.",
      },
      {
        id: 9,
        question: "Can I use an online statutory declaration outside Canada?",
        answer:
          "Possibly. However, foreign governments and organizations may require additional formalities such as notarization, an apostille, certified translation, authentication or legalization. Confirm the requirements of the foreign recipient before completing the document.",
      },
      {
        id: 10,
        question:
          "Will every organization accept a remotely commissioned statutory declaration?",
        answer:
          "Not necessarily. Although Ontario permits remote commissioning, the receiving organization may impose its own requirements. Where there is uncertainty, confirm acceptance with the recipient before your appointment.",
      },
    ],
  },

  pricingCTA: {
    title: "Complete Your Statutory Declaration Online",
    description: [
      "Need a statutory declaration commissioned?",
      "Avoid the commute and complete your eligible declaration through a convenient online appointment.",
      "Upload your declaration. Verify your identity. Meet your Commissioner by live video. Make your declaration. Receive your completed document.",
    ],
    card: {
      title: "Online Statutory Declaration Commissioning",
      startingLabel: "Starting at",
      startingPrice: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book your online appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
};
