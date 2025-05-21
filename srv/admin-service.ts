import cds from '@sap/cds'
import CrudHelper from '../utils/crudHelper'
import { Books } from '#cds-models/my/bookshop'
import TextBundle from '../utils/textBundle'

export class CatalogService extends cds.ApplicationService {
    init() {

        const { uuid } = cds.utils;
        const crudHelper = new CrudHelper();
        const { fnGetTextBundle } = new TextBundle();
        const bundle = fnGetTextBundle("en");

        this.on('fnCrud', async req => {
            const { action } = req.data;
            let entity: string;
            let entries: object[];
            let where: object;
            let result: object = {};

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
            const msg = bundle.getText("SUCCESS_MESSAGE", [
                JSON.stringify(result)
            ]);
            return msg;
        })

        this.on('READ', Books, async () => {
            const where = {
                lastName: "Lara"
            };
            const query = SELECT
                .from(Books)
                .where(where);
            const result = await cds.run(query);
            return result;
        })


        // Add base class's handlers. Handlers registered above go first.
        return super.init()

    }
}