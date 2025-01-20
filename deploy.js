const { Octokit } = require('octokit')
    const fs = require('fs')
    const path = require('path')
    const { execSync } = require('child_process')

    // Create a zip file of the project
    execSync('zip -r dog-directory.zip . -x node_modules\\*')

    async function deployToGitHub() {
      const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
      })

      // Create repository
      await octokit.rest.repos.createForAuthenticatedUser({
        name: 'dog-directory',
        description: 'Dog Breed Directory Website',
        private: false
      })

      // Get the repository
      const repo = await octokit.rest.repos.get({
        owner: process.env.GITHUB_USERNAME,
        repo: 'dog-directory'
      })

      // Upload files
      const fileContent = fs.readFileSync('dog-directory.zip', { encoding: 'base64' })
      
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: process.env.GITHUB_USERNAME,
        repo: 'dog-directory',
        path: 'dog-directory.zip',
        message: 'Initial commit',
        content: fileContent
      })

      console.log('Deployment complete!')
      console.log(`Your site will be available at: https://${process.env.GITHUB_USERNAME}.github.io/dog-directory/`)
    }

    deployToGitHub().catch(console.error)
