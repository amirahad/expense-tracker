import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, getTransactions, updateTransaction } from "./transactionAPI"

const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
}

export const fetchTransactions = createAsyncThunk(
    'transaction/fetchTransactions',
    async () => {
        const transactions = await getTransactions()
        return transactions
    }
)

export const createTransaction = createAsyncThunk(
    'transaction/createTransaction',
    async (data) => {
        const transactions = await addTransaction(data)
        return transactions
    }
)

export const editTransaction = createAsyncThunk(
    'transaction/editTransaction',
    async ({ id, data }) => {
        const transactions = await updateTransaction(id, data)
        return transactions
    }
)

export const removeTransaction = createAsyncThunk(
    'transaction/removeTransaction',
    async (id) => {
        const transactions = await deleteTransaction(id)
        return transactions
    }
)

const transactionsSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false
                state.transactions = action.payload
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
                state.transactions = []
            })

            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.transactions.push(action.payload)
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
            })

            .addCase(editTransaction.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                const indexToUpdate = state.transactions.findIndex(
                    (transaction) => transaction.id === action.payload.id
                )
                state.transactions[indexToUpdate] = action.payload
            })
            .addCase(editTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
            })

            .addCase(removeTransaction.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.filter((transaction) => transaction.id !== action.payload)
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.error?.message
            })
    }
})

export default transactionsSlice.reducer