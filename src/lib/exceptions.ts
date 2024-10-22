import { IValidationError } from "./interfaces"

export class ApiError extends Error {
    status: number
    errors: IValidationError[]

    constructor(status: number, message: string, errors: IValidationError[]) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static BadRequest(message: string, errors: IValidationError[] = []) {
        return new ApiError(400, message, errors)
    }
}