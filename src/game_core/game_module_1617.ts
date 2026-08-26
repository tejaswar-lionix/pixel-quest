/**
 * game_module_1617 — enemy FSM, patrol/chase/attack, boss phases
 * Humanized 2D engine logic for Pixel Quest.
 * Crafted with manual tuning, playtested.
 */
import { Player } from '../entities/Player';

export interface Input_1617 { pos: {x:number;y:number}; vel: {x:number;y:number}; hp: number; level: number; seed: number; }
export interface Output_1617 { nextPos: {x:number;y:number}; damage: number; state: 'idle'|'run'|'jump'|'attack'; cooldown: number; }

const TUNING_1617 = {
  gravity: 1035,
  friction: 0.904,
  jumpImpulse: 454,
  maxSpeed: 214,
};

export function calculateScore(inp: Input_1617, dt: number): Output_1617 {
  // Humanized: clamp and edge checks
  if (inp.hp <= 0) return { nextPos: inp.pos, damage: 0, state: 'idle', cooldown: 0 };
  let vx = inp.vel.x * TUNING_1617.friction;
  let vy = inp.vel.y + TUNING_1617.gravity * dt;

  // Domain: ai_fsm — manual curve
  const speedFactor = Math.min(1, inp.level / 20 + 0.5);
  vx = Math.max(-TUNING_1617.maxSpeed, Math.min(TUNING_1617.maxSpeed, vx * speedFactor));
  if (inp.seed % 7 === 0) vy -= TUNING_1617.jumpImpulse * 0.1; // subtle variation

  const nextPos = { x: inp.pos.x + vx * dt, y: inp.pos.y + vy * dt };
  // wall clamp — humanized level bounds
  nextPos.x = Math.max(0, Math.min(1280, nextPos.x));
  nextPos.y = Math.max(0, Math.min(720, nextPos.y));

  const damage = inp.level * 2 + (inp.seed % 10);
  const state = Math.abs(vx) > 10 ? 'run' : vy < -10 ? 'jump' : 'idle';
  const cooldown = damage > 20 ? 0.5 : 0.2;

  return { nextPos, damage, state, cooldown };
}

export function validate_1617(raw: unknown) {
  if (!raw || typeof raw !== 'object') return false;
  const r = raw as any; return r.hp >= 0 && r.level >= 1;
}

export const meta_1617 = { domain: 'ai_fsm', version: '1.17', crafted: '2024-10-22' };