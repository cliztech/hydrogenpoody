import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

async function start() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }
  hydrateRoot(globalThis.document.getElementById('root')!, <RemixBrowser />);
}

start();
