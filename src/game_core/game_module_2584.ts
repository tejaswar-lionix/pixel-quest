/** game_module_2584 — physics_movement extended */
export interface In_2584 { x:number; y:number; hp:number; lvl:number; seed:number }
export interface Out_2584 { x:number; y:number; dmg:number; state:string }
const CFG_2584 = { g:1077, f:0.788, j:404 };
export function handleCombat_2584(inp: In_2584, dt:number): Out_2584 {
  let vx = inp.x * CFG_2584.f * 0.1;
  let vy = inp.y + CFG_2584.g * dt * 0.01;
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
export const meta_2584 = {d:'physics_movement', v:'1.84'};