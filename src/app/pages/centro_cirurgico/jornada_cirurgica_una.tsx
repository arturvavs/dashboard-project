import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";

export const JornadaCCUNA = () => {
  // Dados da tabela
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    favorite: boolean
  ) {
    return { name, calories, fat, carbs, protein, favorite };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, true),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, false),
    createData("Eclair", 262, 16.0, 24, 6.0, true),
    createData("Cupcake", 305, 3.7, 67, 4.3, false),
    createData("Gingerbread", 356, 16.0, 49, 3.9, true),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="bg-gray-100">
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right" className="bg-gray-100">
              Calories
            </TableCell>
            <TableCell align="right" className="bg-gray-100">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right" className="bg-gray-100">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right" className="bg-gray-100">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="hover:bg-gray-200" // Tailwind CSS effect on row hover
            >
              <TableCell
                component="th"
                scope="row"
                className="hover:text-blue-500"
              >
                {row.name}
              </TableCell>
              <TableCell align="right" className="hover:bg-red-200">
                {row.calories}
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
