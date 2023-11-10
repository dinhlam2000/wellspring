export const fetchAppointments = async () => {
  const response = await fetch("api/appointments");
  const data = await response.json();
  return data;
};
