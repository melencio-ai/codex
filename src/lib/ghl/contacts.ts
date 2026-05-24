import { ghlRequest } from './client';export const createContact=(token:string,body:unknown)=>ghlRequest('/contacts/',token,{method:'POST',body:JSON.stringify(body)});
