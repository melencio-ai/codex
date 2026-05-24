import { ghlRequest } from './client';export const createNote=(token:string,body:unknown)=>ghlRequest('/conversations/messages',token,{method:'POST',body:JSON.stringify(body)});
