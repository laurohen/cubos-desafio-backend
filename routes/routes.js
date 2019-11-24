
const agendaRoutes = require('./agendas');

const appRouter = (app, fs) => {

    agendaRoutes(app, fs);

};

module.exports = appRouter;