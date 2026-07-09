export async function appendToGoogleSheet(data: {
  name: string;
  phone: string;
  tripDetail: string;
  email: string;
  date: string;
  groupSize: string;
  totalPrice: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('GOOGLE_SHEET_WEBHOOK_URL is not configured in environment variables.');
    return { success: false, reason: 'Webhook URL not configured' };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets Webhook returned status ${response.status}`);
    }

    const result = await response.json();
    return { success: result.status === 'success', result };
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return { success: false, error };
  }
}
