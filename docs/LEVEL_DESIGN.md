# Level Design Handbook

## Tilemap
45 rows x 80 cols, tile 16px.

## Tile Types
0 air, 1 ground, 2 slope/, 3 slope\, 4 spike, 5 platform, 6 coin, 7 enemy spawn

## Procedural
- Seed = level*9973
- Rooms 12x8, carve corridors
- Difficulty = level*0.15 + random*0.1

## Example
```ts
world.loadLevel(5); // generates platforms at y=40-45
```
