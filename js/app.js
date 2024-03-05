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
      // callAPI function that takes the base and exponent numbers as parameters
      var callAPI = (id, name) => {
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({ id: id, name: name });
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        // make API call with parameters and use promises to get response
        fetch(
          "https://itvwkp7335.execute-api.us-east-2.amazonaws.com/beta/mypwa2024",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => alert(JSON.parse(result).body))
          .catch((error) => console.log("error", error));
      };
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
