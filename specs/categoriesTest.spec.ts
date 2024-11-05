import controller from '../controller/categories.controller'
import config from "../config/base.config"
import { createCategory, login } from '../utils/helper';

describe("Categories",()=>{

    let token;

    beforeAll(async ()=>{
       // const data = {"email":config.email, "password":config.password}
       // const res = await adminController.postAdminLogin(data);
        //token = res.body.token;

       token = await login(config.email,config.password)
    })

    it("GET /categories", async ()=>{
        const res = await controller.getCategories();

        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toBeGreaterThan(1)
        expect(Object.keys(res.body[0])).toEqual(['_id','name'])
    })

    describe("Create Categories",()=>{


        it('POST /categories', async()=>{

            const body = {"name":"Test Category " + Math.floor(Math.random()*12131231)}

            const res = await controller.postCategory(body).set("Authorization", "Bearer " +token);

            expect(res.statusCode).toBe(200)

            expect(res.body.name).toEqual(body.name)
        })
    })


    describe("Update categories",()=>{
        let token,categoryId;

        

        beforeAll(async ()=>{

            // const data = {"email":config.email, "password":config.password}
       // const res = await adminController.postAdminLogin(data);
        //token = res.body.token;

       token = await login(config.email,config.password)

       categoryId = await createCategory(token);


        })


        it('PUT /categories', async()=>{

            const updated = {"name":"testitting this u"}
            const resPUT = await controller.updateCategory(categoryId,updated).set("Authorization", "Bearer " + token)

            console.log(resPUT.body)
            expect(resPUT.body.name).toEqual(updated.name)

        })
    })

    describe("Delete categories",()=>{
        let token, categoryId;


        beforeAll(async ()=>{

           // const data = {"email":config.email, "password":config.password}
       // const res = await adminController.postAdminLogin(data);
        //token = res.body.token;

       token = await login(config.email,config.password)
       categoryId = await createCategory(token);

        })


        it('DELETE /categories', async()=>{

           
            const resDELETE = await controller.deleteCategory(categoryId).set("Authorization", "Bearer " + token)

            expect(resDELETE.statusCode).toBe(200)

        })
    })
})