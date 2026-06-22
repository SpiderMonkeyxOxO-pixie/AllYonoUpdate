import { readFileSync } from 'node:fs';
import path from 'node:path';

export interface PlatformPromoCodes {
  platform: string;
  morning: string;
  afternoon: string;
  evening: string;
}

const PERIOD_PATTERN = /^Code\s*(AM|P\.?M\.?|Eve(?:ning)?):\s*(.*)$/i;

export function getPromoCodes(): PlatformPromoCodes[] {
  const filePath = path.join(process.cwd(), 'promo-code.txt');
  const raw = readFileSync(filePath, 'utf8');

  const blocks = raw
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0 && !block.startsWith('#'));

  const entries: PlatformPromoCodes[] = [];

  for (const block of blocks) {
    const lines = block
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'));
    if (lines.length === 0) continue;

    const platform = lines[0].replace(/:\s*$/, '').trim();
    let morning = '';
    let afternoon = '';
    let evening = '';

    for (const line of lines.slice(1)) {
      const match = line.match(PERIOD_PATTERN);
      if (!match) continue;
      const [, period, code] = match;
      if (/^am$/i.test(period)) morning = code.trim();
      else if (/^p\.?m\.?$/i.test(period)) afternoon = code.trim();
      else if (/^eve/i.test(period)) evening = code.trim();
    }

    entries.push({ platform, morning, afternoon, evening });
  }

  return entries;
}
