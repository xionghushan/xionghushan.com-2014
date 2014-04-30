;(function($) {
  $(function() {
    $('.hover-dropdown').hover(function() {
      $(this).addClass('open');
    }, function() {
      $(this).removeClass('open');
    });
    $('.sbutton').magnificPopup({
      type: "image",
      zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element;
        }
      }
    });
  });
})(jQuery);
