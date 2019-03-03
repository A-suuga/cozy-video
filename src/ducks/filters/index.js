// constants
const FILTER_BY_DOC = 'FILTER_BY_DOC'
const RESET_FILTER_BY_DOC = 'RESET_FILTER_BY_DOC'

// selectors
export const getFilteringDoc = state => state.filters.filteringDoc

// filters

// actions
export const resetFilterByDoc = () => ({ type: RESET_FILTER_BY_DOC })

// reducers
const filteringDoc = (state = null, action) => {
  switch (action.type) {
    case FILTER_BY_DOC:
      return action.doc || state
    case RESET_FILTER_BY_DOC:
      return null
    default:
      return state
  }
}

const handleDestroyAccount = (state = {}, action) => {
  if (action) {
    return state
  } else {
    return state
  }
}

const composeReducers = (...reducers) => (state, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), state)

export default composeReducers(filteringDoc, handleDestroyAccount)
