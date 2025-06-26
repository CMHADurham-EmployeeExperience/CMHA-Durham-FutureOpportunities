// script.js
function nextPage() {
  alert("This button could link to another page!");
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirect Button</title>
</head>
<body>

  <h1>Click the Button to Visit Our Site</h1>
  <button onclick="goToWebsite()">Go to CMHA Durham</button>

  <script>
    function goToWebsite() {
      window.location.href = "https://cmhadurham.ca"; // Replace with your desired URL
    }
  </script>

</body>
</html>

