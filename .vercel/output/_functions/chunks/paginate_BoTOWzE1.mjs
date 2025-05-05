function paginate(items, page, perPage) {
  const totalPages = Math.ceil(items.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginated = items.slice(start, end);
  return { paginated, totalPages };
}

export { paginate as p };
