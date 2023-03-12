import PropTypes from 'prop-types';
const DayInUkrainian = {
  Monday: 'Пн',
  Tuesday: 'Вт',
  Wednesday: 'Ср',
  Thursday: 'Чт',
  Friday: 'Пт',
  Saturday: 'Сб',
  Sunday: 'Нд',
};

const ScheduleWarehouse = ({ schedule }) => {
  return (
    <>
      Графік роботи
      {}
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
