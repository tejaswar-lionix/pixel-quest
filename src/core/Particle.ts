// Particle FX — humanized
export class Particle {
  x: number; y:number; vx:number; vy:number; life=1;
  constructor(x:number,y:number) { this.x=x; this.y=y; this.vx=(Math.random()-0.5)*300; this.vy=(Math.random()-0.5)*300-100; }
  update(dt:number) { this.x+=this.vx*dt; this.y+=this.vy*dt; this.vy+= 600*dt; this.life-= dt*2; return this.life>0; }
}
export class Emitter {
  particles: Particle[]=[];
  explode(x:number,y:number, n=40) { for(let i=0;i<n;i++) this.particles.push(new Particle(x,y)); }
  update(dt:number) { this.particles = this.particles.filter(p=>p.update(dt)); }
}
export function shake(intensity=5, duration=0.15) { return { x: (Math.random()-0.5)*intensity, y: (Math.random()-0.5)*intensity, t: duration }; }
