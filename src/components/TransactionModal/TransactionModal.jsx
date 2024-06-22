import "./TransactionModal.css";

export const TransactionModal = ({
  handleTransaction,
  accountHolder,
  handleButton,
  modalButton,
  setAmount,
}) => {
  return (
    <div className="transactions-modal">
      <div className="transactions-title-container">
        <h4 className="transactions-modal-title">{modalButton}</h4>
      </div>

      {modalButton && (
        <div className="transactions-actions-container">
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="transactions-modal-input"
            type="number"
            placeholder="£ Amount"
          />
          <div className="transactions-modal-buttons">
            <button
              className="transactions-modal-action button"
              disabled={!accountHolder.isActive}
              onClick={handleTransaction}
            >
              {modalButton}
            </button>
            <button
              className="transactions-modal-cancel button"
              disabled={!accountHolder.isActive}
              onClick={() => handleButton("")}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
