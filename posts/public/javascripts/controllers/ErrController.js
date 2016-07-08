app.controller('ErrController', function ($scope, $state, $stateParams) {
  $scope.err = $stateParams.err

  $scope.login = function () {
    $state.go('gui')
  }
})
