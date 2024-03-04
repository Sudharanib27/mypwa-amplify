import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";

// Configure Amplify with your GraphQL API URL and API key
Amplify.configure({
  ...awsconfig,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_apiKey: awsconfig.aws_appsync_apiKey,
});

// Listen for form submission
document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;

    try {
      // Call the API to create a new item
      const response = await API.post("apiName", "/items", {
        body: {
          name: name,
          id: id,
        },
      });

      // Log the response
      console.log("API Response:", response);

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
