import React from "react";

// Types
import { Patient } from "../../types/Patient";

function PatientInfo(patient: Patient) {
  return <div>{patient.patientName}</div>;
}

export default PatientInfo;
