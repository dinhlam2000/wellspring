export const fetchPatients = async () => {
  // const response = await fetch("/assets/patients.json");

  const response = await fetch("api/patients");
  const data = await response.json();
  return data;
};
