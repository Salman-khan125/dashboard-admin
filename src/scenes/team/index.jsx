import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 0.5,
      ml:"10px",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px" width="95%">
      <Header title="TEAM" subtitle="Managing the Team Members" />
    <Box
  m="40px 0 0 0"
  height="75vh"
  width="100%"
  sx={{
  // base
  "& .MuiDataGrid-root": { border: "none", width: "100%" },

  // --- HEADER: full width + radius + overlay to cover the right gap ---
  "& .MuiDataGrid-topContainer, & .MuiDataGrid-columnHeaders": {
    position: "relative", /* required for ::after */
    backgroundColor: `${colors.blueAccent[700]} !important`,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    overflow: "visible", /* allow ::after to show */
  },

  /* Overlay to the right of real column area (covers the small dark strip / scrollbar area) */
  "& .MuiDataGrid-columnHeaders::after": {
    content: '""',
    position: "absolute",
    left: "var(--DataGrid-columnsTotalWidth, 0px)", /* start right after columns */
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: `${colors.blueAccent[700]} !important`,
    pointerEvents: "none",
    borderTopRightRadius: "8px",
    zIndex: 1,
  },

  /* Give padding to the header title (not the whole cell) so background stays full width */
  "& .MuiDataGrid-columnHeaderTitle": {
    paddingRight: "10px !important",
  },

  // ensure the header row stretches the full width
  "& .MuiDataGrid-columnHeaderRow, & .MuiDataGrid-columnHeaders": {
    width: "100% !important",
    boxSizing: "border-box",
  },

  // make each header cell transparent so the container color shows across the whole row
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-columnHeaderTitle": {
    backgroundColor: "transparent !important",
  },

  // --- BODY ---
  "& .MuiDataGrid-virtualScroller, & .MuiDataGrid-virtualScrollerRenderZone, & .MuiDataGrid-virtualScrollerContent": {
    backgroundColor: colors.primary[900],
    width: "100% !important",
  },
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  // remove separators
  "& .MuiDataGrid-cell, & .MuiDataGrid-row--borderBottom": {
    borderBottom: "none !important",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none !important",
  },

  // --- FOOTER ---
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: `${colors.blueAccent[700]} !important`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    overflow: "hidden",
    zIndex: 1,
  },

  // checkbox
  "& .MuiCheckbox-root": {
    color: `${colors.greenAccent[200]} !important`,
  },
}}

>
  <DataGrid
    rows={mockDataTeam}
    columns={columns}
    checkboxSelection
    slots={{ toolbar: GridToolbar }}
    density="comfortable"
    // keep DataGrid width flexible
    sx={{ width: "100%", minWidth: 0 }}
  />
</Box>




    </Box>
  );
};

export default Team;