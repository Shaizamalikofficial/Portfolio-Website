# Vercel Deployment - Environment Variable Setup

## ⚠️ IMPORTANT: Add Environment Variable to Vercel

Your code has been pushed to GitHub and Vercel will automatically deploy it. However, for the contact form to work on Vercel, you MUST add the Web3Forms environment variable:

### Steps to Add Environment Variable on Vercel:

1. **Go to your Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your portfolio project

2. **Navigate to Settings**
   - Click on "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add the Variable**
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key (the same one from your .env.local file)
   - **Environment**: Select all (Production, Preview, Development)

4. **Redeploy**
   - Go to "Deployments" tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"

### Your Changes Pushed to GitHub:
✅ Removed years from Learning Journey timeline
✅ Moved Xeven Solutions and Siber Koza courses to Learning Journey
✅ Reordered Learning Journey courses
✅ Updated Skills section (7 skills: Python, NumPy, Pandas, Scikit-learn, Matplotlib & Seaborn, Model Building, Model Evaluation)
✅ Integrated Web3Forms contact form
✅ Removed Formspree integration

### Automatic Vercel Deployment:
Vercel will automatically detect your GitHub push and start deploying. You can monitor the deployment at:
https://vercel.com/dashboard

Once you add the environment variable and redeploy, your contact form will work perfectly on your live site!
