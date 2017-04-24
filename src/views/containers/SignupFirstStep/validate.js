const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is not valid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Min 6 characters long';
    }

    if (values.password && values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Confirm password does not match';
    }

    return errors;
};

export default validate;
