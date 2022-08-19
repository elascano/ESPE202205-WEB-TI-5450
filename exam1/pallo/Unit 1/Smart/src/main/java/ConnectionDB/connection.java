
package ConnectionDB;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 *
 * @author RobertoCarlos
 */
public class connection {
    private MongoClient mongoClient = null;
    public connection() {
        try {
            String uri = "mongodb+srv://admin:admin@cluster0.7efzf.mongodb.net/?retryWrites=true&w=majority";
            mongoClient = MongoClients.create(uri);
        }catch (MongoException e) {
            System.out.println(e);
        }
    }
    
    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("BakeryDulcementePasteles");
    }
}
