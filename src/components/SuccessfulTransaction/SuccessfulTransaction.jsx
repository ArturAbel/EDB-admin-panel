import { useNavigate } from "react-router-dom";

import "./SuccessfulTransaction.css";

export const SuccessfulTransaction = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/transactions");
  };

  return (
    <section className="successful-transaction-section">
      <h4 className="successful-transaction-title">
        transaction was successful.
      </h4>
      <button className="button" onClick={handleBackButton}>
        Go Back
      </button>
    </section>
  );
};
