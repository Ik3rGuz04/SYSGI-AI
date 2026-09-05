const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ticketRoutes = require('./src/routes/ticket.routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/v1/tickets', ticketRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    service: 'Microservicio de Tickets (ms-tickets)',
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Microservicio de Tickets corriendo en http://localhost:${PORT}`);
});