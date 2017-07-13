import { Routes, RouterModule } from '@angular/router';
import { ArticleCategoriesComponent } from '../components/article-categories/article-categories.component';
import { LukakuComponent } from '../components/features/lukaku/lukaku.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: ArticleCategoriesComponent
	},
	{
		path: 'lukaku',
		component: LukakuComponent
	}
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
