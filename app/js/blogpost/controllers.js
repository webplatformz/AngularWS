angular.module('angularws.blogpost')
    .controller('blogPostController', ['$scope',
        function ($scope) {

            $scope.greeting = "Hello";

            $scope.blogPosts = [
                {
                    title : 'My first post',
                    content : 'Hello, this is my first post.'
                },
                {
                    title : 'The second post',
                    content : '<p>Hello!</p><p>This is real HTML!</p>'
                }
            ]

    }]);