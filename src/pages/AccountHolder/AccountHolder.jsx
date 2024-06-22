import { DeactivationModal } from "../../components/DeactivationModal/DeactivationModal";
import { AccountHolderForm } from "../../components/AccountHolderForm/AccountHolderForm";
import { useMembersContext } from "../../context/MembersContext";
import { useState } from "react";

import "./AccountHolder.css";

export const AccountHolder = () => {
  const [updateDetails, setUpdateDetails] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  const { members, updateMember, deactivateMember } = useMembersContext();
  const [accountHolder, setAccountHolder] = useState();
  const [toggler, setToggler] = useState(false);
  const [search, setSearch] = useState();

  // ID or Name
  const handleToggler = () => {
    setToggler((prev) => !prev);
  };

  // Display Modal
  const handleDisplayModal = () => {
    setDisplayModal((prev) => !prev);
  };

  // Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
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

  //   Find A Member By ID or FullName
  const handleGetUser = () => {
    const member =
      members.find((member) => {
        const fullName = `${member.name} ${member.surname}`;
        return (
          (toggler && member.id === search) || (!toggler && fullName === search)
        );
      }) || {};
    if (member.id) {
      setAccountHolder(member);
      setFormDisplay(true);
    }
  };

  return (
    <>
      {displayModal && (
        <DeactivationModal
          handleDeactivateMember={handleDeactivateMember}
          handleDisplayModal={handleDisplayModal}
        />
      )}
      <section className="account-holder-section">
        <div className="account-holder-search">
          <input
            className="toggler"
            type="checkbox"
            onClick={handleToggler}
          ></input>
          <input
            className="account-holder-search-input"
            type="text"
            onChange={handleSearch}
          />
          <button className="get-member button" onClick={handleGetUser}>
            Get User
          </button>
        </div>
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
