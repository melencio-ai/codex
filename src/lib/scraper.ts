export async function scrapeWebsite(url:string){
  try{const res=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'}});if(!res.ok)throw new Error('Failed to fetch website');const html=await res.text();
  const text=html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const title=(html.match(/<title>(.*?)<\/title>/i)?.[1]||'').trim();
  const meta=(html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)/i)?.[1]||'').trim();
  const phones=[...text.matchAll(/(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g)].map(m=>m[0]).slice(0,5);
  return {ok:true,title,meta,text:text.slice(0,20000),phones};
  }catch(e){return {ok:false,error:e instanceof Error?e.message:'Scrape failed',manualEntryRequired:true};}
}
