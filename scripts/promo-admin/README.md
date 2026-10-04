# Promo-code admin — code.allyonoupdate.com

A dependency-free Node server (`server.cjs`, Node 18+) for the daily
Morning / Afternoon / Evening promo codes. Single admin, no sign-up.

## How it works

AllYonoUpdate is a static Astro site: the codes inside its HTML are a snapshot
of `promo-code.txt` taken at build time. The admin writes **today's codes** to
`/promo-live.json`; the promo cards on `/promo-code-updates/` and the homepage
preview fetch it on every page load and apply it (`src/components/PromoLive.astro`).
No rebuild is needed — saves are live immediately.

- The live file is authoritative for every platform the admin lists: a blank box
  shows "Not released yet" even if the built HTML had an older code.
- Codes are set with `textContent`, so domain-style text such as `loverummy8.com`
  is stored and displayed as **plain text**, never a link.
- Launched apps (`apps.json` with a download link) that are missing from
  `promo-code.txt`, e.g. Jeet Spin, now get a card too.
- `npm run build` empties `dist/`, so the admin keeps a **master copy outside the
  repo** (`/www/wwwroot/allyonoupdate-admin-data/promo-live.json`). The npm
  `postbuild` hook (`restore.cjs`) copies it back after every build.

## One-time setup (on the VPS)

1. **DNS (Cloudflare):** A record `code` -> same IP as allyonoupdate.com.
2. **Deploy the site** with your usual steps (pull + build). Because the build
   empties `dist/`, use the same `.user.ini` handling you use for this site
   (if aaPanel locks `dist/.user.ini`, unlock it for the build and lock it again).
3. **Settings file OUTSIDE the repo** (replace the password, keep the single quotes):
   ```
   node -e "const c=require('crypto');const s=c.randomBytes(16);console.log('ADMIN_PASSWORD_HASH=scrypt:'+s.toString('hex')+':'+c.scryptSync(process.argv[1],s,64).toString('hex'));console.log('ADMIN_SESSION_SECRET='+c.randomBytes(32).toString('base64url'))" 'your-real-password' > /tmp/new.env
   (echo "ADMIN_USERNAME=Admin"; echo "PORT=3170"; cat /tmp/new.env) > /www/wwwroot/allyonoupdate-admin.env
   rm /tmp/new.env; chmod 600 /www/wwwroot/allyonoupdate-admin.env; history -c
   ```
4. **Start it** (from the site folder):
   ```
   ss -tlnp | grep 3170          # should print nothing (port free)
   pm2 start scripts/promo-admin/server.cjs --name allyonoupdate-admin
   pm2 save
   sleep 2; curl -s http://127.0.0.1:3170/healthz; echo     # -> ok
   ```
5. **aaPanel:** add site `code.allyonoupdate.com` (static) -> Reverse proxy: dir `/`,
   target `http://127.0.0.1:3170`, Sent Domain `$host`, **cache OFF**; then SSL
   (Let's Encrypt) + Force HTTPS.

If the website's files are served from a folder other than `<site>/dist`, set
`PROMO_LIVE=/that/path/promo-live.json` in the settings file.

## Daily use

Log in at https://code.allyonoupdate.com -> type codes into Morning / Afternoon /
Evening -> **Save changes**. **Start new day** clears everything. A warning appears
if the saved codes are from an earlier day.

## Notes

- Each save backs up the previous master to `/www/wwwroot/allyonoupdate-admin-data/backups/` (last 60 kept).
- 5 failed logins from one IP locks that IP out for 15 minutes; sessions last 8 h.
