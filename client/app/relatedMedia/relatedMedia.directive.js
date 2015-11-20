/**
* @desc related media directive
* @example <related-media></related-media>
*/
angular
    .module('rtsHackdaysApp')
    .directive('relatedMedia', relatedMedia);

function relatedMedia() {
    var directive = {
        templateUrl: 'app/relatedMedia/relatedMedia.html',
        restrict: 'EA',
        scope: {
            item: '=',
            index: '=',
        },
        controller: RelatedMediaCtrl
    };
    return directive;

}

RelatedMediaCtrl.$inject = ['$scope'];

function RelatedMediaCtrl($scope) {
}