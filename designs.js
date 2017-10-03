// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Get form input
  let height, width, h_num, w_num;
  let color = $('#colorPicker').val();

  height = $('#input_height');
  width = $('#input_width');
  h_num = height.val();
  w_num = width.val();

  // rewrite values
  height.val(h_num);
  width.val(w_num);

  // clears grid
  let pixel_canvas = $('#pixel_canvas');
  pixel_canvas.children().remove();

  // create grid
  for (let i = 0; i < parseInt(h_num); i++) {
    const h_grid = $('<tr>');
    pixel_canvas.append(h_grid);
    for (let j = 0; j < parseInt(w_num); j++) {
      const w_grid = $('<td class="cell">');
      h_grid.append(w_grid);
    }
  }

  // adds click event to change color
  $('.cell').click(function() {
    $(this).css('background-color', color);
  })

}


form = $('#sizePicker');
form.submit(function(event) {
  event.preventDefault();
  makeGrid();
});
