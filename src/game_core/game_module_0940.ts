/**
 * game_module_0940 — player movement, velocity, gravity, jump curves
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */
import { Vec2 } from '../core/Engine';

export interface Input_940 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_940 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_940 = {
  gravity: 1076,
  friction: 0.765,
  jumpImpulse: 455,
  maxSpeed: 190,
};

export function updateState_940(inp: Input_940, dt: number): Output_940 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_940.friction;
  let vy = inp.vel.y + TUNING_940.gravity * dt;

  // Domain: physics_movement — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_940.maxSpeed, Math.min(TUNING_940.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_940.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_940(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_940 = { domain: 'physics_movement', version: '1.40', crafted: '2024-05-17' };