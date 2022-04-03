
// Actions creators
export const add = (val) => {
  return {
    type: 'ADD',
    payload: val,
    error: false,
    meta: {},
  };
}

export const remove = (val) => ({
  type: 'REMOVE',
  payload: val,
  error: false,
  meta: {},
})
