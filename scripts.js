//Initialize all items
const items = [
  ];

//Load state of an item
function loadItems(item, index) {
    $(`#${item}`).addClass(localStorage.getItem(`${item}`));
  }
  
  //Load state of every item on page load
  $(function() {
    items.forEach(loadItems);
  
    //Change state of item on click
    $('.itemactive').click(function() {
      if ($(this).hasClass('unlocked')) {
        $(this).toggleClass('unlocked');
        localStorage.setItem($(this).attr('id'), '');
      } else {
        $(this).toggleClass('unlocked');
        localStorage.setItem($(this).attr('id'), 'unlocked');
      }
    });
  });
