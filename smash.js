function main() {
  replaceAllImages();
}

function replaceAllImages(){
  var replacementImages = [
    'http://arttecusa.com/wp-content/uploads/2012/03/smash-mouth-quote.jpg',
    'http://media3.s-nbcnews.com/j/newscms/2014_09/213711/140226-tdy-140226-shrek-530-1727_6c2b53b6adf17373c2a5def8e29817ac.nbcnews-ux-2880-1000.jpg',
    'https://pbs.twimg.com/profile_images/588447915401580547/E2K_QVTZ.jpg',
    'https://brobible.files.wordpress.com/2016/06/smash-mouth.jpg?quality=90&w=650',
    'https://consequenceofsound.files.wordpress.com/2016/08/screen-shot-2016-08-28-at-12-06-46-pm.png?w=807',
    'http://a2.cdn.whatstrending.com/post_items/images/000/029/204/large/tumblr_mxmgrt3CyV1qbn1vmo1_500.jpg',
    'https://parade.com/wp-content/uploads/2016/04/shrek-ftr.jpg',
    'http://www.mercurynews.com/wp-content/uploads/2016/10/screen-shot-2016-10-28-at-8-12-57-am.png?w=620',
    'http://static.stereogum.com/uploads/2016/10/423presspassweb-1477781306.jpg',
    'https://brobible.files.wordpress.com/2016/01/smash-mouth-david-bowie.jpg?quality=90&w=642',
    'https://s3.amazonaws.com/s3.cgsociety.org/articles/2015/07/23/o_M2EtTsY53IPM900cCatkWlcPCxiMQ7.jpg',
    'http://assets2.ignimgs.com/2015/08/06/shrek-1280jpg-73e7ea_1280w.jpg',
    'http://img.usmagazine.com/480-width/smash-mouth-article.jpg',
    'https://i0.wp.com/www.atlantamusicguide.com/wp-content/uploads/Smashmouth.jpeg',
    'https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/f18/a3/6aec6b281becaf083530aa401679fe5d.jpg',
    'https://media2.fdncms.com/sfweekly/imager/chef-guy-fieri-and-smash-mouth-lead-singer/u/big/2611979/smashfieri_opt.jpg',
    'http://img.cache.vevo.com/Content/VevoImages/video/E940A9FC7080BE3A954DB49FDDCF3635.jpg',
    'http://www.billboard.com/files/media/smash-mouth-1999-billboard-650.jpg',
    'http://pedestriantv-prod.s3.amazonaws.com/images/article/2016/06/15/shreksmashmouth2-619-386.jpg',
    'https://i.ytimg.com/vi/J48dqyz_C6s/maxresdefault.jpg',
    'http://static.stereogum.com/uploads/2016/10/423presspassweb-1477781306.jpg',
    'http://www.thrashhits.com/wpress/wp-content/uploads/2011/10/SmashmouthEggsFAILUREThrashHits.jpg',
    'http://r.fod4.com/c=sq/s=w900,pd1/o=80/http://p.fod4.com/p/media/6ac8c81954/W5ZJxzygQCSc4hZG3p86_smash%20square.jpg',
    'http://vegasexperience.com/wp-content/uploads/2016/04/smash_mouth_horizontal.jpg',
    'https://m.elitestatic.com/m/658e03cb1d43b669/800x400-elite-daily-Guy-Fieri.jpg',
    'http://cdn2.crushable.com/wp-content/uploads/2011/08/tumblr_lqpakfnQ2E1qzy8n8o1_500.jpg',
    'http://cdn.newsapi.com.au/image/v1/da3e9bf4bdc76e634f300a300137f0ae',
    'http://www.oocities.org/sunsetstrip/lounge/1638/hrbs_2.jpg',
    'https://ewedit.files.wordpress.com/2016/10/screen-shot-2016-10-21-at-12-29-08-pm.jpg?w=612',
    'http://www.grandslamcharityjam.org/wp-content/uploads/2011/02/Smash-Mouth-PHOTO-1.jpg',
    'https://img.grouponcdn.com/deal/f0a89c78a56140149cf441fb9dbee787/87/v1/c700x420.jpg',
    'https://images.vice.com/noisey/content-images/contentimage/no-slug/90e745bf4bd5ec85062d121f19cbac8d.jpg',
    'https://cbs931jackfm.files.wordpress.com/2014/04/smash-mouth-brenda-chase-getty-images.jpg?w=640&h=360&crop=1',
    'https://s-media-cache-ak0.pinimg.com/originals/e0/0f/de/e00fde21dee2a075d2c4456b97a8af4a.jpg',
    'https://timedotcom.files.wordpress.com/2016/07/smash-mouth-group-pic.jpg?quality=85',
    'http://static.tvtropes.org/pmwiki/pub/images/smashmouth_8671.jpg',
    'https://metrouk2.files.wordpress.com/2016/06/111154933.jpg?w=748&h=494&crop=1',
    'http://www.altpress.com/images/uploads/news/underoath_SM.jpg',
    'http://diffuser.fm/files/2016/06/Smash-Mouth.jpg?w=630&h=420&zc=1&s=0&a=t&q=89',
    'http://cdn.boulevards.com/imgs/event_imgs/20150609184150-SmashMouth2EFM.jpg',
    'http://www.aceshowbiz.com/images/photo/smash_mouth.jpg',
    'http://i.dailymail.co.uk/i/pix/2016/08/29/22/37B1119900000578-3764207-image-a-56_1472507455538.jpg',
    'http://www.inforum.com/sites/default/files/styles/16x9_620/public/0B5WzNj8WWJ6_djhvdlJKY1AyYkk.jpg?itok=W3oRWYnu',
    'https://thumbs.mic.com/MzgwODkwZTY0NSMvX0FJaU1WQ2J0NEM0Zkp1clJZZUg5Y2xxRXBzPS8weDE2NToyOTE2eDE1NzcvMTYwMHg5MDAvZmlsdGVyczpmb3JtYXQoanBlZyk6cXVhbGl0eSg4MCkvaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvdWFrZXBmZ2lldWNlZG1tczJucXd3ZmkzZzhteWEzYmdocXR2eW9kdmRhY3p3Z3dzNnVocGJveGQ2ZDdoNXBteS5qcGc.jpg',
    'http://www.pngmart.com/files/3/Shrek-PNG-Photos.png',
    'http://media3.s-nbcnews.com/j/newscms/2014_09/213711/140226-tdy-140226-shrek-530-1727_6c2b53b6adf17373c2a5def8e29817ac.nbcnews-ux-2880-1000.jpg',
    'http://img.morphthing.com/i/27341/2/0/76bac43b/Shrek.jpeg',
    'http://vignette3.wikia.nocookie.net/shrek/images/2/26/Shrek_gonads.jpg/revision/latest?cb=20100604230322',
    'https://secure.static.tumblr.com/13d17ce0e1d298288de3c30e148edd3f/fdgqvqe/Rien2lf3l/tumblr_static_original.jpg',
    'https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/shrek-swamp-perplexed.jpg',
    'http://cdn.movieweb.com/img.news.tops/NELcKMRsMfixPO_1_b.jpg',
    'http://www.geek.com/wp-content/uploads/2017/01/nude-shrek-reclining.jpg',
    'http://www.geek.com/wp-content/uploads/2017/01/shrek-weed.jpg',
    'https://musicart.xboxlive.com/6/cfa82d24-0000-0000-0000-000000000009/504/image.jpg?w=580&h=326&mode=letterbox',
    'http://assets2.ignimgs.com/2015/08/06/shrek-1280jpg-73e7ea_1280w.jpg',
    'http://vignette3.wikia.nocookie.net/shrek/images/3/39/Shrek_triplets.jpg/revision/latest?cb=20100604233830',
    'http://images.contentful.com/7h71s48744nc/2HtE4seEZa4OmKWgAA6k6A/7977f3912e75d6f816d0882f72d91569/shrek-the-third.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/dvd/aplus/shrek3/shrek2-hi.jpg',
    'https://www.unrealitytv.co.uk/wp-content/uploads/2015/12/Shrek-2-1.png',
    'http://yosisideral.emisorasunidas.com/sites/default/files/images/shrek-610x350.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/4c/6d/f9/4c6df95f02a071086571d91c3668043d.jpg'
  ];

  $.each($('img'), function(idx, item) {
    var h = $(item).height();
    var w = $(item).width();
    if ($.inArray($(item).attr('src'), replacementImages) == -1) {
      if (h > 0 && w > 0){
        replaceImage(item, w, h);
      } else {
        $(item).on('load', (function() {
          replaceImage(item, w, h);
        }));
      }
    }
  });
  setTimeout(function() {
    replaceAllImages();
  }, 3000);

  function replaceImage(item, w, h) {
    $(item).css('width', w + 'px');
    $(item).css('height', h + 'px');
    $(item).attr('src', replacementImages[Math.floor(Math.random() * replacementImages.length)]);
  }
}


$(function() {
  main();
});
