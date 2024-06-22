import { FormInput } from "../FormInput/FormInput";
import { useEffect } from "react";

import "./AccountHolderForm.css";

export const AccountHolderForm = ({
  setAccountDetails,
  setActiveValue,
  accountDetails,
  accountHolder,
  updateDetails,
  activeValue,
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setAccountDetails(accountHolder || {});
  }, [accountHolder]);

  useEffect(() => {
    const activeValue = accountDetails.isActive
      ? "Active"
      : accountDetails.isActive === undefined
      ? ""
      : "Deactivated";
    setActiveValue(activeValue);
    
  }, [accountDetails]);

  console.log(activeValue);

  return (
    <div className="account-holder-form">
      <form>
        <div className="holder-form-wrapper">
          <img
            className="holder-form-image"
            src={accountDetails.image}
            alt="image"
          />
          <div className="holder-form-details">
            <FormInput
              value={accountDetails.id}
              onChange={handleChange}
              disabled={true}
              type={"text"}
              label={"ID"}
              name={"id"}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.join_date}
              onChange={handleChange}
              label={"Joining Year"}
              name={"join_date"}
              type={"number"}
              min={2000}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.name}
              onChange={handleChange}
              label={"Name"}
              type={"text"}
              name={"name"}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.surname}
              onChange={handleChange}
              label={"Surname"}
              name={"surname"}
              type={"text"}
            />
          </div>
          <div className="holder-form-address">
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.street}
              onChange={handleChange}
              label={"Street"}
              name={"street"}
              type={"text"}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.city}
              onChange={handleChange}
              label={"City"}
              type={"text"}
              name={"city"}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.country}
              onChange={handleChange}
              label={"Country"}
              name={"country"}
              type={"text"}
            />
          </div>
          <div className="holder-form-accounts">
            <label className="holder-form-label" htmlFor="id">
              Active Account
            </label>
            <input
              className="holder-form-input"
              name="isActive"
              disabled
              value={activeValue}
              onChange={handleChange}
            ></input>
            <FormInput
              value={accountDetails.balance}
              onChange={handleChange}
              label={"Balance"}
              name={"balance"}
              type={"number"}
              disabled={true}
              min={0}
            />
            <FormInput
              disabled={updateDetails ? false : true}
              value={accountDetails.overdraft}
              onChange={handleChange}
              label={"Overdraft"}
              name={"overdraft"}
              type={"number"}
              min={0}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
