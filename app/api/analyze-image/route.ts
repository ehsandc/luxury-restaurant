import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const image = formData.get('image') as File

    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = buffer.toString('base64')

    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analyze this food image and provide:
              1. Dish identification
              2. Main ingredients
              3. Estimated nutritional information
              4. Wine pairing suggestions
              5. Similar dishes from our menu (Wagyu Ribeye, Truffle Carpaccio, Mediterranean Seabass, Duck à l'Orange, etc.)
              
              Format the response in a clear, elegant manner suitable for a luxury restaurant.`,
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:${image.type};base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 500,
    })

    return NextResponse.json({
      analysis: response.choices[0].message.content,
    })
  } catch (error) {
    console.error('Image Analysis Error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze image' },
      { status: 500 }
    )
  }
}
