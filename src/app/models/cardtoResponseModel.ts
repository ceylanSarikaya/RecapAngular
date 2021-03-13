import { Car } from "./cardto";
import { ResponseModel } from "./responseModel";

export interface CardtoResponseModel extends ResponseModel{
    data:Car[]
}