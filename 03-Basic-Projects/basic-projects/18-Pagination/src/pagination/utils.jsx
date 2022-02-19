const paginate = (users) => {
  const usersPerPage = 9;
  const pages = Math.ceil(users.length / usersPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * usersPerPage;
    return users.slice(start, start + usersPerPage);
  });
  //   console.log(newFollowers);
  //   console.log(pages);
  return newFollowers;
};

export default paginate;
