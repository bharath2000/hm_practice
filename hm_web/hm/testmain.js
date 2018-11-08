//console.log('fgfgf');

var main_shopping_block_col_ele =  document.getElementsByClassName('main_shopping_block_col');
var rootRef=firebase.database().ref().child("data");
rootRef.once('value').then(function(snapshot) {
var elem = snapshot.val();
for(var i=0;i<9;i++){
	var ele =main_shopping_block_col_ele[i];
	ele.innerHTML=elem[i];
}

});

var app = angular.module('myapp',[]);
app.controller('maincontroller',function($scope,$location){
		var clickelement;
		$scope.fun=function(x){

			for(var i=0;i<9;i++){
				if(x == i){
					var ele=main_shopping_block_col_ele[i];
					var rootReffashion=rootRef.child(ele.innerHTML);
					clickelement =ele.innerHTML;
					console.log(ele.innerHTML);
				}
			}
			$location.path(clickelement);

			rootReffashion.once('value').then(function(snapshot) {
			var elem = snapshot.val();
			for(var i=0;i<9;i++){
				var ele =main_shopping_block_col_ele[i];
				ele.innerHTML=elem[i];
			}
			});
			
	};


	//$scope.element='fashion';
	

});

/*app.controller('controller',function($scope){
	$scope.message='hi';
});*/



