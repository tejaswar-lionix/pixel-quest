// World scene — humanized tilemap and level loader
export class World {
  tiles: number[][] = Array.from({length: 45}, () => Array(80).fill(0));
  loadLevel(n: number) { /* humanized procedural gen */ for(let y=40;y<45;y++) for(let x=0;x<80;x++) this.tiles[y][x]=1; }
}
