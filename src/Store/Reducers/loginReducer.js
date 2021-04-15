
const initialState = {
  name: "",
  email: "",
  description: "",
  price: "",
  quantity: "",
  image: "",
  productsList: [],
  filteredProductList: []
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'handleChange':
        let { name, value } = action.payload.target
      return {
        ...state,
        [name]: value
      }
    case 'addProduct':
      return{
          ...state,
          productsList: [...state.productsList, action.payload],
          filteredProductList: [...state.filteredProductList, action.payload]
      }
    case 'searchByName':
      return{
          ...state,
          filteredProductList: action.payload
      }
    case 'editProduct':
        const { description, price, quantity } = action.payload
      return{
          ...state,
          name: action.payload.name,
          description: description,
          price: price,
          quantity: quantity
      }
    case 'ProductToEdit':
      return{
          ...state,
          productsList: action.payload,
          filteredProductList: action.payload
      }
    case 'clearFields':
      return{
          ...state,
        name: "",
        description: "",
        price: "",
        quantity: ""
      }
    
    default:
      return state;
  }
};

export default LoginReducer;