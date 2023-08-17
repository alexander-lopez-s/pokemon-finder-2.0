import dom from "../dom.js";

const createTime = () => {

// Populate days
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  dom.daySelect.appendChild(option);
}

// Populate months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (let i = 0; i < months.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = months[i];
  dom.monthSelect.appendChild(option);
}

// Populate years
const currentYear = new Date().getFullYear();
for (let year = 1970; year <= currentYear; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  dom.yearSelect.appendChild(option);
}
}

export default createTime;