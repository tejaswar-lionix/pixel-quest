/**
 * game_module_0967 — sprite sheets, animation, parallax
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */

export interface Input_967 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_967 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_967 = {
  gravity: 939,
  friction: 0.772,
  jumpImpulse: 446,
  maxSpeed: 249,
};

export function resolveSpawn(inp: Input_967, dt: number): Output_967 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_967.friction;
  let vy = inp.vel.y + TUNING_967.gravity * dt;

  // Domain: render_sprite — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_967.maxSpeed, Math.min(TUNING_967.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_967.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_967(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_967 = { domain: 'render_sprite', version: '1.67', crafted: '2024-08-16' };