const { Appointment } = require('../../models');

const resolvers = {
    Query: {
        appointments: async () => await Appointment.findAll(),
        appointment: async (_, { id }) => await Appointment.findByPk(id),
    },
    Mutation: {
        updateAppointment: async (parent, args) => {
            console.log('updateAppointment');
        }
    },
};

module.exports = { resolvers };