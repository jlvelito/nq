/*! velocity-ui-angular - v0.3.5 - 2014-08-18
* https://github.com/rosslavery/velocity-ui-angular
* Copyright (c) 2014 Ross Lavery <rosslavery@gmail.com>; License: MIT */
(function(angular) {
  'use strict';

  var Container = (window.jQuery || window.Zepto || window);
  if (!Container.Velocity || !Container.Velocity.Utilities || !Container.Velocity.RegisterUI) {
    throw new Error('Velocity UI Pack: Velocity must be loaded first. Aborting.');
  }

  Container.ngVelocity = angular.module('velocity.ui', ['ngAnimate'])

  .constant('ngVelocityConfig', {
    duration: 300
  })

  .factory('VelocityUtils', ['ngVelocityConfig', "$parse", function (ngVelocityConfig, $parse) {

    return {

      _parseClassList: function(classList) {
        var parsedOptions = {};

        angular.forEach(classList, function(currClass) {
            if (currClass.indexOf('velocity-duration-') > -1) {
                parsedOptions.duration = $parse(currClass.split('velocity-duration-')[1])();
            }
            if (currClass.indexOf('velocity-delay-') > -1) {
                parsedOptions.delay = $parse(currClass.split('velocity-delay-')[1])();
            }
        });

        return parsedOptions;
      },

      _createAngularAnimation: function(animation) {
        var self = this;
        var opp = animation.replace('In', 'Out');

        if (opp.indexOf('Down') > -1) {
          opp = opp.replace('Down', 'Up');
        }
        else if (opp.indexOf('Up') > -1) {
          opp = opp.replace('Up', 'Down');
        }

        return {
          enter: self._createVelocityAnimation(animation),
          leave: self._createVelocityAnimation(opp),
          move: self._createVelocityAnimation(animation),
          beforeAddClass: self._createVelocityClassAnimation(opp),
          removeClass: self._createVelocityClassAnimation(animation)
        };
      },

      _createVelocityAnimation: function(animation) {
        var self = this;

        return function($el, done) {
          var parsedOptions = self._parseClassList($el[0].classList);
          var options = angular.extend(ngVelocityConfig, parsedOptions);
          options.display = $el.css('display') === 'flex' ? 'flex' : 'auto';
            $el.css("opacity", 0);
          Container.Velocity.animate($el, animation, options).then(done);
        };
      },

      _createVelocityClassAnimation: function(animation) {
        var self = this;

        return function ($el, className, done) {
          var parsedOptions = self._parseClassList($el[0].classList);
          var options = angular.extend(ngVelocityConfig, parsedOptions);
          options.display = $el.css('display') === 'flex' ? 'flex' : 'auto';

          if (className === 'ng-hide') {
            Container.Velocity.animate($el, animation, options).then(done);
          }
          else {
            done();
          }
        };
      }

    };

  }]);


  // Convert animation name to class name
  function _getClassName(animation) {
    return '.velocity-' + animation.replace('.', '-');
  }


  // Iterate through the packaged effects to register them as Angular animations
  var className;
  angular.forEach(Container.Velocity.RegisterUI.packagedEffects, function(animationProps, animationName) {

    className = _getClassName(animationName);

    Container.ngVelocity.animation(className, ['VelocityUtils', function(VelocityUtils) {
      return VelocityUtils._createAngularAnimation(animationName);
    }]);

  });


})(angular);
