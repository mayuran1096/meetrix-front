import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
// core components
import styles from "assets/jss/ordering-system-frontend/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function OrderTable(props) {
  console.log("Came in to order table component");
  const classes = useStyles();
  const { tableData, tableHeaderColor, callbackFromOrders } = props;

  const onClickView = (orderID) => {
    callbackFromOrders(true, orderID);
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
          <TableRow className={classes.tableHeadRow}>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            >
              <b>Order ID</b>
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            >
              <b>Customer Name</b>
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            >
              <b>Contact No</b>
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            >
              <b>Date & Time</b>
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            >
              <b>Status</b>
            </TableCell>
            <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      <b>{prop}</b>
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell} key={key}>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<VisibilityIcon />}
                    onClick={() => onClickView(prop[0])}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

OrderTable.defaultProps = {
  tableHeaderColor: "gray",
};

OrderTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
