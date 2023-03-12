import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../../redux/features/transactionSlice'

export default function Form() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const { isLoading, isError, errorMessage } = useSelector(state => state.transaction)

    const handleCreate = (e) => {
        e.preventDefault()
        const newTransaction = {
            name,
            type,
            amount: parseInt(amount)
        }
        dispatch(createTransaction(newTransaction))
        setName('')
        setType('')
        setAmount(0)
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            {isError && !isLoading && <p className="error">{errorMessage}</p>}

            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        required
                        type="text"
                        placeholder="Salary"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            name="type"
                            cheched={type === "income"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            cheched={type === "expense"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        required
                        type="number"
                        placeholder="300"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button
                    className="btn"
                    type='submit'
                    disabled={isLoading}
                >
                    Add Transaction
                </button>

            </form>

            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    )
}
