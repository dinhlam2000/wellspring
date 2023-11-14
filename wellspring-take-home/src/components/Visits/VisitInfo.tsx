import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Types
import { Appointment } from "../../types/Appointment";

interface VisitInfoProps {
  appointment: Appointment;
}
function getTimeColor(appointmentType: string) {
  if (appointmentType === "In-person") {
    return "secondary";
  } else {
    return "primary";
  }
}
function VisitInfo({ appointment }: VisitInfoProps) {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#F8F9FC",
        borderRadius: "10px",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        boxShadow: "none",
        ".MuiCardContent-root:last-child": {
          paddingBottom: "16px",
        },
      }}
    >
      <Box
        sx={{
          width: "25%",
          minWidth: "120px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: `${getTimeColor(
              appointment.appointmentType
            )}.main`,
          }}
        >
          <Typography sx={{ color: "#FCFCFD" }} variant="h6">
            {appointment.time}
          </Typography>
          <Typography
            sx={{
              color: `${getTimeColor(
                appointment.appointmentType
              )}.contrastText`,
            }}
            variant="h6"
          >
            {appointment.appointmentType}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          flex: "1 0 auto",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: "1 0 auto",
          }}
        >
          <Typography variant="h6">
            {appointment.appointmentName}: {appointment.patientName}
          </Typography>
          <Typography variant="subtitle1">
            {appointment.appointmentDescription}
          </Typography>
        </CardContent>
      </Box>
      <IconButton size="small" sx={{ height: "fit-content" }}>
        <MoreHorizIcon />
      </IconButton>
    </Card>
  );
}

export default VisitInfo;
