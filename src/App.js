import React from 'react';
import Balance from './components/main/Balance';
import Form from './components/main/Form';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <div className='app'>
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="main">
        <div className="container">
          <Balance />
          <Form />
          <p className="second_heading">Your Transactions:</p>
          <Transactions />
        </div>
      </div>

      <div className="footer">&copy; Amir Ahad</div>

    </div>
  );
}

export default App;
