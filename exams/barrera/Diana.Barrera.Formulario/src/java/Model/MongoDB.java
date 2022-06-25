import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 *
 * @author Diana Barrera
 */ 
    public class MongoDB {
    private MongoDB instancia;
    private MongoClient mongoClient;
    private MongoDatabase mongoDataBase;
    private MongoClientURI uri;
    private MongoCollection<Document> mongoCollection;

    public MongoDB getInstancia() {
        return instancia;
    }

    public void setInstancia(MongoDB instancia) {
        this.instancia = instancia;
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public void setMongoClient(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    public MongoDatabase getMongoDataBase() {
        return mongoDataBase;
    }

    public void setMongoDataBase(MongoDatabase mongoDataBase) {
        this.mongoDataBase = mongoDataBase;
    }

    public MongoClientURI getUri() {
        return uri;
    }

    public void setUri(MongoClientURI uri) {
        this.uri = uri;
    }

    public MongoCollection<Document> getMongoCollection() {
        return mongoCollection;
    }

    public void setMongoCollection(MongoCollection<Document> mongoCollection) {
        this.mongoCollection = mongoCollection;
    }
    
    
    
    }