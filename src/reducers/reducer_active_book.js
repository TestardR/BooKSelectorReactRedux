// State argument is not application state, only the state this reducer is responsible for
// if the argument coming is undefined, set it to null
// action.payload is the book selected
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
