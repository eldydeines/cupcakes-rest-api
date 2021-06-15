const BASE_URL = "http://127.0.0.1:5000/api";


function showResponses(cupcakes) {
  for (let { flavor, rating, size, image } of cupcakes) {
    let c = `<div class="card col-4">      
        <div class="card-body">
          <p class="card-text">Flavor: ${flavor}</p>
          <p class="card-text">Size: ${size}</p>
          <p class="card-text">Rating: ${rating}</p>
          <img class="card-img" src="${image}" alt="Card image cap">
        </div>
      </div>`;
    $("#cakes-section").append($(c));
  }
}

//Gets list of all cupcakes by sending a get request to Backend
async function getAllCupcakes() {
  $("#cupcake-parent").append("<div class='col-8 d-flex flex-wrap' id='cakes-section'></div>")
  let responses = await axios.get(`${BASE_URL}/cupcakes`);
  showResponses(responses.data.cupcakes);
}


//Gets data from form and then sends data to post in backend database
//Will refresh the DOM with the added cupcake
$("#new-cupcake").on("submit", async function (evt) {

  evt.preventDefault();

  const flavor = $("#cupcake-flavor").val();
  const size = $("#cupcake-size").val();
  const rating = $("#cupcake-rating").val();
  const image = $("#cupcake-image").val();

  await axios.post(`${BASE_URL}/cupcakes`, { flavor, size, rating, image });
  $("#cakes-section").remove();
  getAllCupcakes();
});

getAllCupcakes();