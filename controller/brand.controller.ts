
import * as supertest from "supertest"
import config from "../config/base.config"

const request = supertest(config.baseUrl)


class BrandController{

    getBrands(){
        return  request.get("/brands")
    }

    getIndividualBrand(brandID:string){
        return request.get("/brands/" + brandID)
    }

    postBrand(data:{ [key:string]:string}){
        return request.post("/brands").send(data);
    }

    putBrands(brandID:string, data:{ [key:string]:string | number }){
        return request.put("/brands/" + brandID).send(data)
    }

    deleteBrand(brandID:string){
        return request.delete("/brands/"+brandID)
    }
}

export default new BrandController()