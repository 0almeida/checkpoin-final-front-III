export const reducer = (state, action) => {
  switch (action.type){
      case 'ADD_USER':
          return [...state, action.payload]
      case 'DELETE_USER':
          return state.filter(item => item.id !== action.payload)
      default: 
          throw new Error()
  }
}