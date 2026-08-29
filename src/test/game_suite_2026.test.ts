import { describe, it, expect } from 'vitest';
import * as mod from '../game_core/game_module_2026';
describe('game extended 2026', () => {
  it('handles quest', () => {
    const fn = Object.values(mod).find(v=>typeof v==='function') as any;
    if (!fn) return;
    const out = fn({x:0,y:0,hp:100,lvl:3,seed:1},0.016);
    expect(out.state).toBeDefined();
  });
});
