package Model;

/**
 *
 * @author santi
 */
public class VinylRecords {
    private int id;
    private int yearProduction;
    private String nameVinylRecord;
    private String singerName;
    private String musicHouse;

    public VinylRecords() {
    }

    public VinylRecords(int id, int yearProduction, String nameVinylRecord, String singerName, String musicHouse) {
        this.id = id;
        this.yearProduction = yearProduction;
        this.nameVinylRecord = nameVinylRecord;
        this.singerName = singerName;
        this.musicHouse = musicHouse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYearProduction() {
        return yearProduction;
    }

    public void setYearProduction(int yearProduction) {
        this.yearProduction = yearProduction;
    }

    public String getNameVinylRecord() {
        return nameVinylRecord;
    }

    public void setNameVinylRecord(String nameVinylRecord) {
        this.nameVinylRecord = nameVinylRecord;
    }

    public String getSingerName() {
        return singerName;
    }

    public void setSingerName(String singerName) {
        this.singerName = singerName;
    }

    public String getMusicHouse() {
        return musicHouse;
    }

    public void setMusicHouse(String musicHouse) {
        this.musicHouse = musicHouse;
    }
    
    
}
