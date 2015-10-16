/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.cosw.samples.logica;

import edu.eci.cosw.samples.model.Medicamento;
import edu.eci.cosw.samples.model.MedicamentoPorProveedor;
import edu.eci.cosw.samples.model.Paciente;
import edu.eci.cosw.samples.model.Pedido;
import edu.eci.cosw.samples.persistencia.MedicamentoPPRepository;
import edu.eci.cosw.samples.persistencia.MedicamentoRepository;
import edu.eci.cosw.samples.persistencia.PacientesRepository;
import edu.eci.cosw.samples.persistencia.PedidosRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author 2088395
 */
@Service
public class Clase {

    @Autowired
    PedidosRepository pr;
    @Autowired
    MedicamentoPPRepository mppr;
    @Autowired
    MedicamentoRepository mr;
    @Autowired
    PacientesRepository par;
    public Pedido consultarPedido(int id) {
        Pedido p= pr.findOne(id);
        return p;
    }

    public Iterable<Pedido> consultarPedidos() {
        Iterable<Pedido> p = pr.findAll();
        return p;
    }

    public MedicamentoPorProveedor consultarMedicamentoPP(int id) {
        MedicamentoPorProveedor mp=mppr.findOne(id);
        return mp;
    }

    public Iterable<MedicamentoPorProveedor> consultarMedicamentosPP() {
        Iterable<MedicamentoPorProveedor> mp = mppr.findAll();
        return mp;
    }

    public Medicamento consultarMedicamento(int id) {
        Medicamento m= mr.findOne(id);
        return m;
    }
    
    public Iterable<Medicamento> consultarMedicamentos() {
        Iterable<Medicamento> mp = mr.findAll();
        return mp;
    }

    public Paciente consultarPaciente(int id) {
        Paciente p=par.findOne(id);
        return p;
    }
    
    public Iterable<Paciente> consultarPacientes() {
        Iterable<Paciente> p = par.findAll();
        return p;
    }
}
