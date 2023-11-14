import { Box, Chip, ChipOwnProps, Divider, Typography } from "@mui/material";

// Types
import { Patient } from "../../types/Patient";

interface PatientInfoProps {
  patient: Patient;
  useDivider?: boolean;
}

function getChipColor(status: string): ChipOwnProps["color"] {
  if (status === "Visit completed") {
    return "info";
  } else if (status === "Started training") {
    return "success";
  } else if (status === "Missing documentation") {
    return "warning";
  } else {
    return "default";
  }
}
function PatientInfo({ patient, useDivider }: PatientInfoProps) {
  return (
    <>
      <Box
        sx={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6">{patient.patientName}</Typography>
          <Typography variant="subtitle1">{patient.caregiverName}</Typography>
        </Box>
        <Chip
          size="small"
          label={patient.visitStatus}
          color={getChipColor(patient.visitStatus)}
        />
      </Box>

      {useDivider && <Divider />}
    </>
  );
}

export default PatientInfo;
