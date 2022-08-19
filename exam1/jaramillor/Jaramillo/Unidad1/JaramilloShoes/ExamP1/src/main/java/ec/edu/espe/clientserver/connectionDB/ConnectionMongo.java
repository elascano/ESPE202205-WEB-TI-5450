package ec.edu.espe.clientserver.connectionDB;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionMongo {

    Connection connection;

    public ConnectionMongo() {
        try {
            Class.forName("com.mongo.jdbc.Driver");
            connection = DriverManager.getConnection("mongodb+srv://examp1:examp1@clusterexamp1.uce7r.mongodb.net/test", "root", "");
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
    }

    public Connection getConnection() {
        return connection;
    }

}
