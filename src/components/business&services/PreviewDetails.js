import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const PreviewDetails = (props) => {
  const classes = useStyles();
  const { name, tpNumber, email, area, district } = props.basicData[0];
  const {
    serviceType,
    ratings,
    title,
    price,
  } = props.primaryData[0];
  useEffect(() => {
    console.log(props.basicData);
    console.log(props.priamryData);
  }, []);
  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Grid
            item
            container
            justifyContent="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Grid item container direction="column" spacing={3}>
                <Grid item>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        className={classes.header}
                      >
                        Basic Details
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TableContainer
                        elevation={1}
                        component={Card}
                        className={classes.tableContainer}
                      >
                        <Table className={classes.table}>
                          <TableBody>
                            <>
                              <StyledTableRow>
                                <StyledTableCell align="left">
                                  Name
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {name}
                                </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell align="left">
                                  Telephone No
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {tpNumber}
                                </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell align="left">
                                  Email
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {email}
                                </StyledTableCell>
                              </StyledTableRow>
                            </>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        className={classes.header}
                      >
                        Your Location
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TableContainer
                        elevation={1}
                        component={Card}
                        className={classes.tableContainer}
                      >
                        <Table className={classes.table}>
                          <TableBody>
                            <>
                              <StyledTableRow>
                                <StyledTableCell align="left">
                                  District
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {district.value}
                                </StyledTableCell>
                              </StyledTableRow>
                              <StyledTableRow>
                                <StyledTableCell align="left">
                                  Area
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {area.value}
                                </StyledTableCell>
                              </StyledTableRow>
                            </>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="subtitle1" className={classes.header}>
                    Primary Details
                  </Typography>
                </Grid>
                <Grid item>
                  <TableContainer
                    elevation={1}
                    component={Card}
                    className={classes.tableContainer}
                  >
                    <Table className={classes.table}>
                      <TableBody>
                        <>
                          <StyledTableRow>
                            <StyledTableCell align="left">
                              Title
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {title}
                            </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                            <StyledTableCell align="left">
                              Service Type
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {serviceType.label}
                            </StyledTableCell>
                          </StyledTableRow>
                          
                          <StyledTableRow>
                            <StyledTableCell align="left">
                              Ratings
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {ratings.label}
                            </StyledTableCell>
                          </StyledTableRow>

                        
                          <StyledTableRow>
                            <StyledTableCell align="left">
                              Total Price
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Rs.{price}/=
                            </StyledTableCell>
                          </StyledTableRow>
                        </>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            className={classes.submitButton}
            onClick={props.submitAllData}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
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

const useStyles = makeStyles((theme) => ({
  table: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "32rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "28rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "37rem",
    },
  },
  header: {
    color: "#778899",
  },
  submitButton: {
    borderRadius: 40,
    color: theme.palette.common.seaWhite,
    backgroundColor: theme.palette.common.seaBlue,
    "&:hover": {
      backgroundColor: theme.palette.common.seaBlue,
      color: theme.palette.secondary.main,
      fontWeight: 700,
    },
  },
}));
export default PreviewDetails;
