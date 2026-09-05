// Base de datos en memoria (temporal)
const ticketsDB = [];

class TicketModel {
  static getAll() {
    return ticketsDB;
  }

  static getById(id) {
    return ticketsDB.find(t => t.id === id);
  }

  static create(data) {
    const newTicket = {
      id: `TICK-${Date.now()}`,
      colaboradorId: data.colaboradorId,
      categoria: data.categoria,
      descripcion: data.descripcion,
      estado: 'ABIERTO', // Estado inicial obligatorio (RF-001)
      tecnicoAsignadoId: null,
      diagnostico: null,
      fechaApertura: new Date(),
      fechaCierre: null
    };
    ticketsDB.push(newTicket);
    return newTicket;
  }
}

module.exports = TicketModel;