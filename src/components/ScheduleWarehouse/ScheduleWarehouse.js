import PropTypes from 'prop-types';
import { Schedule, ItemSchedule, Day } from './ScheduleWarehouse.styled';

const DayInUkrainian = {
  Monday: 'Пн',
  Tuesday: 'Вт',
  Wednesday: 'Ср',
  Thursday: 'Чт',
  Friday: 'Пт',
  Saturday: 'Сб',
  Sunday: 'Нд',
};

const ScheduleWarehouse = ({ schedule, children }) => {
  return (
    <>
      {children}
      <Schedule>
        {Object.keys(schedule).map(key => {
          return (
            <ItemSchedule key={key}>
              <Day>{DayInUkrainian[key]}</Day> <p>{schedule[key]}</p>
            </ItemSchedule>
          );
        })}
      </Schedule>
    </>
  );
};
ScheduleWarehouse.propTypes = {
  schedule: PropTypes.exact({
    Monday: PropTypes.string.isRequired,
    Tuesday: PropTypes.string.isRequired,
    Wednesday: PropTypes.string.isRequired,
    Thursday: PropTypes.string.isRequired,
    Friday: PropTypes.string.isRequired,
    Saturday: PropTypes.string.isRequired,
    Sunday: PropTypes.string.isRequired,
  }),
};

export default ScheduleWarehouse;
