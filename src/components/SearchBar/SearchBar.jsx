import { useEffect } from "react";

import "./SearchBar.css";

export const SearchBar = ({
  setAccountHolder,
  setFormDisplay,
  setToggler,
  setSearch,
  members,
  toggler,
  transaction,
  search,
}) => {
  //   Find A Member By ID or FullName

  useEffect(() => {
    handleGetUser();
  }, [transaction]);

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
    <div className="account-holder-search">
      <input
        className="toggler"
        type="checkbox"
        onClick={() => setToggler((prev) => !prev)}
      ></input>
      <input
        className="account-holder-search-input"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="get-member button" onClick={handleGetUser}>
        Get Holder
      </button>
    </div>
  );
};
