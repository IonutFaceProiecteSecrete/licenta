import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function FotografiePortofoliuPrestator() {
  const subxspx = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        height: "40ch",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8fDA%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      mb={2}
      mr={!subxspx ? 2 : 0}
    />
  );
}

export default FotografiePortofoliuPrestator;
