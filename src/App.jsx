import { MembersProvider } from "./context/MembersContext";
import { AddAccount } from "./pages/AddAccount/AddAccount";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { Accounts } from "./pages/Accounts/Accounts";
import { AccountHolder } from "./pages/AccountHolder/AccountHolder";
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
              children: [
                {
                  path: "update",
                  element: "update",
                },
                {
                  path: "deactivate",
                  element: "deactivate",
                },
              ],
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
          element: "transactions",
          children: [
            { path: "transfer", element: "" },
            { path: "deposit", element: "" },
            { path: "withdraw", element: "" },
          ],
        },
        { path: "admin-update", element: "update details" },
        { path: "*", element: "404" },
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

// import { customAlphabet } from "nanoid";
// const customNanoid = customAlphabet(
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   10
// );
// const id = customNanoid();
// console.log(id);
