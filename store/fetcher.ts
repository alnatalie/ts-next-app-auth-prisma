import {nanoquery} from '@nanostores/query'

export const [createFetchersStore, createMutatorStore] = nanoquery({
    fetcher: (...keys) => fetch(keys.join('')).then((r)=>r.json()),
});