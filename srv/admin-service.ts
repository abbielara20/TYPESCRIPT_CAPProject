import cds from '@sap/cds'
import CrudHelper from '../utils/crudHelper'
import { Books } from '#cds-models/my/bookshop'

export class CatalogService extends cds.ApplicationService {
    init() {

        const { uuid } = cds.utils;
        const crudHelper = new CrudHelper();

        this.on('fnCrud', async req => {
            const { action } = req.data;
            let entity = "";
            let entries: object[] = [];
            let where = {};
            let result = "";

            switch (action) {
                case "create":
                    entity = "Author";
                    entries = [{
                        ID: uuid(),
                        fistName: "Jane",
                        lastName: "Lara",
                        emailAddress: "janelara@test.com",
                        phoneNumber: "12345",
                        birthDay: "2000-01-01"
                    }];
                    result = await crudHelper.fnCreate(entity, entries);
                    break;
                case "upsert":
                    break;
                case "read":
                    entity = "Author";
                    where = {
                        lastName: "Lara"
                    };
                    result = await crudHelper.fnRead(entity, where);
                    break;
                case "update":
                    entity = "Author";
                    where = {
                        lastName: "Lara"
                    };
                    entries = [{
                        lastName: "Zurbano"
                    }];
                    result = await crudHelper.fnUpdate(entity, where, entries);
                    break;
                case "delete":
                    entity = "Author";
                    where = {
                        lastName: "Zurbano"
                    };
                    result = await crudHelper.fnDelete(entity, where);
                    break;
            }

            console.log(result)
        })

        this.on('READ', Books, async req => {
            const where = {
                lastName: "Lara"
            };
            let query = SELECT
                .from(Books)
                .where(where);
            const result = await cds.run(query);
            console.log(result);
        })


        // Add base class's handlers. Handlers registered above go first.
        return super.init()

    }
}