import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/joy";

function Package({ packages }) {
  const { _id, Category, SubArea, Description, Images } = packages;

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 350,
        margin: "auto",
        boxShadow: "lg",
        borderRadius: "md",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "xl",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={Images?.[0] || "/default-image.jpg"}
        alt={Category || "Package Image"}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />

      <CardContent>
        {/* Category */}
        <Typography level="h6" fontWeight="bold" textAlign="center">
          {Category || "Unknown Category"}
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* SubArea */}
        <Typography level="body2" textAlign="center" color="primary">
          {SubArea?.Name || "Unknown Subarea"}
        </Typography>

        {/* Short Description */}
        <Typography level="body2" textAlign="center" sx={{ mt: 1 }}>
          {Description?.slice(0, 50) || "No description available"}...
        </Typography>
      </CardContent>

      {/* Buttons */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{ py: 2, px: 1, bgcolor: "background.level1" }}
      >
        <Button
          variant="solid"
          color="success"
          size="sm"
          sx={{ fontWeight: "bold" }}
        >
          Customize
        </Button>
        <Link to={`/package/${_id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="solid"
            color="primary"
            size="sm"
            sx={{ fontWeight: "bold" }}
          >
            Explore
          </Button>
        </Link>
      </Box>
    </Card>
  );
}

export default Package;
