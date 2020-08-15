function enviarCorreo() {
  let data = {
    mailOptions: {
      from: "reparaciontotal.cl",
      to: "joseph.venegas02@gmail.com",
      subject: "Nuevo mensaje de "+$("#nombre").val()
    },
    data: {
      nombre: $("#nombre").val(),
      email: $("#email").val(),
      telefono: $("#telefono").val(),
      mensaje: $("#mensaje").val(),
      ciudad: "Santiago"
    }
  }
  console.log("data", data);
  $.ajax({
    type: 'POST',
    url: 'https://us-central1-functions-generic.cloudfunctions.net/sendEmailPost',
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