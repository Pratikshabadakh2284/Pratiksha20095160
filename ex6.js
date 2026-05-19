//This should have a function that takes a GitHub username 
//and outputs their repo with the most forks.

//https://api.github.com/


async function getMostForkedRepo(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error('GitHub user not found');
    }

    const repos = await response.json();

    if (repos.length === 0) {
      return `${username} has no repositories.`;
    }

    const mostForkedRepo = repos.reduce((topRepo, currentRepo) =>
      currentRepo.forks_count > topRepo.forks_count
        ? currentRepo
        : topRepo
    );

    return `Most forked repo: ${mostForkedRepo.name} (${mostForkedRepo.forks_count} forks)`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

async function showMostForkedRepo() {
  const username = document.getElementById('github-username').value.trim();
  const resultElement = document.getElementById('github-result');

  if (!username) {
    resultElement.textContent = 'Please enter a GitHub username.';
    return;
  }

  resultElement.textContent = 'Loading...';
  const result = await getMostForkedRepo(username);
  resultElement.textContent = result;
}
