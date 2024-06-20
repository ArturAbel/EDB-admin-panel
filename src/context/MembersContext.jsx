import { membersURL } from "../utilities/variables";
import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const MembersContext = createContext();

export const MembersProvider = ({ children }) => {
  const {
    handleRemoveMember,
    handleUpdateMember,
    handleAddMember,
    loading,
    members,
    error,
  } = useFetch(membersURL);


  return (
    <MembersContext.Provider
      value={{
        handleRemoveMember,
        handleUpdateMember,
        handleAddMember,
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
