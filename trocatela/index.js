let telaAtual = "";
const navbar = document.getElementById("navbar");
//tela_rota_retirada
//tela_triagem_login_cadastro
//tela_cadastro
//tela_conta_criada
//tela_adicionar_rota
//tela_checkout
trocaTela({ Content: "tela_rota_retirada" });

function trocaTela(entry) {
  fetch(`${entry.Content}.html`, {
    method: "GET",
  })
    .then((response) => {
      response.text().then(function (data) {
        if (telaAtual == "") {
          document.getElementById("content").innerHTML = data;
          vemTela(entry.Content).addEventListener("transitionend", () => {
            addInteraction(entry.Content);
          });
        } else {
          let evento = false;
          vaiTela(telaAtual).addEventListener("transitionend", () => {
            if (!evento) {
              evento = true;
              setTimeout(function () {
                document.getElementById("content").innerHTML = data;
                vemTela(entry.Content);
              }, 5);
              addInteraction(entry.Content);
            }
          });
        }
        telaAtual = entry.Content;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function vemTela(idTela) {
  const transition = document.querySelector(`#${idTela}`);
  setTimeout(() => {
    transition.classList.add("is-active");
  }, 5);
  return transition;
}

function vaiTela(idTela) {
  const transition = document.querySelector(`#${idTela}`);
  transition.classList.remove("is-active");
  return transition;
}

function addInteraction(content) {
  if (content === "tela_adicionar_rota") {
  } else if (content === "tela_rota_retirada") {
    tela_rota_retirada("04045-000");
  }
}

let autocomplete2, autocomplete;

function tela_rota_retirada() {
  autocomplete = new autocomplete2.Autocomplete(
    document.getElementById("fa_logradouro"),
    { types: ["geocode", "establishment"] }
  );

  autocomplete.setComponentRestrictions({ country: ["br"] });

  //chamada da função para receber o endereço
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {

  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    postal_code: 'short_name',
    administrative_area_level_1: 'short_name',
    administrative_area_level_2: 'long_name',
    sublocality_level_1: 'long_name'


};



  const dados = {};
  var place = autocomplete.getPlace();
  console.log(place);

  var lat = place.geometry.location.lat();
  console.log(lat);

  var lng = place.geometry.location.lng();
  console.log(lng);

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];

    if (addressType === "street_number") {
      if (componentForm[addressType]) {
        var num = place.address_components[i][componentForm[addressType]];
        console.log(num);
        var numeroEndereco = num.replace(/[^0-9]/g, "");
      }
    }

    if (addressType === "sublocality_level_1") {
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        console.log(val);
      }
    }

    if (addressType === "administrative_area_level_2") {
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        console.log(val);
      }
    }

    if (addressType === "administrative_area_level_1") {
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        console.log(val);
      }
    }

    if (addressType === "postal_code") {
      if (componentForm[addressType]) {
        var cep = place.address_components[i][componentForm[addressType]];
        console.log(cep);
      }
    }
  }
}

function initAutocomplete() {
  autocomplete2 = google.maps.places;

  fetch('http://sistema.mxlog.com.br/Home/Valores').then(t=>t.text()).then(t=>console.log(t))
}
