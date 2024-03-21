// Ace editor
export const javascriptData = `   
                /* Sample JavaScript edit source */
                // Define a module
                var app = angular.module('app', ['ui.bootstrap']);
                // Define a conroller.
                app.controller('GrokController', ['$scope', '$filter',
                    function($scope, $filter) {
                        $scope.today = function() {
                        $scope.dt = new Date();
                        };
                        $scope.today();
                        $scope.isOpened = false;
                        $scope.open = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.isOpened = true;
                    };
                }]);
                /* End of sample edit source */`;

export const htmlData = ` 
        <!--Page header start-->
        <div class="page-header">
            <div class="row">
                <div class="col-xl-6">
                    <h3>Ace Text editor</h3>
                    <small>Dunzo Admin panel</small>
                </div>
                <div class="col-xl-6">
                <ol class="breadcrumb pull-right">
                    <li class="breadcrumb-item"></li>
                    <li class="breadcrumb-item">Editor </li>
                    <li class="breadcrumb-item active">Ace Text editor</li>
                </ol>
                </div>
            </div>
        </div>
        <!--Page header end-->`;

export const CssData = ` 
                .text-layer
                {
                font: 12px Monaco, "Courier New", monospace;
                font-size: 3vmin;
                cursor: text;
                }
                .blinker {
                animation: blink 1s linear infinite alternate;
                }
                @keyframes blink {
                0%, 40% {
                opacity: 1
                }
                40.5%, 100% {
                opacity: 1
                }
                }
                @document url(http://c9.io/), url-prefix(http://ace.c9.io/build/),
                domain(c9.io), regexp("https:.*") /**/
                {
                /**/
                img[title]:before
                {
                content: attr(title) "/AImage/retrieved from" attr(src); /**/
                white-space: pre;
                display: block;
                background: url(asdasd); "err
                }
                }
                @viewport {
                min-zoom: 1;
                max-zoom: 200%;
                user-zoom: fixed;
                } `;

export const phpData = `
                      <?php
                      function nfact($n) {
                      if ($n == 0) {
                      return 1;
                      }
                      else {
                      return $n * nfact($n - 1);
                      }
                      }
                      echo "Please enter a whole number ... ";
                      $num = trim(fgets(STDIN));
                      // ===== PROCESS - Determing the factorial of the input number =====
                      $output = "Factorial " . $num . " = " . nfact($num) . "";
                      echo $output;
                      ?>;`;
