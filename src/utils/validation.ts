export const validateField = (field: string, value: string): string => {
  let message = '';
  if (field === 'email') {
    if (!value) {
      message = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      message = 'Enter a valid email address';
    }
  }

  if (field === 'password') {
    if (!value) {
      message = 'Password is required';
    } else if (value.length < 6) {
      message = 'Password must be at least 6 characters';
    }
  }

  return message;
};
