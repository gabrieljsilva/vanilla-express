import { repositoriesInstanceMap } from "./create-repositories-instancies.mjs";

export function getRepositoryInstance(Repository) {
  return repositoriesInstanceMap.get(Repository.name);
}
