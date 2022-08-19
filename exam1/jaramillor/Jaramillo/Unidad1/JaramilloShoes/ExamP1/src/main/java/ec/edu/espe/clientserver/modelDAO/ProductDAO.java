package ec.edu.espe.clientserver.modelDAO;

import ec.edu.espe.clientserver.connectionDB.ConnectionMongo;
import ec.edu.espe.clientserver.interfaces.ProductCrud;
import ec.edu.espe.clientserver.model.Product;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO implements ProductCrud {

    ConnectionMongo connectionMongo = new ConnectionMongo();
    Connection connection;
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Product product = new Product();

    @Override
    public List listProducts() {
        ArrayList<Product> list = new ArrayList<>();
        String query = "SELECT * FROM `productos`";
        try {
            connection = connectionMongo.getConnection();
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Product product = new Product();
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setType(resultSet.getString("type"));
                product.setBrand(resultSet.getString("brand"));
                list.add(product);
            }
        } catch (Exception e) {
            System.out.println("Error" + e);
        }
        return list;
    }

    @Override
    public Product listProduct(int id) {
        String query = "SELECT * FROM `productos` WHERE id=" + id;
        try {
            connection = connectionMongo.getConnection();
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setType(resultSet.getString("type"));
                product.setBrand(resultSet.getString("brand"));
            }
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return product;
    }

    @Override
    public boolean addProduct(Product product) {
        String query = "INSERT INTO `productos`(`name`, `type`, `brand`) "
                + "VALUES ('"
                + product.getName()
                + "','"
                + product.getType()
                + "','"
                + product.getBrand()

                + "')";
        try {
            connection = connectionMongo.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
        return false;
    }

 




}
