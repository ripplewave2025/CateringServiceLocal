import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // In a real application, you would process this data:
  // - Send an email (e.g., using Nodemailer, SendGrid, etc.)
  // - Save to a database
  // - Integrate with a CRM

  console.log('Received contact form submission:', data);

  // Simulate a successful submission
  return NextResponse.json({ message: 'Inquiry received successfully!' }, { status: 200 });

  // To simulate an error:
  // return NextResponse.json({ message: 'Failed to send inquiry.' }, { status: 500 });
}
