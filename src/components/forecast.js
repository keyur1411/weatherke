import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ForecastRes = ({ data }) => {

  const dayInWeek = new Date().getDay();
const forecastDay = WEEK_DAYS.slice(dayInWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInWeek));
  return (
    <>
      <label htmlFor="" className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="dailyItem">
                <img alt='weather' className='small-icon' src={`icons/${item.weather[0].icon}.png`}></img>
                <label htmlFor="" className="day">{forecastDay[idx]}</label>
                <label htmlFor="" className="description">{item.weather[0].description}</label>
                <label htmlFor="" className="min-max">{Math.round(item.main.temp_min)}&#8451; / {Math.round(item.main.temp_max)}&#8451;</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="it">Pressure</label>
                  <label className="it">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="it">Humidity</label>
                  <label className="it">{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="it">Clouds</label>
                  <label className="it">{item.clouds.all} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="it">Wind Speed</label>
                  <label className="it">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="it">Sea-Level</label>
                  <label className="it">{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="it">Feels Like</label>
                  <label className="it">{item.main.feels_like} &#8451;</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default ForecastRes;