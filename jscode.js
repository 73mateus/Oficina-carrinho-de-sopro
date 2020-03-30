      
      var conteudo=[
        "Carrinho de Sopro",
        "O Carrinho de Sopro consiste de um brinquedo sustentável movido por propulsão a ar. Essa prática, apesar de simples, pode abordar diversas áreas, tais como: geometria, energia potencial elástica, atrito, entre outros. Tudo isso de forma lúdica!"
        ];
      
      
      var materiais=[
        "Papelão",
        "1 espeto de churrasco",
        "1 canudo fino (4mm)",
        "1 balão", 
        "Fita adesiva",
        "Papelão",
        "Tampinhas de garrafa PET",
        "Cola quente"
        ];
        var fotoextra=[
        /*0*/"",
        /*1*/"",
        /*2*/"",
        /*3*/"",
        /*4*/"",
        /*5*/"",
        /*6*/"",
        /*7*/"",
        /*8*/"",
        ];

        var observacao=[
        /*0*/"",
        /*1*/"",
        /*2*/"",
        /*3*/"",
        /*4*/"",
        /*5*/"",
        /*6*/"",
        /*7*/"",
        /*8*/""
        ];
        var dicaMaker=[
        /*0*/"",
        /*1*/"",
        /*2*/"Você não precisa usar canudos de plástico! Com uma folha de papel e uma fita você pode criar o seu próprio canudinho ecológico. Enrole o papel até que fique no formato de um canudo. Passe a fita para que fique bem preso. Use a criatividade à favor do meio ambiente!",
        /*3*/"",
        /*4*/"",
        /*5*/"",
        /*6*/"",
        /*7*/"",
        /*8*/""
        ];
        var subtitulos=[
        /*0*/"",
        /*1*/"Procedimentos",
        /*2*/"",
        /*3*/"",
        /*4*/"",
        /*5*/"",
        /*6*/"",
        /*7*/"",
        /*8*/"",
        
        ];
        
      var procedimentos=[
      /*0*/"",
      /*1*/"Recorte um retângulo de papelão de 6cm por 10cm.",
      /*2*/"Recorte o canudo fino em 2 pedaços de 6,5cm.",
      /*3*/"Cole com cola quente os canudos finos no retângulo de papelão.",
      /*4*/"Fure as 4 tampinhas de garrafa PET bem no centro.",
      /*5*/"Conforme mostra a figura 5, passe o espeto de churrasco por dentro da  tampinha, canudo e por dentro de outra tampinha.",
      /*6*/"Corte o excesso do palito e faça o mesmo do outro lado.",
      /*7*/"Prenda a boca do balão na ponta do canudo grosso.",
      /*8*/"Para finalizar, cole o canudo grosso em cima do carrinho.",

    ];
 function imagemCapa(){
    document.write(
        "<div class=\"row justify-content-center\">"+
          "<div class=\"col-xm-12 col-sm-10 col-md-8 col-lg-6 \">"+
            "<div class=\"container px-0\" >"+
              "<div class=\"text-center\">"+
                "<img class=\" rounded img-responsive my-4 \" src=\"img/cb/capa.jpg\"  width=\"100%\">"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"          
    );
}
function listarMateriais(){
    for(i=0;i<materiais.length;i++){
        document.write("<li class=\"li\">"+materiais[i]+";</li>");
      }
}
function listarProcedimentos(){
    for(i=1;i<procedimentos.length;i++){
                
        if (subtitulos[i]!=="" && subtitulos[i]!==undefined){
          document.write("<h2 class=\"h2 border-bottom border-success my-4\">"+subtitulos[i]+"</h2>");
        }
        
       
        document.write(
        "<div class=\"row  justify-content-center\">"+
          "<div class=\" col col-md-12\">"+
            "<div class=\" row border  rounded shadow rounded mt-4\" id=\"caixa\">"+
              "<div class=\" align-self-center col-2  px-1 px-sm-2 px-md-5 px-lg-5 px-xl-5  \" id=\"numero_da_caixa\">"+
                "<spam class=\"display-2  font-weight-bold \"  >"+
                  i +
                "</spam>"+
              "</div>"+
              "<div class=\"col col-10 pl-5 pl-sm-5 pl-md-5 pl-lg-5 pl-xl-5 align-self-center\">"+
                "<p>"+
                  procedimentos[i]+
                "</p>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"
        );
        if (fotoextra[i]!=="" && fotoextra[i]!==undefined){
            document.write(
              "<div class=\"row justify-content-center\">"+
                "<div class=\"col-xm-6 col-sm-6 col-md-6 col-lg-6 \">"+
                  "<div class=\"container px-0\" >"+
                    "<div class=\"text-center\">"+
                      "<img class=\" rounded img-responsive my-4 \" src=\"img/cb/"+i+".jpg\"  width=\"100%\">"+
                    "</div>"+
                  "</div>"+
                "</div>"+
                "<div class=\"col-xm-6 col-sm-6 col-md-6 col-lg-6 \">"+
                  "<div class=\"container px-0\" >"+
                    "<div class=\"text-center\">"+
                      "<img class=\" rounded img-responsive my-4 \" src=\"img/cb/"+fotoextra[i]+i+".jpg\"  width=\"100%\">"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"          
          );
        }else{
          document.write(
              "<div class=\"row justify-content-center\">"+
                "<div class=\"col-xm-12 col-sm-10 col-md-8 col-lg-6 \">"+
                  "<div class=\"container px-0\" >"+
                    "<div class=\"text-center\">"+
                      "<img class=\" rounded img-responsive my-4 \" src=\"img/cb/"+i+".jpg\"  width=\"100%\">"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"          
          );

        }
        
      
      if(dicaMaker[i]!=="" && dicaMaker[i]!==undefined){
          document.write(
          "<div class=\"row\">"+
            "<div class=\"col-md\">"+
              "<div class=\"alert alert-info\" role=\"alert\">"+
                "<h4 class=\"alert-heading border-bottom text-info\">Dica Maker</h4>"+ 
                  dicaMaker[i]+                          
              "</div>"+
            "</div>"+
          "</div>"
        
        );
        }
        if(observacao[i]!=="" && observacao[i]!==undefined){
          document.write(
            "<div class=\"row\">"+
              "<div class=\"col-md\">"+
                "<div class=\"alert alert-warning\" role=\"alert\">"+
                  "<h4 class=\"alert-heading border-bottom text-warning\">Observação</h4>"+
                    observacao[i]+
                "</div>"+
              "</div>"+
            "</div>"
          );

        }
      }

}