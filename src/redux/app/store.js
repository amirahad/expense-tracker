import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from '../features/transactionSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice
  },
});
