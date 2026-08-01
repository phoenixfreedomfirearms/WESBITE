import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

const filesToCopy = [
  "index.html",
  "ffl-transfer.html",
  "inventory.html",
  "services.html",
  "custom-builds.html",
  "safety-classes.html",
  "survival-school.html",
  "service-area.html",
  "suppressors.html",
  "contact.html",
  "terms.html",
  "privacy.html",
  "cookies.html",
  "returns.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "image-sitemap.xml",
  "site.webmanifest",
];

mkdirSync(publicDir, { recursive: true });

const relativeAssetPattern =
  /\b(?:href|src)="(?:assets\/|site\.webmanifest\b)/;

for (const relativeFile of filesToCopy) {
  const from = path.join(rootDir, relativeFile);
  const to = path.join(publicDir, relativeFile);

  if (!existsSync(from)) {
    throw new Error(`Missing static file: ${relativeFile}`);
  }

  if (relativeFile.endsWith(".html")) {
    const source = readFileSync(from, "utf8");

    if (relativeAssetPattern.test(source)) {
      throw new Error(
        `Relative asset URL found in ${relativeFile}. Use root-relative /assets/... and /site.webmanifest paths so clean URLs load CSS, JS, and images.`,
      );
    }
  }

  cpSync(from, to);
}
