var form = document.getElementById("form");
form.addEventListener("submit", e => {
  var value = document.getElementById("searchInput").value;
  console.log(value);
  e.preventDefault();
  getDetails(value);
  $("#result").empty();
});

const base = "https://en.wikipedia.org/w/api.php";
const url = "?action=query&prop=pageimages&inprop=url&format=json&origin=*&list=search&srsearch=";

function getDetails(wiki) {
  if (wiki === "") {
    var mess = document.getElementById("mess");
    // mess.innerHTML = 'Error';
    $("#result").empty();
    $("#mess").html(`<div class="alert alert-warning text-center"><b>Please type something to search !</b></div>`);

    setTimeout(() => {
      mess.classList.add('hide');
    }, 5000);

    mess.classList.remove('hide');

  } else {
    $("#img").addClass("show");
    const wikiURl = `${base}${url}${wiki}`;

    fetch(wikiURl)
      .then(data => data.json())
      .then(data => init(data))
      .catch(e => console.log(e));
  }
}

function init(dataFromServer) {

  $("#img").removeClass("show");

  console.log(dataFromServer);

  let wikiResults = dataFromServer.query.search;
  let link = 'https://en.wikipedia.org/?curid=';

  if (wikiResults.length === 0) {
    $("#mess").html(`<div class="alert alert-warning text-center"><b>No results found !</b></div>`);

    setTimeout(() => {
      mess.classList.add('hide');
    }, 5000);

    mess.classList.remove('hide');
  }

  $.each(wikiResults, (index, val) => {
    $("#result").append(`
      <div class="col-sm-6">
         <div class="well text-center">
               <h2><kbd>${val.title}</kbd></h2>
              <p> ${val.snippet}</p>
              <a href="${link}${val.pageid}" target="_blank" class="btn btn-danger">Read More..</a>
          </div>
      <div>
    `);
  });
}

/* Preloader 
 * -------------------------------------------------- */
$WIN = $(window);
$WIN.on('load', function () {

      // will first fade out the loading animation 
      $("#loader").fadeOut("slow", function () {

            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");

      });
});