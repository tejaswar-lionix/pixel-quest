// Double jump & dash — humanized
export class DashController {
  canDoubleJump = false;
  coyoteTime = 0.12;
  dashCooldown = 0.8;
  private lastGrounded = 0;
  tryJump(isGrounded: boolean, vy: number, now: number) {
    if (isGrounded) { this.canDoubleJump = true; this.lastGrounded = now; return -420; }
    if (now - this.lastGrounded < this.coyoteTime) return -420;
    if (this.canDoubleJump) { this.canDoubleJump = false; return -380; }
    return vy;
  }
  dash(dir: {x:number,y:number}) {
    const mag = Math.hypot(dir.x, dir.y) || 1;
    return { x: dir.x/mag*600, y: dir.y/mag*600, invuln: 0.15 };
  }
}
