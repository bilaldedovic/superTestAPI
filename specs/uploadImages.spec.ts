import uploadController from '../controller/uploadFiles.controller'

describe("Upload images", ()=>{

    describe("Test single image upload", ()=>{

        it("POST -  single file upload ", async ()=>{

            const req = await uploadController.uploadSingleFile("data/image.png")

            expect(req.body.filename).toEqual("image.png")
            expect(req.body.mimetype).toContain("image")
            console.log(req.body)
        })
    })

    describe("Test multiple image upload", ()=>{

        it.only("POST -  multiple file upload ", async ()=>{

            const files = ["data/image.png", "data/linux.png"]

         //   const req = await uploadController.uploadMultipleFiles(["data/image.png", "data/linux.png"])
         const req = await uploadController.uploadMultipleFiles(files)
          
            console.log(req.body)

            expect(req.statusCode).toBe(200)
            expect(req.body.length).toBeGreaterThan(1)

            expect(req.body[0].filename).toEqual("image.png")
            expect(req.body[0].mimetype).toContain("image")

            expect(req.body[1].filename).toEqual("linux.png")
            expect(req.body[1].mimetype).toContain("image")
        })
    })
})