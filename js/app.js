// Import Amplify
import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";

// Configure Amplify
Amplify.configure(awsconfig);

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
      console.log("Item created:", response);

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
