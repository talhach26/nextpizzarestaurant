import {cartSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
           // state.products = [...state.products, action.payload]  another method
            state.products.push(action.payload),
            state.total += action.payload.price * action.payload.quantity
        },
        reset:(state)=> {
            state = initialState
        }
    }
})

export const {addProduct, reset} = cartSlice.actions;
export default cartSlice.reducers;