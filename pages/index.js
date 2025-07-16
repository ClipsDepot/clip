export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto grid gap-16">

        {/* Logo and Navigation */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img src="/ChatGPT Image Jul 14, 2025, 07_58_55 PM.png" alt="ClipsDepot Logo" className="w-12 h-12 rounded" />
            <h1 className="text-2xl font-bold tracking-tight">ClipsDepot</h1>
          </div>
          <a
            href="#form"
            className="text-sm text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Get Started
          </a>
        </header>

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We Turn Your Long-Form Videos Into Viral Clips
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Perfect for podcasters, coaches, and creators. Submit your video, and we’ll turn it into viral Reels, Shorts, and TikToks — fast.
          </p>
          <a
            href="#form"
            className="bg-white text-black text-lg px-8 py-4 rounded-xl font-semibold inline-block"
          >
            Get 3 Free Clips
          </a>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h3 className="font-semibold text-xl mb-2">🎬 AI-Powered Editing</h3>
            <p className="text-gray-300">We detect hooks, cut fluff, and format clips for each platform automatically.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h3 className="font-semibold text-xl mb-2">⚡ Fast Delivery</h3>
            <p className="text-gray-300">Receive 3–10 clips in 24–72 hours, ready to post with subtitles and branding.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h3 className="font-semibold text-xl mb-2">✅ No Learning Curve</h3>
            <p className="text-gray-300">Just upload your video. We’ll handle the rest — edits, hooks, captions, and polish.</p>
          </div>
        </section>

        {/* Call to Action Form Anchor */}
        <section id="form" className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Video</h2>
          <p className="text-lg mb-6 text-gray-300">Start with 3 free clips. No credit card required.</p>
          <a
            href="https://tally.so/r/mVdWb9"  // placeholder link to be replaced
            target="_blank"
            className="bg-white text-black text-lg px-8 py-4 rounded-xl font-semibold inline-block"
            rel="noopener noreferrer"
          >
            Open Upload Form
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-20">
          © 2025 ClipsDepot.com — All rights reserved.
        </footer>
      </div>
    </main>
  );
}
