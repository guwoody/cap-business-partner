using { API_BUSINESS_PARTNER as bupa } from './external/API_BUSINESS_PARTNER';

service BusinessPartnerService {
    entity BusinessPartner as projection on bupa.A_BusinessPartner;
}