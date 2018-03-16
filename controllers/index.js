var app = angular.module('app', [
  'ui.router',
  'ngAnimate'
]);

(function () {
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function (
      $stateProvider,
      $urlRouterProvider,
      $locationProvider,
    ) {



    $stateProvider
      .state('/', {
        url: '/',
        views: {
          'topSegment': {
            templateUrl: 'views/partials/home/top.html',
            controller: 'homeTopController'
          },
          'bottomSegment': {
            templateUrl: 'views/partials/home/bottom.html',
            controller: 'homeBottomController'
          }
        }
      })
      .state('property', {
        url: '/property/:id',
        views: {
          'topSegment': {
            templateUrl: 'views/partials/property/top.html',
            controller: 'homeTopController'
          },
          'bottomSegment': {
            templateUrl: 'views/partials/home/bottom.html',
            controller: 'homeBottomController'
          }
        }
      });

      $urlRouterProvider.otherwise(
        "/"
      );

      $locationProvider.html5Mode(true);

    }]);

})();
