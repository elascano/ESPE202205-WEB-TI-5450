package ec.edu.espe.ejmoreno.connectionDB;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 *
 * @author Javier Snz
 */

public class ConnectionMongoDB {
    private MongoClient mongoClient = null;
    public ConnectionMongoDB() {
        try {
            String uri = "mongodb+srv://admin:admin@examcluster.jiyhfqq.mongodb.net/?retryWrites=true&w=majority";
            mongoClient = MongoClients.create(uri);
        }catch (MongoException e) {
            System.out.println(e);
        }
    }
    
    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("ExamDataBase");
    }
}