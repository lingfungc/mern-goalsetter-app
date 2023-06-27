import axios from "axios";

const API_URL = "/api/goals/";

// Get Goals
const getGoals = async () => {
  const response = await axios.get(API_URL);

  // console.log("This is from getGoals in goalService");
  // console.log(response.data);
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

const goalsService = { getGoals, setGoal };

export default goalsService;
