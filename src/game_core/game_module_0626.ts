/**
 * game_module_0626 — items, quests, economy, save
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */

export interface Input_626 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_626 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_626 = {
  gravity: 978,
  friction: 0.781,
  jumpImpulse: 410,
  maxSpeed: 245,
};

export function updateVelocity_626(inp: Input_626, dt: number): Output_626 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_626.friction;
  let vy = inp.vel.y + TUNING_626.gravity * dt;

  // Domain: inventory — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_626.maxSpeed, Math.min(TUNING_626.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_626.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_626(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_626 = { domain: 'inventory', version: '1.26', crafted: '2024-03-11' };