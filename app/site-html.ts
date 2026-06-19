import { readFile } from "node:fs/promises";

const htmlHeaders = {
  "content-type": "text/html; charset=utf-8",
};

const staticHtmlFiles = {
  "index.html": new URL("../index.html", import.meta.url),
  "ffl-transfer.html": new URL("../ffl-transfer.html", import.meta.url),
  "inventory.html": new URL("../inventory.html", import.meta.url),
  "services.html": new URL("../services.html", import.meta.url),
  "custom-builds.html": new URL("../custom-builds.html", import.meta.url),
  "safety-classes.html": new URL("../safety-classes.html", import.meta.url),
  "survival-school.html": new URL("../survival-school.html", import.meta.url),
  "service-area.html": new URL("../service-area.html", import.meta.url),
  "suppressors.html": new URL("../suppressors.html", import.meta.url),
  "contact.html": new URL("../contact.html", import.meta.url),
  "terms.html": new URL("../terms.html", import.meta.url),
  "privacy.html": new URL("../privacy.html", import.meta.url),
  "cookies.html": new URL("../cookies.html", import.meta.url),
  "returns.html": new URL("../returns.html", import.meta.url),
  "404.html": new URL("../404.html", import.meta.url),
} satisfies Record<string, URL>;

export const staticHtmlPages = new Set(Object.keys(staticHtmlFiles));

async function readHtml(filename: string) {
  const fileUrl = staticHtmlFiles[filename as keyof typeof staticHtmlFiles];

  if (!fileUrl) {
    return null;
  }

  return readFile(fileUrl, "utf8");
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
