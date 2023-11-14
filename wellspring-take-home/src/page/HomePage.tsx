import { Divider, Paper, Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

// Components
import PatientContainer from "../components/Patients/PatientContainer";
import VisitContainer from "../components/Visits/VisitContainer";

function HomePage() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="stretch"
      direction="row"
      justifyContent="center"
    >
      {/* Recent Patients */}
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
            <Typography variant="h5" sx={{ display: "inline-block" }}>
              Recent Patients
            </Typography>
            <Box onClick={() => {}}>
              <Typography variant="subtitle2" sx={{ display: "inline-block" }}>
                View all
              </Typography>
            </Box>
          </Box>
          <Divider color="#E0F2FE" sx={{ height: 2 }} />
          <Box sx={{ maxHeight: "60vh", overflowY: "scroll" }}>
            <PatientContainer />
          </Box>
        </Paper>
      </Grid>
      {/* Recent Upcoming visits */}
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
            <Typography variant="h5" sx={{ display: "inline-block" }}>
              Upcoming visits
            </Typography>
          </Box>
          <Divider color="#E0F2FE" sx={{ height: 2 }} />
          <VisitContainer />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default HomePage;
