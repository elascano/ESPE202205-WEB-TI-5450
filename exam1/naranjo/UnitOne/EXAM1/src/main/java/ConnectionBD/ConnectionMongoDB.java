package ConnectionBD;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class ConnectionMongoDB {

    private MongoClient mongoClient = null;

    public ConnectionMongoDB() {
        try {
            String uri = "mongodb+srv://admin:admin@trucks.hrvbf.mongodb.net/?retryWrites=true&w=majority";
            mongoClient = MongoClients.create(uri);
        } catch (MongoException e) {
            System.out.println(e);
        }
    }

    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("Exam");
    }

}
