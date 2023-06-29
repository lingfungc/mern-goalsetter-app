import axios from "axios";

const API_URL = "/api/goals/";

// Get Goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Set Goal
const setGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Delete a Goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const API_URL_ID = API_URL + goalId;

  const response = await axios.delete(API_URL_ID, config);

  return response.data;
};

const goalsService = { getGoals, setGoal, deleteGoal };
export default goalsService;
