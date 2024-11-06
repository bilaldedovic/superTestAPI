
// First exercise will be returns a list of all the brands 
// Assertions:
// 200 response 
// List items > 1 
// Properties to include "_id" and "name"

import * as supertest from "supertest"

const request = supertest("https://practice-react.sdetunicorns.com/api/test")


describe("GET Request ", ()=>{
    it("Tests brands GET ALL and assert, GET /brands", async ()=>{

        const req = await request.get("/brands")

        expect(req.statusCode).toBe(200)
        expect(req.body.length).toBeGreaterThan(1)
        expect(Object.keys(req.body[0])).toEqual(["_id", "name"])


    })
})


describe("GET individual request ", ()=>{
    it("Tests brands GET specific ID and assert, GET /brands/:id", async ()=>{

        const req = await request.get("/brands/64b420bf49e85607248e28a1")

        expect(req.statusCode).toBe(200)
        expect(req.body.name).toBe("Eplus")


    })
})


describe("POST request", ()=>{

    it("Test POST /brands request", async () =>{

        const data = {
            name:"SamsSong S40",
            description:"SamsSong is copy of the Samsung but just with SONG he he he"
        }

        const req = await request.post("/brands").send(data);

        expect(req.statusCode).toBe(200)
        expect(req.body.name).toBe(data.name)

        const idOfNewPost = req.body._id
        const reqBodyName = (await request.get(`/brands/${idOfNewPost}`)).body.name

        expect(req.body.name).toBe(reqBodyName)
        console.log(req.body)
        expect(Object.keys(req.body)).toContain("createdAt")

        const deletion = await request.delete(`/brands/${idOfNewPost}`); // to clear data

        if(deletion.statusCode == 200){

            console.log("All expects confirmed and post is deleted")
        }else{
            console.log("Something failed")            
        }
    })
})


describe("PUT request", ()=>{

    // tests to update an existing brand
    // Delete an existing brand
    it("PUT request PUT /brands/{id}", async () =>{

        const data = {
            name:"SamSong S40",
            description:"SamSong is copy of the Samsung but just with SONG he he he"
        }

        const req = await request.post("/brands").send(data);

        expect(req.statusCode).toBe(200)
        expect(req.body.name).toBe(data.name)

        const idOfNewPost = req.body._id
        let reqBodyName = (await request.get(`/brands/${idOfNewPost}`)).body.name
        console.log("First TIME " + reqBodyName)

        expect(req.body.name).toBe(reqBodyName)

        const putReq = await request.put(`/brands/${idOfNewPost}`).send({
            name:"Samsung s55"
        })

        expect(putReq.statusCode).toBe(200)

        reqBodyName = (await request.get(`/brands/${idOfNewPost}`)).body.name

        console.log("SECOND TIME " + reqBodyName)
        expect(reqBodyName).not.toEqual(data.name)

        const deletion = await request.delete(`/brands/${idOfNewPost}`); // to clear data

        if(deletion.statusCode == 200){

            console.log("All expects confirmed and post is deleted")
        }else{
            console.log("Something failed")            
        }
    })

    describe("Delete brand id ", ()=>{
        it("DELETE /brand/:id", async ()=>{

            const getIdOfSeven = (await request.get("/brands")).body[7]._id
            const reqDel = await request.delete(`/brands/${getIdOfSeven}`)

            expect(reqDel.statusCode).toBe(200)
            expect(reqDel.body).toBeNull()
        })
    })
})
