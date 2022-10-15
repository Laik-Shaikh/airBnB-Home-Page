import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { FaFilter } from "react-icons/fa";
import { categories } from "../info/info";

const Categories = () => {
    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    }
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          
          flexGrow: 1,
          alignItems: "center",
          mt: 2,
          mb: 2,
          px: { xs: 0, md: 2 },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {categories.map((cat) => {
            return <Tab key={cat.id} icon={cat.icon} label={cat.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palette.text.primary",
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default Categories;
