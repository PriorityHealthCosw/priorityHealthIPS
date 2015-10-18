(function () {
    var app = angular.module('IPSServices', []);

    app.service('IPSRestAPI', function ($http) {
        
       this.pacientesRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/pacientes'
            });            
        };
        
        this.pacienteByIdRequestPromise = function (idped) {            
            return $http({
                method: 'GET',
                url: 'rest/pacientes/'+idped
            });            
        };
        
         this.epsRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/eps'
            });            
        };
        
        this.epsByIdRequestPromise = function (ideps) {            
            return $http({
                method: 'GET',
                url: 'rest/eps/'+ideps
            });            
        };
        
        
         this.pedidosRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/pedidos'
            });            
        };
        
        this.pedidoByIdRequestPromise = function (idped) {            
            return $http({
                method: 'GET',
                url: 'rest/pedidos/'+idped
            });            
        };
        
        this.medicamentosRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/medicamentos'
            });            
        };
        
        this.medicamentoByIdRequestPromise = function (idped) {            
            return $http({
                method: 'GET',
                url: 'rest/medicamentos/'+idped
            });            
        };
        
        this.autorizacionesRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/autorizaciones'
            });            
        };
        
        this.autorizacionByIdRequestPromise = function (idped) {            
            return $http({
                method: 'GET',
                url: 'rest/autorizaciones/'+idped
            });            
        };
        
         this.medicamentosppRequestPromise = function () {            
            return $http({
                method: 'GET',
                url: 'rest/medicamentospp'
            });            
        };
        
        this.medicamentoppByIdRequestPromise = function (idped) {            
            return $http({
                method: 'GET',
                url: 'rest/medicamentospp/'+idped
            });            
        };
        
    }
    );

})();





