"use strict";


myApp
	.controller("StartController", function StartController ($scope){

			$scope.test = "Test";

	})
	.controller("UsersController", function UsersController ($scope){

	$scope.data = "USERS1"

			$scope.users = function () {
				$scope.data = "USERS2";
			}


	})
		.controller("CountriesController", function CountriesController ($scope){

			$scope.countries = function () {
				$scope.data = "Countries";
			}


	});
