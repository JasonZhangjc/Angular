'user strict';

// The name of the module is 'blogList'
angular.module('blogList').
    component('blogList', {
        // internal template
        // can also use external template
        // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        // The following is the external template!
        templateUrl: './templates/blog-list.html',
        controller: function($routeParams, $scope){
            console.log($routeParams);

            var blogItems = [
                {title: "Alphabet 1", id: 1, description: "This is a book", publishDate: "2016-07-24"},
                {title: "Alphabet 2", id: 2, description: "This is a book", publishDate: "2016-07-25"},
                {title: "Alphabet 3", id: 3, description: "This is a book", publishDate: "2016-07-26"},
                {title: "Alphabet 4", id: 4, description: "This is a book", publishDate: "2016-07-27"},
            ]

            $scope.items = blogItems;

            // $scope. is the set of variables that can be called in index.html
            console.log("hello")
            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function() {
                console.log("clicked")
                $scope.clicks += 1
                $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

    // controller('BlogListController', function($scope) {
    //     console.log("hello")
    //     $scope.title = 'Hi there'
    //     $scope.clicks = 0
    //     $scope.someClickTest = function() {
    //         console.log("clicked")
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times'
    //     }
    // })


    // component('blogList');