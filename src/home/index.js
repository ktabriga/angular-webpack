import homeCtrl from './home.controller';

console.log('ola')

export default angular.module('home', [])
  .controller('homeCtrl', homeCtrl)
  .name;


