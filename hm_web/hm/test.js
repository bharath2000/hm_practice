

//var main_shopping_block_col_ele =  document.getElementsByClassName('main_shopping_block_col');
//var rootRef=firebase.database().ref().child("data");


var app = angular.module('myapp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: 'main.html',
			//controller: "fashioncontroller"

		})
	
	
	//otherwise({redirectTo: '/home'});
	

});



console.log('hfgf');

/*app.controller('controller',function($scope){
	$scope.message='hi';
});*/

function myVerticalCenter(classname) {
	var block_ele =  document.getElementsByClassName(classname);
	var block_ele_length = block_ele.length;
	for(var i = 0 ; i < block_ele_length ; i++){
		var ele = block_ele[i];
		ele.style.lineHeight = ele.clientHeight + 'px';
	}
}

myVerticalCenter('system_block');
myVerticalCenter('vertical_sidebar_icon_wrapper');

