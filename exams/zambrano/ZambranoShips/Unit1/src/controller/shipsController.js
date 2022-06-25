import Ships from '../models/ships';

//POST
export const postShips = async (req, res) => {
    try {
        const newShip = new Ships({
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            total: req.body.total = (req.body.price * req.body.quantity)
        });
        const ship = await newShip.save();  
        res.render("index", { ship: ship });
        console.log("ships added");
        res.redirect("/");
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error for creating and post Users`,
        });
    }
}
//GET
export const getAllShips = async (req, res) => {
    try {
        const ship = await Ships.find().lean();
        res.render("index", { ship: ship });
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error for get Users`,
        });
    }
}