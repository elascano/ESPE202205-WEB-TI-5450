package ec.edu.espe.clientserver.model;

public class Product {

    private int id;
    private String name;
    private String type;
    private String brand;

    public Product() {
    }

    public Product(String name, String type, String brand) {
        this.name = name;
        this.type = type;
        this.brand = brand;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String price) {
        this.type = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }



}
