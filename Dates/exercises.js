const print = (txt) => console.log(txt + "\n");


const today = new Date();

// 1. check given input is Date or not .

const isDate = (date) => {
    try {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return true;
        }
        return false;

    } catch (error) {
        return error.toString();
    }

};

print(isDate(today)); // true
print(isDate("10/2/2022")); // false


// 2. Write a JavaScript function to get the current date. Ex => ("11/02/2023" , "11-02-2023", "11.02.2023")

const currentDate = (separator) => {
    if (separator === undefined) return "separator required";
    try {
        let dt = today.toLocaleDateString().toString();
        return dt.replaceAll('/', separator);
    } catch (error) {
        return error.toString();
    }
};

print(`current Date => ${currentDate()}`);
print(`current Date => ${currentDate('/')}`);
print(`current Date => ${currentDate('-')}`);
print(`current Date => ${currentDate('.')}`);

// 3. Write a JavaScript function to get the number of days in a month.

const getDays = (date) => {
    try {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return newDate.getDate();
    } catch (error) {
        return 'Please enter valid Date....';
    }

};

print(`Total Days => ${getDays(today)}`);
print(`Total Days => ${getDays(new Date(2014, 2, 21))}`);
print(`Total Days => ${getDays()}`);

// 4. Write a JavaScript function to get the month name and number of days.

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getMonthAndDays = (date) => {
    try {
        let monthName = monthList[date.getMonth()];
        let monthDays = getDays(date);
        return `${monthName} has ${monthDays} days`
    } catch (error) {
        return "Please enter valid date...";
    }

};

print(getMonthAndDays(today));
print(getMonthAndDays());

// 5. Write a JavaScript function to compare dates.

const compareDates = (date1, date2) => {
    try {
        if (date1 > date2) return "date1 > date2";
        else if (date1 < date2) return " date1 < date2";
        else return 'date1 = date2'
    } catch (error) {
        return 'Please enter valid date ...';
    }
};
print(compareDates(today, today));
print(compareDates(today, new Date(2023, 02, 10)));
print(compareDates(new Date(2023, 0, 10), today));

// 6. Write a JavaScript function to test whether a date is a weekend.

const dayNameList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const isWeekEnd = (date) => {
    try {
        let day = date.getDay();
        if (day == 0 || day == 6) return 'weekend day';
        return 'non weekend day';
    } catch (error) {
        return error;
    }
};

print(`this date is a => ${isWeekEnd(today)} (${dayNameList[today.getDay()]})`);

// 7. diffrence between two dates in days

const diffInDays = (date1, date2) => {
    try {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const diffDay = Math.floor((date2 - date1) / _MS_PER_DAY);
        return Math.abs(diffDay);
    } catch (error) {
        return "pass correct dates";
    }
   
};


var b = new Date(2023, 02, 1, 0, 0, 0, 0);

print(`Diff in Days => ${diffInDays(b, today)}`);


//Write a JavaScript function to calculate 'yesterday day'?

const getYesterdayAndTomorrow = () => {
    print(`Yesterday Was ${dayNameList[today.getDay() - 1]}`);
    print(`Today is ${dayNameList[today.getDay()]}`);
    print(`Tomorrow is ${dayNameList[today.getDay() + 1]}`);
};

getYesterdayAndTomorrow();



