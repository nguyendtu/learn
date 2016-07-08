app.controller('GuiController', function ($scope, $http, $state) {
  $scope.login = function (token) {
    $http.defaults.headers.common.token = token
    $state.go('posts.list')
  }
})
