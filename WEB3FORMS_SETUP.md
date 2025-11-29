# Web3Forms Setup Guide

Your contact form has been successfully integrated with Web3Forms API! Follow these steps to complete the setup:

## Step 1: Get Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account (no credit card required)
3. Create a new form and get your **Access Key**

## Step 2: Add Your Access Key to Environment Variables

1. Create a file named `.env.local` in the root of your project (if it doesn't exist)
2. Add the following line to the file:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
```

Replace `your_actual_access_key_here` with the access key you got from Web3Forms.

## Step 3: Restart Your Development Server

After adding the environment variable:

1. Stop your current dev server (Ctrl+C in terminal)
2. Run `npm run dev` again

## Step 4: Test Your Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form and submit
3. Check your email (the one you registered with Web3Forms) for the message

## Features

- ✅ Email notifications sent to your registered email
- ✅ Form validation
- ✅ Success/error messages
- ✅ Automatic form reset after successful submission
- ✅ Loading states during submission

## For Vercel Deployment

When deploying to Vercel, add the environment variable:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your access key
4. Redeploy your site

## Support

If you have any issues, visit [Web3Forms Documentation](https://docs.web3forms.com)
