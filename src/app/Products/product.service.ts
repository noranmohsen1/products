import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError ,  tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class productService {
  private productUrl = "api/products/products.json";
  constructor (private http:HttpClient) {}


 getProducts(): Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this.productUrl).pipe(
    tap(data =>console.log("all",JSON.stringify(data))),
    catchError(this.handleError)
    );

 }

private handleError(err:HttpErrorResponse){
  let errorMessage = " ";
  if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured : ${err.error.message}`
  } else {
      errorMessage = `server returend code : ${err.status},error message is : ${err.message}`;
  }
  console.log(errorMessage);
  return throwError(()=>errorMessage);

}

}
