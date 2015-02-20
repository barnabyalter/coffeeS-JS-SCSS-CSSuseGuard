(function() {
  $(function() {
    return $("[data-hide]").on("click", function(event) {
      var $parent;
      $parent = $(this).closest("." + $(this).attr("data-hide"));
      $parent.removeClass("in");
      if ($.support.transition && $parent.hasClass('fade')) {
        return $parent.on($.support.transition.end, function() {
          $parent.hide();
          return $parent.addClass("in");
        });
      } else {
        return $parent.trigger('closed').hide();
      }
    });
  });

}).call(this);
