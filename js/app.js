function callAPI(id, name) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({ id: id, name: name });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://itvwkp7335.execute-api.us-east-2.amazonaws.com/beta/mypwa2024",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((result) => {
      alert(JSON.parse(result).body);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error occurred while processing the request.");
    });
}
