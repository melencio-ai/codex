import { ghlRequest } from './client';export const createOpportunity=(token:string,body:unknown)=>ghlRequest('/opportunities/',token,{method:'POST',body:JSON.stringify(body)});
