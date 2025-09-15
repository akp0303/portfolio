// app/page.tsx
import fs from "node:fs";
import path from "node:path";

type SiteData = {
  siteTitle: string;
  palette: { primary: string; accent: string; bg: string; text: string };
  logo: string;
  videos: { id: string; title: string; embedUrl: string; caption: string }[];
};

function readSiteData(): SiteData {
  const p = path.join(process.cwd(), "content", "site.json");
  const raw = fs.readFileSync(p, "utf-8");
  return JSON.parse(raw);
}

export default function Home() {
  const data = readSiteData();

  return (
    <main
      style={{
        background: data.palette.bg,
        color: data.palette.text,
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 16, padding: 16 }}>
        {data.logo && (
          <img src={data.logo} alt="Logo" style={{ height: 36 }} />
        )}
        <h1 style={{ margin: 0 }}>{data.siteTitle}</h1>
      </header>

      {/* 2x2 grid: 2 vertikale + 2 horisontale */}
      <section style={{ display: "grid", gap: 16, padding: 16, gridTemplateColumns: "1fr 1fr" }}>
        {data.videos.map((v) => (
          <article key={v.id} style={{ border: `1px solid ${data.palette.primary}20`, borderRadius: 12, padding: 12 }}>
            <h3 style={{ marginTop: 0 }}>{v.title}</h3>
            <div style={{ position: "relative", paddingTop: v.id.startsWith("vertical") ? "177%" : "56.25%" }}>
              {v.embedUrl ? (
                <iframe
                  src={v.embedUrl}
                  title={v.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 8
                  }}
                />
              ) : (
                <div style={{
                  position: "absolute", inset: 0, display: "grid", placeItems: "center",
                  border: "2px dashed #ccc", borderRadius: 8, fontSize: 14, opacity: 0.7
                }}>
                  Indsæt video-link i CMS
                </div>
              )}
            </div>
            {v.caption && <p style={{ marginTop: 8, fontSize: 14, opacity: 0.8 }}>{v.caption}</p>}
          </article>
        ))}
      </section>
    </main>
  );
}
