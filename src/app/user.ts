export class User {
	name:string = "Bob";
	desc:string = "Smith";
	constructor(name:string = "", desc:string= ""){
		console.log(this);
		this.name = name;
		this.desc = desc;
	}
}
