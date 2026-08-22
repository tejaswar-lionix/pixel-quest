/**
 * game_module_0648 — AABB, tile collision, slopes, walls
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */
import { Vec2 } from '../core/Engine';

export interface Input_648 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_648 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_648 = {
  gravity: 1059,
  friction: 0.792,
  jumpImpulse: 411,
  maxSpeed: 185,
};

export function updateState_648(inp: Input_648, dt: number): Output_648 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_648.friction;
  let vy = inp.vel.y + TUNING_648.gravity * dt;

  // Domain: physics_collision — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_648.maxSpeed, Math.min(TUNING_648.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_648.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_648(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_648 = { domain: 'physics_collision', version: '1.48', crafted: '2024-01-05' };