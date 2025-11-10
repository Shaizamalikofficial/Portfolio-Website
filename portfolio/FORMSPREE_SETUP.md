# Formspree Setup Guide

## Quick Setup Steps

1. **Create a Formspree Account**
   - Go to https://formspree.io/register
   - Sign up with your email (free plan available)

2. **Create a New Form**
   - After logging in, click "New Form" or "Create Form"
   - Give it a name like "Portfolio Contact"
   - Click "Create"

3. **Get Your Form ID**
   - After creating the form, you'll see a URL like:
     `https://formspree.io/f/YOUR_FORM_ID`
   - Copy the `YOUR_FORM_ID` part (e.g., `xrgvqkzd`)

4. **Add Form ID to Environment Variables**
   - Create a file named `.env.local` in the `portfolio` folder
   - Add this line:
     ```
     NEXT_PUBLIC_FORMSPREE_ID=YOUR_FORM_ID
     ```
   - Replace `YOUR_FORM_ID` with the actual ID you copied

5. **Restart Your Dev Server**
   - Stop the dev server (Ctrl+C)
   - Run `npm run dev` again

6. **Test the Contact Form**
   - Go to http://localhost:3000/contact
   - Fill out and submit the form
   - Check your email for the submission!

## For Vercel Deployment

When deploying to Vercel:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_FORMSPREE_ID` = `your_form_id_here`
4. Redeploy your site

That's it! Your contact form will now work perfectly.

