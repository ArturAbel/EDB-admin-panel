import { membersURL } from "../utilities/variables";
import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const MembersContext = createContext();

export const MembersProvider = ({ children }) => {
  const { handleUpdateMember, handleAddMember, loading, members, error } =
    useFetch(membersURL);

  // Add The Member
  const addMember = (member) => {
    const addMember = { ...member };
    handleAddMember(addMember);
  };

  // Update Member
  const updateMember = (member) => {
    const updatedMember = {
      ...member,
    };
    handleUpdateMember(updatedMember);
  };

  // Deactivate Member
  const deactivateMember = (member) => {
    const updatedMember = {
      ...member,
      isActive: false,
    };
    handleUpdateMember(updatedMember);
  };

  // Check Balance
  const checkBalance = (member, amount) => {
    return amount > member.balance + member.overdraft ? false : true;
  };

  // Withdraw
  const withdraw = (member, amount) => {
    let updatedMember = {};

    if (amount < member.balance) {
      updatedMember = {
        ...member,
        balance: member.balance - amount,
      };
    }

    if (amount > member.balance) {
      amount = amount - (member.balance + member.overdraft);

      updatedMember = {
        ...member,
        overdraft: amount,
        balance: 0,
      };
    }
    handleUpdateMember(updatedMember);
  };

// Deposit
  const deposit = (member, amount) => {
    const total = member.balance + amount;
    const updatedMember = {
      ...member,
      balance: total,
    };
    updateMember(updatedMember);
  };

  return (
    <MembersContext.Provider
      value={{
        deactivateMember,
        updateMember,
        checkBalance,
        addMember,
        withdraw,
        deposit,
        loading,
        members,
        error,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export const useMembersContext = () => {
  return useContext(MembersContext);
};
