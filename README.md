# Shooting Game

A 2D side-scrolling shooter built with TypeScript and the HTML5 Canvas API.
Team final project (the "RS Clone" task) of the [RS School](https://rs.school/) JavaScript / Front-end course, February 2023.

> **Status:** this repository is archived and kept as the record of the team project.
> Development continues solo in [new-repo-link].

## Play

**Live demo:** <https://capable-pony-4f8733.netlify.app/> (verified to open in October 2026)

The year is 3023. Earth is under attack by giant insects from outer space, and you have been chosen to eliminate the invaders.

1. Press **Start** (or Enter) and read or skip the intro story.
2. Pick a hero with the arrow keys and confirm with Enter.
3. Survive and score points.

| Key       | Action                 |
| --------- | ---------------------- |
| ↑ / ↓     | Move the hero up / down |
| Space     | Shoot                  |

Rules: you start with 5 lives and 20 rounds of ammo; ammo regenerates over time up to 50. Every destroyed enemy adds its health value to your score, colliding with an enemy costs a life. Reaching 100 points wins the game, losing all lives ends it. After 20 seconds enemies start spawning faster.

Features:

- Parallax scrolling background and animated sprites for the hero and enemies
- Three enemy types per mode with random health, speed and score value
- Smoke and fire explosions, shooting and hit sound effects
- Day / night mode with its own enemy set, background and UI colours
- Settings modal with a background music player and volume control
- Help screen with an overview of the controls
- User login backed by a small JSON Server API (the free-tier backend is no longer online, so the login form does not work in the live demo)

## Tech stack

- TypeScript 4.9 (`strict` mode)
- HTML5 Canvas API for the game loop and rendering, vanilla DOM for the menus
- webpack 5 (ts-loader, css-loader, html-loader, copy-webpack-plugin)
- ESLint + Prettier
- Deployed on Netlify

## Team

| Member              | GitHub                                                         | Area of responsibility                                                                                                                      |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Nazima Jumaniyazova | [@nazimajumaniyazova](https://github.com/nazimajumaniyazova)   | Game engine on Canvas (`src/game/*`): game loop, player, enemies, shooting, collisions, explosions, sound, score, night mode                 |
| Anton Fiolkovski    | [@AntonFio](https://github.com/AntonFio)                       | Authorization and API client (`src/type/loginModal.ts`, `src/type/api.ts`), help screen, settings modal, footer                            |
| Ayur Tushinov       | [@mighty-mite](https://github.com/mighty-mite)                 | Hero selection, screen rendering, utilities, story intro screen                                                                             |

## Project structure

```
src/
  index.ts              entry point: imports styles and all screens
  starting.ts           welcome screen and typed intro story
  choose-hero.ts        hero selection and game start (requestAnimationFrame loop)
  render.ts, utils.ts   screen rendering helpers
  game/                 game engine
    Game.ts             game state, update/draw, collisions, enemy spawning
    Player.ts, Enemy.ts, Projectile.ts, Explostion.ts
    Background.ts, Layer.ts   parallax background
    InputHandler.ts     keyboard input
    UI.ts               score, lives, win / lose messages
  type/                 login modal, API client, help screen, settings modal
  footer/               footer with team links
  catalog-img/, sounds/ images, music and sound effects
```

## Running locally

Requires Node.js and npm.

```bash
npm ci
npm start        # dev server, opens the game in the browser
npm run build    # production build into dist/
npm run lint
```

### Known build problems (October 2026)

The project has not been maintained since February 2023, and a fresh checkout does not build out of the box:

- `npm ci` fails with `EINTEGRITY`. The integrity hashes in `package-lock.json` were damaged by a project-wide `td` → `div` find-and-replace in commit c643e68 (`fix: markup`, 2023-02-08), so 86 of them no longer match the npm registry.
- `npm install` without the lockfile pulls the latest `@types/node`, whose syntax TypeScript 4.9 cannot parse, and `npm run build` fails with 50 errors in `ffi.d.ts`.

Workaround, verified with Node.js 24 and npm 11 in October 2026:

```bash
rm package-lock.json
npm install
npm install --no-save -D @types/node@18
npm run build
```

These issues are left as they are: this repository is an archive of the team project, and development continues in the new repository.

## History

The code was developed in the `develop` branch through feature branches and pull requests.
`main` received the final code in October 2026, after the project had been finished, so that it is visible on the repository front page.
