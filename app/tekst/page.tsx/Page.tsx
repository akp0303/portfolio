// app/tekst/page.tsx
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

function readTekst() {
  const p = path.join(process.cwd(), "content", "tekst.md");
  const raw = fs.readFileSync(p, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as { title?: string }, content };
}

export default function TekstSide() {
  const { frontmatter, content } = readTekst();
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif", maxWidth: 800, margin: "0 auto" }}>
      <h1>{frontmatter.title ?? "Tekstproduktion"}</h1>
      <article style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{content}</article>
    </main>
  );
}
