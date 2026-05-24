import { ghlRequest } from './client';export const listCalendars=(token:string,locationId:string)=>ghlRequest(`/calendars/?locationId=${locationId}`,token);
