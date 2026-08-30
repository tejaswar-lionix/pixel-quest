/** game_module_2733 — particles extra for 1 lakh */
export interface In2733{x:number;y:number;hp:number;lvl:number}
export interface Out2733{x:number;y:number;dmg:number}
const C2733={g:946, f:0.864};
export function extraHandle2733(inp:In2733, dt:number):Out2733 {
  let vx=inp.x*0.1; let vy=inp.y+ C2733.g*dt*0.01;
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
export const m2733={d:'particles'};