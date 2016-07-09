import login from './views/login.html';
import home from './views/home.html';

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state('login', {
    url: '',
    template: login,
    controller: 'loginCtrl',
    controllerAs: 'ctrl'
  }).state('home', {
    url: '/home',
    template: home,
    controller: 'homeCtrl',
    controllerAs: 'ctrl'
  });

  $urlRouterProvider.otherwise('/');
}
