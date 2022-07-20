//Initialize all items
const items = [
    'IMG_oreo',
    'IMG_jugg',
    'IMG_ogmur',
    'IMG_kageboshi',
    'IMG_bloody_cloak',
    'IMG_keychain_sword',
    'IMG_blue_bee_quiver',
    'IMG_red_bee_quiver',
    'IMG_yellow_bee_quiver',
    'IMG_qot',
    'IMG_spirit_trap',
    'IMG_greaterhosen',
    'IMG_cdirk',
    'IMG_ray_katana',
    'IMG_pogmur',
    'IMG_tablet',
    'IMG_conflict',
    'IMG_stein_poison',
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
