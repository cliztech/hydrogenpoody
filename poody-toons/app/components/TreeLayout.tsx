import type {ReactNode} from 'react';

export function TreeLayout({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen bg-[var(--p-cream)] text-brown-900">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-3">
          <span className="font-bold">Poody Toons</span>
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="py-12 text-center text-sm">© Poody Toons</footer>
    </div>
  );
}
