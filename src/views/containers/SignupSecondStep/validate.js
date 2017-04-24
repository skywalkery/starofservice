const isDateValid = ({dd, mm, yyyy}) => {
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (yyyy % 400 == 0 || (yyyy % 100 != 0 && yyyy % 4 == 0)) {
        monthLength[1] = 29;
    }
    return dd <= monthLength[mm - 1];
};

const calculateAge = (dd, mm, yyyy) => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();
    let age = todayYear - yyyy;

    if (todayMonth < mm - 1) {
        age--;
    }

    if (mm - 1 == todayMonth && todayDay < dd) {
        age--;
    }
    return age;
};

const isAdult = (dd, mm, yyyy) => {
    return calculateAge(dd, mm, yyyy) >= 18;
};

const validate = values => {
    const errors = {};
    const {dd, mm, yyyy} = values;

    if (!dd) {
        errors.dd = 'Date of Birth is required';
    } else if (!mm) {
        errors.mm = 'Date of Birth is required';
    } else if (!yyyy) {
        errors.yyyy = 'Date of Birth is required';
    }

    if (!isDateValid(values)) {
        errors.dd = 'Date of Birth is invalid';
    }

    if (!errors.dd && !isAdult(dd, mm, yyyy)) {
        errors.dd = 'You must be 18 year old or more';
    }

    return errors;
};

export default validate;
