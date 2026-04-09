# 🚀 Deployment Guide - American Duct Cleaning Website

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy Directly with Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project directory
cd american-duct-cleaning
vercel

# Follow the prompts:
# - Set project name: american-duct-cleaning
# - Framework: Vite
# - Root directory: ./
# - Build command: npm run build
# - Output directory: dist
```

**Your site will be live instantly!** 🎉

---

### Option 2: Deploy via GitHub (Full Integration)

#### Step 1: Push to GitHub
```bash
# Set up git credentials with personal access token
# 1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
# 2. Create new token with 'repo' scope
# 3. Copy the token

# In the project directory:
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Remove current remote if exists
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR-USERNAME/american-duct-cleaning.git
git push -u origin main
```

#### Step 2: Connect to Vercel
```bash
1. Go to vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for "american-duct-cleaning"
5. Click "Import"
6. Vercel auto-detects Vite settings
7. Click "Deploy"
```

---

### Option 3: Manual Build & Upload

```bash
# 1. Build the project
npm run build

# 2. Vercel will auto-detect the dist/ folder
# 3. Upload dist/ folder to Vercel or any static host

# Using Vercel CLI:
vercel deploy --prebuilt
```

---

## ✅ Deployment Checklist

- [ ] Have GitHub account
- [ ] Have Vercel account (free)
- [ ] Have Vercel CLI installed (`npm install -g vercel`)
- [ ] Code committed locally
- [ ] Ready to deploy

---

## 🌐 Custom Domain Setup

After deployment:

1. **Get your Vercel URL**
   - Check Vercel dashboard for your site URL
   - Example: `american-duct-cleaning.vercel.app`

2. **Add Custom Domain**
   - In Vercel Dashboard → Settings → Domains
   - Add your domain (e.g., americanductcleaning.com)
   - Update DNS records at your registrar

3. **DNS Configuration**
   - Vercel will provide DNS records to add
   - Update at your domain registrar (GoDaddy, Namecheap, etc.)
   - Wait 24-48 hours for propagation

---

## 📊 Environment Variables (if needed later)

Create `.env.local` in project root:
```
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=info@americanductcleaning.com
```

Redeploy after adding env vars:
```bash
vercel deploy --prod
```

---

## 🔧 CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

Add `VERCEL_TOKEN` to GitHub Secrets:
1. Go to GitHub → Settings → Secrets → New secret
2. Name: `VERCEL_TOKEN`
3. Value: Get from Vercel → Settings → Tokens

---

## 📱 Post-Deployment

### Monitor Performance
- Vercel Analytics dashboard
- Check Core Web Vitals
- Monitor error logs

### Continuous Deployment
- Every push to main branch auto-deploys
- Preview deployments for pull requests
- Instant rollback if needed

### Update Contact Form
To actually receive inquiries:
1. Connect form to email service:
   - SendGrid
   - Firebase
   - AWS SES
   - Mailgun

2. Update `src/components/ContactModal.jsx`:
```javascript
// Add API call to your backend
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

---

## 🎯 What's Deployed

- ✅ 11 React components
- ✅ Smooth Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ Mobile responsive design
- ✅ Contact form (ready to connect)
- ✅ Testimonials carousel
- ✅ SEO optimized

---

## 📞 Support

**Vercel Support:**
- Docs: vercel.com/docs
- Dashboard: vercel.com/dashboard

**Common Issues:**

### "npm install fails"
```bash
npm ci  # Use instead of npm install
```

### "Build command not found"
Check `package.json` → scripts section has `"build": "vite build"`

### "Port already in use"
Vercel uses port 3000 by default, it's fine

---

## 💡 Next Steps

1. Deploy to Vercel (following Option 1 above)
2. Get your live URL
3. Share with team
4. Connect contact form to email service
5. Set up custom domain
6. Monitor analytics

**Your site will be live in < 5 minutes!** 🚀

---

**Questions?** Check Vercel docs or GitHub Actions docs.

Happy deploying! 🎉
