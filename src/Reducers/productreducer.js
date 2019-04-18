const initState = {
  products: [
    {id: 'item-1', name: 'Kendama', price: '20'},
    {id: 'item-2', name: 'Wall Street Journal', price: '2'},
    {id: 'item-3', name: 'TI-83 Plus C', price: '75'}
  ]
}

const productReducer = (state = initState, action) => {
  return state;
};

export default productReducer;
