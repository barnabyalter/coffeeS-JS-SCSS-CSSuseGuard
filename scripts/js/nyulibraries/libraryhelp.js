(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    nyuLibraryHelp: function(options) {
      var settings;
      settings = {
        base: 'https://libraryh3lp.com/chat/',
        skin: '14593',
        theme: 'gota',
        title: 'Ask+NYU+Libraries',
        identity: 'NYU',
        iframe_width: '240px',
        iframe_height: '200px',
        iframe_border: '1px solid #999',
        jid: 'askbobst@chat.libraryh3lp.com',
        wrapper_class: 'libraryh3lp',
        offline_text: '<a href="http://library.nyu.edu/ask" ' + 'target="_blank">Ask a Librarian</a>',
        u_js: "https://libraryh3lp.com/js/libraryh3lp.js?multi"
      };
      if (options) {
        settings = $.extend(settings, options);
      }
      return this.each(function() {
        var iframe, iframe_src, iframe_wrapper, offline;
        $(this).wrap($("<div />").addClass("needs-js"));
        iframe_wrapper = $("<div />").addClass(settings.wrapper_class).attr("jid", settings.jid);
        iframe_src = settings.base + settings.jid + "?skin=" + settings.skin + "&theme=" + settings.theme + "&title=" + settings.title + "&identity=" + settings.identity;
        iframe = $("<iframe />");
        iframe.attr("src", iframe_src);
        iframe.attr("frameborder", 1);
        iframe.css("border", settings.iframe_border);
        iframe.css("width", settings.iframe_width);
        iframe.css("height", settings.iframe_height);
        offline = $("<div />").addClass(settings.wrapper_class).css("display", "none").html(settings.offline_text);
        return $(this).closest("div").after(iframe_wrapper.append(iframe).after(offline));
      });
    }
  });

  $(function() {
    var ny_settings;
    ny_settings = {};
    if ($("a#ad_aal").length !== 0) {
      $("a#ad_aal").nyuLibraryHelp({
        title: 'Chat with a librarian ',
        jid: 'nyuad@chat.libraryh3lp.com',
        offline_text: '<a href="http://nyuad.nyu.edu/research/library/contact.html" ' + 'target="_blank">Ask a Librarian</a>'
      });
      ny_settings = {
        offline_text: '<span></span>'
      };
    }
    return $("a#ny_aal").nyuLibraryHelp(ny_settings);
  });

}).call(this);
