import React from 'react'
import Transaction from './Transaction'

export default function Transactions() {
    return (
        <div className="conatiner_of_list_of_transactions">
            <ul>
                <Transaction />
            </ul>
        </div>
    )
}
