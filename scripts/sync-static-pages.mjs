import { cpSync, existsSync, mkdirSync } from "node:fs";
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

for (const relativeFile of filesToCopy) {
  const from = path.join(rootDir, relativeFile);
  const to = path.join(publicDir, relativeFile);

  if (!existsSync(from)) {
    throw new Error(`Missing static file: ${relativeFile}`);
  }

  cpSync(from, to);
}
