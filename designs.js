// When size is submitted by the user, call makeGrid

function makeGrid() {
  // Get form input
  const height = $('#input_height');
  const width = $('#input_width');
  const h_num = height.val();
  const w_num = width.val();

  // clears grid
  const pixel_canvas = $('#pixel_canvas');
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
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
  })

}


form = $('#sizePicker');
form.submit(function(event) {
  event.preventDefault();
  makeGrid();
});
