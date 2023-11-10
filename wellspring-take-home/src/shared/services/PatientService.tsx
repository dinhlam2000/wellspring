export const fetchPatients = async () => {
  const response = await fetch("api/patients");
  const data = await response.json();
  return data;
};
