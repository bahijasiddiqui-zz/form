import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private msalService: MsalService ){

  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res =>{
        if (res!=null && res.account!= null){
          this.msalService.instance.setActiveAccount(res.account)
        }
      }
    )

  }


  isLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount != null
  }
  login(){

    this.msalService.instance.loginRedirect();


    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) =>{
    //   this.msalService.instance.setActiveAccount(response.account)
    // });
  }

  logout(){
    this.msalService.logout();
  }

  // ngOnInit(): void {
  // }

}
