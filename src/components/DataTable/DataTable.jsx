import { useMembersContext } from "../../context/MembersContext";
import { DataGrid } from "@mui/x-data-grid";

import "./DataTable.css";

export default function DataTable() {
  const { members } = useMembersContext();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      sortable: false,
      align: "center",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      valueGetter: (value, row) => `${row.name || ""} ${row.surname || ""}`,
      align: "center",
    },
    {
      field: "join_date",
      headerName: "Joined In",
      width: 100,
      sortable: false,
      align: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      sortable: false,
      valueGetter: (value, row) => `${row.street || ""}, ${row.city || ""}`,
      align: "center",
    },
    {
      field: "balance",
      headerName: "Balance",
      width: 90,
      valueGetter: (value, row) => `£ ${row.balance}`,
      align: "center",
    },
    {
      field: "overdraft",
      headerName: "Overdraft",
      width: 90,
      valueGetter: (value, row) => `£ ${row.overdraft}`,
      align: "center",
    },
    {
      field: "isActive",
      headerName: "Active Account",
      width: 150,
      align: "center",
    },
  ];

  return (
    <div className="accounts-data-table" style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={members}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
