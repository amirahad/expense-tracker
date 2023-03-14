import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction, editTransaction } from '../../redux/features/transactionSlice'

export default function Form() {
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState('')

    const dispatch = useDispatch()

    const { isLoading, isError, errorMessage } = useSelector(state => state.transaction)
    const { editing } = useSelector(state => state.transaction)

    useEffect(() => {
        const { id, name, type, amount } = editing || {}
        if (id) {
            setEditMode(true)
            setName(name)
            setType(type)
            setAmount(amount)
        } else {
            setEditMode(false)
            reset()
        }
    }, [editing])

    const reset = () => {
        setName('')
        setType('')
        setAmount(0)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        const newTransaction = {
            name,
            type,
            amount: parseInt(amount)
        }
        dispatch(createTransaction(newTransaction))
        reset()
    }

    const cancelEdit = () => {
        setEditMode(false)
        reset()
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(
            editTransaction({
                id: editing.id,
                data: {
                    name,
                    type,
                    amount: parseInt(amount)
                }
            })
        )
        reset()
        setEditMode(false)
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            {isError && !isLoading && <p className="error">{errorMessage}</p>}

            <form onSubmit={editMode ? handleUpdate : handleCreate}>
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
                            checked={type === "income"}
                            onChange={(e) => setType("income")}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === "expense"}
                            onChange={(e) => setType("expense")}
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
                    onClick={editMode ? handleUpdate : handleCreate}
                >
                    {editMode ? "Update Transaction" : "Add Transaction"}
                </button>

            </form>

            {editMode && <button className="btn cancel_edit" onClick={cancelEdit}>Cancel Edit</button>}
        </div>
    )
}
