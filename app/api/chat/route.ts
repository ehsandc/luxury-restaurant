import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { message, context } = await req.json()

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are an expert AI dining assistant for Lumière, a luxury Michelin-starred restaurant. 
          You help guests with:
          - Menu recommendations based on preferences and dietary restrictions
          - Wine and beverage pairings
          - Information about ingredients and preparation methods
          - Reservation assistance
          - Special dietary accommodations
          
          Be sophisticated, helpful, and personalized in your responses. 
          Our signature dishes include: Wagyu Ribeye, Truffle Carpaccio, Mediterranean Seabass, Duck à l'Orange.
          We have an extensive wine collection including Château Margaux and Dom Pérignon.`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({
      message: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('AI Chat Error:', error)
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    )
  }
}
