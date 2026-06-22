import { statSync } from 'node:fs';
import path from 'node:path';

export const FALLBACK_BASE_URL = 'https://allyonoupdate.com';

export function lastModified(relativeFile: string): string {
  const stats = statSync(path.join(process.cwd(), relativeFile));
  return stats.mtime.toISOString().slice(0, 10);
}
