// First exercise will be returns a list of all the brands 
// Assertions:
// 200 response 
// List items > 1 
// Properties to include "_id" and "name"

import controller from '../controller/brand.controller'


describe("Brands", ()=>{
    

    let idForGet;
    let nameOfItem;
    
    let newBody; // or we can use to assign body of the request to the newBody
    describe("GET Request ", ()=>{
        it("Tests brands GET ALL and assert, GET /brands", async ()=>{
    
            const req = await controller.getBrands()
    
            expect(req.statusCode).toBe(200)
            expect(req.body.length).toBeGreaterThan(1)
            expect(Object.keys(req.body[0])).toEqual(["_id", "name"])
    
    
        })
    })
    

        
    describe("Create brands",()=>{

            let beforeBrand;
            const data = {
                name:"Test Brand " + Math.floor(Math.random() * 100000),
                description:"Test Brand Description"
            }

    beforeAll(async ()=>{
     
        beforeBrand= await controller.postBrand(data)

    })

    afterAll(async ()=>{

        const deletion = await controller.deleteBrand(beforeBrand.body._id)

        console.log("BRAND DELETED")

        
        expect(await deletion.statusCode).toBe(200)
        expect(await deletion.body).toBeNull()
    })

            it("Test POST /brands request", async () =>{
                expect(beforeBrand.statusCode).toBe(200)
                expect(beforeBrand.body.name).toBe(data.name)
                expect(Object.keys(beforeBrand.body)).toContain("createdAt")
                expect(beforeBrand.body).toHaveProperty("createdAt")
        
            })
        
            it("Schema Test - name is mandatory field",async ()=>{
                const data = {
                    name:"",
                    description:"Test Brand Description"
                }
        
                const req = await controller.postBrand(data)
        
                expect(req.statusCode).toBe(422)
                expect(req.body.error).toEqual("Name is required")
            })

            it("Schema Test - minimum char length for name > 1 ",async ()=>{
                const data = {
                    name:"a",
                    description:"Test Brand Description"
                }
        
                const req =  await controller.postBrand(data)
        
                expect(req.statusCode).toBe(422)
                expect(req.body.error).toEqual("Brand name is too short")
            })

            it("Business Logic - duplicating entries are not allowed", async () =>{
                
                const req2 =  await controller.postBrand(data)

                expect(req2.statusCode).toBe(422)
                expect(req2.body.error).toEqual(data.name + " already exists")
    
            })


            it("Business Logic - brand does not exist on false id", async () =>{
                
                
                const req = await controller.postBrand(data)
        
              
                expect(req.statusCode).toBe(422)
                expect(req.body.error).toEqual("Brand not found.")
                
            })

            it("Schema Test - maximum char length for name > 30 is not accepted and description must be string ",async ()=>{
                
                let newBrands;
                
                const data = {
                    name:"Testing testing " + Math.floor(Math.random() * 100000),
                    description:"Test Brand Description"
                }

                const invalidData = {
                    name:"asdasdasdasdasdasdasdasdasdasdasdasdasdasd"
                    
                }

                const invalidDescription = {
                    name:"Testing the descript",
                    description:1321312312
                }
        
        
                const req =  await controller.postBrand(data)
                expect(req.statusCode).toBe(200)

               newBrands = req.body
                
               const reqPUT = await controller.putBrands(newBrands.id, invalidData)

               
                expect(reqPUT.statusCode).toBe(422)
                expect(reqPUT.body.error).toEqual("Brand name is too long")

                const reqPUT2 =  await controller.putBrands(newBrands.id, invalidDescription)
                expect(reqPUT2.statusCode).toBe(422)
                expect(reqPUT2.body.error).toEqual("Brand description must be a string")
                
            })

            it("Business Logic validation - not able to update and delete brands that does not exist",async ()=>{
                
                let newBrands;
                
                const data = {
                    name:"Testing testing " + Math.floor(Math.random() * 100000),
                    description:"Test Brand Description"
                }

                const invalidData = {
                    name:"dsadsadsadas"
                    
                }

                const req = await controller.postBrand(data)
                expect(req.statusCode).toBe(200)

                newBrands = req.body
                
                const reqPUT = await controller.putBrands("64b41f5949e85607248e1212", invalidData)  

                expect(reqPUT.statusCode).toBe(404)
                expect(reqPUT.body.error).toEqual("Brand not found.")
                    
               
                const reqDel = await controller.deleteBrand("64b41f5949e85607248e1212")
          
                expect(reqDel.statusCode).toBe(404)
                expect(reqDel.body.error).toEqual("Brand not found.")
            })

           

        })
    
    describe("GET individual brand", ()=>{

        let beforeBrand;

        beforeAll(async ()=>{
        const data = {
            name:"Test Brand " + Math.floor(Math.random() * 100000),
            description:"Test Brand Description"
        }
            
            beforeBrand = await controller.postBrand(data)

            console.log("BEFORE ALL BRAND " + beforeBrand.body.name)
        })

        it("Tests brands GET specific ID and assert, GET /brands/:id", async ()=>{
            console.log("IN GET BRAND " + beforeBrand.body.name)

            const reqGet = await controller.getIndividualBrand(beforeBrand.body._id)
          
          
            expect(reqGet.statusCode).toBe(200)
            expect(reqGet.body.name).toEqual(beforeBrand.body.name)

        })

        afterAll(async ()=>{

            const deletion = await controller.deleteBrand(beforeBrand.body._id)
  
            console.log("BRAND DELETED")

            
            expect( deletion.statusCode).toBe(200)
            expect( deletion.body).toBeNull()
        })

    })
    
    describe("PUT request", ()=>{

        let beforeBrand;

        beforeAll(async ()=>{
         const data = {
            name:"Test Brand " + Math.floor(Math.random() * 100000),
            description:"Test Brand Description"
        }
            
            beforeBrand= await controller.postBrand(data)
    
            console.log("BEFORE ALL BRAND " + beforeBrand.body.name)
        })

        afterAll(async ()=>{

         
        const deletion =   await controller.deleteBrand(beforeBrand.body._id)
            console.log("BRAND DELETED")

            expect(await deletion.statusCode).toBe(200)
            expect(await deletion.body).toBeNull()
        })
    
        // tests to update an existing brand
        // Delete an existing brand
        it("PUT request PUT /brands/{id}", async () =>{
            const data = {
                name: beforeBrand.body.name + " updated"
            }
            const putReq = await controller.putBrands(beforeBrand.body._id, data)
    
            expect(putReq.statusCode).toBe(200)
            expect(putReq.body.name).toEqual(data.name)
        })

        

    })        
    
    describe("Delete brand id ", ()=>{
            let beforeBrand;

            beforeAll(async ()=>{
             const data = {
                name:"Test Brand " + Math.floor(Math.random() * 100000),
                description:"Test Brand Description"
            }
                
                beforeBrand= await controller.postBrand(data)
        
                console.log("BEFORE ALL BRAND " + beforeBrand.body.name)
            })
            it("DELETE /brand/:id", async ()=>{
                const reqDel = await controller.deleteBrand(beforeBrand.body._id)

                expect(reqDel.statusCode).toBe(200)
                expect(reqDel.body).toBeNull()
            })
    })
})
    

