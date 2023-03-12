import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../../redux/features/transactionSlice'
import Transaction from './Transaction'

export default function Transactions() {
    const { transactions, isLoading, isError, errorMessage } = useSelector(state => state.transaction)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch])

    return (
        <div className="conatiner_of_list_of_transactions">
            {isError && !isLoading && <p className="error">{errorMessage}</p>}
            {isLoading && <p className="loading">Loading...</p>}
            {transactions.length === 0 && !isLoading && <p className="no_transactions">No transactions</p>}
            <ul>
                {transactions.length > 0 && !isLoading && !isError &&
                    transactions?.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
            </ul>
        </div>
    )
}
