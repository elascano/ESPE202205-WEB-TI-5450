package ec.edu.espe.clientserver.interfaces;

import ec.edu.espe.clientserver.model.Product;
import java.util.List;


public interface ProductCrud {

    public List listProducts();

    public Product listProduct(int id);

    public boolean addProduct(Product product);

}
