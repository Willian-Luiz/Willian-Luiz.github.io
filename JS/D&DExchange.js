
function Calcular() {

  var valor = document.getElementById("valor").value
  var escolhaIn = document.getElementById("p1").selectedIndex
  console.log(escolhaIn)
  var cobrePQP1 = document.getElementById("cobre1")
  var cobrePQP2 = document.getElementById("cobre2")
  var prataPQP1 = document.getElementById("prata1")
  var prataPQP2 = document.getElementById("prata2")
  var electrumPQP1 = document.getElementById("electrum1")
  var electrumPQP2 = document.getElementById("electrum2")
  var ouroPQP1 = document.getElementById("ouro1")
  var ouroPQP2 = document.getElementById("ouro2")
  var platinaPQP1 = document.getElementById("platina1")
  var platinaPQP2 = document.getElementById("platina2")
  var Cobre = {
    cobree: valor + " Cobre",
    prataa: valor / 10,
    electrumm: valor / 50,
    ouroo: valor / 100,
    platinaa: valor / 1000}
  var Prata = {
    cobree: valor * 10,
    prataa: valor + "Prata",
    electrumm: valor / 5,
    ouroo: valor / 10,
    platinaa: valor / 100}
  var Electrum = {
    cobree: valor * 50,
    prataa: valor / 5,
    electrumm: valor + "Electrum",
    ouroo: valor / 2,
    platinaa: valor / 20}
  var Ouro = {
    cobree: valor * 100,
    prataa: valor * 10,
    electrumm: valor * 2,
    ouroo: valor + "Ouro",
    platinaa: valor / 10}
  var Platina = {
    cobree: valor * 1000,
    prataa: valor * 100,
    electrumm: valor * 20,
    ouroo: valor * 10,
    platinaa: valor + "Platina"}
  var moedas = [Cobre, Prata, Electrum, Ouro, Platina]
//------------------------------------------------------ Cobre ------------------------------------------------------ //
       if (cobrePQP1.selected && cobrePQP2.selected) {document.getElementById("vemPraCa").value = (moedas[0].cobree)
} else if (cobrePQP1.selected && prataPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[0].prataa)
} else if (cobrePQP1.selected && electrumPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[0].electrumm)
} else if (cobrePQP1.selected && ouroPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[0].ouroo)
} else if (cobrePQP1.selected && platinaPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[0].platinaa)}
//------------------------------------------------------ Prata ------------------------------------------------------ //
  else if (prataPQP1.selected && cobrePQP2.selected) {document.getElementById("vemPraCa").value = (moedas[1].cobree)
} else if (prataPQP1.selected && prataPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[1].prataa)
} else if (prataPQP1.selected && electrumPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[1].electrumm)
} else if (prataPQP1.selected && ouroPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[1].ouroo)
} else if (prataPQP1.selected && platinaPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[1].platinaa)}
//------------------------------------------------------ Electrum ------------------------------------------------------ //
  else if (electrumPQP1.selected && cobrePQP2.selected) {document.getElementById("vemPraCa").value = (moedas[2].cobree)
} else if (electrumPQP1.selected && prataPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[2].prataa)
} else if (electrumPQP1.selected && electrumPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[2].electrumm)
} else if (electrumPQP1.selected && ouroPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[2].ouroo)
} else if (electrumPQP1.selected && platinaPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[2].platinaa)}
//------------------------------------------------------ Ouro ------------------------------------------------------ //
  else if (ouroPQP1.selected && cobrePQP2.selected) {document.getElementById("vemPraCa").value = (moedas[3].cobree)
} else if (ouroPQP1.selected && prataPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[3].prataa)
} else if (ouroPQP1.selected && electrumPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[3].electrumm)
} else if (ouroPQP1.selected && ouroPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[3].ouroo)
} else if (ouroPQP1.selected && platinaPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[3].platinaa)}
//------------------------------------------------------ Platina ------------------------------------------------------ //
  else if (platinaPQP1.selected && cobrePQP2.selected) {document.getElementById("vemPraCa").value = (moedas[4].cobree)
} else if (platinaPQP1.selected && prataPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[4].prataa)
} else if (platinaPQP1.selected && electrumPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[4].electrumm)
} else if (platinaPQP1.selected && ouroPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[4].ouroo)
} else if (platinaPQP1.selected && platinaPQP2.selected) {document.getElementById("vemPraCa").value = (moedas[4].platinaa)}
}
