

function Conversao(valor,input,output){
  console.log(valor)
      console.log(input)
      console.log(output)

  const conversão = [1,10,50,100,1000];
  // passa o valor para uma unidade padrão
  valor_base = valor/conversão[input-1];
  // multiplica pela nova moeda
  valor_convertido = valor_base*conversão[output-1];
  return valor_convertido ;
};

function Calcular() {
  //                 [Cobre, Prata, Electrum, Ouro, Platina];
  const conversão = [1       ,10    ,50,      100,  1000];

  var valor_in = document.getElementById("valor").value
  var index_moeda_in = document.getElementById("p1").selectedIndex
  var index_moeda_out = document.getElementById("p2").selectedIndex

  var moedas = ["Cobre", "Prata", "Electrum", "Ouro", "Platina"]
  console.log(moedas[index_moeda_in]);
  //
 valor_out = Conversao(valor_in,index_moeda_in,index_moeda_out);
  //
   document.getElementById("vemPraCa").value = valor_out;
};
