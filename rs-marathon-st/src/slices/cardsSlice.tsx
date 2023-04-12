import { createSlice } from '@reduxjs/toolkit';
import { CardsListProps } from '../components/CardsList';

const initialState = {
  value: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    //     decrement: (state) => {
    //         state.value -= 1;
    //       },
    //   },
  },
});

export const { increment, decrement, incrementByAmount } = cardsSlice.actions;

export default cardsSlice.reducer;
