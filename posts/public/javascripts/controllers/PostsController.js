app.controller('PostsController', function ($scope, $rootScope, $state, PostsService) {
  let postsData = () => {
    PostsService.getAllPosts()
      .success(function (data) {
        $scope.posts = data
      })
      .error((data) => {
        $state.go('404', {err: data})
      })
  }

  $scope.$on('new-post', function () {
    postsData()
  })

  $scope.create = function () {
    $state.go('posts.create')
  }

  $scope.edit = function (index) {
    $state.go('posts.edit', {id: index})
  }

  $scope.delete = function (id) {
    var result = confirm('Delete?')
    if (result) {
      PostsService.deletePosts(id).success((data) => {
        postsData()
      })
    }
  }

  $scope.view = function (index) {
    $state.go('posts.view', {id: index})
  }

  postsData()
})
