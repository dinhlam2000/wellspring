import { useEffect, useState } from "react";

// Services
import { fetchPatients } from "../../shared/services/PatientService";

// Components
import PatientInfo from "./PatientInfo";

// Types
import { Patient } from "../../types/Patient";

function PatientContainer() {
  const [patients, setPatients] = useState<Array<Patient>>([]);
  useEffect(() => {
    fetchPatients().then((patients) => setPatients(patients));
  }, []);
  return (
    <>
      {patients.map((patient, idx) => (
        <PatientInfo
          patient={patient}
          useDivider={idx !== patients.length - 1}
        />
      ))}
    </>
  );
}

export default PatientContainer;
