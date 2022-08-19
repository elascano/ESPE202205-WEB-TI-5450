/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package ec.edu.espe.ejmoreno.interfaces;

import ec.edu.espe.ejmoreno.model.Traffic;

/**
 *
 * @author Javier Snz
 */
public interface TrafficCrud {
    public boolean addTraffic(Traffic traffic);
    
    public boolean deleteTraffic(Traffic traffic);
}
