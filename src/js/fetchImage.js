export default function fetchImage (e){
    const form = document.querySelector("input");
    const searchQuery = e.target.value;
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=24297910-266d35e9d32fe9ab4dcc44a53`;
    return fetch(URL)  
    .then(response => 
      response.json())
      .then(
        data => data)
    .finally(
    form.reset)
  };
