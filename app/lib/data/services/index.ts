import { affidavitOfExecutionOntario } from "./affidavit-of-execution-ontario";
import { affidavitOfIdentityOntario } from "./affidavit-of-identity-ontario";
import { affidavitsOnlineOntario } from "./affidavits-online-ontario";
import { apostilleServices } from "./apostille-services";
import { certifiedTrueCopyOntario } from "./certified-true-copy-ontario";
import { commonLawStatutoryDeclaration } from "./common-law-statutory-declaration";
import { criminalRecordCheckOntario } from "./criminal-record-check-ontario";
import { documentsForUseOutsideCanada } from "./documents-for-use-outside-canada";
import { invitationLetterCanada } from "./invitation-letter-canada";
import { onlineCommissionerOfOathsOntario } from "./online-commissioner-of-oaths-ontario";
import { ontarioCourtForms } from "./ontario-court-forms";
import { osapAffidavitOnline } from "./osap-affidavit-online";
import { passportStatutoryDeclaration } from "./passport-statutory-declaration";
import { powerOfAttorneyOntario } from "./power-of-attorney-ontario";
import { separationAgreementWitnessOntario } from "./separation-agreement-witness-ontario";
import { statutoryDeclarationOntario } from "./statutory-declaration-ontario";
import { travelConsentLetterCanada } from "./travel-consent-letter-canada";
import type { ServicePageData } from "./types";

// Add every new service page here
export const servicePages: ServicePageData[] = [
  onlineCommissionerOfOathsOntario,
  affidavitOfExecutionOntario,
  affidavitOfIdentityOntario,
  affidavitsOnlineOntario,
  apostilleServices,
  certifiedTrueCopyOntario,
  commonLawStatutoryDeclaration,
  criminalRecordCheckOntario,
  documentsForUseOutsideCanada,
  invitationLetterCanada,
  ontarioCourtForms,
  osapAffidavitOnline,
  passportStatutoryDeclaration,
  powerOfAttorneyOntario,
  separationAgreementWitnessOntario,
  statutoryDeclarationOntario,
  travelConsentLetterCanada
];

export const getServiceBySlug = (slug: string) =>
  servicePages.find((page) => page.slug === slug);
