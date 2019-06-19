import { NOTIFICATIONLIST } from './../mock-data';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NotificationsService {

	constructor() { }

	getNotifications() {
		return NOTIFICATIONLIST[0];
	}



}
