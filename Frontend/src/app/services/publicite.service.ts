import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicite } from '../components/model/publicite';

@Injectable({
  providedIn: 'root'
})
export class PubliciteService {
  url='  http://localhost:3000/Publicite'

  constructor(private httpService : HttpClient) { }

   //form the backend Side
 getAllPublicite(){
  return this.httpService.get<Publicite[]>('http://localhost:3000/publicite/afficher')
}
addPublicite(d: any){
  return this.httpService.post('http://localhost:3000/publicite/ajouter',d)
}
deletePublicite(idP:Number){
  return this.httpService.delete('http://localhost:3000/publicite/delete/'+idP)
}

}
