const handleSearch = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError(false);
  setPage(1);

  try {
    const data = await fetchUserData({
      username,
      location,
      minRepos,
      page: 1,
    });
    setUsers(data.items);
  } catch (err) {
    setError(true);
  } finally {
    setLoading(false);
  }
};

const loadMore = async () => {
  const nextPage = page + 1;
  setPage(nextPage);

  const data = await fetchUserData({
    username,
    location,
    minRepos,
    page: nextPage,
  });

  setUsers((prev) => [...prev, ...data.items]);
};