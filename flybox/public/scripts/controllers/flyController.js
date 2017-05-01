angular.module('FlyBox')
	.controller('FlyController', FlyController);

FlyController.$inject = ['$http'];
function FlyController ($http) {
	console.log("controller working");
	var vm = this;
	//vm.helloWorld = "initial message";

	vm.all = [];
	vm.flyList = [];

	$http
	.get('/flies')
	.then(function(response) {
		vm.flyList = response.data;
		console.log(vm.flyList);
	});

	vm.addFly = addFly;
	vm.newFly = {};

	function addFly() {
		vm.all.push(vm.newFly);
		$http
		.post('/flies', vm.newFly)
		.then(function(response) {
			console.log(response);
			vm.flyList.push(response.data);
		});
		vm.newFly = {};
	}


}