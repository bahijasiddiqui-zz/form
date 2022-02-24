// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Component, VERSION, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpResponse, HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  // file: File | any;
  // message: null | any;
  // value: number | any;
  // app: any;

  selectedFiles: FileList |any;
  currentFile: File |any;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;
  // constructor(private uploadFileService: FileUploadService, private router:Router) { }
  // selectFile(event:any): void {
  //   this.selectedFiles = event.target.files;
  // }
  // upload(): void {
  //   this.progress = 0;
  //   this.currentFile = this.selectedFiles.item(0);
  //   this.uploadFileService.upload(this.currentFile).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         if(event.total){
  //         this.progress = Math.round(100 * event.loaded / event.total);}
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         this.fileInfos = this.uploadFileService.getFiles();
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });
  //   this.selectedFiles = undefined;
  // }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngOnInit(): void {
  //   this.fileInfos = this.uploadFileService.getFiles();
  // }
  name = 'Angular ' + VERSION.major;
  dataimage:any;
  @ViewChild('fileInput') fileInput: ElementRef | any;
  fileAttr = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File|any) => {
        this.fileAttr += file.name ;
      });
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }
  constructor(private router:Router){}
  goToNext():void{
    this.router.navigateByUrl('/download-page')
  }

  }


