import { currentYear, currentMonth, currentDate } from './libs/date';

const today = currentYear() + '/' + currentMonth() + '/' + currentDate();

const todayEl = document.querySelector('#today');
todayEl.appendChild(document.createTextNode(today));
