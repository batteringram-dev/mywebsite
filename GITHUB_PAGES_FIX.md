# Fix for GitHub Pages 404 Errors

If you're seeing 404 errors for `main.tsx` or other assets after deploying to GitHub Pages, the base path isn't set correctly.

## Quick Fix

1. **Find your repository name:**
   - Go to your GitHub repository
   - Look at the URL: `https://github.com/username/repo-name`
   - Your repo name is the part after `/username/`

2. **Set the base path manually:**

   Edit `.github/workflows/deploy.yml` and find the "Determine base path" step.
   
   **If your repo is `username.github.io`:**
   - Uncomment and set: `BASE_PATH="/"`
   
   **If your repo is `username/repo-name`:**
   - Uncomment and set: `BASE_PATH="/repo-name/"`
   
   Example:
   ```yaml
   - name: Determine base path
     id: base_path
     run: |
       BASE_PATH="/your-actual-repo-name/"  # <-- Set this to your repo name
       echo "path=$BASE_PATH" >> $GITHUB_OUTPUT
   ```

3. **Commit and push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Fix base path for GitHub Pages"
   git push origin main
   ```

4. **Wait for the workflow to complete** and check your site again.

## Verify the Fix

After deployment, check the browser console. You should no longer see 404 errors for `main.tsx` or other assets.

## Alternative: Check the Workflow Logs

1. Go to your repository → **Actions** tab
2. Click on the latest workflow run
3. Expand the "Determine base path" step
4. Check what base path was detected
5. If it's wrong, manually set it as described above

