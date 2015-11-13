'use strict';

angular
  .module('house.api')
  .service('transactionService', transactionService);

/** @ngInject */
function transactionService($http, $log) {

  return {
    getTransactions: getTransactions
  };

  function getTransactions() {
    return $http.get('http://localhost:8080/transactions');
  }
}
