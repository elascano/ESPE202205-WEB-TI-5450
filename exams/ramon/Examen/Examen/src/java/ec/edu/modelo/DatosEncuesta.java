
package ec.edu.modelo;


/**
 *
 * @author david
 */


public class DatosEncuesta {
    
    private String nombreCompleto;
    private String Foto;

    
    public DatosEncuesta(){
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }
    
    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setFoto(String Foto) {
        this.Foto = Foto;
    }
    
    public String getFoto() {
        return Foto;
    }
 
        
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
}
