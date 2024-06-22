import { membersURL } from "../utilities/variables";
import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const MembersContext = createContext();

export const MembersProvider = ({ children }) => {
  const { handleUpdateMember, handleAddMember, loading, members, error } =
    useFetch(membersURL);

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

  return (
    <MembersContext.Provider
      value={{
        deactivateMember,
        handleAddMember,
        updateMember,
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
