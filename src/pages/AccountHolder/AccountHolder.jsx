import { useMembersContext } from "../../context/MembersContext";
import { AccountHolderForm } from "../../components/AccountHolderForm/AccountHolderForm";
import { useState } from "react";

import "./AccountHolder.css";

export const AccountHolder = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [accountHolder, setAccountHolder] = useState();
  const [toggler, setToggler] = useState(false);
  const { members } = useMembersContext();
  const [search, setSearch] = useState();

  const handleToggler = () => {
    setToggler((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
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
    if (member) {
      setFormDisplay(true);
      setAccountHolder(member);
    }
  };

  return (
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
        <button className="account-holder-get-button" onClick={handleGetUser}>
          Get User
        </button>
      </div>
      <div className="account-holder-container">
        <div>
          {formDisplay && <AccountHolderForm accountHolder={accountHolder} />}
        </div>
      </div>
    </section>
  );
};
