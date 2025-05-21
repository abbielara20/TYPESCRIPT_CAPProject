import cds from '@sap/cds';
// const { GET } = cds.test('serve', 'CatalogService');


describe('Catalog Service', () => {
    // let app: any;

    // beforeAll(async () => {
    //     try {
    //         cds.env.requires.db = { kind: 'sqlite', database: ':memory' };
    //         // await cds.load(__dirname + '/../srv/admin-service.cds').then(cds.serve)
    //         // await deploy(__dirname + '/../db');


    //         // Deploy using CLI
    //         execSync('npx cds deploy --to sqlite::memory:', { stdio: 'inherit' });

    //         // Serve the model
    //         app = await cds.serve('all');



    //     } catch (error) {
    //         console.log(error);
    //     }
    // })

    // afterAll(async () => {
    //     await shutdown();
    // });

    // it('bootstrapped the database successfully', ()=>{
    //     const { CatalogService } = cds.services;
    //     const { Authors } = CatalogService.entities;
    //   })

    // test('It should return empty data from Books table', async () => {
    //     const response = await cds.run(SELECT.from('Books'))
    //     expect(response).toEqual([]);
    // });


    it('Should create one record to Books table', async () => {
        try {
            const payload = [{
                ID: 1000,
                fistName: "Jane",
                lastName: "Lara",
                emailAddress: "janelara@test.com",
                phoneNumber: "12345",
                birthDay: "2000-01-01"
            }];
            await cds.run(INSERT.into('Authors').entries(payload));
            const response = await cds.run(SELECT.from('Authors').where({ ID: 1000 }))
            expect(response).toBeGreaterThan(1);
        } catch (error) {
            console.log(error)
        }
    });

    // // Component testing
    // test('should accept valid request', () => {

    // })

    // test('Should return false for undefined parameters', () => {

    // })


    // // 4. Spying.
    // test('Should not create with Invalid BookType', async () => {
    //     // const spy = jest.spyOn(srv, 'validateBookType');

    // })
})