import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the performance creative homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AI Marketing Tunisia — Publicités vidéo &amp; statiques pensées pour convertir<\/title>/i);
  assert.match(html, /Des pubs qui arrêtent le scroll\./);
  assert.match(html, /Et donnent envie d’acheter\./);
  assert.match(html, /34\.5K/);
  assert.match(html, /638/);
  assert.match(html, /Six angles\. Un seul produit\. Zéro répétition\./);
  assert.match(html, /https:\/\/www\.instagram\.com\/aimarketingagencytn\//);
  assert.match(html, /tunisian-rocking-chair-comparison-ad\.webp/);
  assert.match(html, /solid-wood-tufted-leather-rocking-chair-ad\.webp/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps the finished site free of starter preview dependencies", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<AgencySite \/>/);
  assert.match(layout, /AI Marketing Tunisia/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
  await access(new URL("public/work/static-ads/tunisian-rocking-chair-lifestyle-ad.webp", templateRoot));
});
