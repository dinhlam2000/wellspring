import React, { useEffect } from "react";
import "./App.css";

// Services
import { fetchPatients } from "./shared/services/PatientService";
import { fetchAppointments } from "./shared/services/AppointmentService";

function App() {
  useEffect(() => {
    fetchPatients().then((patients) => console.log(patients));
    fetchAppointments().then((appointments) => console.log(appointments));
  }, []);
  return (
    <div className="wrapper">
      <div className="navigation">Wellsprings</div>
      <h3 className="title-break">Patients</h3>
    </div>
  );
}

export default App;
