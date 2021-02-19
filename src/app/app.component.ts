import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: any = 'my-chat';
	userList: any = ""
	usersRef: AngularFireList<any>;
	constructor(public db: AngularFireDatabase) {
		this.usersRef = db.list('users');
		this.userList = this.getUserList();
	}
	ngOnInit() {

	}
	getUserList() {
		console.log(this.usersRef)
		var userList = new Array();
		this.usersRef.valueChanges().subscribe(res => {
			userList.length = 0
			res.forEach(item => {
				console.log("item" + item['name']);
				userList.push(item)
			});
		});
		return userList;
	}

}
