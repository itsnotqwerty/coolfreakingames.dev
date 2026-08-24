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

Deployment tooling is provided by the
[DONUT Deploy](https://github.com/itsnotqwerty/donut-deploy) submodule. Initialize
it after cloning, then run the installer with this application's settings:

```sh
git submodule update --init deploy
sudo ./deploy/install.sh \
	--name coolfreakingames \
	--domain coolfreakingames.dev \
	--port 8001 \
	--command "/usr/local/bin/deno run --allow-all main.ts"
```

Nginx and TLS certificates are prerequisites. Use `--http-only` while
bootstrapping a host before its certificates exist; the installer does not
obtain certificates.