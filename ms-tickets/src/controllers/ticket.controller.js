const TicketModel = require('../models/ticket.model');

const getAllTickets = (req, res) => {
  const tickets = TicketModel.getAll();
  res.json({ success: true, data: tickets });
};

const createTicket = (req, res) => {
  const { colaboradorId, categoria, descripcion } = req.body;

  // Validación básica de campos requeridos
  if (!colaboradorId || !categoria || !descripcion) {
    return res.status(400).json({ 
      success: false, 
      message: 'Faltan campos obligatorios: colaboradorId, categoria o descripcion' 
    });
  }

  const newTicket = TicketModel.create({ colaboradorId, categoria, descripcion });
  res.status(201).json({
    success: true,
    message: 'Ticket creado exitosamente',
    data: newTicket
  });
};

module.exports = {
  getAllTickets,
  createTicket
};