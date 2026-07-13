export async function onRequestPost(context) {
  try {
    // 1. Get the data sent from your React frontend
    const requestData = await context.request.json();

    // 2. Safely grab your API key from Cloudflare's secure environment
    const apiKey = context.env.GEMINI_API_KEY;

    // 3. Make the fetch call to Google's Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    const data = await response.json();

    // 4. Send the result back to your frontend
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch' }), { status: 500 });
  }
}