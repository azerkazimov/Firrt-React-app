const fetchUser = (userId, setUser) => {
  fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    });
};

export default fetchUser;
