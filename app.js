document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.querySelector('.container');
  
    // Render header
    appContainer.appendChild(headerComponent.render());
  
    // Render search
    appContainer.appendChild(searchComponent.render((query) => {
      musicModel.search(query)
        .then((data) => {
          console.log(data);
          // Implement logic to handle data, e.g., rendering results
        });
    }));
  });
