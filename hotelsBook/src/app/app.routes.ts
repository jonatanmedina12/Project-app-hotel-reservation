import { Routes } from '@angular/router';
import { TOP_HEADER } from './feature/common/header/header-routing.module';

export const routes: Routes = [{

    path: '',
    children: TOP_HEADER
    

}];
