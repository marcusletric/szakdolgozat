angular.module('fps_game.rendering').directive('ngWebgl', function (gameDriver) {
    return {
      restrict: 'A',
      controller: "RenderingController",
        link: function(scope,element){
            element[0].requestPointerLock = element[0].requestPointerLock ||
            element[0].mozRequestPointerLock;

            element[0].onclick = function() {
              //  element[0].requestPointerLock();
            };

            document.addEventListener('pointerlockchange', lockChange, false);
            document.addEventListener('mozpointerlockchange', lockChange, false);

            function lockChange() {
                scope.pointerLock = document.pointerLockElement === element[0] || document.mozPointerLockElement === element[0];
            }

            gameDriver.init(scope);

            scope.$on('$destroy',function(){
                scope.player = null;
            });
        }
    };
  });
