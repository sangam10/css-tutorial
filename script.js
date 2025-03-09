const mobileNumbers = ["9860942158"]; // Replace with your list of mobile numbers

const apiUrl = "https://api.example.com"; // Replace with the API endpoint URL

// Function to call the API for each mobile number
async function fetchCallerProfiles() {
  for (const number of mobileNumbers) {
    const url = `${apiUrl}?number=${number}`; // Adjust the URL structure based on the API you're using

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Process the data received from the API for the current mobile number
      console.log(`Caller profile for ${number}:`, data);
    } catch (error) {
      console.error(`Error fetching caller profile for ${number}:`, error);
    }
  }
}

fetchCallerProfiles();
