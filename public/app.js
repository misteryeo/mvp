$(document).ready(function() {
  getLine();
  // Upon load, we want the initial line to load

  // Get a single starter line
  function getLine() {
    console.log('Is this invoked? Line 7')
    $.ajax({
      url: 'http://127.0.0.1:3000/conversations',
      method: 'GET',
      success: function(data) {
        console.log('Success!', data)
        data;
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
      url: 'http://127.0.0.1:3000/conversations',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify({key: 'value'}),
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

});