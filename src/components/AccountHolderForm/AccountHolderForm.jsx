import { useEffect, useState } from "react";

import "./AccountHolderForm.css";
import { FormInput } from "../FormInput/FormInput";

export const AccountHolderForm = ({ accountHolder }) => {
  const [accountDetails, setAccountDetails] = useState({});

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
              value={accountDetails.join_date}
              onChange={handleChange}
              label={"Joining Year"}
              name={"join_date"}
              disabled={true}
              type={"number"}
              min={2000}
            />
            <FormInput
              value={accountDetails.name}
              onChange={handleChange}
              disabled={true}
              label={"Name"}
              type={"text"}
              name={"name"}
            />
            <FormInput
              value={accountDetails.surname}
              onChange={handleChange}
              label={"Surname"}
              name={"surname"}
              disabled={true}
              type={"text"}
            />
          </div>
          <div className="holder-form-address">
            <FormInput
              value={accountDetails.street}
              onChange={handleChange}
              label={"Street"}
              name={"street"}
              disabled={true}
              type={"text"}
            />
            <FormInput
              value={accountDetails.city}
              onChange={handleChange}
              label={"City"}
              type={"text"}
              disabled={true}
              name={"city"}
            />
            <FormInput
              value={accountDetails.country}
              onChange={handleChange}
              label={"Country"}
              name={"country"}
              disabled={true}
              type={"text"}
            />
          </div>
          <div className="holder-form-accounts">
            <label className="holder-form-label" htmlFor="id">
              Active Account
            </label>
            <select
              className="holder-form-input"
              name="isActive"
              disabled
              value={`${
                accountDetails.isActive
                  ? "active"
                  : accountDetails.isActive === undefined
                  ? ""
                  : "deactivated"
              }`}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value={"active"}>Active</option>
              <option value="deactivated">Deactivated</option>
            </select>
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
              value={accountDetails.overdraft}
              onChange={handleChange}
              label={"Overdraft"}
              name={"overdraft"}
              type={"number"}
              disabled={true}
              min={0}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
