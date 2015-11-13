(function() {
  'use strict';

  angular
    .module('house.api')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
