// Function to display the current day of the week
function displayDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayElement.textContent = `Current Day: ${dayOfWeek}`;
}

// Function to display the current UTC time in milliseconds
function displayCurrentUTCTime() {
    const currentTime = Date.now();
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    timeElement.textContent = `Current UTC Time (milliseconds): ${currentTime}`;
}

// Call the function to display the day of the week and UTC time
displayDayOfTheWeek();
displayCurrentUTCTime();