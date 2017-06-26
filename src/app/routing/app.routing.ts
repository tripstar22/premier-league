import { Routes, RouterModule } from '@angular/router';
import { StatCategoriesComponent } from '../components/stat-categories/stat-categories.component';
import { CleanSheetsComponent } from '../components/clean-sheets/clean-sheets.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: StatCategoriesComponent
	},
	{
		path: 'clean-sheets',
		component: CleanSheetsComponent
	}
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
