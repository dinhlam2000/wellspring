import { Box, Chip, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

// Services
import { fetchAppointments } from "../../shared/services/AppointmentService";

// Components

// Types
import { Appointment } from "../../types/Appointment";
import VisitInfo from "./VisitInfo";

function VisitContainer() {
  const [appointments, setAppointments] = useState<Array<Appointment>>([]);
  const [tabValue, setTabValue] = useState<Number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    fetchAppointments().then((appointments) => setAppointments(appointments));
  }, []);

  useEffect(() => {}, [tabValue]);
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          ".MuiTabs-indicator": {
            display: "none",
          },
          ".MuiButtonBase-root": {
            textTransform: "capitalize",
          },
        }}
      >
        <Tab
          label={
            <Chip
              size="small"
              label="Today"
              color={tabValue === 0 ? "primary" : "info"}
              onClick={(e) => handleChange(e, 0)}
            />
          }
        />
        <Tab
          label={
            <Chip
              size="small"
              label="Tomorrow"
              color={tabValue === 1 ? "primary" : "info"}
              onClick={(e) => handleChange(e, 1)}
            />
          }
        />
        <Tab
          label={
            <Chip
              size="small"
              label="this week"
              color={tabValue === 2 ? "primary" : "info"}
              onClick={(e) => handleChange(e, 2)}
            />
          }
        />
      </Tabs>

      <Box sx={{ maxHeight: "60vh", overflowY: "scroll" }}>
        {appointments.map((appointment) => (
          <VisitInfo appointment={appointment} />
        ))}
      </Box>
    </>
  );
}

export default VisitContainer;
