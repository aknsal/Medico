import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from 'react'
import classes from './SearchDoctors.module.css'
import NavbarPatient from "../components/navbar/NavbarPatient";

function createData(name, category, fees, rating, experience) {
  return { name, category, fees, rating, experience };
}

const rows = [
	createData("Anit Srivastava", "Cardiologist", 600, 4.0, 4),
	createData("Shireen Pandey", "Gynaecologist", 500, 3.8, 10),
	createData("Shobhit Chawla", "Opthologist", 400, 2.9, 7),
	createData("Deependra Shukla", "Retina Specialist", 900, 4.8, 12),
	createData("Abhinav Mishra", "Dietician", 400, 3.6, 6),
];

export default function SearchDoctors() {
  
  const [users,setUsers] = useState([]);
  const url = "";
  const getUsers = async () => {
    const response = await fetch(url);
    setUsers(await response.json());
  }

  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);

  const [searchTerm,setSeachTerm] = useState("");

  return (
    <>
    <NavbarPatient />
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>List of Doctors</h1>
      </div>
      <div className={classes.search}>
          <input type="text" placeholder="Search..." onChange={event => {setSeachTerm(event.target.value)}} />
      </div>
      <TableContainer component={Paper} className={classes.tablecontainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Speciality</TableCell>
              <TableCell align="center">Fees&nbsp;(Rs)</TableCell>
              <TableCell align="center">Rating&nbsp;(out of 5 star)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              rows.filter((val) => {
                    if(searchTerm=="") {
                        return val;
                    } else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                } ).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.fees}</TableCell>
                  <TableCell align="center">{row.rating}</TableCell>
                </TableRow>
              ))
          }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
	);
}
