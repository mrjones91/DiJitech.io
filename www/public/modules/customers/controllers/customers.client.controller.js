'use strict';

// Customers controller
angular.module('customers').controller('CustomersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Customers',
	function($scope, $stateParams, $location, Authentication, Customers) {
		$scope.authentication = Authentication;

		// Create new Customer
		$scope.create = function() {
			// Create new Customer object
			var customer = new Customers ({
				firstName: this.firstName,
				lastName: this.lastName,
				city: this.city,
				country: this.country,
				industry: this.industry,
				email: this.email,
				phone: this.phone,
				referred: this.referred,
				channel: this.channel
			});

			// Redirect after save
			customer.$save(function(response) {
				$location.path('customers/' + response._id);

				// Clear form fields
				$scope.firstName = '';
				$scope.lastName = '';
				$scope.city = '';
				$scope.country = '';
				$scope.industry = '';
				$scope.email = '';
				$scope.phone = '';
				$scope.referred = '';
				$scope.channel = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Customer
		$scope.remove = function(customer) {
			if ( customer ) { 
				customer.$remove();

				for (var i in $scope.customers) {
					if ($scope.customers [i] === customer) {
						$scope.customers.splice(i, 1);
					}
				}
			} else {
				$scope.customer.$remove(function() {
					$location.path('customers');
				});
			}
		};

		// Update existing Customer
		$scope.update = function() {
			var customer = $scope.customer;

			customer.$update(function() {
				$location.path('customers/' + customer._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Customers
		$scope.find = function() {
			$scope.customers = Customers.query();
		};

		// Find existing Customer
		$scope.findOne = function() {
			$scope.customer = Customers.get({ 
				customerId: $stateParams.customerId
			});
		};

		$scope.customerFields = [
		{
			field: 'firstName',
			fieldName: 'First Name',
			fieldValue: 'firstName',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'lastName',
			fieldName: 'Last Name',
			fieldValue: 'lastName',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'city',
			fieldName: 'City',
			fieldValue: 'city',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'country',
			fieldName: 'Country',
			fieldValue: 'country',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'industry',
			fieldName: 'Industry',
			fieldValue: 'industry',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'email',
			fieldName: 'Email',
			fieldValue: 'email',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'phone',
			fieldName: 'Phone',
			fieldValue: 'phone',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		},
		{
			field: 'referred',
			fieldName: 'Referred',
			fieldValue: 'referred',
			icon: 'glyphicon glyphicon-user',
			type: 'checkbox'
		},
		{
			field: 'channel',
			fieldName: 'Channel',
			fieldValue: 'channel',
			icon: 'glyphicon glyphicon-user',
			type: 'text'
		}

		];
	}
]);