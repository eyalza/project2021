import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  
  ownerCollection:AngularFirestoreCollection;
  userCollection:AngularFirestoreCollection = this.db.collection('users'); 
  
  public getOwners(userId){
    this.ownerCollection = this.db.collection(`users/${userId}/owners`, 
    ref => ref.orderBy('fullName', 'asc')); 
    return this.ownerCollection.snapshotChanges()      
  } 

  deleteOwner(Userid:string, id:string){
    this.db.doc(`users/${Userid}/owners/${id}`).delete(); 
  } 

  addOwner(userId:string, fullName:string, carId:number, carCompany:string, carModel:string, carYear:number){
    const owner = {fullName:fullName, carId:carId,carCompany:carCompany, carModel:carModel,carYear:carYear}; 
    this.userCollection.doc(userId).collection('owners').add(owner);
  }

  updateOwner(userId:string,id:string, fullName:string, carId:number, carCompany:string, carModel:string, carYear:number){
    this.db.doc(`users/${userId}/owners/${id}`).update(
      {
        fullName:fullName, 
        carId:carId,
        carCompany:carCompany, 
        carModel:carModel,
        carYear:carYear
      }
    )
  }

  constructor(private db:AngularFirestore) { }
}
