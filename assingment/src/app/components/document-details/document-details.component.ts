import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/service/document.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentDetailsComponent implements OnInit {

  docuDetails:any;
  imgSrcID_Card_Front:any;
  imgSrcID_Card_Back:any;
  liveCheckPhotos:any = [];
  showFront:boolean = true;
  name:string ='';
  id:string = '';
  constructor( private activateRouter: ActivatedRoute, private docuService: DocumentService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params=>{
      this.id = params['id'];
      this.name = params['name'];
      this.docuService.getDocuDetails(this.id).subscribe(res =>{
        let documentDetails:any = res
        this.docuDetails = documentDetails.data;
        // this.imgSrcID_Card_Back = documentDetails.data[0].ID_Card_Back;
        if(documentDetails.data[0].ID_Card_Front.indexOf("https") != -1){
          this.imgSrcID_Card_Front = documentDetails.data[0].ID_Card_Front
        } else {
          this.imgSrcID_Card_Front = 'https://storage.googleapis.com/flexverify.appspot.com'+ documentDetails.data[0].ID_Card_Front;
        }

        if(documentDetails.data[0].ID_Card_Back.indexOf("https") != -1){
          this.imgSrcID_Card_Back = documentDetails.data[0].ID_Card_Back
        } else {
          this.imgSrcID_Card_Back = 'https://storage.googleapis.com/flexverify.appspot.com'+ documentDetails.data[0].ID_Card_Back;
        } 


        if(documentDetails.data[0].LiveCheck_Photos.indexOf("https") != -1){
          
          // https://storage.googleapis.com/flexverify.appspot.com/livecheck_left_1615488285860.jpg
        }

        else {
        
          this.liveCheckPhotos.push(documentDetails.data[0].LiveCheck_Photos);
          console.log(this.liveCheckPhotos)

        }

        

        console.log(this.docuDetails);
        console.log(this.imgSrcID_Card_Back);
        console.log(this.imgSrcID_Card_Front)
      })
    })
  }


  toogleImage(){
    if(this.showFront){
      this.showFront =false
    } else {
      this.showFront = true
    }
  }

  logout(){
    this.loginService.logout();
  }

}
