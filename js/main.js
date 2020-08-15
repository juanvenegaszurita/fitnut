function enviarCorreo() {
  let data = {
    mailOptions: {
      from: "reparaciontotal.cl",
      to: "info.wede@gmail.com",
      subject: "Nuevo mensaje de "+$("#nombre").val()
    },
    data: {
      nombre: $("#nombre").val(),
      email: $("#email").val(),
      telefono: $("#telefono").val(),
      mensaje: $("#mensaje").val(),
    }
  }
  console.log("data", data);
  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/functions-generic/us-central1/sendEmailReparacionTotal',
    data: data,
    success: function() {
      alert("Enviado")
    },
    error: function(error) {
      let errorStr = "";
      error.responseJSON.payload.forEach((campoError)=>{
        errorStr += `Ingrese un ${campoError}\n`
      })
      alert(errorStr)
    }
  });
}