import dom from "../dom.js";

const extractValues = () => {
    const day = parseInt(dom.daySelect.value, 10); // Convert day value to a number
    const month = parseInt(dom.monthSelect.value, 10); // Convert month value to a number
    const year = parseInt(dom.yearSelect.value, 10) % 100; // Take last 2 digits of year

    const valuesArray = [day, month, year];
    return valuesArray;
   
}

export default extractValues;
