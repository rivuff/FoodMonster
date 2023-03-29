import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [], 
    },
    
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.payload)
        },
        removeItem: (state, action)=>{
            state.items.pop()
        },
        clearCart: (state)=>{
            state=[];
        },
        updateItem: (state, action)=>{
            const ind = state.items.findIndex((i)=> i.card?.info?.id === action.payload.id);
            if(ind>-1){
                state.items[ind].qty = action.payload.qty;
            }
        }
    }
})


export const {addItem, removeItem, clearCart, updateItem} = cartSlice.actions;

export default cartSlice.reducer