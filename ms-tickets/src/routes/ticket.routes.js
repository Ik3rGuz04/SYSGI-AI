const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

// GET /api/v1/tickets - Listar todos los tickets
router.get('/', ticketController.getAllTickets);

// POST /api/v1/tickets - Crear un nuevo ticket (RF-001)
router.post('/', ticketController.createTicket);

module.exports = router;