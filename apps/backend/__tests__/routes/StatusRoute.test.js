import request from "supertest"
import expressApp from "../../src/express-app";
describe("StatusRoute", () => {


    beforeAll(async () => {
    });

    afterAll(async () => {

    })


    test('status', async () => {
        const res = await request(expressApp)
            .get("/status")
            .expect(200)

        expect(res.body.status).toBe("RUNNING")
    })

})
