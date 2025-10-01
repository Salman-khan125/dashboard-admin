import { Box,} from "@mui/material";
import { DataGrid,  } from "@mui/x-data-grid";
import { token } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";


const Invoices = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
const columns = [
  { field: "id", headerName: "ID", minWidth: 70 },
  {
    field: "name",
    headerName: "Name",
    minWidth: 120,
    flex: 0.1,
    cellClassName: "name-column--cell",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    minWidth: 150,
    flex: 0.1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 0.1,
    minWidth: 180,
  },
  {
    field: "cost",
    headerName: "Cost",
    minWidth: 100,
    flex: 0.1,
    renderCell: (params) => (
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    flex: 0.1,

  },
];



  return (
    <Box m="20px" width="95%">
      <Header title="INVOICES" subtitle="List of Invoice balance" />
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
 // ✅ header bar stays colored even after refresh
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
      backgroundColor: colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    
  }}
>
  <DataGrid checkboxSelection
   rows={mockDataInvoices} 
   columns={columns}   />
  
</Box>




    </Box>
  );
};

export default Invoices;