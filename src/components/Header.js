import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Logo from "./Logo";
import SearchLocation from "../components/SearchLocation";
import { flexBetweenCenter, dFlex, displayOnDesktop } from "../themes/styles";
import Profile from "./Profile";
import MobileResponsive from "./MobileResponsive";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <SearchLocation />
          </Box>
          <Box sx={displayOnDesktop}>
            <Profile />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
            <MobileResponsive />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
