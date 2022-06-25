/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package ConnectionMongoDB;

import Model.MongoDB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
/**
 *
 * @autor Diana Barrera
 */
public class MongoDBConnection {       
        MongoDB mongoDB = new MongoDB();
        public static MongoDatabase database;     
        
    public MongoDatabase connection (){
        String URI = "mongodb+srv://admin:admin@cluster0.t4vndhv.mongodb.net/?retryWrites=true&w=majority";
        
        try {
            mongoDB.setUri(new MongoClientURI(URI));
            mongoDB.setMongoClient(new MongoClient(mongoDB.getUri()));
            mongoDB.setMongoDataBase(mongoDB.getMongoClient().getDatabase("DianaBarrera_Prueba"));
            mongoDB.setMongoCollection(mongoDB.getMongoDataBase().getCollection((URI)));
            mongoDB.getMongoCollection().drop();         
        } catch (MongoSecurityException a) {
            mongoDB.setMongoDataBase(null);
        }
            return mongoDB.getMongoDataBase();
}
    
    public void ConnectionMongo(){
        MongoDBConnection mongoDBConnection = new MongoDBConnection()  ;   
        database = mongoDBConnection.connection(); 
    }
    
    public void save(Document document, String collection, MongoDatabase database) {
    MongoCollection<Document> collectionDocument = database.getCollection(collection);
    collectionDocument.insertOne(document);
    }
