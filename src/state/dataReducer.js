import axios from 'axios';

const initialState = { events: [], error: null };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ALL_EVENTS':
    return {
      ...state,
      events: action.events
    };

  case 'SET_NEW_EVENT':
    return {
      ...state,
      events: [...state.events, action.events]
    };

  case 'SET_ERROR':
    return {
      ...state,
      error: action.error
    };

  default:
    return state;
  }
};

export const setError = (error) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_ERROR',
      error
    });

    setTimeout(() => {
      dispatch({
        type: 'SET_ERROR',
        error: null
      }
      );
    }, 4000);
  };
};

// const baseUrl = process.env.API_URL || 'http://localhost:3000';

export const fetchNewData = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get('/api/fetch_new_data');

      if (data.data === 'event already saved') {
        setError('event already saved');
        return;
      }

      dispatch({
        type: 'SET_NEW_EVENT',
        events: data.data
      });
    } catch (err) {
      setError(err);
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get('/api/get_events');

      dispatch({
        type: 'SET_ALL_EVENTS',
        events: data.data
      });
    } catch (err) {
      setError(err);
    }
  };
};

export default dataReducer;