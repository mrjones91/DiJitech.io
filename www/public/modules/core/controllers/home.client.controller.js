'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				color: 'btn-success',
				total: '20,408',
				description: 'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-calendar',
				color: 'btn-primary',
				total: '5345',
				description: 'Upcoming Events'
			},
			{
				icon: 'glyphicon-edit',
				color: 'btn-success',
				total: '117',
				description: 'NEWEST CUSTOMERS'
			},
			{
				icon: 'glyphicon-record',
				color: 'btn-info',
				total: '9999999',
				description: 'EMAILS SENT'
			},
			{
				icon: 'glyphicon-eye-open',
				color: 'btn-warning',
				total: '20',
				description: 'FOLLOW UPS REQUIRED'
			},
			{
				icon: 'glyphicon-flag',
				color: 'btn-danger',
				total: '23',
				description: 'TO-DOS'
			},
		];
	}
]);