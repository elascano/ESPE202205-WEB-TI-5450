/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.ejmoreno.modelDAO;

import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.ejmoreno.connectionDB.ConnectionMongoDB;
import ec.edu.espe.ejmoreno.interfaces.TrafficCrud;
import ec.edu.espe.ejmoreno.model.Traffic;
import org.bson.Document;

/**
 *
 * @author Javier Snz
 */
public class TrafficDAO implements TrafficCrud{

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    MongoCollection collectionTraffic;
    FindIterable<Document> findIterableTraffic;
    MongoCursor<Document> mongoCursorTraffic;
    Traffic traffic;
    
    @Override
    public boolean addTraffic(Traffic traffic) {
        String query = "{"
                + "crossingTime:'" + traffic.getCrossingTime()+"',"
                + "vehicleType:'" + traffic.getVehicleType()+"',"
                + "typeOfTracks:'" + traffic.getTypeOfTracks()+"',"
                + "numberOfVehicles:" + traffic.getNumberOfVehicles()+","
                + "}";
        
        getCollection();
        collectionTraffic.insertOne(Document.parse(query));
        
        return false;
    }

    @Override
    public boolean deleteTraffic(Traffic traffic) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    
    private void getCollection() {
        mongoDatabase = connectionMongoDB.getMongoDatabase();
        collectionTraffic = mongoDatabase.getCollection("Traffic");
        findIterableTraffic = collectionTraffic.find(new Document());
        mongoCursorTraffic = findIterableTraffic.iterator();
    }
    
}
