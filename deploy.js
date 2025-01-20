const { Octokit } = require('octokit')
    const fs = require('fs')
    const path = require('path')
    const { execSync } = require('child_process')

    async function deployToGitHub() {
      const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
      })

      // Create repository if it doesn't exist
      try {
        await octokit.rest.repos.createForAuthenticatedUser({
          name: 'dog-directory',
          description: 'Dog Breed Directory Website',
          private: false
        })
      } catch (error) {
        if (error.status !== 422) throw error
      }

      // Build the project
      execSync('npm run build')

      // Initialize Git repository
      execSync('git init')
      execSync('git add .')
      execSync('git commit -m "Initial commit"')

      // Push to GitHub
      execSync(`git remote add origin https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USERNAME}/dog-directory.git`)
      execSync('git branch -M main')
      execSync('git push -u origin main --force')

      // Enable GitHub Pages
      await octokit.rest.repos.update({
        owner: process.env.GITHUB_USERNAME,
        repo: 'dog-directory',
        has_pages: true,
        source: {
          branch: 'main',
          path: '/'
        }
      })

      console.log('Deployment complete!')
      console.log(`Your site will be available at: https://${process.env.GITHUB_USERNAME}.github.io/dog-directory/`)
    }

    deployToGitHub().catch(console.error)
