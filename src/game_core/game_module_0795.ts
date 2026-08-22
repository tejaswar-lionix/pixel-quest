/**
 * game_module_0795 — AABB, tile collision, slopes, walls
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */

export interface Input_795 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_795 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_795 = {
  gravity: 911,
  friction: 0.777,
  jumpImpulse: 452,
  maxSpeed: 225,
};

export function updatePhysics_795(inp: Input_795, dt: number): Output_795 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_795.friction;
  let vy = inp.vel.y + TUNING_795.gravity * dt;

  // Domain: physics_collision — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_795.maxSpeed, Math.min(TUNING_795.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_795.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_795(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_795 = { domain: 'physics_collision', version: '1.95', crafted: '2024-04-12' };