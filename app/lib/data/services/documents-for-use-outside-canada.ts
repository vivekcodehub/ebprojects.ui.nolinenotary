import type { ServicePageData } from "./types";

export const documentsForUseOutsideCanada: ServicePageData = {
  slug: "documents-for-use-outside-canada",
  meta: {
    title: "Documents for Use Outside Canada | Notary & Apostille",
    description:
      "Using a Canadian document abroad? Get help with notarization, apostille, certified translation and international document delivery from Ontario.",
    keywords: [
      "documents for use outside Canada",
      "Canadian documents for use abroad",
      "notarize document for use abroad",
      "international document notarization",
      "international notary Canada",
      "notary for international documents",
      "apostille Canada",
      "apostille Ontario",
      "apostille documents Canada",
      "Canadian document Apostille",
      "notarize and apostille document",
      "documents for international use",
      "apostille services Ontario",
      "apostille services Toronto",
      "international document services Canada",
      "legalize Canadian documents for use abroad",
    ],
    ogImage: "/images/contact.png",
  },
  hero: {
    tag: "DOCUMENTS FOR USE OUTSIDE CANADA",
    title:
      "Notarization, Apostille, Translation & International Document Services",
    description: [
      "Need to use a Canadian document in another country?",
      "No Line Notary assists individuals and businesses with preparing Canadian documents for international use.",
      "Depending on the document and destination country, you may require one or more of the following:",
      "Notarization → Apostille → Certified Translation → International Courier",
      "We can help determine the Canadian document-processing steps required and coordinate the process from Ontario.",
      "Whether your document is going to the United States, Mexico, Europe, the Caribbean, South America, Asia, Africa or the Middle East, start by telling us:",
      "1. What document do you have?",
      "2. Which country will it be used in?",
      "3. Who will receive it?",
    ],
    backgroundImage: "/images/service-coverImage.jpg",
    backgroundImageAlt: "Courthouse columns",
    card: {
      title: "Notarial Services From",
      price: "$45",
      items: [
        { label: "First notarial signature or stamp", price: "$45" },
        { label: "Second signature or stamp", price: "$15" },
        { label: "Each additional signature or stamp", price: "$10" },
      ],
      ctaLabel: "Get started with your international document",
      ctaHref: "/#BookAppointmentSection",
    },
  },
  breadcrumbLabel: "Documents for Use Outside Canada",

  imageTextLeft: {
    image: "/images/affidavits-online-ontario/1.png",
    imageAlt: "What Is an Apostille?",
    title: "What Is an Apostille?",
    paragraphs: [
      "An apostille is a certificate used to authenticate the origin of a public document for use in another country under the Hague Apostille Convention.",
      "Canada became a party to the Apostille Convention effective January 11, 2024.",
      "For countries where the Convention applies with Canada, the apostille process generally replaces the former multi-step authentication and legalization process.",
      "An apostille verifies matters relating to the origin of the document, such as the signature, capacity of the person signing it and, where applicable, the seal or stamp.",
      "An apostille does not certify that the contents of the underlying document are true.",
    ],
  },

  imageTextRight: {
    image: "/images/affidavits-online-ontario/2.png",
    imageAlt: "Does My Document Need to Be Notarized Before Apostille?",
    title: "Does My Document Need to Be Notarized Before Apostille?",
    paragraphs: [
      "Sometimes, but not always.",
      "This is an important distinction.",
      "Certain Canadian public documents may be eligible for an apostille based upon the signature or seal of the issuing public authority.",
      "Other documents are private documents and may first require a notarial act.",
      "Unnecessary notarization can add cost and, in some cases, complicate the process.",
      "Before notarizing a document solely for apostille purposes, determine whether notarization is actually required.",
    ],
    imagePosition: "right",
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "Complete International Document Service",
    buttonText: "START YOUR INTERNATIONAL DOCUMENT ORDER",
    buttonHref: "/#BookAppointmentSection",
    steps: [
      {
        id: 1,
        title: "SEND US YOUR DOCUMENT",
        description: "Upload a clear copy of the document.",
      },
      {
        id: 2,
        title: "TELL US THE DESTINATION COUNTRY",
        description: "Identify where the document will be used.",
      },
      {
        id: 3,
        title: "TELL US WHO WILL RECEIVE IT",
        description:
          "For example:\nGovernment agency\nConsulate\nLawyer\nNotary\nBank\nUniversity\nEmployer\nCourt",
      },
      {
        id: 4,
        title: "PROVIDE ANY INSTRUCTIONS",
        description:
          "Upload any checklist, email or written instructions from the foreign recipient.",
      },
      {
        id: 5,
        title: "WE DETERMINE THE CANADIAN PROCESSING REQUIREMENTS",
        description:
          "Depending upon the document, this may involve notarization, certified copies, apostille or other Canadian processing.",
      },
      {
        id: 6,
        title: "COMPLETE THE REQUIRED NOTARIAL SERVICE",
        description:
          "Where required, execute or notarize the document appropriately.",
      },
      {
        id: 7,
        title: "APOSTILLE PROCESSING",
        description:
          "The qualifying document is submitted through the appropriate Canadian apostille process.",
      },
      {
        id: 8,
        title: "TRANSLATION",
        description: "Certified translation can be coordinated where required.",
      },
      {
        id: 9,
        title: "INTERNATIONAL DELIVERY",
        description:
          "The completed package can be couriered to the appropriate destination.",
      },
    ],
  },

  documentsCommission: {
    title: "Documents Commonly Used Outside Canada",
    description: [
      "We assist with a wide range of Canadian documents intended for international use.",
    ],
    cards: [
      {
        id: 1,
        title: "Powers of Attorney",
        description:[
          "International Powers of Attorney are commonly required for:",
        ],
          features: [
          "Foreign property transactions",
          "Estates and inheritances",
          "Banking",
          "Court proceedings",
          "Vehicle transactions",
          "Business matters",
          "Tax matters",
          "Representation before foreign authorities",
        ],
        variant: "light",
      },
      {
        id: 2,
        title: "Birth Certificates",
        description:["Canadian birth certificates may be required abroad for:",],
        features: [
          "Citizenship",
          "Marriage",
          "Immigration",
          "Dual nationality",
          "Inheritance",
          "Education",
          "Government registration",
        ],
        variant: "dark",
      },
      {
        id: 3,
        title: "Corporate and Business Documents",
        description:[
          "Canadian businesses operating internationally may require documents such as:",
        ],
          features: [
          "Articles of Incorporation",
          "Corporate resolutions",
          "Certificates",
          "Commercial agreements",
          "Director or officer declarations",
          "Powers of Attorney",
          "Certificates of status",
          "Banking documents",
          "Other corporate records",
        ],
        variant: "light",
      },
    ],
    notice:
      "Depending upon the transaction, documents may require notarization and apostille before being accepted abroad.",
    contactMessage:
      "Not sure whether your document qualifies? Contact us before booking.",
  },

  onlineAffidavit: {
    title: "Does My Canadian Document Need an Apostille?",
    description: [
      "Not every Canadian document used abroad requires an apostille.",
      "Whether you need one depends primarily upon the requirements of the foreign authority receiving the document.",
      "An apostille may be requested for documents used in connection with:",
    ],
    items: [
      "Citizenship",
      "Immigration",
      "Marriage",
      "Divorce",
      "Foreign property",
      "Inheritance",
      "Estates",
      "Powers of Attorney",
      "Banking",
      "Business transactions",
      "Education",
      "Professional licensing",
      "Employment",
      "Adoption",
      "Court proceedings",
      "Other international matters.",
    ],
    footer: [
      "If the foreign recipient has provided written instructions, send them to us.",
    ],
  },

  statutoryDeclaration: {
    title: "Countries That Use Apostilles",
    description: [
      "The Hague Apostille Convention applies between Canada and many countries around the world.",
      "However, you should not assume that every country uses the apostille system or that the Convention necessarily applies between Canada and every other Convention jurisdiction in every circumstance.",
      "Where the apostille system does not apply, additional authentication or legalization requirements may exist.",
      "Tell us the destination country and we can determine the Canadian processing route applicable to your document.",
    ],
  },

  osapAffidavit: {
    tag: "INTERNATIONAL POWER OF ATTORNEY",
    title: "International Power of Attorney",
    buttonText: "GET AN INTERNATIONAL POWER OF ATTORNEY NOTARIZED",
    buttonHref: "/#BookAppointmentSection",
    description: [
      "A Power of Attorney for use outside Canada is one of the most common international documents we handle.",
      "If a foreign lawyer, notary, bank or government authority has prepared the Power of Attorney, do not sign it before determining the execution requirements.",
      "The foreign recipient may require:",
    ],
    items: [
      "Particular witnesses",
      "Notarization",
      "Identification information",
      "Photographs",
      "Specific notarial wording",
      "Apostille",
      "Translation",
      "Other formalities.",
    ],
  },

  courtDocuments: {
    title: "Ontario Apostille Services",
    description: [
      "If your document was issued or notarized in Ontario, it may fall within Ontario's apostille system.",
      "Examples can include qualifying:",
    ],
    documents: [
      { id: 1, title: "Notarized documents" },
      { id: 2, title: "Ontario vital-statistics documents" },
      { id: 3, title: "Court documents" },
      { id: 4, title: "Educational documents" },
      { id: 5, title: "Corporate documents" },
      { id: 6, title: "Other Ontario public documents." },
    ],
    footer: [
      "Different documents can have different prerequisites.",
      "Do not notarize a government document unnecessarily before determining whether the original document can receive an apostille directly.",
    ],
  },

  commissionerVsNotary: {
    title: "Global Affairs Canada Apostille",
    description: [
      "Some Canadian documents fall within the apostille jurisdiction of Global Affairs Canada rather than a provincial authority.",
      "The appropriate route depends upon the issuing authority and document type.",
      "Sending a document to the wrong competent authority can result in unnecessary delay.",
    ],
    notice:
      "If you are unsure whether your document should go to Ontario or Global Affairs Canada, send us a copy and identify the destination country.",
  },

  locations: {
    tag: "LOCATIONS",
    title: "International Document Services Across Ontario",
    description: [
      "No Line Notary assists clients throughout Ontario, including:",
    ],
    mapImage: "/images/bg-map.png",
    mapAlt:
      "Map illustrating international document services coverage across Ontario",
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
      "Niagara",
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
      "You do not necessarily need to live near Toronto to have your international document process coordinated through an Ontario service provider.",
    ],
  },

  faq: {
    title: "Frequently Asked Questions About Documents for Use Outside Canada",
    items: [
      {
        id: 1,
        question: "How do I use a Canadian document in another country?",
        answer:
          "It depends upon the document and destination. The process may involve notarization, apostille, translation and international delivery.",
      },
      {
        id: 2,
        question: "What is an apostille?",
        answer:
          "An apostille authenticates the origin of a qualifying public document for use under the Hague Apostille Convention.",
      },
      {
        id: 3,
        question: "Does every Canadian document need an apostille?",
        answer:
          "No. The foreign recipient determines whether an apostille is required.",
      },
      {
        id: 4,
        question:
          "Does my document need to be notarized before getting an apostille?",
        answer:
          "Not necessarily. Some public documents can follow the appropriate apostille process without first being notarized. Private documents may require a notarial act.",
      },
      {
        id: 5,
        question: "Where do I get an apostille in Ontario?",
        answer:
          "Ontario is a designated Canadian competent authority for documents within its jurisdiction. Other Canadian documents may fall under another provincial authority or Global Affairs Canada.",
      },
      {
        id: 6,
        question: "Can you apostille my Power of Attorney?",
        answer:
          "A qualifying Power of Attorney can be notarized and processed through the appropriate apostille procedure where an apostille is required.",
      },
      {
        id: 7,
        question: "Can you apostille a certified passport copy?",
        answer:
          "Where a foreign recipient requires an apostilled notarized passport copy, an appropriate certified copy and apostille process may be available.",
      },
      {
        id: 8,
        question: "Can you apostille a Criminal Record Check?",
        answer:
          "Canadian Criminal Record Checks can have different apostille routes depending upon the type of check and issuing authority. Send us the document before processing.",
      },
      {
        id: 9,
        question: "Can you apostille a birth or marriage certificate?",
        answer:
          "Qualifying Canadian vital-statistics documents can be apostilled through the competent authority with jurisdiction over the document.",
      },
      {
        id: 10,
        question: "Does the apostille need to be translated?",
        answer:
          "Sometimes. The foreign recipient may require translation of both the underlying document and the apostille.",
      },
      {
        id: 11,
        question: "Can you send my completed document overseas?",
        answer:
          "Yes. International courier services can be coordinated where required.",
      },
      {
        id: 12,
        question: "How long does the process take?",
        answer:
          "Processing time depends upon the document, competent authority, translation requirements, destination and courier service. Obtain a current estimate before relying upon a particular completion date.",
      },
      {
        id: 13,
        question: "Can you guarantee the foreign country will accept my document?",
        answer:
          "No. The foreign government or receiving organization determines whether a document satisfies its requirements. Providing its written instructions before processing substantially reduces the risk of completing the wrong procedure.",
      },
    ],
  },

  pricingCTA: {
    title: "Get Your Canadian Document Ready for International Use",
    description: [
      "Don't guess whether your document needs notarization, an apostille or translation.",
      "Send us:",
      "Your document + Destination country + Receiving organization + Any instructions you received",
      "and we can determine the appropriate Canadian document process.",
      "Complete International Document Services",
      "Notarization → Apostille → Translation → International Courier",
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
      ctaLabel: "Get started",
      ctaHref: "/#BookAppointmentSection",
    },
  },
};
