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

export const fetchRockets = async (dispatch) => {
  const response = await fetch(BASE_URL);
  const rockets = await response.json();

  dispatch(loadRockets(rockets.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};
