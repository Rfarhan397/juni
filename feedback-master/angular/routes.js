myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',

        })
        .when('/feedback-form',{

        	templateUrl     : 'views/feedback-1.html',

        	controller 		: 'feedbackController',

        	controllerAs 	: 'feedback'
        })

        .when('/done',{

            templateUrl     : 'views/thankyou.html'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h2>404 page not found</h2>'
            }
        );
}]);