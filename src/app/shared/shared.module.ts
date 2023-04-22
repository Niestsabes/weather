import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { TemperatureUnitPipe } from './pipes/temperature/temperature-unit.pipe';
import { DateFormatPipe } from './pipes/date/date-format.pipe';
import { ButtonIconComponent } from "./components/ui/button-icon/button-icon.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const modules = [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
];
const pipes = [DateFormatPipe, TemperaturePipe, TemperatureUnitPipe];
const components = [ButtonComponent, ButtonIconComponent]

@NgModule({
    imports: [...components, ...modules],
    exports: [...components, ...modules, ...pipes],
    declarations: [...pipes]
})
export class SharedModule {}