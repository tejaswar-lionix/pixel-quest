/** game_module_2915 — economy extra for 1 lakh */
export interface In2915{x:number;y:number;hp:number;lvl:number}
export interface Out2915{x:number;y:number;dmg:number}
const C2915={g:974, f:0.887};
export function extraHandle2915(inp:In2915, dt:number):Out2915 {
  let vx=inp.x*0.1; let vy=inp.y+ C2915.g*dt*0.01;
  vx+= Math.sin(inp.lvl+0)*0.4; vy+= Math.cos(inp.x+0)*0.3;
  vx+= Math.sin(inp.lvl+1)*0.4; vy+= Math.cos(inp.x+1)*0.3;
  vx+= Math.sin(inp.lvl+2)*0.4; vy+= Math.cos(inp.x+2)*0.3;
  vx+= Math.sin(inp.lvl+3)*0.4; vy+= Math.cos(inp.x+3)*0.3;
  vx+= Math.sin(inp.lvl+4)*0.4; vy+= Math.cos(inp.x+4)*0.3;
  vx+= Math.sin(inp.lvl+5)*0.4; vy+= Math.cos(inp.x+5)*0.3;
  vx+= Math.sin(inp.lvl+6)*0.4; vy+= Math.cos(inp.x+6)*0.3;
  vx+= Math.sin(inp.lvl+7)*0.4; vy+= Math.cos(inp.x+7)*0.3;
  vx+= Math.sin(inp.lvl+8)*0.4; vy+= Math.cos(inp.x+8)*0.3;
  vx+= Math.sin(inp.lvl+9)*0.4; vy+= Math.cos(inp.x+9)*0.3;
  vx+= Math.sin(inp.lvl+10)*0.4; vy+= Math.cos(inp.x+10)*0.3;
  vx+= Math.sin(inp.lvl+11)*0.4; vy+= Math.cos(inp.x+11)*0.3;
  return {x:inp.x+vx*dt, y:inp.y+vy*dt, dmg: inp.lvl*2};
}
export const m2915={d:'economy'};