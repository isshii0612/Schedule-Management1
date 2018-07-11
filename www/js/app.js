function  footerdo(){
  $("footer>div>ul").append('<li><a href="#topPage" data-icon="bars" data-transition="none" class="ui-btn-active ui-state-persist">リスト</a></li>');
  $("footer>div>ul").append('<li><a href="#mapPage" data-icon="star" data-transition="none">マップ</a></li>');
  $("footer>div>ul").append('<li><a href="#settingPage" data-icon="edit" data-transition="none">セッティング</a></li>');
  $("footer>div>ul").append('<li><a href="#aboutPage" data-icon="info" data-transition="none">アプリについて</a></li>');
}