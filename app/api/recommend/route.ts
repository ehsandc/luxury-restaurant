import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null

export async function POST(req: NextRequest) {
  try {
    if (!openai) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 503 }
      )
    }
    const { preferences, dietaryRestrictions, occasion } = await req.json()

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a sophisticated AI sommelier and dining advisor for Lumière restaurant. 
          Create personalized menu and wine recommendations based on guest preferences.
          
          Available menu categories:
          - Appetizers: Truffle Carpaccio, Oysters Rockefeller, Foie Gras Terrine
          - Mains: Wagyu Ribeye, Mediterranean Seabass, Duck à l'Orange
          - Desserts: Chocolate Soufflé, Crème Brûlée, Tarte Tatin
          - Wines: Château Margaux 2015, Dom Pérignon 2012, and exclusive vintages
          
          Provide a complete dining experience recommendation with detailed pairings.`,
        },
        {
          role: 'user',
          content: `Create a personalized menu recommendation for a guest with the following:
          Preferences: ${preferences}
          Dietary Restrictions: ${dietaryRestrictions || 'None'}
          Occasion: ${occasion || 'Casual dining'}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 800,
    })

    return NextResponse.json({
      recommendation: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('Recommendation Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate recommendation' },
      { status: 500 }
    )
  }
}
