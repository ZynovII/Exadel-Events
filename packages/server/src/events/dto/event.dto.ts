export interface CreateEventDto {
  titel: string;
  description: string;
  url: string;
  date: string;
  status: string;
  categories: string;
  languages: string[];
  location: string[];
  isOnline: boolean;
  type: string;
  registrationFields: string[];
}
