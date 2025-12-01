# Lumière - Luxury Restaurant Website with AI

A stunning, modern restaurant website featuring cutting-edge AI capabilities including chatbot assistance, personalized recommendations, and image recognition.

## ✨ Features

### 🎨 Beautiful Design
- **Modern & Luxurious UI** - Sleek black & gold color scheme
- **Smooth Animations** - Framer Motion powered interactions
- **Responsive Design** - Perfect on all devices
- **Glass Morphism Effects** - Contemporary styling

### 🤖 AI-Powered Features
- **AI Chatbot** - Real-time assistance powered by GPT-4
- **Smart Recommendations** - Personalized menu suggestions
- **Image Recognition** - Analyze food photos for nutritional info and pairings
- **AI Sommelier** - Wine pairing recommendations

### 📱 Sections
- Hero with stunning visuals
- AI Features showcase
- Interactive menu with categories
- Beautiful gallery
- About section with statistics
- Reservations form
- Contact information with map
- AI Chatbot floating widget

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- OpenAI API key (get one at https://platform.openai.com/)

### Installation

1. Navigate to the project directory:
```bash
cd luxury-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Open `.env.local` file
   - Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   OPENAI_MODEL=gpt-4-turbo-preview
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **AI:** OpenAI GPT-4 & Vision API
- **Forms:** React Hook Form

## 📁 Project Structure

```
luxury-restaurant/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # AI chatbot endpoint
│   │   ├── recommend/route.ts     # Personalized recommendations
│   │   └── analyze-image/route.ts # Image recognition
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Hero.tsx                   # Hero section
│   ├── AIFeatures.tsx             # AI features showcase
│   ├── Menu.tsx                   # Interactive menu
│   ├── Gallery.tsx                # Image gallery
│   ├── About.tsx                  # About section
│   ├── Reservations.tsx           # Booking form
│   ├── Contact.tsx                # Contact information
│   ├── AIChatbot.tsx              # Floating AI chatbot
│   └── Footer.tsx                 # Footer
├── .env.local                     # Environment variables
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
└── package.json                   # Dependencies

```

## 🤖 AI Features Details

### 1. AI Chatbot
- Real-time chat assistance
- Menu recommendations
- Ingredient information
- Reservation help
- Dietary restriction guidance

### 2. Smart Recommendations
- Personalized menu suggestions
- Based on preferences and restrictions
- Occasion-appropriate selections
- Wine pairings included

### 3. Image Recognition
- Upload food photos
- Get nutritional information
- Ingredient identification
- Pairing suggestions
- Similar menu items

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the gold color scheme:
```typescript
colors: {
  gold: {
    // Your custom color palette
  }
}
```

### Content
- Update menu items in `components/Menu.tsx`
- Modify gallery images in `components/Gallery.tsx`
- Change contact info in `components/Contact.tsx`

### AI Prompts
Customize AI behavior in the API routes:
- `app/api/chat/route.ts`
- `app/api/recommend/route.ts`
- `app/api/analyze-image/route.ts`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (OPENAI_API_KEY)
5. Deploy!

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean

## 📝 Environment Variables

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview  # or gpt-4, gpt-3.5-turbo
```

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Keep your OpenAI API key private
- Use environment variables for all sensitive data
- Implement rate limiting for production use

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify for your own projects.

## 🙏 Credits

- **Design Inspiration:** Modern luxury restaurant websites
- **Images:** Unsplash
- **Icons:** Lucide React
- **AI:** OpenAI GPT-4

## 💡 Tips

1. **Performance:** Optimize images for production
2. **SEO:** Add meta tags and structured data
3. **Analytics:** Integrate Google Analytics
4. **Monitoring:** Set up error tracking (Sentry)
5. **Rate Limiting:** Implement for AI endpoints

## 🐛 Troubleshooting

### AI Features Not Working
- Check your OpenAI API key in `.env.local`
- Ensure you have credits in your OpenAI account
- Check the browser console for errors

### Styling Issues
- Run `npm run dev` to restart the dev server
- Clear browser cache
- Check Tailwind CSS configuration

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (needs 18+)

## 📞 Support

For issues or questions, please check the documentation or create an issue in the repository.

---

Made with ❤️ and powered by AI
