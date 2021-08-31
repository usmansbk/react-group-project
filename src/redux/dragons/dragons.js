const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const LOAD_DRAGONS = 'dragons/load';
const BOOK_DRAGON = 'dragons/book';
const CANCEL_BOOKING = 'dragons/cancel-booking';

const loadDragons = (payload) => ({
  type: LOAD_DRAGONS,
  payload,
});

export const bookDragon = (id) => ({
  type: BOOK_DRAGON,
  id,
});

export const cancelBooking = (id) => ({
  type: CANCEL_BOOKING,
  id,
});

export const fetchDragons = async (dispatch) => {
  const response = await fetch(BASE_URL);
  const dragons = await response.json();

  dispatch(loadDragons(dragons.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    description: dragon.description,
    images: dragon.flickr_images,
  }))));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DRAGONS:
      return action.payload;
    case BOOK_DRAGON:
      return state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }

        return {
          ...dragon,
          reserved: true,
        };
      });
    case CANCEL_BOOKING:
      return state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }

        return {
          ...dragon,
          reserved: false,
        };
      });
    default:
      return state;
  }
};

export default reducer;
