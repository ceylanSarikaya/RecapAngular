
import { Rental } from "./rentaldto";
import { ResponseModel } from "./responseModel";

export interface RentaldtoResponseModel extends ResponseModel{
    data:Rental[];
}