import { MemberTransactions } from "../../components/MemberTransactions/MemberTransactions";
import { TransactionModal } from "../../components/TransactionModal/TransactionModal";
import { useMembersContext } from "../../context/MembersContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Transactions.css";

export const Transactions = () => {
  const { members, withdraw, checkBalance, deposit } = useMembersContext();
  const [accountHolder, setAccountHolder] = useState({});
  const [formDisplay, setFormDisplay] = useState(false);
  const [modalButton, setModalButton] = useState("");
  const [toggler, setToggler] = useState(false);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState(false);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  // Change Text
  const handleButton = (text) => {
    setModalButton(modalButton === text ? "" : text);
  };

  // Transactions
  const handleTransaction = () => {
    const amountNumber = parseInt(amount);
    if (amountNumber <= 0) {
      return;
    }
    if (modalButton === "withdraw") {
      if (checkBalance(accountHolder, amountNumber)) {
        withdraw(accountHolder, amountNumber);
        navigate("/transactions/success");
      } else {
        setAlert(true);
        return;
      }
    }

    if (modalButton === "deposit") {
      deposit(accountHolder, amountNumber);
      navigate("/transactions/success");
    }
  };

  useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 1500);
    }
  }, [alert]);

  return (
    <section className="transactions-section">
      <div className="transactions-search-bar">
        <SearchBar
          setAccountHolder={setAccountHolder}
          setFormDisplay={setFormDisplay}
          setToggler={setToggler}
          setSearch={setSearch}
          toggler={toggler}
          members={members}
          search={search}
        />
      </div>
      {formDisplay && (
        <>
          {!accountHolder.isActive && (
            <p className="transactions-alert">Account is Deactivated</p>
          )}
          {alert && (
            <p className="transactions-alert">Unable to Perform Action</p>
          )}
          <div className="transactions-container">
            <MemberTransactions accountHolder={accountHolder} />
            <div className="transactions-action-container">
              <div className="transactions-actions">
                <button
                  className="transactions-action withdraw"
                  onClick={() => handleButton("withdraw")}
                  disabled={!accountHolder.isActive}
                >
                  Withdraw
                </button>
                <button
                  className="transactions-action deposit"
                  onClick={() => handleButton("deposit")}
                  disabled={!accountHolder.isActive}
                >
                  Deposit
                </button>
                <button
                  className="transactions-action transfer"
                  onClick={() => handleButton("transfer")}
                  disabled={!accountHolder.isActive}
                >
                  Transfer
                </button>
              </div>
              <TransactionModal
                handleTransaction={handleTransaction}
                accountHolder={accountHolder}
                handleButton={handleButton}
                modalButton={modalButton}
                setAmount={setAmount}
              />
            </div>
            {modalButton === "transfer" ? (
              <MemberTransactions accountHolder={accountHolder} />
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </section>
  );
};
