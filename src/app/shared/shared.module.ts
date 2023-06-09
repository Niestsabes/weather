import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TemperatureValuePipe } from './pipes/temperature/temperature-value.pipe';
import { TemperatureUnitPipe } from './pipes/temperature/temperature-unit.pipe';
import { DateFormatPipe } from './pipes/date/date-format.pipe';
import { ButtonIconComponent } from "./components/ui/button-icon/button-icon.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WindValuePipe } from './pipes/wind/wind-value.pipe';
import { WindUnitPipe } from './pipes/wind/wind-unit.pipe';
import { WeatherIconComponent } from "./components/weather/weather-icon/weather-icon.component";
import { PresureUnitPipe } from './pipes/presure/presure-unit.pipe';
import { PresureValuePipe } from './pipes/presure/presure-value.pipe';
import { WindDirectionPipe } from './pipes/wind/wind-direction.pipe';
import { ForecastGroupPipe } from './pipes/forecast/forecast-group.pipe';
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";

const modules = [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
];
const pipes = [
    DateFormatPipe,
    ForecastGroupPipe,
    PresureUnitPipe,
    PresureValuePipe,
    TemperatureUnitPipe,
    TemperatureValuePipe,
    WindDirectionPipe,
    WindUnitPipe,
    WindValuePipe,
];
const components = [ButtonComponent, ButtonIconComponent, WeatherIconComponent]

@NgModule({
    imports: [...components, ...modules],
    exports: [...components, ...modules, ...pipes],
    declarations: [...pipes]
})
export class SharedModule {}