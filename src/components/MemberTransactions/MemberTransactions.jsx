import { useState } from "react";
import "./MemberTransactions.css";

export const MemberTransactions = ({ accountHolder }) => {

  const [balance] = useState(accountHolder.balance);

  return (
    <div className="transactions-member-container">
      <img
        className="transactions-member-image"
        src={accountHolder.image}
        alt="member image"
      />
      <div className="transactions-detail-container">
        <h4 className="transactions-member-detail">Full Name:</h4>
        <h4 className="transactions-member-value">{`${accountHolder.name} ${accountHolder.surname}`}</h4>
      </div>
      <div className="transactions-detail-container">
        <h4 className="transactions-member-detail">balance:</h4>
        <h4 className="transactions-member-value">{`£ ${balance}`}</h4>
      </div>
      <div className="transactions-detail-container">
        <h4 className="transactions-member-detail">overdraft limit:</h4>
        <h4 className="transactions-member-value">{`£ ${accountHolder.overdraft}`}</h4>
      </div>
    </div>
  );
};
