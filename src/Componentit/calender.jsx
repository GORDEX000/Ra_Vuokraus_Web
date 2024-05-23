import { useState } from 'react';
import dayjs from 'dayjs';
import { useGenerateDate } from './use-generate-date';
import { cn } from './utils';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Calendar = () => {
  const { generateDates, arrayOfDays, arrayOfMonths } = useGenerateDate();
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  console.log(selectedDate);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-3 bg-white shadow-lg rounded-lg ml-16"> {/* Increased margin-left to 12 */}
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold text-xl">
            {arrayOfMonths[today.month()]}, {today.year()}
          </div>
          <div className="flex items-center gap-2">
            <GrPrevious
              className="text-2xl cursor-pointer"
              onClick={() => {
                setToday(today.subtract(1, 'month'));
              }}
            />
            <span
              className="text-xl cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </span>
            <GrNext
              className="text-2xl cursor-pointer"
              onClick={() => {
                setToday(today.add(1, 'month'));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 text-center text-lg text-gray-500 font-semibold">
          {arrayOfDays.map((day, index) => (
            <div key={index} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {generateDates(today.month(), today.year()).map((dateObj, index) => {
            const { date, currentMonth, today: isToday } = dateObj;

            return (
              <div key={index} className="h-16 w-full flex items-center justify-center border-t">
                <span
                  className={cn(
                    currentMonth ? '' : 'text-gray-400',
                    isToday ? 'bg-red-500 text-white hover:bg-red-600' : '',
                    selectedDate.isSame(date, 'day') ? 'bg-slate-800 text-white' : '',
                    'w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all'
                  )}
                  onClick={() => {
                    setSelectedDate(date);
                  }}
                >
                  {date.date()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 text-xl">{selectedDate.format('dddd, MMMM D, YYYY')}</div>
    </div>
  );
};

export default Calendar;