package Rest;

import ConnectionBD.ConnectionMongoDB;
import Model.Trucks;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;
import java.util.ArrayList;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.bson.Document;


@Path("Trucks")
@RequestScoped
public class TrucksResource {

    @Context
    private UriInfo context;
    private ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    private MongoDatabase mongoDatabase;
    private MongoCollection collectionTrucks;
    private ArrayList<Trucks> list;
    private FindIterable<Document> findIterable;
    private MongoCursor<Document> mongoCursor;


    public TrucksResource() {
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList getJson() {
        list = new ArrayList<>();

        try {
            getCollection();

            while (mongoCursor.hasNext()) {
                Trucks trucks = new Trucks();
                Document objTrucks = new Document();
                objTrucks = mongoCursor.next();

                trucks = setTrucks(objTrucks);
                list.add(trucks);

            }

        } catch (MongoException e) {

        }
        return list;
    }
    
    
    @GET
    @Path("/{brand}")
    @Produces(MediaType.APPLICATION_JSON)
    public Trucks getJson(@PathParam ("brand") String brand) {
        
        Trucks trucks = new Trucks();
        
        try {
            getCollection();
            
            findIterable = collectionTrucks.find(eq("brand", brand));
            Document objTrucks = findIterable.first();

            trucks = setTrucks(objTrucks);
            
        } catch (Exception e) {
        }
        
        
        return trucks;
    }


    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Trucks content) {
    }

    private void getCollection() {
       mongoDatabase = connectionMongoDB.getMongoDatabase();
       collectionTrucks = mongoDatabase.getCollection("trucks");
       findIterable = collectionTrucks.find(new Document());
       mongoCursor = findIterable.iterator();
    }
    
    private Trucks setTrucks(Document objTrucks){
        Trucks trucks = new Trucks();
        
        
        trucks.setBrand(objTrucks.getString("brand"));
        trucks.setPlate(objTrucks.getString("plate"));
        trucks.setModel(objTrucks.getString("model"));
        trucks.setPower(objTrucks.getString("power"));
        
        return trucks;
        
    }
}
