 let chave ="450f231e36b7c20fc535ea0d81fcc74a"

const clique = () => {
  
    let cidade = document.querySelector(".input-cidade").value;
    if(!cidade){
        alert("inserir o nome da cidade");
    }else{
    buscarCidade(cidade);
}
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const buscarCidade = async(cidade)  => {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade+
        "&appid="+
        chave+
         "&lang=pt_br"+
        "&units=metric")
    .then(res => res.json())

    
    console.log(dados);
    colocaNaTela(dados)
} 
    const colocaNaTela = (dados) => {
        document.querySelector(".nome-cidade").innerHTML = dados.name;
        document.querySelector(".temp-c").innerHTML = dados.main.temp;
        document.querySelector(".des").innerHTML = dados.weather[0].description;
        document.querySelector(".umi").innerHTML = dados.main.humidity + "%";
        document.querySelector(".img").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    }

