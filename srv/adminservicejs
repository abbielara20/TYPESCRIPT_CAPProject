const cds = require("@sap/cds");
const fnCrudHelper = require("../utils/crudHelper");
const { uuid } = cds.utils;

module.exports = async (srv) => {

    srv.on("fnCrud", async (req) => {
        const crudHelper = fnCrudHelper(cds);
        const { action } = req.data;
        let entity = "";
        let entries = [];
        let result = "";

        switch (action) {
            case "create":
                entity = cds.entities.Author;
                entries = [{
                    ID: uuid(),
                    fistName: "Jane",
                    lastName: "Lara",
                    emailAddress: "janelara@test.com",
                    phoneNumber: "12345",
                    birthDay: "2000-01-01"
                }];
                result = await crudHelper.create(entity, entries);
                break;
            case "upsert":
                break;
            case "read":
                entity = cds.entities.Author;
                result = await crudHelper.read(entity);
                break;
            case "update":
                entity = cds.entities.Author;
                where = {
                    lastName: "Lara"
                }
                entries= {
                    lastName: "Zurbano"
                }
                result = await crudHelper.update(entity, where, entries);
                break;
            case "delete":
                entity = cds.entities.Author;
                where = {
                    lastName: "Zurbano"
                }
                result = await crudHelper.delete(entity, where);
                break;
        }
        console.log(result);
    })

}