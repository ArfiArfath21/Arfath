import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Optionally accept deviceId from the client
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
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      workflow_id: 'wf_6902616790b48190a35134dada82765b06b383413e6170c2',
      device_id: deviceId
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json({ client_secret: data.client_secret });
}
