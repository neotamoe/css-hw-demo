console.log('script sourced');
var myApp = angular.module('myApp', ['moment-picker']);
myApp.controller('home', function(){
  var vm = this;
  console.log('angular sourced');
});
