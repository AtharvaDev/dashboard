import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
// import "./orderTable.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function useData() {
  // const [userTable, setUserTable] = useState([]);
  const [topFiveUser, setTopFiveUser] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("orders")
      .on("value", (snapshot) => {
        // setUserTable(snapshot.val());
        let table = snapshot.val();

        let topfive = [...table];
        topfive = topfive.sort((a, b) => {
          return b.amount - a.amount;
        });

        setTopFiveUser(topfive.slice(0, 5));
      });
  }, []);

  return topFiveUser;
}

function TopUsersTable() {
  const data = useData();
  console.log("hii", { data });
  return (
    <div className="orderTable">
      <h2 className="centre">Top 5 Order</h2>
      <TableContainer component={Paper}>
        <Table className="classes.table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Total Amount</StyledTableCell>
              <StyledTableCell align="center">Total Quantity</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.ordernum}>
                <StyledTableCell
                  align="center"
                  style={{ textTransform: "capitalize" }}
                >
                  {row.UserName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                <StyledTableCell align="center">{row.qty}</StyledTableCell>
                <StyledTableCell align="center">{row.city}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TopUsersTable;
