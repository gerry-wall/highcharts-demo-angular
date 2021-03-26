angular.module('App', ['ngDialog'])
      .controller('UserController', function($rootScope, $scope, ChartService, $window, ngDialog) {
        // *********************

            $scope.save = save;
            $rootScope.chartObject = {};
            $scope.annoCurId = 0;
            $scope.charts = [];
            var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var categories2 = ['T1', 'T2', 'T3'];
            var annotations = [];
        

            // var categories = [];
            var data = [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
            var s_1 = Serie(0, 0, '', 'Var 1', data);
            
            data = [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8];
            var s_2 = Serie(0, 0, '', 'Var 2', data);
            
            data = [6, 4, 4, 8, 9, 10, 2, 8, 3, 7, 9, 11];
            var s_3 = Serie(0, 0, 'area', 'Var 4', data, 0);

            data = [3.9, 4.2, 5.7];
            var s_4 = Serie(1, 1, 'line', 'Var 3', data);

            // var categories = [];

        
            // xAxis Variable
            var xAxis_1 = Axis(Title('xAxis'), false, categories);
            var xAxis_2 = Axis(Title('xAxisTop'), true, categories2);
            
            var xAxis = [xAxis_1, xAxis_2];
        
            // yAxis Variable 1
            var yAxis_1 = Axis(Title('Test'), false);
            
            // yAxis Variable 2
            var yAxis_2 = Axis(Title('Test 2'), true);
        
            // yAxis for two Variables has to be an array
            var yAxis = [yAxis_1, yAxis_2];
        
            // Title for Chart
            var title = Title('Temperature', '#6db5f1');
        
            var annotation_1 = Annotation(getNewAnnoId(),'Text 1', {x:0,y:0});
            annotations.push(annotation_1);
        
            var annotation_2 = Annotation(getNewAnnoId(),'Text 3', {x:5,y:5});
            annotations.push(annotation_2);
        


            var chart = Chart(title, xAxis, yAxis, [s_1, s_2, s_3, s_4], 0, true, annotations);
            $scope.charts.push(chart);
            $scope.chartObject = ChartService.chartObject;
            console.log(JSON.stringify(chart));
            function save() {
                for (i=0; i<$rootScope.chartObject.annotations.length; i++)
                {
                    x_pos = 'Anno: ' + i + ' X: ' + $rootScope.chartObject.annotations[i].labels['0'].options.x;
                    y_pos = 'Anno: ' + i + ' y: ' + $rootScope.chartObject.annotations[i].labels['0'].options.y;
                    alert(x_pos + ' ' + y_pos);
                }
            }

            function getNewAnnoId() {
                new_id = 'anno_' + $scope.annoCurId;
                $scope.annoCurId++;
                return new_id;
            }
            function addAnnotation (text) {
                $rootScope.annotations = $rootScope.chartObject.addAnnotation(Annotation(getNewAnnoId(), text, {x:0,y:0}));
            }

            $scope.addAnnotation = addAnnotation;
            $rootScope.addAnnotation = addAnnotation;

            $scope.clickToOpen = function () {
                ngDialog.open({ 
                    template: 'templates/annotations.html', 
                    className: 'ngdialog-theme-default',
                    controller: ['$rootScope', function($rootScope) {

                        
                        // controller logic
                        console.log($rootScope);
                    }]
                });
            };

        // *********************
      })
      .directive('hcChart', function ($rootScope) {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '=',
            },
            link: function (scope, element) {
                $rootScope.chartObject = Highcharts.chart(element[0], scope.options);
                
                scope.$watch('options', function(newVal) {
                    if (newVal) {
                        $rootScope.chartObject = Highcharts.chart(element[0], scope.options);
                        $rootScope.chartObject.annotations.redrawItems;
                    }
                }, true);
            }
        };
      })
      .factory('ChartService', function() {
        return {
          chartObject: {}
        };
      });

        