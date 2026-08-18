import { Vec2 } from '../core/Engine';
export class Player {
  pos: Vec2 = { x: 100, y: 100 };
  vel: Vec2 = { x: 0, y: 0 };
  hp = 100;
  update(dt: number, input: Record<string, boolean>) {
    if (input['ArrowLeft']) this.vel.x = -220;
    else if (input['ArrowRight']) this.vel.x = 220;
    else this.vel.x *= 0.85;
    if (input[' '] && Math.abs(this.vel.y) < 1) this.vel.y = -420;
  }
}
