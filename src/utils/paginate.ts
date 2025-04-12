export function paginate<T>(items: T[], page: number, perPage: number) {
    const totalPages = Math.ceil(items.length / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginated = items.slice(start, end);
    return { paginated, totalPages };
  }
  