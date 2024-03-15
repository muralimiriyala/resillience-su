

      jQuery(".hc-anim").each(function() {
        var hcAnim = jQuery(this);

        if (hcAnim.hasClass("visible")) {
          var _dd = jQuery("rect.hc-rect");
          var initialYValues = [102, 130, 158, 186];        
          _dd.each(function (index) {
            var $hcrect = jQuery(this);
            var hccurrentHeight = parseFloat($hcrect.attr("height"));
            var hcnewHeight = hccurrentHeight + 20;
            var hcnewY = initialYValues[index];
        
            $hcrect.css({
              y: hcnewY,
              height: hcnewHeight,
            });
          });
        }
      });
