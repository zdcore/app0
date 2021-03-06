


import * as types from './mutation_types'

function makeAction (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}


export const SHOW = makeAction(types.SHOW);
export const pushlist = makeAction(types.PUSHLIST);
export const resetlist = makeAction(types.RESESTLIST);
export const update = makeAction(types.UPDATEUSERINFO);

// export const showAlert = makeAction(types.SHOWAlERT);
// export const hideAlert = makeAction(types.HIDEAELRT);
