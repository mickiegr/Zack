(function() {
  'use strict';

  angular
    .module('lucidworksView.components.document_cybr_jira')
    .directive('cybrJiraIssue', cybrJiraIssue);

  function cybrJiraIssue() {
    'ngInject';
    var directive = {
      restrict: 'EA',
      templateUrl: 'assets/components/document/document_cybr_jira/contentTypes/cybrJiraIssue.html',
      scope: true,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: {
        doc: '=',
        highlight: '='
      }
    };

    return directive;

  }

  function Controller(DocumentService) {
    'ngInject';
    var vm = this;
    vm.postSignal = postSignal;
    vm.getTemplateDisplayFieldName = getTemplateDisplayFieldName;
    vm.goToJira = goToJira;

    function postSignal(options){
      DocumentService.postSignal(vm.doc._signals, options);
    }

    function getTemplateDisplayFieldName(field){
      return DocumentService.getTemplateDisplayFieldName(vm.doc, field);
    }

    function goToJira(ticketNumber) {
      window.open("https://cybereason.atlassian.net/browse/" + ticketNumber, '_black');
    }
  }
})();
