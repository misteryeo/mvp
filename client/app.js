$(document).ready(

  // Upon load, we want the initial line to load

  // Get a single starter line
  function getLine() {
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      method: 'GET',
      success: function(data) {
        console.log('Success!', data)
        // We want to render this data on the page
      },
      error: function(error) {
        console.error('Error', error)
      }

    })
  } 

  // Add a line that user wants
  function addLine() {
    $.ajax({
      url: 'http://127.0.0.1:3000/'
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
      data: 
      success: function(data) {
        getLine();
        console.log('Successful POST!', data)
      },
      error: function(error) {
        console.error('Error', error)
      }
    })

  }

  // Edit an existing line
  function editLine() {

  }

  // Render line
  function renderLine() {

  }

);