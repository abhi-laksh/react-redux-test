import moment from 'moment';

export const isValidDate = (d, m, y) => (
    (d > 0 && d <= 31)
    && (m > 0 && m <= 12)
    && (String(y).length === 4)
    && (moment(`${y}-${m}-${d}`, 'YYYY-M-D')).isBefore(moment())
    && (moment(`${y}-${m}-${d}`, 'YYYY-M-D')).isValid()
);

export const isAboveAge = (date, age = 18) => {

    var validYear = moment().subtract(age, "years");
    var birthday = moment(date, 'YYYY-M-D');

    return birthday.isValid() && validYear.isAfter(birthday)

}

export const validate = (values) => {
    const errors = {};

    const requiredFields = [
        'day',
        'month',
        'year',
    ]

    requiredFields.forEach(field => {
        console.log(values[field], values)
        if (!values[field]) {
            errors[field] = `${field} is required`
        }
    })

    if (Object.keys(errors).length > 0) {

        return errors;

        // throw new SubmissionError({
        //     ...errors,
        // })
    }

    const { day, month, year } = values;

    if (
        !(isValidDate(day, month, year))
    ) {
        return {
            _error: "Date is not valid."
        };

        // throw new SubmissionError({
        //     _error:"Date is not valid."
        // })
    }

    return errors

}
