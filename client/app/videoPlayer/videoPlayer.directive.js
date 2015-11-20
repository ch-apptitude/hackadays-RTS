/**
* @desc video player directive
* @example <video-player></video-player>
*/
angular
    .module('rtsHackdaysApp')
    .directive('videoPlayer', videoPlayer);

function videoPlayer() {
    var directive = {
        templateUrl: 'app/videoPlayer/videoPlayer.html',
        restrict: 'EA',
        scope: {
            source: '=',
        },
        controller: VideoPlayerCtrl
    };
    return directive;

}

VideoPlayerCtrl.$inject = ['$scope'];

function VideoPlayerCtrl($scope) {
    $scope.player = {
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
    };




}