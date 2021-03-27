import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { LoginService } from 'src/app/service/login.service';
import { Document } from '../document.interface';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],

})
export class DocumentListComponent implements OnInit {
  
  documents : any;
  constructor(private documentService: DocumentService, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.documentService.getDocuList().subscribe(res =>{
      // console.log(res);
      var docu:any = res;
      this.documents = docu.data;
      console.log(this.documents)
    })
  }

  logout(){
    this.loginservice.logout()
  }

}
