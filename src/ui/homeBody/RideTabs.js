import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
// import FilterListIcon from "@mui/icons-material/FilterList";
import AutoSelect from "./Autocomplete";

export default function ColorTabs({ upcomming, pastrides, tabvalue, handleTabChange }) {
  // const [value, setValue] = React.useState("one");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [autocomplete, setAutoComplete] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleAutoComplete = () => {
    setAutoComplete(!autocomplete);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Tabs
            value={tabvalue}
            onChange={(event, newvalue)=>handleTabChange(event, newvalue)}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="1" label="Nearest Rides" />
            <Tab value="2" label={`Upcomming Rides(${upcomming})`} />
            <Tab value="3" label={`Past Rides(${pastrides})`} />
          </Tabs>
        </Grid>
        <Grid item>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Grid container direction="row">

              <SortIcon sx={{ marginLeft: "auto" }}></SortIcon>
              <Typography>Filter</Typography>
            </Grid>
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              {autocomplete ? (
                <AutoSelect state={state} />
              ) : (
                <Button onClick={toggleAutoComplete}>State</Button>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
}

const state = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
];
