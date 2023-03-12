import React from 'react'
import edit from '../../images/edit.svg';
import deleteI from '../../images/delete.svg'

export default function Transaction() {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
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
