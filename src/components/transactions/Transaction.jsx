import React from 'react'
import edit from '../../images/edit.svg';
import deleteI from '../../images/delete.svg'
import { useDispatch } from 'react-redux';
import { editActive, removeTransaction } from '../../redux/features/transactionSlice';

export default function Transaction({ transaction }) {
    const { id, name, type, amount } = transaction || {}
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(editActive(transaction))
    }

    const handleDelete = () => {
        dispatch(removeTransaction(id))
    }

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img
                        alt='edit icon'
                        className="icon"
                        src={edit}
                        onClick={handleEdit}
                    />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img
                        alt='delete icon'
                        className="icon"
                        src={deleteI}
                    />
                </button>
            </div>
        </li>
    )
}
