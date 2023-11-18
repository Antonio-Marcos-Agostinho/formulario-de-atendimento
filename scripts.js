document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('#form');
  const nameInput = document.querySelector("#name");
  const telefoneInput = document.querySelector("#telefone");
  const veiculoInput = document.querySelector("#veiculo");
  const corInput = document.querySelector("#cor");
  const anoInput = document.querySelector("#ano");
  const sentidoInput = document.querySelector("#sentido");
  const messageTextarea = document.querySelector("#message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
      alert("Por favor, preencha seu nome.");
      return;
    }

    if (telefoneInput.value === "") {
      alert("Por favor, preencha seu telefone.");
      return;
    }

    if (veiculoInput.value === "") {
      alert("Por favor, preencha o campo veículo.");
      return;
    }

    if (corInput.value === "") {
      alert("Por favor, preencha o campo cor.");
      return;
    }

    if (anoInput.value === "") {
      alert("Por favor, preencha o campo ano.");
      return;
    }

    if (sentidoInput.value === "") {
      alert("Por favor, selecione o sentido do carro.");
      return;
    }

    if (messageTextarea.value === "") {
      alert("Por favor, preencha a observação.");
      return;
    }

    form.submit();
  });
});
