// include ngRoute for all our routing needs
    var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
    demoApp.config(function($routeProvider) {
    $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'index.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/company', {
                templateUrl : 'company.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactCtrl'
            })
            
             // route for the contact page
            .when('/projects', {
                templateUrl : 'projects.html',
                controller  : 'projectsCtrl'
            })
            
             // route for the contact page
            .when('/services', {
                templateUrl : 'services.html',
                controller  : 'servicesCtrl'
            })
            
            
            
           
            
    });

    // create the controller and inject Angular's $scope
     demoApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

    demoApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'Hi! This is the about page.';
    });

    demoApp.controller('contactCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
    
    demoApp.controller('projectsCtrl', function($scope) {
  $scope.message = 'Projects';
    });
    
    demoApp.controller('servicesCtrl', function($scope) {
  $scope.message = 'Services';
    });