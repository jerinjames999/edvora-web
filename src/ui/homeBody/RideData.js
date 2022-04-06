import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Container, Chip, Typography } from "@mui/material";
import FetchApi from "./FetchApi";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: "60px",
  padding: 20,
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Elevation({ data }) {
  return (
    <Grid container spacing={1}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            {/* <FetchApi></FetchApi> */}
            
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr" },
                gap: 3,
              }}
            >
              {/* {[4].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))} */}
              
              {data.map((ride) => (
                <Item key={ride.origin_station_code}>
                  <Container>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Grid container>
                          <Grid item>
                            <img
                              src={ride.map_url}
                              alt={ride.map_url}
                              style={{ height: "180px", width: "auto" }}
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ textAlign: "left", padding: "0 16px" }}
                          >
                            <Typography>Ride ID: {ride.id}</Typography>
                            <Typography>
                              Origin Station: {ride.origin_station_code}
                            </Typography>
                            <Typography>
                              Ride Station Path:{" "}
                              {`[${ride.station_path.join(",")}]`}
                            </Typography>
                            <Typography>Date: {ride.date}</Typography>
                            <Typography>Distance: {ride.distance}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Chip label={ride.city} variant="outlined" />
                        <Chip label={ride.state} variant="outlined" />
                      </Grid>
                    </Grid>
                  </Container>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
