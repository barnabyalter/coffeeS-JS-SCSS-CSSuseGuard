(function() {
  $(function() {
    new window.nyulibraries.Popover("#bobcat_tabs .nav-tabs li a").init();
    return new window.nyulibraries.PartialHoverPopover("#sidebar h2.workspace a").init();
  });

}).call(this);
