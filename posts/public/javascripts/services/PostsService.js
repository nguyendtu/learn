app.factory('PostsService', function ($http, $rootScope) {
  var base = 'http://localhost:8001/'
  var getAllPosts = function () {
    var url = base + 'posts'

    return $http({
      method: 'GET',
      url
    })
  }

  var getPosts = function (id) {
    var url = base + 'posts/' + id
    return $http({
      method: 'GET',
      url: url
    })
  }

  var addPosts = function (data, token) {
    var url = base + 'posts'
    return $http({
      method: 'POST',
      url: url,
      data: {
        post: data
      }
    })
  }

  var deletePosts = function (id) {
    var url = base + 'posts/' + id
    return $http({
      method: 'DELETE',
      url: url
    })
  }

  return {
    getAllPosts: getAllPosts,
    getPosts: getPosts,
    addPosts: addPosts,
    deletePosts: deletePosts
  }
})
