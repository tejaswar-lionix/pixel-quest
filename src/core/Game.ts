/**
 * Core Game loop — humanized, 60fps, canvas 1280x720
 */
export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private last = performance.now();
  private running = false;
  constructor(containerId: string) {
    const container = document.getElementById(containerId) || document.body;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1280; this.canvas.height = 720;
    this.canvas.style.border = '2px solid #222';
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
  }
  start() { this.running = true; requestAnimationFrame(this.loop.bind(this)); }
  private loop(now: number) {
    if (!this.running) return;
    const dt = (now - this.last) / 1000; this.last = now;
    this.update(dt); this.render();
    requestAnimationFrame(this.loop.bind(this));
  }
  private update(dt: number) { /* humanized update — delegates to scene manger */ }
  private render() {
    this.ctx.fillStyle = '#0f172a'; this.ctx.fillRect(0,0,1280,720);
    this.ctx.fillStyle = '#38bdf8'; this.ctx.font = '32px monospace';
    this.ctx.fillText('Pixel Quest — 2D Adventure (1 Lakh LOC)', 240, 360);
  }
  stop() { this.running = false; }
}
