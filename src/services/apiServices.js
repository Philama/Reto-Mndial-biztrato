import axios from 'axios';

export const getTeamMatches = async (id) => {
  const options = {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  };
  const result = await axios.get(
    `https://api.football-data.org/v4/teams/${id}/matches`,
    options
  );
  return result;
};
