let app = angular.module('app', ['ui.router'])

app.run(function ($http) {
  $http.defaults.headers.common.token = null
})
