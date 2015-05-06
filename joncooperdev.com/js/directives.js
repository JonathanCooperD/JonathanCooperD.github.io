
app.directive('scrollSpy', function($window) {
  return {
    restrict: 'A',
    controller: function($scope) {
      $scope.spies = [];
      return this.addSpy = function(spyObj) {
        return $scope.spies.push(spyObj);
      };
    },
    link: function(scope, elem, attrs) {
      var spyElems;
      spyElems = [];
      scope.$watch('spies', function(spies) {
        var spy, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = spies.length; _i < _len; _i++) {
          spy = spies[_i];
          if (spyElems[spy.id] == null) {
            _results.push(spyElems[spy.id] = elem.find('#' + spy.id));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
      return $($window).scroll(function() {
        var highlightSpy, pos, spy, _i, _len, _ref;
        highlightSpy = null;
        _ref = scope.spies;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          spy = _ref[_i];
          spy.out();
          if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 100) {
            spy.pos = pos;
            if (highlightSpy == null) {
              highlightSpy = spy;
            }
            if (highlightSpy.pos < spy.pos) {
              highlightSpy = spy;
            }
          }
        }
        return highlightSpy != null ? highlightSpy["in"]() : void 0;
      });
    }
  };
});

app.directive('spy', function() {
  return {
    restrict: "A",
    require: "^scrollSpy",
    link: function(scope, elem, attrs, affix) {
      return affix.addSpy({
        id: attrs.spy,
        "in": function() {
          return elem.addClass('current');
        },
        out: function() {
          return elem.removeClass('current');
        }
      });
    }
  };
});

app.directive('scrollTo', function ($location, $anchorScroll) {
	return function(scope, element, attrs) {
		element.bind('click', function(event) {

			var location = attrs.scrollTo,
			    $idTag = $('#' + location),
			    $idTagPos = $idTag.offset().top - 80;

      $('html, body').animate({
      	scrollTop: $idTagPos 
      }, 1000);
		});
	};
});