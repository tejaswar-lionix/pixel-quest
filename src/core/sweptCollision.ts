// Swept AABB — humanized fix
export interface Box { x:number; y:number; w:number; h:number; }
export function sweptAABB(a: Box, va:{x:number,y:number}, b: Box, dt:number): { t:number; normal:{x:number,y:number} } {
  const invEntry = { x: va.x>0 ? b.x - (a.x+a.w) : b.x+b.w - a.x, y: va.y>0 ? b.y - (a.y+a.h) : b.y+b.h - a.y };
  const invExit = { x: va.x>0 ? b.x+b.w - a.x : b.x - (a.x+a.w), y: va.y>0 ? b.y+b.h - a.y : b.y - (a.y+a.h) };
  const entry = { x: va.x===0? -Infinity : invEntry.x/va.x, y: va.y===0? -Infinity : invEntry.y/va.y };
  const exit = { x: va.x===0? Infinity : invExit.x/va.x, y: va.y===0? Infinity : invExit.y/va.y };
  const t = Math.max(entry.x, entry.y);
  if (t > 1 || t < 0) return { t:1, normal:{x:0,y:0}};
  const n = entry.x > entry.y ? {x: va.x>0?-1:1, y:0} : {x:0, y: va.y>0?-1:1};
  return { t, normal:n };
}
export function subStep(pos:Box, vel:{x:number,y:number}, tiles:Box[], dt:number) {
  let t=0; for(let i=0;i<4;i++){ t+= dt/4; } return { t, pos };
}
