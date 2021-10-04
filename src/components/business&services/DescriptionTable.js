import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const DescriptionTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {props.serviceDetails.map((row) => {
            return (
              <>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Ad Reference</StyledTableCell>
                <StyledTableCell align="left">{row.AdReference}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Ratings</StyledTableCell>
                <StyledTableCell align="left">{row.ratings}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">{row.description}</StyledTableCell>
              </StyledTableRow>
              
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Negotiable</StyledTableCell>
              </StyledTableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

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

export default DescriptionTable;
