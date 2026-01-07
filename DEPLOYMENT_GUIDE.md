# 🚀 Deployment Guide - GS Agritech Website

This guide will help you deploy your website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Replace all placeholder images with your actual company photos
- [ ] Update contact information (phone, email, address)
- [ ] Add real testimonials from actual clients
- [ ] Test the website on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS and Android)
- [ ] Set up a form submission backend (see Form Setup section below)
- [ ] Update sitemap.xml with your actual domain
- [ ] Add Google Analytics tracking code (optional)
- [ ] Verify all links are working
- [ ] Optimize images for web (compress without losing quality)

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)

**Why Netlify?**
- Free hosting with SSL certificate
- Automatic deployments from Git
- Built-in CDN for fast loading
- Easy custom domain setup

**Steps:**

1. **Build your project locally first (to test):**
   ```bash
   npm run build
   ```

2. **Create a Netlify account:**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or email

3. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

4. **Deploy on Netlify:**
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings (Netlify auto-detects, but verify):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

5. **Custom Domain Setup (Optional):**
   - Go to Domain settings in Netlify
   - Add your custom domain (e.g., www.gsagritech.com)
   - Update DNS records as instructed by Netlify
   - SSL certificate is automatically configured

### Option 2: Vercel (Also Free & Excellent)

**Steps:**

1. **Push code to GitHub** (same as above)

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Custom Domain:**
   - Go to project settings
   - Add custom domain
   - Update DNS records

### Option 3: Traditional Web Hosting (cPanel)

**Steps:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Log in to your cPanel
   - Go to File Manager
   - Navigate to `public_html` or your domain folder
   - Upload all files from the `dist` folder
   - Ensure the directory structure is maintained

3. **Configure .htaccess for React Router:**
   Create a `.htaccess` file in the root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 4: AWS S3 + CloudFront (Professional Setup)

**For high-traffic, professional deployment:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3 Console
   - Create a new bucket
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Set up CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate
   - Set up custom domain

4. **Update DNS:**
   - Point your domain to CloudFront distribution

## 📧 Form Submission Setup

The contact form currently logs to console. Here are options to make it functional:

### Option 1: EmailJS (Free, Easy)

1. Sign up at https://emailjs.com
2. Create an email template
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update `src/components/sections/Contact.jsx`:
   ```javascript
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = (e) => {
     e.preventDefault()
     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       formData,
       'YOUR_PUBLIC_KEY'
     ).then(() => {
       setFormStatus('success')
     })
   }
   ```

### Option 2: Formspree (Free Tier Available)

1. Sign up at https://formspree.io
2. Create a form
3. Update form action:
   ```javascript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Custom Backend API

Create your own API endpoint to handle form submissions and send emails.

## 📊 Add Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🔍 SEO Optimization

### Update Sitemap
In `public/sitemap.xml`, replace `https://www.gsagritech.com/` with your actual domain.

### Submit to Search Engines

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Go to https://www.bing.com/webmasters
   - Add site
   - Submit sitemap

### Add Structured Data (Optional)

Add JSON-LD schema to help search engines understand your business better.

## 🖼️ Image Optimization

Before deploying, optimize your images:

1. **Use tools like:**
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)

2. **Recommended sizes:**
   - Hero images: 1920x1080px, max 300KB
   - Gallery images: 800x600px, max 150KB
   - Thumbnails: 400x300px, max 50KB

3. **Format:**
   - Use WebP for better compression
   - Fallback to JPG for compatibility

## 📱 Testing Checklist

### Desktop Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad

### Performance Testing
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] WebPageTest

## 🔒 Security

### Enable HTTPS
All recommended hosting platforms (Netlify, Vercel) provide free SSL certificates automatically.

### Environment Variables
If you add sensitive data (API keys), use environment variables:

1. Create `.env` file (don't commit this!)
2. Add variables:
   ```
   VITE_API_KEY=your_key_here
   ```
3. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

## 🎯 Post-Deployment

After deployment:

1. **Test everything:**
   - All navigation links
   - Contact form submission
   - Mobile responsiveness
   - Page load speed

2. **Monitor:**
   - Set up Google Analytics
   - Monitor form submissions
   - Check for broken links regularly

3. **Maintain:**
   - Update content regularly
   - Add new testimonials
   - Refresh product information
   - Keep dependencies updated:
     ```bash
     npm update
     ```

## 💡 Tips for Success

1. **Content is King:** Regularly update with fresh content
2. **Performance:** Keep images optimized and code lean
3. **Mobile First:** Most traffic will be mobile
4. **SEO:** Update meta descriptions, add blog posts
5. **Social Proof:** Add real testimonials and case studies
6. **Call to Action:** Make it easy for clients to contact you

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)
Ensure you've configured redirects for Single Page Applications (SPA).

**Netlify:** Create `public/_redirects` file:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images Not Loading
- Check image paths (case-sensitive on Linux servers)
- Ensure images are in the `public` folder
- Use relative paths: `/images/photo.jpg`

## 📞 Need Help?

If you encounter issues during deployment, check:
- Platform documentation (Netlify/Vercel docs)
- Build logs for specific errors
- Community forums

---

**Good luck with your deployment! 🚀**


