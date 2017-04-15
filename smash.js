function main() {
  replaceAllImages();
}

function replaceAllImages(){

  $.each($('img'), function(idx, item){
    var h = $(item).height();
    var w = $(item).width();
    if (h >0 && w >0){
      replaceImage(item, w, h);
    } else {
      $(item).on('load', (function() {
        replaceImage(item, w, h);
      }));
    }
  });
  setTimeout(function() {
    replaceAllImages();
  }, 3000);
}

function replaceImage(item, w, h) {
  var replacementImages = [
        'http://arttecusa.com/wp-content/uploads/2012/03/smash-mouth-quote.jpg', 'http://media3.s-nbcnews.com/j/newscms/2014_09/213711/140226-tdy-140226-shrek-530-1727_6c2b53b6adf17373c2a5def8e29817ac.nbcnews-ux-2880-1000.jpg', 'https://pbs.twimg.com/profile_images/588447915401580547/E2K_QVTZ.jpg', 'https://brobible.files.wordpress.com/2016/06/smash-mouth.jpg?quality=90&w=650', 'https://consequenceofsound.files.wordpress.com/2016/08/screen-shot-2016-08-28-at-12-06-46-pm.png?w=807', 'http://a2.cdn.whatstrending.com/post_items/images/000/029/204/large/tumblr_mxmgrt3CyV1qbn1vmo1_500.jpg', 'https://parade.com/wp-content/uploads/2016/04/shrek-ftr.jpg'
      ];
  $(item).css('width', w + 'px');
  $(item).css('height', h + 'px');
  $(item).attr('src', replacementImages[Math.floor(Math.random() * replacementImages.length)]);
}

$(function() {
  main();
})
