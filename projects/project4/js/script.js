/* jshint esversion: 6 */

// Your JavaScript code follows below:
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response:', response);  // Log the response object to inspect the status
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);  // Log the fetched data to verify it's being retrieved correctly
    const dataDiv = document.getElementById('data');
    if (data.length > 0) {
      dataDiv.innerHTML = `<h2>${data[0].title}</h2>`;  // Display the first post title
    } else {
      dataDiv.innerHTML = '<p>No data found.</p>';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);  // Log any errors to the console
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = '<p>Sorry, an error occurred while fetching data.</p>';
  });
