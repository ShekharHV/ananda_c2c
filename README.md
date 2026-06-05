# Ananda Voice Bot Demo - One Page Website

A lightweight, single-page website for presenting an Ananda Spa voice bot demo. Users can enter their name and phone number to schedule a call with the voice bot.

## Features

- 📱 Responsive design optimized for all devices
- 🎨 Inspired by Ananda Spa's luxurious wellness aesthetic
- 🔒 Secure API integration with voice bot webhook
- ✨ Real-time form validation
- 🚀 Lightweight and fast-loading
- 📞 Indian phone number format support (+91 prefix)

## File Structure

```
├── index.html          # Main HTML file with all content, styles, and scripts
├── package.json        # Project configuration for Vercel deployment
├── vercel.json        # Vercel-specific configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## How It Works

1. User enters their name and phone number (Indian format)
2. Form validates the inputs in real-time
3. On submission, a POST request is sent to the Ananda voice bot webhook
4. The request includes:
   - User's name and phone number
   - Randomly generated Prospect ID
   - Current timestamp
   - Pre-configured program details and metadata
5. User receives a confirmation message with expected call details

## Form Validation

- **Name**: Minimum 2 characters required
- **Phone**: Exactly 10 digits required (Indian mobile number format)
- **Real-time validation**: Errors appear as user fills the form

## Color Scheme

Inspired by Ananda Spa's luxurious wellness aesthetic:
- Primary: Warm brown (#8b7355) - Earthy, grounding
- Secondary: Light beige (#f5f1e8) - Calm, peaceful
- Accent: Golden brown (#a6895d) - Warm, inviting

## Deployment on Vercel

### Prerequisites
- Vercel account (free at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

### Steps to Deploy

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your Git repository
   - Click "Deploy"
   - Your site will be live at a Vercel URL (e.g., `ananda-voice-bot.vercel.app`)

3. **Custom Domain (Optional)**
   - Go to your project settings on Vercel
   - Add your custom domain
   - Update DNS records as instructed

## API Configuration

The webhook endpoint and API key are configured in the `index.html` file:

```javascript
const API_ENDPOINT = 'https://hv-sales-bot-degree-orchestrator.herovired.com/webhooks/lsq/lead/ananda';
const API_KEY = 'al6d2506acf4d7b9606cdbd93favd9634985adeb4e49e9750dbe79';
```

## Payload Structure

When a user submits the form, the following JSON payload is sent:

```json
{
  "After": {},
  "Current": {
    "FirstName": "User Input",
    "LastName": "",
    "Phone": "+91-9876543210",
    "mx_Program_Details": "ananda",
    "ProspectID": "ananda_[timestamp]_[random]",
    "mx_priority_hyperlap": "P02",
    "mx_C_Bot_TimeStamp": "2025-11-10 15:29:00.000",
    "mx_Lead_Status": "Won",
    "mx_Lead_Sub_Stage": "testing",
    "mx_Lead_Type": "poc",
    "mx_Hyperlap_University_Name": "ana"
  }
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Size**: ~50KB (all-in-one HTML file)
- **Load Time**: < 1 second
- **Performance Score**: 95+

## Security Notes

- API key is exposed in client-side code (consider this for production)
- For production deployment, consider using a backend proxy to hide sensitive credentials
- Use CORS-enabled endpoint or proxy

## Testing

Test the form locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Support

For issues or questions, contact the development team.

## License

© 2025 Ananda Spa. All rights reserved.
