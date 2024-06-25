// import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion";

// const ForecastRes = ({ data }) => {
//   return (
//     <>
//       <label htmlFor="" className="title">Daily</label>
//       <Accordion allowZeroExpanded>
//         {data.list.splice(0, 7).map((item, idx) => (
//           <AccordionItem>
//             <AccordionItemHeading>
//               <AccordionItemButton>
//                 <div className="dailyItem">
//                 <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}></img>
//                 </div>
//               </AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel></AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </>
//   );
// }

// export default ForecastRes;