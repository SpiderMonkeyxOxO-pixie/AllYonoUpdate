const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'WEBP YONO LOGO');
const DEST_DIR = path.join(__dirname, '..', 'public', 'images', 'games');
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'gameLogos.ts');

// Files that are not individual game logos (site brand mark) or are exact
// duplicates of another file already covered below (same image, redundant name).
const EXCLUDE = new Set(['MAIN-LOGO-1024px.webp', 'Club INR (1).webp', 'Jaiho-Arcade.webp']);

// Hand-curated display name per source filename (without extension).
const NAMES = {
  '101z': '101Z',
  '567 Slots': '567 Slots',
  '777Game': '777 Game',
  '789 Jackpot': '789 Jackpot',
  'ABC Rummy': 'ABC Rummy',
  'Bet 213': 'Bet 213',
  'Bingo 101': 'Bingo 101',
  'Boss-Rummy': 'Boss Rummy',
  'Club INR': 'Club INR',
  'Game Rummy': 'Game Rummy',
  'Gogo Rummy': 'Gogo Rummy',
  'Hi Rummy': 'Hi Rummy',
  'Hindi777': 'Hindi 777',
  'INR-Rummy': 'INR Rummy',
  'Ind Bingo': 'Ind Bingo',
  'Ind Club': 'Ind Club',
  'Ind Rummy': 'Ind Rummy',
  'Ind Slots': 'Ind Slots',
  'Jahio 777': 'Jahio 777',
  'Jaiho Arcade': 'Jaiho Arcade',
  'Jaiho Rummy': 'Jaiho Rummy',
  'Jaiho Slot': 'Jaiho Slot',
  'Jaiho Spin': 'Jaiho Spin',
  'Jaiho Win': 'Jaiho Win',
  'Jaiho91': 'Jaiho91',
  'Joy-Rummy': 'Joy Rummy',
  'Love Rummy': 'Love Rummy',
  'MBM Bet': 'MBM Bet',
  'Maha Games': 'Maha Games',
  'Neta Vip': 'Neta Vip',
  'OkRUMMY-e1760950706977-1': 'OK Rummy',
  'Rumble Rummy': 'Rumble Rummy',
  'Rummy 91': 'Rummy 91',
  'Rummy-Ludo-LOGO': 'Rummy Ludo',
  'Rummy77': 'Rummy77',
  'Rummy888': 'Rummy888',
  'Saga Slots': 'Saga Slots',
  'Share Slots': 'Share Slots',
  'Slot Spin': 'Slot Spin',
  'Slots Winner': 'Slots Winner',
  'Spin 101': 'Spin 101',
  'Spin 777': 'Spin 777',
  'Spin Crush': 'Spin Crush',
  'Spin Gold': 'Spin Gold',
  'Spin Lucky': 'Spin Lucky',
  'Spin Winner': 'Spin Winner',
  'Top Rummy': 'Top Rummy',
  'Yes Spin': 'Yes Spin',
  'Yn 777': 'Yn 777',
  'Yono 777': 'Yono 777',
  'Yono Arcade': 'Yono Arcade',
  'Yono Games': 'Yono Games',
  'Yono Rummy': 'Yono Rummy',
  'Yono Slots': 'Yono Slots',
  'Yono Vip': 'Yono Vip',
  aelorbg65owsgr1pvyv2: 'Untitled Game 1',
  at9zwghcmujmrj8fze1h: 'Untitled Game 2',
};

function slugify(base) {
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

fs.mkdirSync(DEST_DIR, { recursive: true });

const files = fs.readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith('.webp') && !EXCLUDE.has(f));

const entries = [];
for (const file of files) {
  const base = file.replace(/\.webp$/i, '');
  const name = NAMES[base];
  if (!name) {
    throw new Error(`No display name mapped for "${file}" — add it to NAMES before running.`);
  }
  const slug = slugify(base);
  const destFile = `${slug}.webp`;
  fs.copyFileSync(path.join(SRC_DIR, file), path.join(DEST_DIR, destFile));
  entries.push({ name, slug, src: `/images/games/${destFile}` });
}

entries.sort((a, b) => a.name.localeCompare(b.name));

const tsContent = `export interface GameLogo {
  name: string;
  slug: string;
  src: string;
}

export const gameLogos: GameLogo[] = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(OUT_FILE, tsContent);

console.log(`Copied ${entries.length} game logos to ${DEST_DIR}`);
console.log(`Wrote ${OUT_FILE}`);
