package Model;

public class Trucks {

    private String brand;
    private String plate;
    private String model;
    private String power;

    public Trucks(String brand, String plate, String model, String power) {
        this.brand = brand;
        this.plate = plate;
        this.model = model;
        this.power = power;
    }

    public Trucks() {
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }
}
