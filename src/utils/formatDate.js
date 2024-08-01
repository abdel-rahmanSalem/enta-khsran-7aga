export default function formatDate(date) {
  const year = date.getFullYear();

  const month = date.toLocaleString("en-US", { month: "short" });

  const day = date.getDate().toString().padStart(2, "0");

  // Format the date
  return `${year} ${month} ${day}`;
}
