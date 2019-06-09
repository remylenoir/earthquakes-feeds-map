import React, { useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext } from '../../Store';

const FormFilter = () => {
  const [filter, setFilter] = useContext(FilterContext);
  const [data] = useContext(DataContext);

  const handleChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div>
      <h2>Filters</h2>
      <form>
        <div>
          <label htmlFor='amount'>Display range</label>
          <div>
            <span>1</span>
            <input
              type='range'
              min='1'
              max={data && data.records.length}
              value={filter.amount}
              name='amount'
              onChange={handleChange}
            />
            <span>{data && data.records.length}</span>
          </div>
        </div>
        <hr />
        <div>
          <label htmlFor='timeRange'>Time range</label>{' '}
          <div>
            <select name='timeRange' value={filter.timeRange} onChange={handleChange}>
              <option value='all_hour'>Past hour</option>
              <option value='all_day'>Past day</option>
              <option value='all_week'>Past 7 days</option>
              <option value='all_month'>Past 30 days</option>
            </select>
          </div>
        </div>
      </form>

      <hr />

      <p>
        Displaying <b>{filter.amount}</b> of <b>{data && data.records.length}</b> earthquakes from the
        past{' '}
        {(filter.timeRange === 'all_hour' && 'hour') ||
          (filter.timeRange === 'all_day' && 'day') ||
          (filter.timeRange === 'all_week' && 'week') ||
          (filter.timeRange === 'all_month' && 'month')}
        {'.'}
      </p>
    </div>
  );
};

export default FormFilter;
