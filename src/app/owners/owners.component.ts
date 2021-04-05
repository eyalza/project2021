import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OwnersService } from '../owners.service';
import { Owner } from '../interfaces/owner';

@Component({
  selector: 'owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  
  owners$; 
  owners:Owner[];
  userId:string; 
  editstate = [];
  addOwnerFormOPen = false;
  

  panelOpenState = false;
  constructor(private ownersService:OwnersService, public authService:AuthService) { }

  deleteOwner(id:string){
    this.ownersService.deleteOwner(this.userId,id); 
  }

  update(owner:Owner){
    this.ownersService.updateOwner(this.userId,owner.id,owner.fullName,owner.carId,owner.carCompany,owner.carModel,owner.carYear);
  }

  add(owner:Owner){
    this.ownersService.addOwner(this.userId,owner.fullName,owner.carId,owner.carCompany,owner.carModel,owner.carYear); 
  }


  ngOnInit(): void {
    this.authService.getUser().subscribe(
      user => {
        this.userId = user.uid;
        console.log(this.userId); 
        this.owners$ = this.ownersService.getOwners(this.userId); 
        this.owners$.subscribe(
          docs =>{
            console.log('init worked');
            this.owners = [];
            for(let document of docs){
              const owner:Owner = document.payload.doc.data();
              owner.id = document.payload.doc.id; 
              this.owners.push(owner);
            } 
          }
        )
      }
    )
  }

}
