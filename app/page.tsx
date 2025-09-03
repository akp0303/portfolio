export default function Page() {
  return (
    <main className="min-h-screen px-6 py-10 font-sans">
      <h1 className="text-4xl font-extrabold">
        Alexander Kjærbæk Petersen
      </h1>
      <p className="mt-2 text-slate-600">
        Journaliststuderende – TV & feature.
      </p>

      <div className="mt-6 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border">
        {/* Byt src ud med dit eget Vimeo/YouTube-embed senere */}
        <iframe
          src="https://player.vimeo.com/video/76979871?h="
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Portfolio video"
        />
      </div>
    </main>
  );
}
