import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name :"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {  // reducer function ke ander to parameter pass hote hai state and action so hamre case ke ander state me push kr rhe hai action.payload here action.playload jo product component ke ander addtocard ke ander jo add (post) wala function hai uske ander jo parameter pass kiya hai usko darshata haui i.e state ke ander ek post/item dal to becz humen add(post) dali hai so action.payload=post
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);  // yhe pe remve krna tha to filter ka use kr lliya mtlb aisi item rkkho jiski id post i.e action.payload s e match nhi krti 
        },
    }

});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;
