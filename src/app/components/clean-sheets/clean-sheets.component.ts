import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../services/app-http.service';

@Component({
	selector: 'pl-clean-sheets',
	templateUrl: './clean-sheets.component.html',
	styleUrls: ['./clean-sheets.component.scss'],
	providers: [AppHttpService]
})
export class CleanSheetsComponent implements OnInit {

	playerData: any;

	constructor(private _appHttpService: AppHttpService) { }

	callHttpService() {

		this._appHttpService.requestData('./assets/data/player-data.json')
		.subscribe(
			data => {this.playerData = data},
			error => console.log(error),
			() =>console.log('subscribe complete')
		)
	}

	// topStats() {
	// 	for (let i=0; i < this.playerData.length; i++) {
	// 		
	// 	}
	// }

	ngOnInit() {
		this.callHttpService();
	}

}
