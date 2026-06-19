import { htmlResponse, notFoundResponse, staticHtmlPages } from "../site-html";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ filename: string }> },
) {
  const { filename } = await context.params;

  if (!staticHtmlPages.has(filename)) {
    return notFoundResponse();
  }

  return htmlResponse(filename);
}
