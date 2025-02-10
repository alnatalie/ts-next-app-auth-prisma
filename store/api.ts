import { createFetchersStore } from "./fetcher";

export const $myaccount = createFetchersStore(['/api/myaccount/']);
export const $groups = createFetchersStore(['/api/groups/']);