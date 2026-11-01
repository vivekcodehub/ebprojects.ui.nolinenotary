import type { ServicePageData } from "./types";

export const powerOfAttorneyOntario: ServicePageData = {
  slug: "power-of-attorney-ontario",
  meta: {
    title: "Power of Attorney Ontario | Notarization & Apostille Services",
    description:
      "Need a Power of Attorney witnessed or notarized in Ontario? POA notary, apostille, translation and international document services available.",
    keywords: [
      "power of attorney ontario",
      "power of attorney canada",
      "power of attorney notarization",
      "power of attorney notary",
      "notarize power of attorney",
      "power of attorney lawyer ontario",
      "power of attorney form ontario",
      "power of attorney document ontario",
      "poa ontario",
      "ontario power of attorney",
    ],
    ogImage: "/images/contact.png",
  },
  hero: {
    tag: "POWERS OF ATTORNEY IN ONTARIO",
    title: "Power of Attorney Notarization, Witnessing & Document Services",
    description: [
      "Need a Power of Attorney signed, witnessed or notarized in Ontario?",
      "No Line Notary assists with Powers of Attorney for use in Ontario, elsewhere in Canada and internationally.",
      "Whether you already have a Power of Attorney prepared by your lawyer or need assistance determining how a document must be executed, we can help you identify the appropriate witnessing, notarization and document-processing requirements.",
      "For Powers of Attorney intended for use outside Canada, additional services may include notarization, apostille, certified translation and international document delivery.",
    ],
    backgroundImage: "/images/service-coverImage.jpg",
    backgroundImageAlt: "Courthouse columns",
    card: {
      title: "Notarial Services From",
      price: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book an appointment",
      ctaHref: "/#BookAppointmentSection",
    },
  },
  breadcrumbLabel: "Powers of Attorney in Ontario",

  imageTextLeft: {
    image: "/images/affidavits-online-ontario/1.png",
    imageAlt: "What Is a Power of Attorney?",
    title: "What Is a Power of Attorney?",
    paragraphs: [
      "A Power of Attorney, commonly abbreviated as POA, is a legal document in which one person gives another person authority to act on their behalf.",
      "The person granting the authority is generally referred to as the grantor, donor or principal, depending upon the document and jurisdiction.",
      "The person receiving authority may be called the attorney, attorney for property, attorney-in-fact, agent or representative.",
      "Despite the terminology, the person appointed under a Power of Attorney does not necessarily have to be a lawyer.",
      "The powers granted can range from authority over a single transaction to broad authority over financial or personal matters.",
    ],
  },

  imageTextRight: {
    image: "/images/affidavits-online-ontario/2.png",
    imageAlt: "Can I Sign a Power of Attorney Online?",
    title: "Can I Sign a Power of Attorney Online?",
    paragraphs: [
      "This depends upon what document you have and what legal formalities apply to it.",
      "Remote commissioning of affidavits and statutory declarations is different from witnessing the execution of a Power of Attorney.",
      "Do not assume that because an affidavit can be commissioned remotely, a Power of Attorney can automatically be executed or notarized through the same process.",
      "For an Ontario Continuing Power of Attorney for Property or Power of Attorney for Personal Care, the applicable execution requirements must be satisfied.",
      "For a foreign Power of Attorney, the requirements of the destination jurisdiction and receiving organization must also be considered.",
      "Send us the document before booking if you are unsure.",
    ],
    imagePosition: "right",
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "Already Have a Power of Attorney?",
    buttonText: "GET STARTED",
    buttonHref: "/#BookAppointmentSection",
    steps: [
      {
        id: 1,
        title: "SEND US THE DOCUMENT",
        description:
          "Provide the unsigned Power of Attorney and any instructions you received.",
      },
      {
        id: 2,
        title: "TELL US WHERE IT WILL BE USED",
        description:
          "Identify:\nThe country\nReceiving organization\nPurpose of the document\nAny deadline",
      },
      {
        id: 3,
        title: "WE DETERMINE THE REQUIRED ONTARIO SERVICE",
        description:
          "We can identify whether the requested service involves:\nWitnessing\nNotarization\nCommissioning\nCertified copies\nApostille processing\nAnother document service we provide",
      },
      {
        id: 4,
        title: "EXECUTE THE DOCUMENT",
        description:
          "Sign the document using the procedure appropriate for the particular Power of Attorney.",
      },
      {
        id: 5,
        title: "COMPLETE ADDITIONAL PROCESSING",
        description:
          "For international documents, we can assist with apostille, translation and courier services where required.",
      },
    ],
  },

  documentsCommission: {
    title: "Types of Powers of Attorney",
    description: [
      "The type of Power of Attorney you need depends upon what you want the appointed person to do and where the document will be used.",
    ],
    cards: [
      {
        id: 1,
        title: "Continuing Power of Attorney for Property",
        description: [
          "In Ontario, a Continuing Power of Attorney for Property can authorize another person to make decisions concerning your property and financial affairs.",
        ],
        features: [
          "Bank accounts",
          "Investments",
          "Bills and expenses",
          "Real estate",
          "Contracts",
          "Business interests",
          "Government benefits",
          "Taxes",
          "Other property and financial matters",
        ],
        variant: "light",
      },
      {
        id: 2,
        title: "Power of Attorney for Personal Care",
        description: [
          "An Ontario Power of Attorney for Personal Care allows a person to appoint one or more attorneys to make personal-care decisions if the grantor becomes incapable of making the particular decisions themselves.",
        ],
        features: [
          "Health care",
          "Nutrition",
          "Shelter",
          "Clothing",
          "Hygiene",
          "Safety",
        ],
        variant: "dark",
      },
      {
        id: 3,
        title: "Limited or Specific Power of Attorney",
        description: [
          "A Power of Attorney can sometimes be limited to a particular transaction or purpose.",
        ],
        features: [
          "Complete a real estate transaction",
          "Deal with a particular property",
          "Sign specified documents",
          "Deal with a bank",
          "Collect documents",
          "Handle a vehicle transaction",
          "Represent them before a government authority",
          "Complete a transaction in another country",
        ],
        variant: "light",
      },
    ],
    notice:
      "The authority granted should be drafted to reflect the intended purpose.",
    contactMessage:
      "Not sure whether your document qualifies? Contact us before booking.",
  },

  onlineAffidavit: {
    title: "Power of Attorney for Use Outside Canada",
    description: [
      "If you need a Power of Attorney for use in another country, do not assume that a standard Ontario Power of Attorney will be appropriate.",
      "Foreign jurisdictions frequently have their own requirements concerning:",
    ],
    items: [
      "Wording",
      "Witnesses",
      "Notarization",
      "Identification",
      "Photographs",
      "Fingerprints",
      "Apostille or authentication",
      "Translation",
      "Registration",
      "The form of authority being granted",
    ],
    footer: [
      "If a foreign lawyer, notary, bank, land registry or government agency has provided a Power of Attorney, it is generally preferable to use the document they supplied.",
      "Do not sign it before confirming the execution requirements.",
    ],
  },

  statutoryDeclaration: {
    title: "How Many Witnesses Does an Ontario Power of Attorney Need?",
    description: [
      "Ontario Powers of Attorney for property and personal care are subject to statutory execution requirements.",
      "In general, Ontario's Substitute Decisions Act, 1992 requires these Powers of Attorney to be executed in the presence of two witnesses, each of whom must sign the document as a witness.",
      "However, the legislation also restricts who may act as a witness.",
      "You should therefore not simply ask any two people to witness the document without considering whether they are legally eligible.",
    ],
  },

  osapAffidavit: {
    tag: "INTERNATIONAL USE",
    title: "International Power of Attorney Services",
    buttonText: "ASK ABOUT INTERNATIONAL POWER OF ATTORNEY SERVICES",
    buttonHref: "/#BookAppointmentSection",
    description: [
      "No Line Notary can assist Ontario clients with the Canadian formalities required for many Powers of Attorney intended for use abroad.",
      "Depending upon the destination and document, the process may involve:",
      "Document review → execution → notarization → apostille → certified translation → international courier",
      "This is commonly required where a Canadian resident needs someone abroad to act for them concerning:",
    ],
    items: [
      "Foreign real estate",
      "Estates and inheritances",
      "Bank accounts",
      "Court proceedings",
      "Business transactions",
      "Vehicles",
      "Tax matters",
      "Government applications",
      "Other legal affairs",
    ],
  },

  courtDocuments: {
    title: "Who Cannot Witness an Ontario Power of Attorney?",
    description: [
      "Ontario law restricts certain persons from witnessing a Continuing Power of Attorney for Property or Power of Attorney for Personal Care.",
      "Depending upon the particular POA, prohibited witnesses can include:",
    ],
    documents: [
      { id: 1, title: "The attorney or the attorney's spouse or partner" },
      { id: 2, title: "The grantor's spouse or partner" },
      { id: 3, title: "A child of the grantor" },
      {
        id: 4,
        title:
          "A person whom the grantor has demonstrated a settled intention to treat as their child",
      },
      {
        id: 5,
        title:
          "A person whose property is under guardianship or who has a guardian of the person",
      },
      { id: 6, title: "A person under 18 years of age" },
    ],
    footer: [
      "If there is any uncertainty about whether a proposed witness is eligible, determine that issue before executing the document.",
    ],
  },

  commissionerVsNotary: {
    title: "Do Powers of Attorney Need to Be Notarized in Ontario?",
    description: [
      "Not every Ontario Power of Attorney requires notarization.",
      "For example, Ontario's legislation imposes specific execution and witnessing requirements for Continuing Powers of Attorney for Property and Powers of Attorney for Personal Care.",
      "Notarization is a separate issue.",
      "A bank, foreign government, foreign lawyer, land registry or other recipient may nevertheless require a notarized Power of Attorney for its particular purpose.",
      "The correct question is therefore:",
      "Who will receive the Power of Attorney and what execution requirements have they imposed?",
    ],
    notice:
      "If you have been given instructions by the receiving organization, send them to us before your appointment.",
  },

  appointmentRequirements: {
    tag: "DOCUMENTS REQUIRED",
    title: "What Should I Bring to My Appointment?",
    intro:
      "Requirements depend upon the document, but you should generally have:",
    requirements: [
      "The unsigned original Power of Attorney",
      "Valid government-issued photo identification",
      "All execution instructions received from the recipient",
      "Contact details for the foreign lawyer or recipient, where applicable",
      "Any required witnesses",
      "Supporting documents specifically required for the transaction",
    ],
    notice:
      "Do not sign the Power of Attorney in advance where your signature must be witnessed or notarized.",
  },

  locations: {
    tag: "LOCATIONS",
    title: "Power of Attorney Services Across Ontario",
    description: [
      "No Line Notary assists clients throughout Ontario, including:",
    ],
    mapImage: "/images/bg-map.png",
    mapAlt:
      "Map illustrating Power of Attorney services coverage across Ontario",
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
      "The availability of remote service depends upon the particular Power of Attorney and the legal act required.",
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Powers of Attorney",
    items: [
      {
        id: 1,
        question: "What is a Power of Attorney?",
        answer:
          "A Power of Attorney is a legal document through which one person authorizes another person to act on their behalf within the authority granted by the document.",
      },
      {
        id: 2,
        question: "Does a Power of Attorney have to be notarized in Ontario?",
        answer:
          "Not every Ontario Power of Attorney requires notarization. Ontario Powers of Attorney for Property and Personal Care have statutory execution requirements. A recipient may nevertheless impose additional requirements depending upon how and where the document will be used.",
      },
      {
        id: 3,
        question:
          "How many witnesses does an Ontario Power of Attorney require?",
        answer:
          "A Continuing Power of Attorney for Property or Power of Attorney for Personal Care is generally executed in the presence of two eligible witnesses under Ontario's Substitute Decisions Act, 1992.",
      },
      {
        id: 4,
        question: "Can my spouse witness my Power of Attorney?",
        answer:
          "There are statutory restrictions on who can witness Ontario Powers of Attorney. The grantor's spouse or partner is among the persons who may be prohibited from acting as a witness for these documents.",
      },
      {
        id: 5,
        question: "Can the person I appoint witness the Power of Attorney?",
        answer:
          "An attorney appointed under the document should not act as a witness where prohibited by the applicable Ontario legislation.",
      },
      {
        id: 6,
        question: "Should I sign my Power of Attorney before my appointment?",
        answer:
          "No, not where your signature is required to be witnessed or notarized. Bring the unsigned document and follow the execution instructions provided at your appointment.",
      },
      {
        id: 7,
        question: "Can you notarize a Power of Attorney for another country?",
        answer:
          "Yes, we can assist with many Powers of Attorney intended for international use, subject to the requirements of the particular document and destination country.",
      },
      {
        id: 8,
        question: "Does a foreign Power of Attorney need an apostille?",
        answer:
          "Possibly. The requirement depends upon the destination country and receiving organization. Obtain the recipient's requirements before processing the document.",
      },
      {
        id: 9,
        question: "Can you apostille my Power of Attorney?",
        answer:
          "A qualifying notarized Canadian Power of Attorney can be submitted to the appropriate Canadian competent authority for an apostille. Apostille processing services are available separately.",
      },
      {
        id: 10,
        question: "Can you translate my Power of Attorney?",
        answer:
          "Translation services can be coordinated where required. The destination country's requirements should be determined first because they can dictate when, where and how the translation must be completed.",
      },
      {
        id: 11,
        question: "Can you prepare my Power of Attorney?",
        answer:
          "Document-preparation services may be available separately. For foreign transactions, it is preferable to determine whether the foreign lawyer, notary or authority requires a particular form before preparing a Canadian document.",
      },
      {
        id: 12,
        question: "Can I sign my Power of Attorney online?",
        answer:
          "That depends upon the particular Power of Attorney and the applicable execution, witnessing and recipient requirements. Remote commissioning rules for affidavits and statutory declarations should not be assumed to apply automatically to Powers of Attorney.",
      },
    ],
  },

  pricingCTA: {
    title: "Get Your Power of Attorney Completed Properly",
    description: [
      "Already Have Your Power of Attorney?",
      "Send us the document and any execution instructions so that the appropriate service can be identified.",
    ],
    card: {
      title: "Notarial Services",
      startingLabel: "Starting at",
      startingPrice: "$45",
      items: [
        { label: "First signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Book / submit your document",
      ctaHref: "/#BookAppointmentSection",
    },
  },
};
