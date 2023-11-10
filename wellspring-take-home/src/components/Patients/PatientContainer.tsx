import React, { useEffect, useState } from "react";
import { fetchPatients } from "../../shared/services/PatientService";

// Types
import { Patient } from "../../types/Patient";
function PatientContainer() {
  const [patients, setPatients] = useState<Array<Patient>>([]);
  useEffect(() => {
    fetchPatients().then((patients) => setPatients(patients));
  }, []);
  return <div>Here</div>;
}

export default PatientContainer;
