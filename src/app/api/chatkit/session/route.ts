import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let deviceId = '';
  try {
    const body = await req.json();
    deviceId = body.deviceId ?? '';
  } catch (e) {
    deviceId = '';
  }

  const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'chatkit_beta=v1',
    },
    body: JSON.stringify({
      workflow: { id: 'wf_6902616790b48190a35134dada82765b06b383413e6170c2' },
      user: deviceId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json({ client_secret: data.client_secret });
}
