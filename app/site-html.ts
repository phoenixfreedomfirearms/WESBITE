import { readFile } from "node:fs/promises";
import path from "node:path";

const htmlHeaders = {
  "content-type": "text/html; charset=utf-8",
};

export const staticHtmlPages = new Set([
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
]);

async function readHtml(filename: string) {
  if (!staticHtmlPages.has(filename)) {
    return null;
  }

  return readFile(path.join(process.cwd(), filename), "utf8");
}

export async function htmlResponse(filename: string, status = 200) {
  const html = await readHtml(filename);

  if (!html) {
    return notFoundResponse();
  }

  return new Response(html, {
    status,
    headers: htmlHeaders,
  });
}

export async function notFoundResponse() {
  const html = await readHtml("404.html");

  return new Response(html ?? "Not found", {
    status: 404,
    headers: htmlHeaders,
  });
}
