const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const LOAD_DRAGONS = 'dragons/load';

const loadDragons = (payload) => ({
  type: LOAD_DRAGONS,
  payload,
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
    default:
      return state;
  }
};

export default reducer;
