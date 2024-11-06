const Travel = require('../models/Travel');

exports.createTravel = async (req, res) => {
  if (req.user.role !== 'driver') {
    return res.status(403).json({ msg: "Acceso denegado" });
  }
  
  const { startPoint, endPoint, route, departureTime, availableSeats, fare } = req.body;

  try {
    const newTravel = new Travel({
      driver: req.user.userId,
      startPoint,
      endPoint,
      route,
      departureTime,
      availableSeats,
      fare
    });

    await newTravel.save();
    res.json({ msg: "Viaje creado exitosamente", travel: newTravel });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};

exports.getAvailableTravels = async (req, res) => {
  const { seats, startPoint } = req.query;

  try {
    const query = {
      availableSeats: { $gte: seats || 1 },
      startPoint: startPoint || { $exists: true }
    };
    const travels = await Travel.find(query).populate('driver', 'name surname');
    res.json(travels);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
};
