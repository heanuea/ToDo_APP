
angular.module('starter', ['ionic'])

//this my todo controller                   //had to declare ionic pop up in here to 
.controller('ToDoCtrl', function($scope, $ionicPopup) {
    $scope.tasks = 
        [
        {title: "Need CAKE!!!!!!", completed: true},
        
        ];
   
   
    
    
    
    
    
    
    
//added new task function inside controller to make my add button work with pop up window 
$scope.newTask = function()  {
    $ionicPopup.prompt({
    title: "New Task",
    template: "      ",
    inputPlaceholder: "enter Here bro " ,
    okText: 'Create task'
 //above is where the you enter th pop up details    
}).then(function(res) {
    if (res) $scope.tasks.push({title: res, completed: false});
})
};//end of task 
    
    
    
    
    
    //here i put the new or edit button task controller 
    $scope.edit = function (task) {
        $scope.data = { response: task.title };
        $ionicPopup.prompt({
            title: "MAKE A CHANGE",
            scope: $scope
        }).then(function(res){
            if (res !== undefined) task.title = $scope.data.response;
        })
    };//end of task
    
    
})//end of .controller






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
