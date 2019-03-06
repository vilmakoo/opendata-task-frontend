import axios from 'axios';

const initialState = { dataPoints: [], error: null };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ALL_DATA_POINTS':
    return {
      ...state,
      dataPoints: action.dataPoints
    };

  case 'SET_NEW_DATA_POINT':
    return {
      ...state,
      dataPoints: [...state.dataPoints, action.dataPoints]
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


export const fetchNewData = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get('/api/fetch_new_data');

      if (data.data === 'data point already saved') {
        setError('data point already saved');
        return;
      }

      dispatch({
        type: 'SET_NEW_DATA_POINT',
        dataPoints: data.data
      });
    } catch (err) {
      setError(err);
    }
  };
};

export const getAllDataPoints = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get('/api/get_data_points');

      dispatch({
        type: 'SET_ALL_DATA_POINTS',
        dataPoints: data.data
      });
    } catch (err) {
      setError(err);
    }
  };
};

export default dataReducer;