const headerComponent = {
    render: () => {
      const headerContainer = document.createElement('div');
      headerContainer.classList.add('header__container');
      headerContainer.innerHTML = `
        <h1>Music database</h1>
        <p>Search for an artist, song or an album or add to the database</p>
      `;
      return headerContainer;
    },
  };
  
  const searchComponent = {
    render: (onSubmit) => {
      const searchContainer = document.createElement('div');
      searchContainer.classList.add('search__container');
      searchContainer.innerHTML = `
        <form id="searchForm">
          <input type="text" name="q" id="search" placeholder="Search for an artist, song, or an album">
          <button type="submit" name="submit-search">Search</button>
        </form>
      `;
  
      const searchForm = searchContainer.querySelector('form');
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('search');
        const query = searchInput.value.trim();
        onSubmit(query);
      });
  
      return searchContainer;
    },
  };
  