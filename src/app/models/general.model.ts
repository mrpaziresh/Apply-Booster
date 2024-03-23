import { companyFileType } from '../modules/landing/models/landing.models';

export interface ITaxPayer {
  name: string;
  companies: ICompany[];
}
export interface ICompany {
  companyId: number;
  fiscalId: string;
  brand: string;
  type?: companyType;
  economicKey: string;
  zipCode?: string;
  salesLimit: number;
  address?: string;
  businessName?: string;
  customerId?: string;
  firstSignatureName?: string;
  firstSignatureRole?: string;
  secondSignatureName?: string;
  secondSignatureRole?: string;
  companyRegistrationNo?: string;
  companyRegistrationDate?: string;
  companyRegistrationAdd: string;
  registrationCity?: string;
  registrationProvince?: string;
  phoneNumber?: number;
  nationalCode?: string;
  birthDate?: string;
  ceoFathersName?: string;
  ceoName?: string;
  tel?: string;
  conAddress?: string;
  conZipCode?: string;
  conFathersName?: string;
  conBirthDate?: string;
  conRole?: string;
  conName?: string;
  conNationalCode?: string;
  conTel?: string;
  conPhoneNumber?: number;
  conEmail?: string;
  website?: string;
  email?: string;
  files?: ICompanyFile[];
  creationDate?: string | number;
  contract?: CompanyContracttModel;
  activationStatus?: companyStatusType;
  role?: CompanyRoleType;
  status?: string;
}

export interface ICompanyFile {
  file: File;
  type: companyFileType;
  name?: string;
  [key: string]: any;
}

export interface CompanyContracttModel {
  context: string;
  endsAt: number;
  id: number;
  isSigned: boolean;
  isValid: boolean;
  startsAt: number;
}

export type companyType =
  | 'INDIVIDUAL_WITH_CODE'
  | 'INDIVIDUAL-WITHOUT-CODE'
  | 'LEGAL';

export type companyStatusType =
  | 'در انتظار عقد قرارداد'
  | 'ثبت اولیه'
  | 'فعال'
  | 'در انتظار تایید صحت'
  | 'منصرف شده'
  | 'غیرفعال'
  | 'در انتظار تمدید قرارداد';

export type dashboardButtonType =
  | 'درخواست فعال سازی'
  | 'امضا قرارداد'
  | false
  | '';
export type CompanyRoleType = 'VIEWER' | 'ADMIN' | 'CREATOR';





// GOAL: handle 30M user per day
// Question: We should connect every passenger to driver without any lost
// Make something that we can't hack it or change it
// Make it scaleble and Moveable


// We can try any new option without any limit and something like that



