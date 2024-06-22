import { DeactivationModal } from "../../components/DeactivationModal/DeactivationModal";
import { AccountHolderForm } from "../../components/AccountHolderForm/AccountHolderForm";
import { useMembersContext } from "../../context/MembersContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";

import "./AccountHolder.css";

export const AccountHolder = () => {
  const { members, updateMember, deactivateMember } = useMembersContext();
  const [updateDetails, setUpdateDetails] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [accountHolder, setAccountHolder] = useState();

  const [formDisplay, setFormDisplay] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [search, setSearch] = useState();

  // Display Modal
  const handleDisplayModal = () => {
    setDisplayModal((prev) => !prev);
  };

  // Update
  const handleUpdateDetails = () => {
    if (updateDetails) {
      updateMember(accountDetails);
    }
    setUpdateDetails((prev) => !prev);
  };

  // Deactivate
  const handleDeactivateMember = () => {
    deactivateMember(accountDetails);
  };

  setToggler;

  return (
    <>
      {displayModal && (
        <DeactivationModal
          handleDeactivateMember={handleDeactivateMember}
          handleDisplayModal={handleDisplayModal}
        />
      )}
      <section className="account-holder-section">
        <SearchBar
          setAccountHolder={setAccountHolder}
          setFormDisplay={setFormDisplay}
          setToggler={setToggler}
          setSearch={setSearch}
          toggler={toggler}
          members={members}
          search={search}
        />
        <div className="account-holder-container">
          {formDisplay && (
            <>
              <div>
                <AccountHolderForm
                  setAccountDetails={setAccountDetails}
                  accountDetails={accountDetails}
                  accountHolder={accountHolder}
                  updateDetails={updateDetails}
                />
              </div>
              <div className="account-holder-buttons">
                <button
                  onClick={handleUpdateDetails}
                  className="account-update button"
                >
                  Update Details
                </button>
                <button
                  className="account-deactivate button"
                  onClick={handleDisplayModal}
                >
                  Deactivate
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
