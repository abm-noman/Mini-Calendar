const monthNames = document.getElementById("month");
const dayNames = document.getElementById("day");
const dateNumber = document.getElementById("date");
const yearNumber = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNames.innerHTML = date.toLocaleDateString("default", { month: "long" });

dayNames.innerHTML = date.toLocaleDateString("default", { weekday: "long" });

dateNumber.innerHTML = date.getDate();

yearNumber.innerHTML = date.getFullYear();