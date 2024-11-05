
import * as supertest from "supertest"
import config from "../config/base.config"

const request = supertest(config.baseUrl)


class CategoriesController{

    getCategories(){
        
        return request.get("/categories")
    }

    getIndividualCategory(categoryID:string){

        return request.get("/categories/"+categoryID)
    }

    postCategory(data:{[key:string]:string | number}){
        return request.post("/categories").send(data)
    }

    updateCategory(categoryId:string, data:{[key:string]:string | number}){

        return request.put("/categories/"+categoryId).send(data)
    }

    deleteCategory(categoryId:string){

        return request.delete("/categories/"+categoryId)
    }
}


export default new CategoriesController()