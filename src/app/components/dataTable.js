import React, { useEffect, useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full name", width: 160 },
  { field: "school_number", headerName: "Student Number", width: 160 },
  { field: "email", headerName: "Email", width: 160 },
  { field: "department", headerName: "Department", width: 160 },
  { field: "school", headerName: "School", width: 160 },
  { field: "board", headerName: "Board", width: 160 },
  { field: "role", headerName: "Role", width: 160 },
  { field: "phone", headerName: "Phone", width: 160 },
];



export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get("https://yazilim-server.azurewebsites.net/api/members/allMembers").then((res) => {
      console.log(res.data);
      setRows(res.data);
    }).catch((err) => alert(err.message));

    console.log(rows);
  }, [])


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
