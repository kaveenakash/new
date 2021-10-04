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
          
              <>
              <StyledTableRow >
                <StyledTableCell align="left">Create Date</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.date}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Ad Reference</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails._id}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Seller</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.name}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Area</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.area}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Property Type</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.propertyType}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Property Category</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.propertyCategory}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell align="left">Size</StyledTableCell>
                <StyledTableCell align="left">{props.propertyDetails.size}</StyledTableCell>
              </StyledTableRow>
              {/* <StyledTableRow key={row.name}>
                <StyledTableCell align="left">No Of Rooms</StyledTableCell>
                <StyledTableCell align="left">{2}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">No Of Bathrooms</StyledTableCell>
                <StyledTableCell align="left">{1}</StyledTableCell>
              </StyledTableRow> */}
              <StyledTableRow >
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Negotiable</StyledTableCell>
              </StyledTableRow>
              </>
         
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
