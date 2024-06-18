import { ErrorHandler } from "@angular/core"

export class GlobalErrorhandle implements ErrorHandler {


    handleError(error: any): void {
        console.error("Erro: " , error.message)
        console.error(error);
        alert(error)
        
    }

    


}