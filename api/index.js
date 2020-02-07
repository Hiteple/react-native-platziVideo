const BASE_API = 'https://yts.mx/api/v2/';

// Obtain suggestions
const getSuggestions = async id => {
  const query = await fetch(
    `${BASE_API}movie_suggestions.json?movie_id=${id}`,
  ).then(response => response.json().then(({data}) => data.movies));

  return query;
};

export default getSuggestions;
