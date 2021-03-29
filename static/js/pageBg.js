function pageBgRecalc(){
    $(".page-bg").css({
        'height': ($(".page-content").height() + 'px')
      });
}

$(window).resize(() =>{ // Listen for page resize so we can re-calculate the footer pos
  pageBgRecalc();
  setTimeout(() =>{ // Just a timeout to be sure the window has correctly maximized 
    pageBgRecalc();
    setTimeout(() => {
    },500)
  }, 300)
})