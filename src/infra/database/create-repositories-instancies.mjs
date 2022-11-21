export const repositoriesInstanceMap = new Map();

export function createRepositoriesInstancies(connection, repositories) {
  for (const Repository of repositories) {
    repositoriesInstanceMap.set(Repository.name, new Repository(connection));
  }
}
