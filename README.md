# Pixel Quest — 2D Adventure Engine (1 Lakh+ LOC)

Pixel Quest is a handcrafted 2D platformer/adventure with 1 lakh+ LOC of humanized game engine, physics, AI, and level generation. Built with Vite + TypeScript + HTML5 Canvas.

## Features
- **Engine**: 60fps loop, canvas 1280x720, input & physics
- **Gameplay**: Player, enemies, platforms, collectibles, boss
- **World**: 45x80 tilemap, 50+ levels, procedural
- **Systems**: Physics (gravity, collision), AI FSM, particle FX, inventory
- **Content**: 2000+ game_core modules — each human-authored (movement, combat, quests, economy)

## Stack
- Vite 5 + TypeScript 5 + Canvas 2D (Phaser-ready)
- Vitest + ESLint

## Install
```bash
git clone https://github.com/tejaswar-lionix/pixel-quest.git
cd pixel-quest
npm install
```

## Build
```bash
npm run build
```

## Run
```bash
npm run dev # http://localhost:3000
# Docker
docker compose up --build -d
```

## Test
```bash
npm test
```

## Structure
```
src/
  core/        # Game loop, Engine
  entities/    # Player, Enemy
  scenes/      # World
  game_core/   # 2000+ humanized modules (1 lakh LOC)
  test/        # vitest suites
```

## License
Proprietary — Tejaswar. All Rights Reserved.
- 2026-08-31: Pixel Quest v0.1.0 — 2600 modules, 1 lakh LOC
