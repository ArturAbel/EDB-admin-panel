import { validateName, unableButton } from "../../utilities/validateForm";
import { FormInput } from "../../components/FormInput/FormInput";
import { useMembersContext } from "../../context/MembersContext";
import { customAlphabet } from "nanoid";
import { useState } from "react";
import { Tabs } from "rsuite";
import {
  INVALID_SURNAME_ERROR,
  INVALID_NAME_ERROR,
} from "../../utilities/variables";

import "rsuite/Tabs/styles/index.css";
import "./AddAccount.css";

// Generate NANOID
const customNanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);
const generatedId = customNanoid();

// Provide Current Year
const handleYear = () => {
  const year = new Date().getFullYear();
  return year;
};

export const AddAccount = () => {
  const [validSurname, setValidSurname] = useState(false);
  const [memberDetails, setMemberDetails] = useState({});
  const [validName, setValidName] = useState(false);
  const { addMember } = useMembersContext();

  // Handle Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails((prev) => ({
      ...prev,
      id: generatedId,
      join_date: handleYear(),
      balance: 0,
      isActive: true,
      [name]: value,
    }));

    if (name === "name") {
      const isNameValid = validateName(value);
      setValidName(isNameValid);
    }

    if (name === "surname") {
      const isSurnameValid = validateName(value);
      setValidSurname(isSurnameValid);
    }
  };

  // Check If Input Full
  const handleDisabled = () => {
    return unableButton(memberDetails, validName, validSurname);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(memberDetails);
    setMemberDetails({
      name: "",
      surname: "",
      image: "",
      street: "",
      city: "",
      country: "",
      overdraft: "",
    });
  };

  return (
    <form className="add-account-section">
      <Tabs className="add-account-tab-container" defaultActiveKey="1">
        <Tabs.Tab eventKey="1" title="Personal">
          <h1 className="add-account-sub-title">Personal Details</h1>
          <div className="add-account-form-container">
            <FormInput
              onChange={handleChange}
              value={generatedId}
              disabled={true}
              type={"text"}
              label={"ID"}
              name={"id"}
            />
            <FormInput
              value={memberDetails.name}
              onChange={handleChange}
              label={"Name"}
              type={"text"}
              name={"name"}
            />
            {memberDetails.name && !validName && (
              <p className="input-error">{INVALID_NAME_ERROR}</p>
            )}
            <FormInput
              value={memberDetails.surname}
              onChange={handleChange}
              label={"Surname"}
              name={"surname"}
              type={"text"}
            />
            {memberDetails.surname && !validSurname && (
              <p className="input-error">{INVALID_SURNAME_ERROR}</p>
            )}
            <FormInput
              value={memberDetails.image}
              onChange={handleChange}
              label={"Image URL"}
              name={"image"}
              type={"text"}
            />
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="2" title="Address">
          <h1 className="add-account-sub-title">Address Details</h1>
          <div className="add-account-form-container">
            <FormInput
              value={memberDetails.street}
              onChange={handleChange}
              label={"street"}
              name={"street"}
              type={"text"}
            />
            <FormInput
              value={memberDetails.city}
              onChange={handleChange}
              label={"city"}
              name={"city"}
              type={"text"}
            />
            <FormInput
              value={memberDetails.country}
              onChange={handleChange}
              label={"country"}
              name={"country"}
              type={"text"}
            />
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="3" title="Details">
          <h1 className="add-account-sub-title">Financial Details</h1>
          <div className="add-account-form-container">
            <FormInput
              value={memberDetails.overdraft}
              onChange={handleChange}
              label={"overdraft"}
              name={"overdraft"}
              type={"number"}
              max={5000}
              min={0}
            />
            <FormInput
              label={"balance"}
              name={"balance"}
              type={"number"}
              disabled={true}
              value={0}
            />
            <FormInput
              value={handleYear()}
              name={"join_date"}
              type={"number"}
              disabled={true}
              label={"Year"}
            />
          </div>
        </Tabs.Tab>
      </Tabs>
      <button
        onClick={handleSubmit}
        className="add-account-button button"
        disabled={!handleDisabled()}
      >
        Add Account
      </button>
    </form>
  );
};
