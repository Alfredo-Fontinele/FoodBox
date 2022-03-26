let prato = "";
let sobremesa = "";
let bebida = "";

function Frango() {
    document.getElementById("frango").style.borderColor = "springgreen";
    document.getElementById("carne").style.borderColor = "#0F2027";
    document.getElementById("peixe").style.borderColor = "#0F2027";
    prato = "Frango";
}

function Carne() {
    document.getElementById("frango").style.borderColor = "#0F2027";
    document.getElementById("carne").style.borderColor = "springgreen";
    document.getElementById("peixe").style.borderColor = "#0F2027";
    prato = "Carne";
}

function Peixe() {
    document.getElementById("frango").style.borderColor = "#0F2027";
    document.getElementById("carne").style.borderColor = "#0F2027";
    document.getElementById("peixe").style.borderColor = "springgreen";
    prato = "Peixe";
}

function Refrigerante() {
    document.getElementById("refrigerante").style.borderColor = "springgreen";
    document.getElementById("refresco").style.borderColor = "#0F2027";
    bebida = "Refrigerante";
}

function Refresco() {
    document.getElementById("refresco").style.borderColor = "springgreen";
    document.getElementById("refrigerante").style.borderColor = "#0F2027";
    bebida = "Refresco";  
}

function Pudim() {
    document.getElementById("pudim").style.borderColor = "springgreen";
    document.getElementById("sorvete").style.borderColor = "#0F2027";
    sobremesa = "Pudim";
}

function Sorvete() {
    document.getElementById("sorvete").style.borderColor = "springgreen";  
    document.getElementById("pudim").style.borderColor = "#0F2027";
    sobremesa = "Sorvete";
}

function finalizarPedido() {
  let mensagem;

  if (prato === "" || bebida == "" || sobremesa == "") {
    alert("Verifique se seus pedidos estão selecionados");
  } 

  else {
    mensagem = `Olá, Gostaria de Pedir um Combo Box com: ${prato}, ${bebida} e ${sobremesa}`;
  
    window.open(`https://wa.me/+5591999683755?text=${mensagem}`); 
  }
  
}

function clickIE() {
  if (document.all) {
    return false;
  }
}

function clickNS(e) {
  if (document.layers||(document.getElementById&&!document.all)) {
    if (e.which==2||e.which==3) {
      return false;
    }
  }
}

if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown=clickNS;
}
  
else {
  document.onmouseup=clickNS;
  document.oncontextmenu=clickIE;
}

document.oncontextmenu = new Function("return false")