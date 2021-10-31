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

export default function SearchDoctors() {
  
  const [users,setUsers] = useState([]);
  const url = "http://localhost:8000/api/alldoctors";
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
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Speciality</TableCell>
              <TableCell align="right">Fees&nbsp;(Rs)</TableCell>
              <TableCell align="right">Rating&nbsp;(out of 5 star)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              users.doctorData?.filter((val) => {
                    if(searchTerm=="") {
                        return val;
                    } else if(val.fname.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                } ).map((user) => (
                <TableRow
                  key={user.fname+" "+user.lname}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.category}</TableCell>
                  <TableCell align="right">{user.fees}</TableCell>
                  <TableCell align="right">{user.rating}</TableCell>
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
