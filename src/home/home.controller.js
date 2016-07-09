export default function homeCtrl($timeout, menuService) {

  $timeout(() => $(".button-collapse").sideNav());
  this.menuItens = menuService.menuItens;
}
