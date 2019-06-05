import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCertificatComponent } from './creation-certificat.component';

describe('CreationCertificatComponent', () => {
	let component: CreationCertificatComponent;
	let fixture: ComponentFixture<CreationCertificatComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CreationCertificatComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CreationCertificatComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
