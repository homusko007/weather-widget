import { fetchForecast, fetchWeather, getCity } from './apiService.js';
import { 
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast,
    showError} from './render.js'


export const startWidget = async (city, widget) => {

 if (!city) {
   const dataCity = await getCity();
   if (dataCity.success) {
    city = dataCity.city;
   } else {
    showError(widget, dataCity.error);
   }
  }

if (!widget) {
  widget = document.createElement('div');
  widget.classList.add('widget');
}

const dataWether = await fetchWeather(city);
if (dataWether.success) {
    renderWidgetToday(widget, dataWether.data);
    renderWidgetOther(widget, dataWether.data);
} else {
  showError(widget, dataWether.error);  
};

const dataForecast = await fetchForecast(city);
if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
} else {
  showError(widget, dataForecast.error);  
};

return widget;
};