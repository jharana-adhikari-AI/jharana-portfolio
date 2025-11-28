# Portfolio - React + Node.js + Tailwind CSS

A modern, high-profile personal portfolio website featuring smooth animations, dark/light mode, video portfolio, and a shareable resume system.

## Features

- **Modern Design**: Clean, unique design with smooth micro-interactions using Framer Motion
- **Dark/Light Mode**: Toggle with localStorage persistence
- **Responsive**: Fully responsive across all devices
- **Hero Section**: Full-bleed background with animated entrance, hidden navbar
- **Bio Section**: Profile photo, timeline, and achievement badges
- **Skills**: Interactive skill chips with animated progress bars
- **Portfolio**: Video projects with modal playback, category filtering
- **Testimonials**: Animated carousel with auto-play
- **Resume**: Downloadable PDF with shareable links and social sharing
- **Contact Form**: Validated form with server-side email delivery
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap

## Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Intersection Observer

### Backend
- Node.js + Express
- Nodemailer (SendGrid/SMTP)
- Express Validator
- Rate Limiting + Security (Helmet, CORS)

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install all dependencies
npm run install:all

# Or install separately
npm install
cd frontend && npm install
cd ../backend && npm install
```

### Development

```bash
# Run both frontend and backend concurrently
npm run dev

# Or run separately
npm run dev:frontend  # http://localhost:3000
npm run dev:backend   # http://localhost:5000
```

### Production Build

```bash
# Build frontend
npm run build

# Start backend server
npm start
```

## Configuration

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://yourportfolio.com

# Email (SendGrid)
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Or SMTP
# EMAIL_SERVICE=smtp
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password

# Contact
CONTACT_EMAIL=hello@yourportfolio.com

# Share Links
BASE_URL=https://yourportfolio.com
```

### Customization

1. **Personal Info**: Update `frontend/index.html` with your name, description, and social links
2. **Hero**: Edit `frontend/src/components/Hero.jsx` with your title and tagline
3. **Bio**: Update `frontend/src/components/Bio.jsx` with your timeline and badges
4. **Skills**: Modify `frontend/src/components/Skills.jsx` with your skills and levels
5. **Portfolio**: Add your projects in `frontend/src/components/PortfolioGrid.jsx`
6. **Testimonials**: Update `frontend/src/components/Testimonials.jsx`
7. **Contact**: Edit contact info in `frontend/src/components/ContactForm.jsx`

### Images

Place your images in `frontend/public/images/`:
- `hero-bg.jpg` - Hero background image
- `profile.jpg` - Your profile photo
- `og-image.jpg` - Open Graph social image (1200x630px)
- `projects/` - Project thumbnails
- `testimonials/` - Client photos

### Resume

Place your resume PDF at `frontend/public/resume.pdf`

## Deployment

### Frontend (Vercel/Netlify)

#### Vercel
```bash
cd frontend
vercel
```

#### Netlify
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Render/Heroku)

#### Render
1. Create a new Web Service
2. Connect your repository
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables

#### Heroku
```bash
cd backend
heroku create your-portfolio-api
git push heroku main
heroku config:set SENDGRID_API_KEY=your_key
```

### Full Stack (Railway/Fly.io)

Both frontend and backend can be deployed together on Railway or Fly.io with proper configuration.

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── resume.pdf
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── DarkToggle.jsx
│   │   │   ├── Bio.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── PortfolioGrid.jsx
│   │   │   ├── VideoModal.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.cjs
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── contactController.js
│   │   │   └── resumeController.js
│   │   ├── storage/
│   │   │   └── share-links.json
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/resume/share-link` | Generate shareable resume link |
| GET | `/api/resume/share/:id` | Access shared resume |
| GET | `/api/resume/download` | Download resume PDF |

## Performance

- Lazy loading for images
- Code splitting with Vite
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking
- Rate limiting on API endpoints

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Reduced motion support

## License

MIT License - feel free to use this for your own portfolio!

## Support

If you find this helpful, consider giving it a star on GitHub!
