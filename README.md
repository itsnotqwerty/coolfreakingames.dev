# Cool Freakin' Games

The hub site for [coolfreakingames.dev](https://coolfreakingames.dev) — a small
landing page linking to the games:

- [16spaces](https://16spaces.coolfreakingames.dev) — a 4×4 abstract strategy game.
- [FlockWatch](https://flockwatch.coolfreakingames.dev) — a satirical text MMORPG.

## Run locally

Install [Deno](https://docs.deno.com). Then:

```sh
deno task start
```

The server listens on port `8001` by default (override with `PORT`). Views live
in `static/views/` and are served by the router in `src/routes/views.ts`.

## Deploy

Same structure as the other apps in this monorepo: a systemd unit, an nginx
reverse proxy, and an idempotent installer.

```sh
sudo ./deploy/install.sh --domain coolfreakingames.dev --email you@example.com
```

The installer provisions the app under `/opt/coolfreakingames`, creates a
`coolfreakingames` system user, installs and starts `coolfreakingames.service`,
obtains a Let's Encrypt certificate, and configures nginx. See
`./deploy/install.sh --help` for options (`--tls selfsigned|none`, `--port`,
`--no-service`, ...).