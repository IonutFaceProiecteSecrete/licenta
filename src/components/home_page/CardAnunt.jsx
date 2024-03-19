import {
  Avatar,
  Stack,
  Typography,
  Rating,
  Link,
} from "@mui/material";
import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";

import { useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";


function CardAnunt() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const paperStilizare = {
    "&:hover": {
      background: theme.palette.background.default,
    },
  };

  return (
    <Link href="/prestator_serviciu" underline="none">
      <Stack spacing={2} padding={2} sx={paperStilizare}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              height: !isSmallScreen?"70px":"60px",
              width: !isSmallScreen?"70px":"60px",
            }}
          >
            I
          </Avatar>
          <Stack width="100%" spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                color={theme.palette.logo.main}
                fontSize={!isSmallScreen?"16px":"14px"}
                fontWeight="500"
              >
                username
              </Typography>
              <Rating
                sx={{ color: theme.palette.primary.main }}
                value={4}
                readOnly
                size="small"
              />
            </Stack>
            <Typography
              fontWeight="bold"
              fontSize={!isSmallScreen?"20px":"16px"}
              color={theme.palette.logo.main}
            >
              Acesta este titlul unui anunt adaugat pe platforma.
            </Typography>
            <Stack direction={!isSmallScreen?"row":"column"} spacing={1}>
              <Stack direction="row" spacing={0.5}>
                <AccessTimeIcon
                  fontSize="small"
                  sx={{ color: theme.palette.primary.main }}
                />
                <Typography variant="body2" color={theme.palette.mode === 'light' ? 'grey' : '#DCDCDC'}>
                  x servicii realizate cu succes
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5}>
                <BoltIcon
                  fontSize="small"
                  sx={{ color: theme.palette.primary.main }}
                />
                <Typography variant="body2" color={theme.palette.mode === 'light' ? 'grey' : '#DCDCDC'}>
                  utilizatorul răspunde rapid
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {!isSmallScreen &&
        <Typography fontSize="14px" color={theme.palette.logo.main}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
          volutpat sodales. Ut commodo ornare tortor, quis dignissim dolor
          ullamcorper ac. Maecenas faucibus a quam quis molestie. Quisque semper
          massa id justo dictum, vehicula mollis turpis iaculis. Nunc turpis
          urna, malesuada ac consequat ac, pretium sed nisl...
        </Typography>}
        {isSmallScreen &&
        <Typography fontSize="14px" color={theme.palette.logo.main}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
          volutpat sodales. Ut commodo ornare tortor, quis dignissim dolor
          ullamcorper ac...
        </Typography>}
      </Stack>
    </Link>
  );
}

export default CardAnunt;
