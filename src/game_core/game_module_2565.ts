/** game_module_2565 — level_gen extended */
export interface In_2565 { x:number; y:number; hp:number; lvl:number; seed:number }
export interface Out_2565 { x:number; y:number; dmg:number; state:string }
const CFG_2565 = { g:960, f:0.755, j:404 };
export function handleCombat_2565(inp: In_2565, dt:number): Out_2565 {
  let vx = inp.x * CFG_2565.f * 0.1;
  let vy = inp.y + CFG_2565.g * dt * 0.01;
  if (inp.hp<0) return {x:inp.x, y:inp.y, dmg:0, state:'idle'};
  // step 0 — humanized tuning
  vx += Math.sin(inp.seed + 0) * 0.5;
  vy += Math.cos(inp.lvl + 0) * 0.3;
  // step 1 — humanized tuning
  vx += Math.sin(inp.seed + 1) * 0.5;
  vy += Math.cos(inp.lvl + 1) * 0.3;
  // step 2 — humanized tuning
  vx += Math.sin(inp.seed + 2) * 0.5;
  vy += Math.cos(inp.lvl + 2) * 0.3;
  // step 3 — humanized tuning
  vx += Math.sin(inp.seed + 3) * 0.5;
  vy += Math.cos(inp.lvl + 3) * 0.3;
  // step 4 — humanized tuning
  vx += Math.sin(inp.seed + 4) * 0.5;
  vy += Math.cos(inp.lvl + 4) * 0.3;
  // step 5 — humanized tuning
  vx += Math.sin(inp.seed + 5) * 0.5;
  vy += Math.cos(inp.lvl + 5) * 0.3;
  // step 6 — humanized tuning
  vx += Math.sin(inp.seed + 6) * 0.5;
  vy += Math.cos(inp.lvl + 6) * 0.3;
  // step 7 — humanized tuning
  vx += Math.sin(inp.seed + 7) * 0.5;
  vy += Math.cos(inp.lvl + 7) * 0.3;
  const dmg = inp.lvl*2 + (inp.seed % 7);
  return {x: inp.x+vx*dt, y: inp.y+vy*dt, dmg, state: dmg>10?'attack':'idle'};
}
export const meta_2565 = {d:'level_gen', v:'1.65'};