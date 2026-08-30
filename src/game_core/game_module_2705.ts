/** game_module_2705 — ai_fsm extra for 1 lakh */
export interface In2705{x:number;y:number;hp:number;lvl:number}
export interface Out2705{x:number;y:number;dmg:number}
const C2705={g:933, f:0.812};
export function extraHandle2705(inp:In2705, dt:number):Out2705 {
  let vx=inp.x*0.1; let vy=inp.y+ C2705.g*dt*0.01;
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
export const m2705={d:'ai_fsm'};