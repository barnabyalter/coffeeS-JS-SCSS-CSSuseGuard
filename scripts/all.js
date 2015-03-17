(function() {


}).call(this);

(function() {
  $(function() {
    new window.nyulibraries.Popover("#bobcat_tabs .nav-tabs li a").init();
    return new window.nyulibraries.PartialHoverPopover("#sidebar h2.workspace a").init();
  });

}).call(this);

(function() {
  window.nyulibraries = {};

}).call(this);

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

(function() {
  var HoverPopover, PartialHoverPopover, Popover, Tooltip,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Tooltip = (function() {
    Tooltip.prototype["default"] = {
      html: true,
      trigger: 'hover',
      delay: {
        show: 500,
        hide: 100
      },
      placement: function() {
        var element;
        element = arguments[1];
        if ($(element).offset().left > $(document).width() * .75) {
          return 'left';
        } else {
          return 'right';
        }
      }
    };

    Tooltip.prototype.options = function() {
      return {
        html: (function() {
          var ref;
          return (ref = this._html) != null ? ref : this["default"].html;
        }).call(this),
        trigger: (function() {
          var ref;
          return (ref = this._trigger) != null ? ref : this["default"].trigger;
        }).call(this),
        delay: (function() {
          var ref;
          return (ref = this._delay) != null ? ref : this["default"].delay;
        }).call(this),
        placement: (function() {
          var ref;
          return (ref = this._placement) != null ? ref : this["default"].placement;
        }).call(this),
        title: this._title
      };
    };

    Tooltip.prototype.init = function() {
      return $(this.selector).tooltip(this.options());
    };

    Tooltip.prototype.html = function(_html) {
      this._html = _html;
      return this;
    };

    Tooltip.prototype.trigger = function(_trigger) {
      this._trigger = _trigger;
      return this;
    };

    Tooltip.prototype.delay = function(_delay) {
      this._delay = _delay;
      return this;
    };

    Tooltip.prototype.placement = function(_placement) {
      this._placement = _placement;
      return this;
    };

    Tooltip.prototype.title = function(_title) {
      this._title = _title;
      return this;
    };

    function Tooltip(selector) {
      this.selector = selector;
    }

    return Tooltip;

  })();

  Popover = (function(superClass) {
    extend(Popover, superClass);

    Popover.prototype._JSON_URL = 'https://web1.library.nyu.edu/common/' + 'retrieve_file_contents_as_json.php?full_html=true&callback=?';

    Popover._CONTENT_CALLBACK = function(self, json_url) {
      return function() {
        var element;
        element = $(this);
        if ((element.attr("data-content") != null)) {
          return element.attr("data-content");
        } else {
          $.getJSON(json_url + "&the_url=" + element.attr("href"), function(data) {
            element.attr("data-content", self.wrapHTML(data.theHtml, element.attr("data-class")));
            return element.popover('show');
          });
          return "Loading...";
        }
      };
    };

    Popover.prototype.options = function() {
      return $.extend(Popover.__super__.options.call(this), {
        content: this._content
      });
    };

    Popover.prototype.init = function() {
      return $(this.selector).popover(this.options());
    };

    Popover.prototype.content = function(_content) {
      this._content = _content;
      return this;
    };

    function Popover(selector) {
      this.selector = selector;
      this.content(Popover._CONTENT_CALLBACK(this, this._JSON_URL));
    }

    Popover.prototype.wrapHTML = function(html, klass) {
      if (klass != null) {
        return $("<p>").append($("<div>").addClass(klass).append(html)).html();
      } else {
        return html;
      }
    };

    return Popover;

  })(Tooltip);

  HoverPopover = (function(superClass) {
    extend(HoverPopover, superClass);

    function HoverPopover() {
      return HoverPopover.__super__.constructor.apply(this, arguments);
    }

    HoverPopover.prototype.init = function() {
      this.trigger('manual');
      return $(this.selector).popover(this.options()).hover(function(e) {
        return e.preventDefault();
      }).mouseenter(function(e) {
        return $(this).popover('show');
      }).mouseleave(function(e) {
        if (!$(e.relatedTarget).parent().hasClass("popover")) {
          return $(this).popover('hide');
        }
      });
    };

    return HoverPopover;

  })(Popover);

  PartialHoverPopover = (function(superClass) {
    extend(PartialHoverPopover, superClass);

    PartialHoverPopover.prototype._JSON_URL = 'https://web1.library.nyu.edu/common/' + 'retrieve_file_contents_as_json.php?callback=?';

    function PartialHoverPopover(selector) {
      this.selector = selector;
      this.content(Popover._CONTENT_CALLBACK(this, this._JSON_URL));
    }

    return PartialHoverPopover;

  })(HoverPopover);

  $(function() {
    window.nyulibraries || (window.nyulibraries = {});
    window.nyulibraries.Tooltip = Tooltip;
    window.nyulibraries.Popover = Popover;
    window.nyulibraries.HoverPopover = HoverPopover;
    window.nyulibraries.PartialHoverPopover = PartialHoverPopover;
    $('[class!="popover"]').click(function(e) {
      return $(".popover").hide();
    });
    $(document).on('mouseenter', ".popover", function(e) {
      return $(this).show();
    });
    $(document).on('mouseleave', ".popover", function(e) {
      return $(this).hide();
    });
    return new window.nyulibraries.HoverPopover('[class*="popover"]').init();
  });

}).call(this);

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