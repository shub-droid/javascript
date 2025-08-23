class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
        //yaha aagr value.toUpperCase krte to set bhi upper case me hota aur get bhi,but yaha baas abhi set he ho rha upper case me.
    }

}
//_password use kiya kyuki aagr normal password use krte to ek baar setter call krta ek baar constructor issiliye hmne _password daal kr override kr diya password ko
const shubham=new User("Shubham@gmail.com",'abc')
console.log(shubham.password)
console.log(shubham.email)

