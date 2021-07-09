module.exports = (app) => {

    const controller = require('../controller/controller.js')

    app.get('/display', controller.DisplayData);

    app.post('/insert', controller.InsertData);

    app.post('/update/:id', controller.UpdateData);

    app.get('/delete/:id', controller.DeleteById);

    app.get('/delete_all', controller.DeleteAllData);
};