import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FeedbckService } from '../service/feedbck.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    Feedbackform:FormGroup;
    imageChangedEvent:any='';
  base64textString: string;
  isFileUpdated: boolean;
  fileSize: boolean;
  files=[];
    constructor(private router: Router, 
    private formBuilder:FormBuilder,
    private feedbackservice:FeedbckService,
    private ngxService: NgxUiLoaderService  ) { }

  ngOnInit() {
    this.Feedbackform= this.formBuilder.group({

      image: new FormControl("",Validators.required),
      feedback: new FormControl("",Validators.required),
  
      });
  }

  FeedbackSubmitform(value){
    this.ngxService.start();     
    var json1={
                        // image:this.imageChangedEvent,
                        // image:value.image.base64,
                        image:this.files,
                        feedback:value.feedback,            
           }


           this.feedbackservice.postFeedbackData(json1)
           .subscribe(data=> {
                                 
                                  console.log(data)
                             }
                      );
      this.ngxService.stop();
}

fileChangeEvent(event: any): void {
  // console.log("inside" + JSON.stringify(event));
  // this.imageChangedEvent = event;
  // this.base64textString = event;
  // this.imageChangedEvent="'data:image/jpg;base64,'"+this.base64textString;

  const reader = new FileReader();
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    // this.files = event.target.files;
    for (let index = 0; index < event.target.files.length; index++) {
      let temp = event.target.files[index].name.split(".");
      let temptype = temp[temp.length - 1];

      event.target.files[index].customType = temptype;
      let b = event.target.files[index].size <= 1024 * 1024 * 5; //5242880 bytes = 5MB
      if (b == false) {
        this.fileSize = true;
        console.log("if");
      } else {
        this.files.push(event.target.files[index]);
        
      }
      console.log(this.files);
    }
  }  
 
}

}
