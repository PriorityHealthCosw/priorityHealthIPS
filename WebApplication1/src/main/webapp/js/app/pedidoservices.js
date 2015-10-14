(function () {
    var app = angular.module('PedidoServices', []);

    app.service('PedidosRestAPI', function ($http) {
        
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
        
        this.calculateShoppingKartCost=function(selectedPedidos){
            console.log("calculating from:"+selectedPedidos);
            var total=0;
            selectedPedidos.map( function(item) {
                total+=item.idPedidos;
                console.log("what is item:"+item);
            });
            return total;
        };

    }
    );
    
})();





