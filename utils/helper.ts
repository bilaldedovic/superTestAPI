import adminController from "../controller/admin.controller";
import categoriesController from "../controller/categories.controller";

export const login = async (email:string, password:string) => {

    const data = {"email":email, "password":password}

    const res = await adminController.postAdminLogin(data);


    return res.body.token;
}


export const createCategory = async (token:string)=>{
    const body = {"name":"Test Category " + Math.floor(Math.random()*12131231)}

    const postRes =  await categoriesController.postCategory(body).set("Authorization", "Bearer " + token);
    return postRes.body._id
}