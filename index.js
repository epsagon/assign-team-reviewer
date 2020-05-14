const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const orgToken = core.getInput('orgToken');

    const octokit = new github.GitHub(orgToken);


    console.log(github.context);
    console.log(JSON.stringify(github.context));
}

run();
