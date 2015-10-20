(function () {
    var app = angular.module('IPSServices', []);

    app.service('IPSRestAPI', function ($http) {
        
        this.pos =function(paciente){
                $http.post('rest/pedidos' , {"pacientes":paciente,"fechaLlegada":"2015-03-03","direccion":"Cra 18 # 5-15"}).
                        success(function(){
                                      alert('Felicidades,su pedido fue creado exitosamente');
                }).error(function(){
                    alert("NOOOOO");
                });
            }; 
        
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
        
        this.detalleOrdenCompraRequestPromise = function(){
          return $http({
              method : 'GET',
              url: 'rest/detalleOrdenCompra'
          });  
        };
        
        this.detalleOrdenCompraByIdRequestPromise = function(id){
            
            return $http({
                
              method : 'GET',
              url: 'rest/detalleOrdenCompra/'+id
            });
        };
        
        this.getOrdenCompra= function(id){
          
            return $http.get('http://localhost:8080/intento1/rest/detalleOrdenCompra/'+id);
        };
        
        this.getAutorizacionByPaciente = function(id){
            return $http.get('http://localhost:8080/intento1/rest/autorizaciones/'+id);
        }; 
        
        this.getConsultarAutorizacion = function(){
            return $http.get('http://localhost:8080/intento1/rest/autorizaciones/');
        };
        
         this.getConsultarMedicamento = function(){
            return $http.get('http://localhost:8080/intento1/rest/medicamentos/');
        };
        
        
    
    
    }
    );

})();





