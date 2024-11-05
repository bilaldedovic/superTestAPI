import * as supertest from 'supertest'
import config from '../config/base.config'

const request = supertest(config.baseUrl)

class UploadController{

    uploadSingleFile(filePath:string){

        return request.post("/upload/single")
        .attach('single',filePath)
    }
    
    
    uploadMultipleFiles(filePaths: string[]){
      const req  =  request.post("/upload/multiple")
      filePaths.forEach(file=>{
        req.attach("multiple", file) // LOOP THROUGH ALL FILES THAT WE HAVE AND THEN ATTACH ALL FILES
    })
    return req

    }
}


export default new UploadController()