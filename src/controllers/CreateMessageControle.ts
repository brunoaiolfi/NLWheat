import {Request,Response} from "express"

import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageControler{
    async handle(request : Request,response: Response){
        const { message } = request.body;
        const { user_id } = request;

        console.log("Message -> "+message)

        const service = new CreateMessageService();
        try{
            const result = await service.execute(message, user_id)
        
            return response.json(result)
        }catch(err){
            return response.json(err.message)

        }

    }
}

export {CreateMessageControler}