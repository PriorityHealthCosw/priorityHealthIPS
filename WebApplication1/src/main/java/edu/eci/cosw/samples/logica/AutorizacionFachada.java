/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.cosw.samples.logica;

import edu.eci.cosw.samples.model.Autorizacion;
import edu.eci.cosw.samples.persistencia.AutorizacionRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Leidy
 */
public class AutorizacionFachada {
     @Autowired
     AutorizacionRepository vr;
    
    @Transactional
    public void guardarAutorizacion(Autorizacion v){
        vr.save(v);
    }
    
    public Autorizacion consultarAutorizacion(int id){
        return vr.findOne(id);
    }
    
    public List<Autorizacion> TodasAutorizaciones(){
        return vr.getAutorizaciones();
    }
    
    /*public List<Autorizacion> AutorizacionPaciente(int id){
       
        return vr.AutorizacionPorPaciente(id);
    }*/
    
}
