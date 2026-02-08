const messages = [
  { id: 1, author: "You", text: "Hey! Ready to build our chat app?" },
  { id: 2, author: "Teammate", text: "Absolutely. Let's start with the layout." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/40 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Chat App</p>
            <h1 className="text-2xl font-semibold">Realtime workspace</h1>
          </div>
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500">
            Invite teammates
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-6 py-10 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Rooms</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-xl bg-indigo-500/10 px-3 py-2 text-indigo-200"># general</li>
              <li className="rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800/60"># product</li>
              <li className="rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800/60"># design</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Active now</p>
            <div className="mt-4 space-y-3">
              {["Amira", "Diego", "Jordan"].map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">{name}</p>
                    <p className="text-xs text-slate-400">Typing...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold"># general</h2>
              <p className="text-sm text-slate-400">Team updates and project kickoff notes.</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              Online
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-hidden">
            {messages.map((message) => (
              <div
                key={message.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{message.author}</p>
                <p className="mt-2 text-sm text-slate-200">{message.text}</p>
              </div>
            ))}
          </div>

          <form className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
            <input
              className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
              placeholder="Write a message..."
              type="text"
            />
            <button
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
              type="button"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
