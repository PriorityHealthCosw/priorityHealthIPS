/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.cosw.restcontrollers;

import edu.eci.cosw.logica.ClaseLogica;
import edu.eci.cosw.model.Autorizacion;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */

@RestController
@RequestMapping("/autorizaciones")
public class ManejadorAutorizaciones {
     @Autowired
     ClaseLogica c;

    @RequestMapping(method = RequestMethod.GET)
     public List<Autorizacion> consped(@PathVariable int id) {
         List<Autorizacion> a=c.cargarAutorizaciones();
        
        
        return a;
     }
    
}
