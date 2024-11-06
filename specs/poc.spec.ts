import * as supertest from 'supertest'

const request = supertest("https://jsonplaceholder.typicode.com");

describe("POC Tests", ()=>{

    describe("Get requests",()=>{

        it("GET /posts",async ()=>{
            
           const res =  await request.get("/posts");
    
           expect(res.statusCode).toBe(200)
           expect(res.body[0].id).toBe(1)
          // console.log(res)
        })
    
        
        it("GET /comments with query parameters", async ()=>{
            const res = await request.get("/comments")
            .query({postId:1,limit:2});
            console.log(res.request.url)
    
            expect(res.body[0].postId).toBe(1)
        })
    })

    describe("POST requests", ()=>{


        it("POST /posts", async ()=>{

            const data = {
                title:"My fav animes",
                body:"Content content content content",
                userId: 1,
               // random: "Bladlasldaldla"
            } // always send random data inside the API's to test API

            const req = await request.post("/posts").send(data)

            expect(req.statusCode).toBe(201)
            expect(req.body.title).toBe(data.title)

            console.log(req)
            console.log(req.body)

            
        })
    })

    describe("PUT requests",()=>{

        it("PUT /posts/{id}", async ()=>{
            const data = {
                title:"My fav animes",
                body:"Content content content content",
                userId: 1,
               // random: "Bladlasldaldla"
            } // always send random data inside the API's to test API

            const titleBefore = (await request.get("/posts/1")).body.title;
            const req = await request.put("/posts/1").send(data)
            // it is ideal case if we create resource with POST and then PUT it and see if the title is different
            console.log(titleBefore)
            expect(req.statusCode).toBe(200)
            expect(req.body.title).toBe(data.title)
            expect(req.body.title).not.toBe(titleBefore) // that new title is not equal to new title 


          //  console.log(req)
            console.log(req.body.title)
        })
    })

    describe("PATCH requests",()=>{

        it("PATCH /posts/{id}", async ()=>{
            const data = {
                title:"My fav animes",
            }

            const titleBefore = (await request.get("/posts/1")).body.title;
            const req = await request.patch("/posts/1").send(data)
            console.log(titleBefore)
            expect(req.statusCode).toBe(200)
            expect(req.body.title).toBe(data.title)
            expect(req.body.title).not.toBe(titleBefore) // that new title is not equal to new title 


     
            console.log(req.body.title)
        })
    })

    describe("DELETE requests", ()=>{

        it("DELETE /posts/{id}", async ()=>{
            const req = await request.delete("/posts/1");

            expect(req.statusCode).toBe(200)
            expect(req.body).toEqual({})
        })
    })


})