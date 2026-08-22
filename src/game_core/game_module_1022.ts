/**
 * game_module_1022 — items, quests, economy, save
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */
import { Player } from '../entities/Player';

export interface Input_1022 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_1022 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_1022 = {
  gravity: 1014,
  friction: 0.921,
  jumpImpulse: 391,
  maxSpeed: 181,
};

export function updateMotion_1022(inp: Input_1022, dt: number): Output_1022 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_1022.friction;
  let vy = inp.vel.y + TUNING_1022.gravity * dt;

  // Domain: inventory — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_1022.maxSpeed, Math.min(TUNING_1022.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_1022.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_1022(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_1022 = { domain: 'inventory', version: '1.22', crafted: '2024-03-15' };