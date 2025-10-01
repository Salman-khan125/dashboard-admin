import { Box} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import { useTheme } from "@mui/material/styles";


const Contacts = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
const columns = [
  { field: "id", headerName: "ID",flex: 0.1, minWidth: 60 },
  { field: "registrarId", headerName: "Registrar ID", minWidth: 120 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 0.5,
    minWidth: 80,
  },
  { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 1.5, minWidth: 200 },
  { field: "address", headerName: "Address", flex: 2, minWidth: 220 },

];


  return (
    <Box m="20px" width="95%">
      <Header title="CONTACTS" subtitle="List of contacts of future Refrence" />
 <Box
  m="40px 0 0 0"
  width="100%"
  height="75vh"
sx={{
  
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-cellContent": {
    color: colors.greenAccent[300],
  },

  // ✅ full header background (works after refresh too)
  "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeaderRow": {
    backgroundColor: `${colors.blueAccent[700]} !important`,
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-columnHeaderTitle": {
    backgroundColor: "transparent !important",
  },

  "& .MuiDataGrid-virtualScrollerRenderZone": {
    backgroundColor: colors.primary[900],
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: `${colors.blueAccent[700]} !important`,
  },
  "& .MuiCheckbox-root": {
    color: `${colors.greenAccent[200]} !important`,
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `${colors.grey[100]} !important`,
  },
}}


>
  <DataGrid  rows={mockDataContacts} columns={columns} components={{Toolbar:GridToolbar}}  />
</Box>




    </Box>
  );
};

export default Contacts;