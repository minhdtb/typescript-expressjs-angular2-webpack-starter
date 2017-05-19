import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule} from "@angular/http";
import {MainComponent} from "./app.component";
import {routing} from "./app.routing";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [MainComponent],
    providers: [BaseRequestOptions],
    bootstrap: [MainComponent]
})
export class AppModule {
}