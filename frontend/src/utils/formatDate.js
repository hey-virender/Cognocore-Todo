export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Extract day, month, and year
  const day = date.getUTCDate(); // Get the day of the month (1-31)
  const month = date.toLocaleString('default', { month: 'long' }); // Get the full month name (e.g., "March")
  const year = date.getUTCFullYear(); // Get the full year (e.g., 2025)

  // Format the date as "11 March 2025"
  return `${day} ${month} ${year}`;
};