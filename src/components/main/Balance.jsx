import React from 'react'
import { useSelector } from 'react-redux'
import numberWithCommas from '../../utils/numberWithCommas'

export default function Balance() {
    const { transactions } = useSelector(state => state.transaction)
    const total = transactions?.reduce((acc, curr) => {
        if (curr.type === 'income') {
            return acc + curr.amount
        } else {
            return acc - curr.amount
        }
    }, 0)
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳ </span>
                {transactions.length > 0 ?
                    numberWithCommas(total) :
                    0
                }
            </h3>
        </div>
    )
}
