import mongoInMemory from "../../../mongo-inmemory";
import initService from "../../../../src/init/init-service";
import {findBaseError} from "../../../../src/modules/base/service/BaseErrorService";


describe("base error service", () => {


    beforeAll(async () => {
        jest.setTimeout(10000)
        await mongoInMemory.connect()
        await initService()
    });

    afterAll(async () => {

    })


    test('template true', async () => {
        let error = await findBaseError()
        expect(true).toBe(true)
    })

})
