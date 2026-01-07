# 🚀 Quick Setup Guide - GS Agritech Website

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including React, Tailwind CSS, Framer Motion, and other dependencies.

## Step 2: Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

## Step 3: Customize Your Content

### 📝 Update Company Information

#### Contact Details
Edit these files with your actual information:

1. **Navbar Top Bar** - `src/components/Navbar.jsx` (Lines 38-45)
   - Update phone number
   - Update email address

2. **Footer** - `src/components/Footer.jsx` (Lines 67-95)
   - Update address
   - Update phone numbers
   - Update email addresses
   - Update business hours
   - Update social media links

3. **Contact Section** - `src/components/sections/Contact.jsx` (Lines 41-64)
   - Update all contact information
   - Update WhatsApp link
   - Update Google Maps embed

### 🖼️ Replace Images

#### Method 1: Use Your Own Images
1. Create a folder: `public/images/`
2. Place your photos there
3. Update image paths in components:

**Hero Section** - `src/components/sections/Hero.jsx`:
```javascript
// Line 15 - Background image
src="https://..." 
// Change to:
src="/images/your-banana-photo.jpg"

// Line 137 - Side image
src="https://..."
// Change to:
src="/images/your-image.jpg"
```

**About Section** - `src/components/sections/About.jsx`:
```javascript
// Line 48
src="https://..."
// Change to:
src="/images/about-image.jpg"
```

**Gallery Section** - `src/components/sections/Gallery.jsx`:
```javascript
// Update the images array (Lines 8-49) with your actual images
const images = [
  {
    url: '/images/your-photo-1.jpg',
    title: 'Your Title',
    category: 'Your Category'
  },
  // ... add more
]
```

#### Method 2: Keep Using Unsplash (Temporary)
The website currently uses Unsplash placeholder images. These work for development but should be replaced with your actual photos before going live.

### 📧 Set Up Contact Form

The contact form currently just shows a success message. To make it functional:

#### Option 1: EmailJS (Easiest - Free)
1. Sign up at https://emailjs.com
2. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
3. Follow instructions in `DEPLOYMENT_GUIDE.md`

#### Option 2: Use Formspree
1. Sign up at https://formspree.io
2. Update form in `src/components/sections/Contact.jsx`

### 🎨 Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Currently orange - change these hex values
    500: '#f97316',
    600: '#ea580c',
    // ... etc
  },
  secondary: {
    // Currently green - change these hex values
    500: '#22c55e',
    600: '#16a34a',
    // ... etc
  }
}
```

### ✏️ Update Content Text

#### Hero Section
File: `src/components/sections/Hero.jsx`
- Line 48-52: Main headline
- Line 61-65: Subheading text
- Line 92-96: Statistics (50+ Countries, 10K+ Shipments, 99% Satisfaction)

#### About Section
File: `src/components/sections/About.jsx`
- Line 62-66: Section heading
- Line 68-72: First paragraph
- Line 74-77: Second paragraph

#### Export Process
File: `src/components/sections/ExportProcess.jsx`
- The detailed steps are already included based on your requirements
- You can modify the `steps` array (Lines 8-110) to adjust content

#### Products
File: `src/components/sections/Products.jsx`
- Line 7-40: Banana varieties (add/remove/modify)
- Line 42-73: Specifications

#### Testimonials
File: `src/components/sections/Testimonials.jsx`
- Line 7-48: Replace with real testimonials from your clients

## Step 4: Test Everything

### Test Navigation
- Click all menu items
- Ensure smooth scrolling works
- Test on mobile (responsive design)

### Test Forms
- Fill out contact form
- Check validation
- Verify submission works (after setting up EmailJS/Formspree)

### Test Responsiveness
- Resize browser window
- Test on phone
- Test on tablet

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Step 6: Deploy

Follow the detailed instructions in `DEPLOYMENT_GUIDE.md`

**Recommended platforms:**
- Netlify (easiest)
- Vercel (also easy)
- Traditional hosting (cPanel)

## 🎯 Priority Checklist

Before launching:

- [ ] Replace all placeholder images
- [ ] Update all contact information
- [ ] Set up contact form backend
- [ ] Add real client testimonials
- [ ] Test on multiple devices
- [ ] Update sitemap.xml with your domain
- [ ] Set up custom domain
- [ ] Enable SSL (automatic on Netlify/Vercel)
- [ ] Add Google Analytics (optional)
- [ ] Submit to Google Search Console

## 📁 Project Structure

```
gs-agritech-website/
├── public/
│   ├── _redirects          # For Netlify routing
│   ├── robots.txt          # SEO
│   ├── sitemap.xml         # SEO
│   └── banana-icon.svg     # Favicon
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── ExportProcess.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Statistics.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
├── SETUP_GUIDE.md
└── DEPLOYMENT_GUIDE.md
```

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Update all dependencies
npm update
```

## 💡 Tips

1. **Start with development server** (`npm run dev`) to see changes in real-time
2. **Use browser DevTools** to test mobile view (F12 → Toggle device toolbar)
3. **Make small changes** and test frequently
4. **Keep a backup** of your original files before making changes
5. **Use Git** for version control

## 🆘 Troubleshooting

### "Command not found: npm"
Install Node.js from https://nodejs.org

### Port 3000 already in use
The dev server will automatically use a different port (3001, 3002, etc.)

### Images not showing
- Check file paths (case-sensitive)
- Ensure images are in `public` folder
- Use absolute paths: `/images/photo.jpg`

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if Tailwind CSS is working
- Restart dev server

## 📞 Need Help?

Check these resources:
- React Documentation: https://react.dev
- Tailwind CSS Docs: https://tailwindcss.com
- Vite Guide: https://vitejs.dev
- Framer Motion: https://www.framer.com/motion

---

**You're all set! Happy customizing! 🎉**


