import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MembersProvider } from "./context/MembersContext";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { Overview } from "./pages/Overview/Overview";
import { Members } from "./pages/Members/Members";

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
              path: "bio",
              element: "member bio",
              children: [
                { path: "edit", element: "edit" },
                { path: "deactivate", element: "deactivate" },
              ],
            },
            { path: "add", element: "details" },
            { path: "add", element: "contract" },
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
