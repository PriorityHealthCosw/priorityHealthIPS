/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.cosw.logica;

import edu.eci.cosw.model.Autorizacion;
import edu.eci.cosw.model.Pedido;
import edu.eci.cosw.persistencia.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class ClaseLogica {
    @Autowired
    AutorizacionRepository ar;
    @Autowired
    DespachoRepository dr;
    @Autowired
    MedicamentoRepository mr;
    @Autowired
    OrdenCompraRepository ocr;
    @Autowired
    PacienteRepository par;
    @Autowired
    PedidoRepository per;

    public List<Autorizacion> cargarAutorizaciones() {
        return ar.CargarAutorizaciones();
    }
    
    public Pedido consultarPedido(int id) {
        Pedido p=per.findOne(id);
        return p;
    }
}
