app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/main/home/index.html'
    })
    .state('api', {
      url: '/api',
      templateUrl: '/main/api/index.html'
    })
    .state('gui', {
      url: '/gui',
      templateUrl: '/main/gui/index.html',
      controller: 'GuiController'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: '/main/posts/index.html'
    })
    .state('posts.list', {
      url: '/list',
      templateUrl: '/main/posts/list.html',
      controller: 'PostsController'
    })
    .state('posts.create', {
      url: '/create',
      templateUrl: '/main/posts/form.html',
      controller: 'PostsCRUDController'
    })
    .state('posts.view', {
      url: '/view/:id',
      templateUrl: '/main/posts/view.html',
      controller: 'PostsCRUDController'
    })
    .state('posts.edit', {
      url: '/edit/:id',
      templateUrl: 'main/posts/form.html',
      controller: 'PostsCRUDController'
    })
    .state('404', {
      url: '/404',
      templateUrl: '/main/error.html',
      controller: 'ErrController'
    })

  $locationProvider.html5Mode(true)
})
