import "./DeactivationModal.css";

export const DeactivationModal = ({
  handleDeactivateMember,
  handleDisplayModal,
}) => {
  return (
    <section className="deactivation-modal">
      <div className="deactivation-container">
        <h1 className="deactivation-modal-title">
          Are you sure you want to proceed{" "}
        </h1>
        <div className="deactivation-buttons">
          <button
            className="modal-confirm button"
            onClick={() => {
              handleDeactivateMember();
              handleDisplayModal();
            }}
          >
            Yes
          </button>
          <button
            className="modal-cancel account-deactivate button"
            onClick={handleDisplayModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};
