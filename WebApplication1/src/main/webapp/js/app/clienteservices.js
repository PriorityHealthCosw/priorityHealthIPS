(function () {
    var app = angular.module('PacienteServices', []);

    app.service('PacientesRestAPI', function ($http) {
        
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
        
        this.calculateShoppingKartCost=function(selectedPacientes){
            console.log("calculating from:"+selectedPacientes);
            var total=0;
            selectedPacientes.map( function(item) {
                total+=item.idPacientes;
                console.log("what is item:"+item);
            });
            return total;
        };

    }
    );
    
})();





