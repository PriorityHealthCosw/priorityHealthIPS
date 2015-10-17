(function () {
    var app = angular.module('LoginPaciente', ['ngRoute', 'LoginServices']);

    app.config(function ($routeProvider) {
        $routeProvider
                .when('/index', {
                    templateUrl: 'index.html'
                })
                .when('/realizarPedido', {
                    templateUrl: 'realizarPedido.html'
                })
                .when('/Autorizacion', {
                    templateUrl: 'consultarAutorizacion.html'
                })
                .when('/consultardespacho', {
                    templateUrl: 'consultarDespacho.html'
                });
    });


    app.controller('loginController', function ($scope, PacientesRestAPI, PacientesSelectionFactory) {

        $scope.pacientes = [];

        $scope.selectedPacientes = PacientesSelectionFactory.getData();

        $scope.selectedPacientesId = -1;

        $scope.selectedPacientesDetail = null;

        $scope.total = PacientesRestAPI.calculateShoppingKartCost($scope.selectedPacientes);
        
        $scope.availablePacientesRequestPromise = PacientesRestAPI.pacientesRequestPromise();

        $scope.addToSelectedPacientes = function () {
            
            PacientesSelectionFactory.addPaciente($scope.selectedPacienteDetail);
            console.log('Shopping kart updated' + JSON.stringify($scope.selectedPacientes));
            
        };

        $scope.availablePacientesRequestPromise.then(
            //promise success
            function (response) {
                console.log(response.data);
                $scope.availablePacientes = response.data;
            },
            //promise error
                    function (response) {
                        console.log('11 viene con id: '+ $scope.selectedPacienteId);
                        console.log('Unable to get data from REST API:' + response);
                    }
            );

            $scope.setSelectedPaciente = function (idpac) {
                $scope.selectedPacienteId = idpac;


                PacientesRestAPI.pacienteByIdRequestPromise(idpac).then(
                    //promise success
                    function (response) {


                        console.log(response.data);
                        $scope.selectedPacienteDetail = response.data;
                    },
                    //promise error
                    function (response) {

                        console.log('viene con id: '+ $scope.selectedPacienteId);
                        console.log('Unable tdo get data from REST API:' + response);
                    }
                );

            };
            
            $scope.login = function (username, password, callback) {
                $scope.selectedPacienteId = idpac;



                $timeout(function () {
                var response;
                UserService.GetByUsername(username)
                    .then(function (user) {
                        if (user !== null && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: false, message: 'Username or password is incorrect' };
                        }
                        callback(response);
                    });
            }, 1000);

            };


    });
    
    app.factory('PacientesSelectionFactory', function () {
        var data = {
            pacselection: []

        };
        return {
            getData: function () {
                return data.pacselection;
            },
            addPaciente: function (paciente) {
                data.pacselection.push(paciente);
            }
        };
    });
    
    

})();


