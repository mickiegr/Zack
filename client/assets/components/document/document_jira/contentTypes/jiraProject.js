(function() {
  'use strict';

  angular
    .module('lucidworksView.components.document_jira')
    .directive('jiraProject', jiraProject);

  function jiraProject() {
    'ngInject';
    var directive = {
      restrict: 'EA',
      templateUrl: 'assets/components/document/document_jira/contentTypes/jiraProject.html',
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

    function postSignal(options){
      DocumentService.postSignal(vm.doc._signals, options);
    }

    function getTemplateDisplayFieldName(field){
      return DocumentService.getTemplateDisplayFieldName(vm.doc, field);
    }
  }
})();
