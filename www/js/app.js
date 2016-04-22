
angular.module('starter', ['ionic'])

//this my todo controller                   //had to declare ionic pop up in here to 
.controller('ToDoCtrl', function($scope, $ionicPopup) {
    $scope.tasks = 
        [
        {title: "first", completed: true},
        {title: "second", completed: true},
        {title: "Third", completed: true},
        ];
    
//added new task function inside controller to make my add button work with pop up window 
$scope.newTask = function()  {
    $ionicPopup.prompt({
    title: "New Task",
    template: "      ",
    inputPlaceholder: "enter Here bro " ,
    okText: 'Create task'
    
}).then(function(res) {
    if (res) $scope.tasks.push({title: res, completed: false});
})
};
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
   cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})