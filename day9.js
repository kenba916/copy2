const slide1 = new Swiper('.slide1', {
    // Optional parameters
    //最後まで行ったら一枚目に戻る
    loop: true,

  
    // If we need pagination
    //ドットの部分
    pagination: {
      el: '.swiper-pagination',
      //ドットをクリック可能に
      clickable: true,
    },
  
    // Navigation arrows
    //arrowアイコン
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  jQuery('.drawer-icon').on('click', function(e) {
    //クリック時に起こる動きの制御？ クリックイベントとセットで覚えとく
    // → aタグ はページ内で移動したりしちゃうからそれを抑える
    e.preventDefault();
  
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-contents').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
  
    return false;
  });


///////////////////////
// 「スムーススクロール」の型
///////////////////////
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {


  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();


  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);


  // ページのトップを基準にターゲットの位置を取得
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;


  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});


///////////////
// スクロール検知
///////////////
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

//////////////////////////
//navクリックで任意のところに下線
//////////////////////////
jQuery('.header-nav li a').on('click', function(){
  //全部の赤線を削除
  jQuery('.header-nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});


//////////////////////////
// アコーディオン
//////////////////////////
jQuery('.question-item').on('click', function(){

  // alert('クリック');
  // Q クリックに対して、その次の要素の A の要素を表示
  jQuery(this).next().slideToggle();
  // jQuery('.question-icon').toggleClass('is-active');
  // ↑ これも大丈夫だけど ↓ もOk
  jQuery(this).children('.question-icon').toggleClass('is-active');

});

////////////////
// modal close
////////////////
// jQuery('.js-close-button').on('click', function(e){
//   e.preventDefault();
//   // alert('閉じる');
//   var target = jQuery(this).data('target');
//   jQuery(target).hide();

//   return false;
// });

jQuery('.js-close-button').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを追加する
  jQuery('.modal').hide();
  jQuery('.modal-background').hide();

  return false;
});

////////////////
// modal open
////////////////
// jQuery('.js-open-button').on('click', function(e){
//   e.preventDefault();
//   // alert('閉じる');
//   var target = jQuery(this).data('target');
//   jQuery('.js-open-button' + target).show();

//   return false;
// });

jQuery('.js-open-button').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを追加する
  jQuery('.modal').show();
  jQuery('.modal-background').show();

  return false;
});




  //Slider2
// var slide2 = new Swiper ('.slide2', {
//     //スライドを一度に複数行
//     slidesPerView: 1,
//     //breakpointの設定
//     breakpoints: {
//         // 768px以上の場合
//         768: {
//           slidesPerView: 2,
//           slidesPerGroup: 3,
//         },
//         // 1200px以上の場合
//         1200: {
//           slidesPerView: 3,
//           slidesPerGroup: 3,
//         },
//     },
//     //複数枚ずつスライド
//     slidesPerGroup: 1,
//     loop: true,
//     //slideにspaceを作る
//     spaceBetween: 24,    

        
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });