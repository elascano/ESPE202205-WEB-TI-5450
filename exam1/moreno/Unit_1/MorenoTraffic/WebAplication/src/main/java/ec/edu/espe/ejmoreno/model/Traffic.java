/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.ejmoreno.model;

/**
 *
 * @author Javier Snz
 */
public class Traffic {
    private String crossingTime;
    private String vehicleType;
    private String typeOfTracks;
    private int numberOfVehicles;

    public Traffic(String crossingTime, String vehicleType, String typeOfTracks, int numberOfVehicles) {
        this.crossingTime = crossingTime;
        this.vehicleType = vehicleType;
        this.typeOfTracks = typeOfTracks;
        this.numberOfVehicles = numberOfVehicles;
    }

    public Traffic() {
    }

    public String getCrossingTime() {
        return crossingTime;
    }

    public void setCrossingTime(String crossingTime) {
        this.crossingTime = crossingTime;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getTypeOfTracks() {
        return typeOfTracks;
    }

    public void setTypeOfTracks(String typeOfTracks) {
        this.typeOfTracks = typeOfTracks;
    }

    public int getNumberOfVehicles() {
        return numberOfVehicles;
    }

    public void setNumberOfVehicles(int numberOfVehicles) {
        this.numberOfVehicles = numberOfVehicles;
    }
}
