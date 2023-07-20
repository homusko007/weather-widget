import { startWidget } from './modules/widgetService.js';
import { cityServiceSearch } from './modules/cityServiceSearch.js';

const init = async (app) => {
//const city = 'Гродно';   
const widget = await startWidget();
app.append(widget);

cityServiceSearch(widget);

};

init(document.querySelector('#app'));
