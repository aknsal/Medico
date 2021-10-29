import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, speciality, fees, rating, experience) {
  return { name, speciality, fees, rating, experience };
}

const rows = [
  createData('Anit Srivastava', "Cardiologist", 600, 4.0, 4),
  createData('Shireen Pandey', "Gynaecologist", 500, 3.8, 10),
  createData('Shobhit Chawla', "Opthologist", 400, 2.9, 7),
  createData('Deependra Shukla', "Retina Specialist", 900, 4.8, 12),
  createData('Abhinav Mishra', "Dietician", 400, 3.6, 6),
];



export default function SearchDoctors() {
	return (
		 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Speciality</TableCell>
            <TableCell align="right">Fees&nbsp;(Rs)</TableCell>
            <TableCell align="right">Rating&nbsp;(out of 5 star)</TableCell>
            <TableCell align="right">Experience&nbsp;(years)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.speciality}</TableCell>
              <TableCell align="right">{row.fees}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	);
}
