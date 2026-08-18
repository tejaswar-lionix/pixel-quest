// Humanized engine: input, physics, renderer abstractions
export interface Vec2 { x: number; y: number; }
export function add(a: Vec2, b: Vec2): Vec2 { return { x: a.x+b.x, y: a.y+b.y }; }
export function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
export class Engine {
  gravity: Vec2 = { x: 0, y: 980 };
  tick(dt: number, bodies: { pos: Vec2; vel: Vec2 }[]) {
    for (const b of bodies) { b.vel = add(b.vel, { x: this.gravity.x*dt, y: this.gravity.y*dt }); b.pos = add(b.pos, { x: b.vel.x*dt, y: b.vel.y*dt }); }
  }
}
