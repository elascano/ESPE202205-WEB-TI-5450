package Rest;

import ConnectionDB.ConnectionMongoDB;
import Model.VinylRecords;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.*;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author santi
 */
@Path("VinylRecords")
@RequestScoped
public class VinylRecordsResource {

    @Context
    private UriInfo context;
    private ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    private MongoDatabase mongoDatabase;
    private MongoCollection collectionVinylRecords;
    private ArrayList<VinylRecords> list;
    private FindIterable<Document> findIterable;
    private MongoCursor<Document> mongoCursor;

    public VinylRecordsResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        list = new ArrayList<>();
        VinylRecords vinylRecords;
        try {
            getCollection();
            while (mongoCursor.hasNext()){
                
                Document objVinylRecords = mongoCursor.next();
                vinylRecords = setVinylRedords(objVinylRecords);
                
                list.add(vinylRecords);
            }
            
        } catch (Exception e) {
            
        }
        return list;
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public VinylRecords getJson(@PathParam("id") int id){
        VinylRecords vinylRecords = new VinylRecords();
        try {
            getCollection();
            
            findIterable = collectionVinylRecords.find(eq("id", id));
            Document objVinylRecords = findIterable.first();
            
            vinylRecords = setVinylRedords(objVinylRecords);
        } catch (Exception e) {
            
        }
        return vinylRecords;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(VinylRecords content) {
    }
    
    private VinylRecords setVinylRedords(Document objVinylRecords){
        VinylRecords vinylRecords = new VinylRecords();
        
        vinylRecords.setId(objVinylRecords.getInteger("id"));
        vinylRecords.setYearProduction(objVinylRecords.getInteger("yearProduction"));
        vinylRecords.setNameVinylRecord(objVinylRecords.getString("nameVinylRecord"));
        vinylRecords.setSingerName(objVinylRecords.getString("singerName"));
        vinylRecords.setMusicHouse(objVinylRecords.getString("muiscHouse"));
        
        return vinylRecords;
    }
    
    private void getCollection(){
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        collectionVinylRecords = mongoDatabase.getCollection("VinylRecords");
        findIterable = collectionVinylRecords.find(new org.bson.Document());
        mongoCursor = findIterable.iterator();
    }
}
