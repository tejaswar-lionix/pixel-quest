// Enemy FSM — humanized
export type State = 'patrol'|'chase'|'attack'|'retreat';
export class EnemyAI {
  state: State = 'patrol';
  hp = 100;
  vision = 180;
  update(playerDist: number, hp: number) {
    if (hp < 50 && this.state !== 'retreat') this.state = 'retreat';
    else if (playerDist < 40) this.state = 'attack';
    else if (playerDist < this.vision) this.state = 'chase';
    else this.state = 'patrol';
    return this.state;
  }
  nextPos(pos:{x:number,y:number}, target:{x:number,y:number}) {
    if (this.state === 'chase') return { x: pos.x + Math.sign(target.x-pos.x)*2, y: pos.y };
    return pos;
  }
}
