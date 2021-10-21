import {Request,Response} from "express"
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageControler{
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const { message } = request.body;


        const service = new CreateMessageService();

        const result = await service.execute(message, user_id)
        
        return response.json(result)


    }
}

export {CreateMessageControler}