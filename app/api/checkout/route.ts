import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });
export async function POST(req) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: 'price_id_here', quantity: 1 }],
    mode: 'payment',
    success_url: 'https://caplocations.com/success',
    cancel_url: 'https://caplocations.com/cancel'
  });
  return NextResponse.json({ sessionId: session.id });
}