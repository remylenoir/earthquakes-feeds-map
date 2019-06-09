// import React, { useState, useEffect } from 'react';

// const FormFilter = ({ data }) => {
//   // ### FORM ###
//   const [filter, setFilter] = useState({ amount: 5, timeRange: 'all_day' });

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFilter({ ...filter, [name]: value });
//   };

//   return (
//     <div>
//       <h2>Filters</h2>
//       <form>
//         <div>
//           <label htmlFor='amount'>Amount of records displayed</label>{' '}
//           <input
//             type='range'
//             min='1'
//             max={data && data.records.length}
//             value={filter.amount}
//             name='amount'
//             onChange={handleChange}
//           />
//         </div>
//         <hr />
//         <div>
//           <label htmlFor='timeRange'>Time range</label>{' '}
//           <div>
//             <select name='timeRange' value={filter.timeRange} onChange={handleChange}>
//               <option value='all_hour'>Past hour</option>
//               <option value='all_day'>Past day</option>
//               <option value='all_week'>Past 7 days</option>
//               <option value='all_month'>Past 30 days</option>
//             </select>
//           </div>
//         </div>
//       </form>

//       <hr />

//       <h3>
//         Displaying {filter.amount} of {data && data.records.length} earthquakes from the past{' '}
//         {(filter.timeRange === 'all_hour' && 'hour') ||
//           (filter.timeRange === 'all_day' && 'day') ||
//           (filter.timeRange === 'all_week' && 'week') ||
//           (filter.timeRange === 'all_month' && 'month')}
//         {'.'}
//       </h3>
//     </div>
//   );
// };

// export default FormFilter;
