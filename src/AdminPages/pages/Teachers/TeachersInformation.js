import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Pagination,
  IconButton,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTeacher from "./AddTeacher";


const TeachersInformation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton aria-label="edit" sx={{color:'#002B16'}} >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete"  sx={{color:'#002B16'}}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 2, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 3, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 4, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 5, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 6, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 7, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 8, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 9, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
    { id: 10, firstName: "John", lastName: "Doe", phoneNumber: "0911111111", email: "abbb@gmail.com" },
  ];

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         
        }}
      >
        <div>
        <h2  className="text-2xl font-bold">Teacher Information</h2>
        <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: "#002B16", // Dark green button
              color: "white",
              marginBottom: 2,
              transition: "background-color 0.3s ease", // Smooth transition effect
              "&:hover": {
                backgroundColor: "#004d25", // Faded green color on hover
              },
            }}
          >
            Add Teacher
          </Button>
          <AddTeacher open={open} handleClose={handleClose} />
          </div>
        <Box sx={{ display: "flex", alignItems: "center"   }}>
          <SearchIcon sx={{ marginRight: 1 ,color:'#002B16' }} />
          <TextField
          sx={{backgroundColor: "white"}}
            variant="outlined"
            size="small"
            placeholder="Enter parent's name or class ID"
          />
        </Box>
      </Box>

      <Box sx={{
          height: 400,
          width: "100%",
          marginBottom: 2,
          backgroundColor: "white", // White background
          borderRadius: "8px", // Smooth edges
          overflow: "hidden", // Hide overflow for smooth corners
        }}
        className="shadow-lg">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="outlined"  sx={{color:'#002B16'}}>Previous</Button>
        <Pagination count={10} shape="rounded" />
        <Button variant="outlined" sx={{color:'#002B16'}}>Next</Button>
      </Box>
    </Box>
  );
};

export default TeachersInformation;
