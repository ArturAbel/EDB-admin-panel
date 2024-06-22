import { SuccessfulTransaction } from "./components/SuccessfulTransaction/SuccessfulTransaction";
import { AccountHolder } from "./pages/AccountHolder/AccountHolder";
import { AdminDetails } from "./pages/AdminDetails/AdminDetails";
import { Transactions } from "./pages/Transactions/Transactions";
import { MembersProvider } from "./context/MembersContext";
import { AddAccount } from "./pages/AddAccount/AddAccount";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Accounts } from "./pages/Accounts/Accounts";
import { Overview } from "./pages/Overview/Overview";
import { Members } from "./pages/Members/Members";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./css/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminPage />,
      children: [
        { path: "/", element: <Overview /> },
        {
          path: "members",
          element: <Members />,
          children: [
            {
              path: "/members",
              element: <Navigate to="information" replace />,
            },
            {
              path: "information",
              element: <Accounts />,
            },
            {
              path: "account",
              element: <AccountHolder />,
            },
            {
              path: "add",
              element: <AddAccount />,
            },
            {
              path: "contract",
              element: "contract",
            },
          ],
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
        { path: "transactions/success", element: <SuccessfulTransaction /> },

        { path: "admin-details", element: <AdminDetails /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return (
    <MembersProvider>
      <RouterProvider router={router} />
    </MembersProvider>
  );
}

export default App;
