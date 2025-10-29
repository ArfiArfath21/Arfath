"use client";

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const load = async () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.platform.openai.com/deployments/chatkit/chatkit.js';
      script.defer = true;
      script.onload = async () => {
        await customElements.whenDefined('openai-chatkit');
        const el = document.getElementById('investment-chat') as any;
        try {
          const res = await fetch('/api/chatkit/session', { method: 'POST' });
          const { client_secret } = await res.json();
          if (!client_secret || !el) {
            console.error('Missing client secret or chat element');
            return;
          }
          el.setOptions({
            api: {
              getClientSecret: () => client_secret,
            },
            startScreen: {
              greeting: "Hello! Enter a company name (e.g., 'Apple', 'TCS', 'Reliance') and I'll generate an investment analysis.",
            },
          });
        } catch (err) {
          console.error('Failed to load session', err);
        }
      };
      document.head.appendChild(script);
    };
    load();
  }, []);

  return (
    <div className="flex justify-center p-4">
      <openai-chatkit id="investment-chat" style={{ width: '100%', height: '600px' }}></openai-chatkit>
    </div>
  );
}
