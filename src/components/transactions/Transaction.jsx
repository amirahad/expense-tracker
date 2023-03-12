import React from 'react'
import edit from '../../images/edit.svg';
import deleteI from '../../images/delete.svg'

export default function Transaction({ transaction }) {
    const { name, type, amount } = transaction || {}

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
                    />
                </button>
                <button className="link">
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
