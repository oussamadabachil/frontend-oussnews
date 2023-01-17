import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};


export const bookmarkSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		addToBookmark: (state, action) => {
           
            state.value.push(action.payload);
        }, 
       

    
	},
});

export const {addToBookmark} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
