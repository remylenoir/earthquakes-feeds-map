import React, { useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext } from '../../Store';

// App components
import SidebarLegend from '../Sidebar/Legend';
import SidebarCredits from '../Sidebar/Credits';
import { Heading2 } from '../../components/UI/Headings';

const FormFilter = () => {
  const [filter, setFilter] = useContext(FilterContext);
  const [data] = useContext(DataContext);

  const handleChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className='filter px-20 d-flex'>
      <form>
        <Heading2>Filters</Heading2>
        <div className='filter__type'>
          <label htmlFor='amount' className='d-inline-block w-100'>
            Display range: {filter && filter.amount} / {data && data.records.length}
          </label>
          <div>
            <input
              className='filter__slider w-100'
              type='range'
              min='3'
              max={data && data.records.length}
              value={filter.amount}
              name='amount'
              onChange={handleChange}
            />
          </div>
        </div>

        <hr />

        <div className='filter__type'>
          <label htmlFor='timeRange' className='d-inline-block w-100'>
            Time range:
          </label>{' '}
          <div className='select-container'>
            <select
              name='timeRange'
              className='filter__select w-100'
              value={filter.timeRange}
              onChange={handleChange}
            >
              <option value='all_hour'>Past hour</option>
              <option value='all_day'>Past day</option>
              <option value='all_week'>Past 7 days*</option>
              <option value='all_month'>Past 30 days*</option>
            </select>
            <small className='d-inline-block w-100'>
              <em>* May take a few seconds to load</em>
            </small>
          </div>
        </div>

        <hr />

        <div className='filter__legend'>
          <SidebarLegend />
        </div>

        <hr />

        <p>
          Displaying <b>{filter.amount}</b> earthquakes from&nbsp;the&nbsp;
          <b>
            past{' '}
            {(filter.timeRange === 'all_hour' && 'hour') ||
              (filter.timeRange === 'all_day' && 'day') ||
              (filter.timeRange === 'all_week' && 'week') ||
              (filter.timeRange === 'all_month' && 'month')}
          </b>
          {'.'}
        </p>
      </form>

      <div className='credits'>
        <SidebarCredits />
      </div>
    </div>
  );
};

export default FormFilter;
