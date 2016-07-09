import 'materializecss';
import './styles.css';
import 'materialize';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './routes';

import login from './login';
import home from './home';

const moduleName = 'app';


angular.module(moduleName, [
  uiRouter,
  login,
  home
])
.config(routes);

angular.bootstrap(document, [moduleName]);
