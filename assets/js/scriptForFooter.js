document.addEventListener("DOMContentLoaded", (event) => {
  const userElementH6 = document.getElementById("loggedInUser");
  const timeElementH6 = document.getElementById("timeHeading");
  const dateElementH6 = document.getElementById("dateHeading");

  function updateTime() {
    const now = new Date();

    // Get date components
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, "0");

    dateElementH6.textContent = `${month}/${day}/${year}`;
    timeElementH6.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }

  // Update the time immediately when the page loads
  updateTime();

  // Update the time every second
  setInterval(updateTime, 1000);

  userElementH6.textContent = "Cedrick James Ribad";
});
