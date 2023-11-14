import { Box, Chip, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { isToday, isTomorrow, isThisWeek, parse } from "date-fns";

// Services
import { fetchAppointments } from "../../shared/services/AppointmentService";

// Components
import VisitInfo from "./VisitInfo";

// Types
import { Appointment } from "../../types/Appointment";

enum TabValue {
  Today = 0,
  Tomorrow = 1,
  ThisWeek = 2,
}

function VisitContainer() {
  const [appointments, setAppointments] = useState<Array<Appointment>>([]);
  const [tabValue, setTabValue] = useState<TabValue>(TabValue.Today);

  const filteredAppointments = appointments.filter((appointment) => {
    // console.log("appointment", appointment);
    if (tabValue === TabValue.Today) {
      return isToday(
        parse(
          appointment.appointmentDate as unknown as string,
          "MM/dd/yyyy",
          new Date()
        )
      );
    } else if (tabValue === TabValue.Tomorrow) {
      return isTomorrow(
        parse(
          appointment.appointmentDate as unknown as string,
          "MM/dd/yyyy",
          new Date()
        )
      );
    }
    // This is the default case, which is this week
    else {
      return isThisWeek(
        parse(
          appointment.appointmentDate as unknown as string,
          "MM/dd/yyyy",
          new Date()
        )
      );
    }
  });

  console.log("tabValue", tabValue);
  console.log("filtered,", filteredAppointments);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValue) => {
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
              onClick={(e) => handleChange(e, TabValue.Today)}
            />
          }
        />
        <Tab
          label={
            <Chip
              size="small"
              label="Tomorrow"
              color={tabValue === 1 ? "primary" : "info"}
              onClick={(e) => handleChange(e, TabValue.Tomorrow)}
            />
          }
        />
        <Tab
          label={
            <Chip
              size="small"
              label="this week"
              color={tabValue === 2 ? "primary" : "info"}
              onClick={(e) => handleChange(e, TabValue.ThisWeek)}
            />
          }
        />
      </Tabs>

      <Box sx={{ maxHeight: "60vh", overflowY: "scroll" }}>
        {filteredAppointments.map((appointment) => (
          <VisitInfo
            appointment={appointment}
            showDate={tabValue === TabValue.ThisWeek}
          />
        ))}
      </Box>
    </>
  );
}

export default VisitContainer;
