const BASE_URL = 'https://api.spacexdata.com/v3/rockets';
const LOAD_ROCKETS = 'rockets/load';
const BOOK_ROCKET = 'rockets/book';
const CANCEL_BOOKING = 'rockets/cancel-booking';

const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const cancelBooking = (id) => ({
  type: CANCEL_BOOKING,
  id,
});
