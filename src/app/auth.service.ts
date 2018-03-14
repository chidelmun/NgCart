export class AuthService {
  isLoggedIn: boolean = false;
  failed_attempts: number = 0;

  isAuthenticated(){
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this.isLoggedIn == true){
          resolve(this.isLoggedIn);
        }else{
          reject(this.isLoggedIn);
        }
      }, 1000);
    });
    return promise;
  }

  islocked(){
    const promise = new Promise((resolve, reject)=>{
        if(this.failed_attempts > 2){
          console.log(this.failed_attempts);
          resolve(true);
        }else{

          reject(false);
        }
    });
    return promise;
  }

  login(userid: string, passwd: string): boolean {
    if(userid === 'root' && passwd === 'root'){
      this.isLoggedIn = true;
    }else{
      this.failed_attempts+=1;
    }
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn = false;
  }
}
