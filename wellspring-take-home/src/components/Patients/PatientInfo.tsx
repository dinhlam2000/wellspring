import { Box, Chip, Divider, Typography } from "@mui/material";

// Types
import { Patient } from "../../types/Patient";

// Utils
import { getChipColor } from "../../shared/utils/ChipColor";

interface PatientInfoProps {
  patient: Patient;
  useDivider?: boolean;
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
