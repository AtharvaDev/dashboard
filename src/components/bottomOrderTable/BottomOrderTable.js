import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "./orderTable.css";

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
  const [bottomFiveOrder, setBottomFiveOrder] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("orders")
      .on("value", (snapshot) => {
        // setUserTable(snapshot.val());
        let table = snapshot.val();

        let bottomfive = [...table];
        bottomfive = bottomfive.sort((a, b) => {
          return a.ordernum - b.ordernum;
        });

        setBottomFiveOrder(bottomfive.slice(0, 5));
      });
  }, []);

  return bottomFiveOrder;
}

function BottomOrderTable() {
  const data = useData();
  console.log("hii", { data });
  return (
    <div className="orderTable">
      <h2 className="centre">Bottom 5 Order</h2>
      <TableContainer component={Paper}>
        <Table className="classes.table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order No</StyledTableCell>
              <StyledTableCell align="center">Total Amount</StyledTableCell>
              <StyledTableCell align="center">Total Quantity</StyledTableCell>
              <StyledTableCell align="center">User Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.ordernum}>
                <StyledTableCell component="th" scope="row">
                  {row.ordernum}
                </StyledTableCell>
                <StyledTableCell align="center">{row.amount}</StyledTableCell>
                <StyledTableCell align="center">{row.qty}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ textTransform: "capitalize" }}
                >
                  {row.UserName}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BottomOrderTable;
