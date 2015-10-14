(function () {
    var app = angular.module('ShoppingKart', ['ngRoute', 'PedidoServices']);

    app.config(function ($routeProvider) {
        $routeProvider
                .when('/new', {
                    templateUrl: 'seleccion.html'
                })
                .when('/list', {
                    templateUrl: 'checkout.html'
                })
                .when('/home', {
                    templateUrl: 'home.html'
                })
                .when('/medi', {
                    templateUrl: 'medicamentos.html'
                });
    });


    app.controller('skcontroller', function ($scope, PedidosRestAPI, PedidosSelectionFactory) {

        $scope.availablePedidos = [];

        $scope.selectedPedidos = PedidosSelectionFactory.getData();

        $scope.selectedPedidoId = -1;

        $scope.selectedPedidoDetail = null;

        $scope.total = PedidosRestAPI.calculateShoppingKartCost($scope.selectedPedidos);
        
        $scope.availablePedidosRequestPromise = PedidosRestAPI.pedidosRequestPromise();

        $scope.addToSelectedPedidos = function () {
            //$scope.selectedProducts.push($scope.selectedProductDetail);
            PedidosSelectionFactory.addPedido($scope.selectedPedidoDetail);
            console.log('Shopping kart updated' + JSON.stringify($scope.selectedPedidos));
            
        };

        $scope.availablePedidosRequestPromise.then(
            //promise success
            function (response) {
                console.log(response.data);
                $scope.availablePedidos = response.data;
            },
            //promise error
                    function (response) {
                        console.log('11 viene con id: '+ $scope.selectedPedidoId);
                        console.log('Unable to get data from REST API:' + response);
                    }
            );

            $scope.setSelectedPedido = function (idped) {
                $scope.selectedPedidoId = idped;


                PedidosRestAPI.pedidoByIdRequestPromise(idped).then(
                    //promise success
                    function (response) {


                        console.log(response.data);
                        $scope.selectedPedidoDetail = response.data;
                    },
                    //promise error
                    function (response) {

                        console.log('viene con id: '+ $scope.selectedPedidoId);
                        console.log('Unable to get data from REST API:' + response);
                    }
                );

            };


    });
    
    app.factory('PedidosSelectionFactory', function () {
        var data = {
            pedselection: []

        };
        return {
            getData: function () {
                return data.pedselection;
            },
            addPedido: function (pedido) {
                data.pedselection.push(pedido);
            }
        };
    });
    
    

})();


