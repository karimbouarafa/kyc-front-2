import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

	constructor(private atService: NotificationsService) { }
	notifications: string[];

	ngOnInit() {
		this.notifications = this.atService.getNotifications();
		console.log(this.notifications)
	}

	isDanger(n) {
		if (n[3] == 3) {
			return true
		} else {
			return false
		}
	}


	isWarning(n) {
		if (n[3] == 2) {
			return true
		} else {
			return false
		}
	}
	isSuccess(n) {
		if (n[3] == 1) {
			return true
		} else {
			return false
		}
	}
}
