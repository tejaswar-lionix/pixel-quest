import { describe, it, expect } from 'vitest';
import { sweptAABB } from '../core/sweptCollision';
import { EnemyAI } from '../entities/EnemyAI';
describe('physics extended — humanized', () => {
  it('swept detects wall', () => {
    const r = sweptAABB({x:0,y:0,w:10,h:10},{x:100,y:0},{x:50,y:0,w:10,h:10},0.016);
    expect(r.t).toBeLessThan(1);
  });
  it('AI transitions', () => {
    const ai = new EnemyAI(); expect(ai.update(200,100)).toBe('patrol'); expect(ai.update(30,100)).toBe('attack');
  });
  it('dash vector', async () => {
    const m = await import('../entities/PlayerDash');
    const d = new m.DashController(); const v = d.dash({x:1,y:0}); expect(v.x).toBe(600);
  });
});
