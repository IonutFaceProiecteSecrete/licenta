import React from "react";
import { useState } from "react";

import { Box, Stack, Fab, Radio } from "@mui/material";
import { useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CarouselImagini() {
  const theme = useTheme();
  const sub600px = useMediaQuery("(max-width: 600px)");

  const [valoareSelectata, setValoareSelectata] = useState("1");


  const preiaApasare = (event) => {
    setValoareSelectata(event.target.value);
  };

  const incrementare = () => {
    if (valoareSelectata === "1") setValoareSelectata("2");
    else {
      if (valoareSelectata === "3");
      setValoareSelectata("3");
    }
  };

  const decrementare = () => {
    if (valoareSelectata === "3") setValoareSelectata("2");
    else {
      if (valoareSelectata === "2");
      setValoareSelectata("1");
    }
  };

  return (
    <Box
      height="100%"
      bgcolor={theme.palette.navbar.main}
      borderRadius={3}
      overflow="hidden"
    >
      <Stack
        direction="row"
        padding={"0rem 2rem 0rem 2rem"}
        justifyContent="space-between"
        position="relative"
        top="50%"
        transform="translateY(-50%)"
        height="3rem"
      >
        <Fab
          size="small"
          onClick={decrementare}
          disabled={valoareSelectata === "1"}
          sx={{ zIndex: 1 }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          size="small"
          onClick={incrementare}
          disabled={valoareSelectata === "3"}
          sx={{ zIndex: 1 }}
        >
          <ArrowForwardIcon />
        </Fab>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        position="relative"
        top="83%"
        height="2rem"
        zIndex={2}
      >
        <Radio
          checked={valoareSelectata === "1"}
          onChange={preiaApasare}
          value={"1"}
          name="radio-buttons"
          size="small"
          sx={{
            color: theme.palette.background.default,
            "&.Mui-checked": {
              color: theme.palette.background.default,
            },
            zIndex: 1
          }}
        />
        <Radio
          checked={valoareSelectata === "2"}
          onChange={preiaApasare}
          value={"2"}
          name="radio-buttons"
          size="small"
          sx={{
            color: theme.palette.background.default,
            "&.Mui-checked": {
              color: theme.palette.background.default,
            },
            zIndex: 1
          }}
        />
        <Radio
          checked={valoareSelectata === "3"}
          onChange={preiaApasare}
          value={"3"}
          name="radio-buttons"
          size="small"
          sx={{
            color: theme.palette.background.default,
            "&.Mui-checked": {
              color: theme.palette.background.default,
            },
          }}
        />
      </Stack>
      <Box
        sx={{
          height: "100%",
          width: !sub600px ? "50ch" : "45ch",
          backgroundImage:
            "url(https://www.clujmedicalcenter.ro/wp-content/uploads/2023/11/Untitled-design-2023-11-02T194344.217.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateY(-5rem) translateX(-50%)",
        }}
        position="relative"
        left="50%"
      ></Box>
    </Box>
  );
}

export default CarouselImagini;
