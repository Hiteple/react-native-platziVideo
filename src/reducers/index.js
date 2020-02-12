// Data from API
export const dataFromAPI = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {...state, ...action.payload};
    case 'SET_SUGGESTIONS':
      return {...state, ...action.payload};
    case 'SET_SELECTED_MOVIE':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
