// npm run build = sets up our production build. Creates a folder with the name of build, which we can drag and drop on netlify or any other hosting site.

// Hosting on github pages
// 1. npm install gh-pages --save-dev

/* 2. Add properties to package.json file.

        The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

        "homepage": "http://chirag-08x.github.io/my-app"

        Second in the existing scripts property we to need to add predeploy and deploy.

        "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }

*/

/* 3. Initialize github repo 
      # git init
      # git remote add origin git@github.com:chirag-08x/repo_name.git
*/

// 4. Run ===> npm run deploy

/* 5. Run ===>
    git add .
    git commit -m "Your awesome message"
    git push origin master
*/
