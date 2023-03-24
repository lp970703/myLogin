'use strict';

// had enabled by egg
exports.static = true;

// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

// exports.jaeger = {
//   enable: true,
//   package: 'bs-egg-jaeger',
// };

// exports.bsEggRemoteServices = {
//   enable: true,
//   package: 'bs-egg-remote-services',
// };

exports.swagger = {
  enable: true,
  package: 'egg-swagger-jsdoc',
};

// 跨域问题
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// sequelize
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

// oauth2
exports.oAuth2Server = {
  enable: true,
  package: 'egg-oauth2-server',
};

// exports.webpack = {
//   enable: true,
//   package: 'egg-webpack'
// };

// exports.webpackvue = {
//   enable: true,
//   package: 'egg-webpack-vue'
// };

// exports.vuessr = {
//   enable: true,
//   package: 'egg-view-vue-ssr'
// };

exports.nunjucks = {
  enable:true,
  package:'egg-view-nunjucks'
}

exports.ejs = {
  enable:true,
  package:'egg-view-ejs'
}