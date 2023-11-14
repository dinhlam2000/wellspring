// ErrorPage.tsx

import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Typography variant="h1">Oops! Something went wrong</Typography>
      <Typography variant="body1">
        This page currently doesn't exist!!!!
      </Typography>
      <Link to="/">
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.success.main,
            color: (theme) => theme.palette.common.white,
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.success.dark,
            },
          }}
        >
          Return to Homepage
        </Button>
      </Link>
    </Box>
  );
}

export default ErrorPage;
