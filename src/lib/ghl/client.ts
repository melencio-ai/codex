import { env } from '@/lib/env';
export async function ghlRequest(path:string,token:string,init?:RequestInit){const res=await fetch(`${env.ghlApiBaseUrl}${path}`,{...init,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json',Version:'2021-07-28',...(init?.headers||{})}});if(!res.ok)throw new Error(`GHL API error ${res.status}`);return res.json();}
