import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search.routing';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        SearchRoutingModule,
        FormsModule
    ],
})
export class SearchModule { }
