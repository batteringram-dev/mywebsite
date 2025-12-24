# GitHub Pages Deployment Guide

This guide will help you deploy your blog to GitHub Pages.

## Prerequisites

1. A GitHub account
2. A GitHub repository (create one if you haven't already)

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. The GitHub Actions workflow will automatically deploy your site

### 2. Configure Base Path (if needed)

The workflow automatically detects your repository name and sets the base path:

- **If your repo is `username.github.io`**: Base path is `/` (root)
- **If your repo is `username/repo-name`**: Base path is `/repo-name/`

If you need to manually override this, edit `.github/workflows/deploy.yml` and change the `VITE_BASE_PATH` environment variable in the build step.

### 3. Push Your Code

1. Make sure all your changes are committed
2. Push to the `main` branch (or `master` if that's your default branch):

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 4. Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be available at:
   - `https://username.github.io` (if repo is `username.github.io`)
   - `https://username.github.io/repo-name/` (if repo is `username/repo-name`)

## Manual Deployment

If you prefer to deploy manually:

1. Build your project:
   ```bash
   npm run build
   ```

2. If your repo is NOT `username.github.io`, set the base path:
   ```bash
   VITE_BASE_PATH=/your-repo-name/ npm run build
   ```

3. Copy the contents of the `dist` folder to the `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

4. In GitHub Settings > Pages, select the `gh-pages` branch as the source

## Troubleshooting

### Routes not working (404 errors)

- Make sure `public/404.html` exists (it should redirect to `index.html`)
- Verify the base path is set correctly in `vite.config.ts` and `App.tsx`
- Check that the GitHub Actions workflow completed successfully

### Assets not loading

- Ensure the base path in `vite.config.ts` matches your repository structure
- Check browser console for 404 errors on assets
- Verify all paths in your code use relative paths or the base path

### Build fails

- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Try running `npm run build` locally to debug

## Updating Your Site

Simply push changes to the `main` branch, and GitHub Actions will automatically rebuild and deploy your site.

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. In GitHub Settings > Pages, add your custom domain

