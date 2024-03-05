// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (base, exponent) => {
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({ base: base, exponent: exponent });
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

// Attach callAPI function to the window object
window.callAPI = callAPI;
