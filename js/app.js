import Amplify, { API } from "/aws-amplify";
import awsconfig from "./aws-exports";

// Configure Amplify with your GraphQL API URL and API key
Amplify.configure({
  ...awsconfig,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_apiKey: awsconfig.aws_appsync_apiKey,
});

// Configure Amplify with your GraphQL API URL and API key
Amplify.configure(awsconfig);

// Define the callAPI function that takes id and name as parameters
const callAPI = (id, name) => {
  // Instantiate a headers object
  const myHeaders = new Headers();
  // Add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // Convert the object to a string using JSON.stringify
  const raw = JSON.stringify({ id: id, name: name });
  // Create a JSON object with parameters for API call
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Make API call with parameters and use promises to get response
  fetch(
    "https://itvwkp7335.execute-api.us-east-2.amazonaws.com/beta/mypwa2024", // Replace with your actual API endpoint
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => alert(JSON.parse(result).body))
    .catch((error) => console.log("error", error));
};

// Listen for form submission
document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;

    try {
      // Call the callAPI function with id and name parameters
      callAPI(id, name);

      // Clear the form
      document.getElementById("name").value = "";
      document.getElementById("id").value = "";

      // Optionally, display a success message to the user
      alert("Item created successfully!");
    } catch (error) {
      console.error("Error creating item:", error);
      // Optionally, display an error message to the user
      alert("Error creating item. Please try again later.");
    }
  });
