const { gql } = require('apollo-server');

const typeDefs = gql`
    type Appointment {
        id: ID!
        name: String!
        doctor: String!
        patient: String!
    }

    type Query {
        appointments: [Appointment!]!
        appointment(id: ID!): Appointment
    }

    input AppointmentInput {
        name: String
        doctor: String
        patient: String
    }

    type Mutation {
        #createAppointment(appointmentInput: AppointmentInput): Appointment
        updateAppointment(id: ID!, appointmentInput: AppointmentInput): Appointment
    }
` ;

module.exports = { typeDefs };