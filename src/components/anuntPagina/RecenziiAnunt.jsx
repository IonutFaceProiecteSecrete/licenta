import React, { useState } from "react";

import {
  Stack,
  Grid,
  Typography,
  Rating,
  Button,
  Pagination,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import LinearProgress from "@mui/material/LinearProgress";
import StarIcon from "@mui/icons-material/Star";

import ReviewPrestator from "../profilPrestatorServiciu/ReviewPrestator";

import ModalRecenzie from "../diverse/ModalRecenzie";

function RecenziiAnunt() {
  const theme = useTheme();
  const sub800px = useMediaQuery("(max-width:800px)");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack p={2}>
      <Grid container lg={12} sm={12}>
        <Grid item lg={4} sm={sub800px ? 12 : 8} xs={12}>
          <Stack alignItems="center" mb={sub800px ? 2 : 0}>
            <Typography
              fontSize="40px"
              fontWeight="bold"
              color={theme.palette.text1.main}
            >
              <span style={{ color: theme.palette.logo.main }}>5.00</span> din 5
            </Typography>
            <Rating
              defaultValue={5}
              style={{
                fontSize: "40px",
                color: theme.palette.primary.main,
              }}
              readOnly
            />
            <Button
              size="medium"
              variant="contained"
              style={{ marginTop: "1rem", width: "25ch" }}
              onClick={handleOpen}
            >
              Adaugă recenzia ta
            </Button>
            <ModalRecenzie open={open} handleClose={handleClose} />
          </Stack>
        </Grid>
        <Grid item lg={8} sm={sub800px ? 12 : 8} xs={12} padding={2}>
          <Stack alignItems="center">
            <Grid container lg={12} sm={12} xs={12} spacing={2}>
              <Grid
                item
                display={"flex"}
                flexDirection="row"
                lg={1}
                justifyContent="center"
              >
                <Typography sx={{color: theme.palette.logo.main, marginRight: 1}}>5</Typography>
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Grid>
              <Grid item lg sm xs>
                <LinearProgress
                  color="primary"
                  value={40}
                  variant="determinate"
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "1rem",
                    marginTop: "8px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container lg={12} sm={12} xs={12} spacing={2}>
              <Grid
                item
                display={"flex"}
                flexDirection="row"
                lg={1}
                justifyContent="center"
              >
                <Typography sx={{color: theme.palette.logo.main, marginRight: 1}}>4</Typography>
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Grid>
              <Grid item lg sm xs>
                <LinearProgress
                  color="primary"
                  value={60}
                  variant="determinate"
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "1rem",
                    marginTop: "8px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container lg={12} sm={12} xs={12} spacing={2}>
              <Grid
                item
                display={"flex"}
                flexDirection="row"
                lg={1}
                justifyContent="center"
              >
                <Typography sx={{color: theme.palette.logo.main, marginRight: 1}}>3</Typography>
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Grid>
              <Grid item lg sm xs>
                <LinearProgress
                  color="primary"
                  value={0}
                  variant="determinate"
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "1rem",
                    marginTop: "8px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container lg={12} sm={12} xs={12} spacing={2}>
              <Grid
                item
                display={"flex"}
                flexDirection="row"
                lg={1}
                justifyContent="center"
              >
                <Typography sx={{color: theme.palette.logo.main, marginRight: 1}}>2</Typography>
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Grid>
              <Grid item lg sm xs>
                <LinearProgress
                  color="primary"
                  value={0}
                  variant="determinate"
                  style={{
                    height: "8px",
                    borderRadius: "1rem",
                    marginTop: "8px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container lg={12} sm={12} xs={12} spacing={2}>
              <Grid
                item
                display={"flex"}
                flexDirection="row"
                lg={1}
                justifyContent="center"
              >
                <Typography sx={{color: theme.palette.logo.main, marginRight: 1}}>1</Typography>
                <StarIcon sx={{ color: theme.palette.primary.main }} />
              </Grid>
              <Grid item lg sm xs>
                <LinearProgress
                  color="primary"
                  value={10}
                  variant="determinate"
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "1rem",
                    marginTop: "8px",
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item lg={12} mt={4} display="flex" flexDirection="column">
          <ReviewPrestator />
          <ReviewPrestator />
          <ReviewPrestator />
          <ReviewPrestator />
          <ReviewPrestator />
          <Stack alignItems="center" mt={2}>
            <Pagination count={5} color="primary" />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default RecenziiAnunt;
