
var fecha = new Date();
var ano = fecha.getFullYear();
var month = fecha.getUTCMonth() + 1; //months from 1-12
var day = fecha.getUTCDate();

let index=0;
let numberChild=0;
let originalDom1="";
let originalDom2="";
let originalDom3="";
let originalDom4="";
let flag=0;
let numberHead=["PRIMERO","SEGUNDO","TERCERO","CUARTO","QUINTO","SEXTO","SETIMO"];

function past()
{
   /*
   if(index>0)
   {
       index=index-1;
   }
   */
   index=2;
   move(index);
}

function next()
{
   /*
   if(index<3)
   {
       index=index+1;
   }
   */
   index=3;
   move(index);
}

function move(index)
{
    switch(index)
    {
        
        case 0:
            document.getElementById("inject0").innerHTML = originalDom1+originalDom2 +originalDom3;
            
        break;
        case 1:
            document.getElementById("inject0").innerHTML =originalDom1+ originalDom2 +originalDom3;
           
        break;
        case 2:
            document.getElementById("inject0").innerHTML =originalDom1+originalDom2+ originalDom3;
          
        break;
        case 3:
            if(originalDom4!="")
            {
              document.getElementById("inject0").innerHTML =originalDom2+originalDom3+ originalDom4;
            }else
            {
              document.getElementById("inject0").innerHTML =originalDom1+originalDom2+ originalDom3;
            }
           
        break;  
        case 4:
            
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
    }
}

function showInformation(flagTagi)
{
   if(flagTagi.style.display == "block")
   {
       flagTagi.style.display = "none";
      
   }else if(flagTagi.style.display == "none" || flagTagi.style.display == "")
   {
       flagTagi.style.display = "block";
   }

}

function returnAge(age)
{
    let splitAge=age.split("/");
    let compareDay=parseInt(splitAge[0]);
    let compareMonth=parseInt(splitAge[1]);

    let result=parseInt(ano)-parseInt(splitAge[2]);
    if(month<compareMonth)
    {
        result=result-1;
    }else if(month==compareMonth) 
    {
        if(day<compareDay)
        {
            result=result-1;
        }
    }
    return result;
}

function chargeData()
{
    let html='<p>'+tree["PADRE-P"]+'</p>';
    document.getElementById("zero-father1").innerHTML=html;
    html='<p>'+tree["MADRE-P"]+'</p>';
    document.getElementById("zero-mother1").innerHTML=html;
    html='<p>'+tree["PADRE-M"]+'</p>';
    document.getElementById("zero-father2").innerHTML=html;
    html='<p>'+tree["MADRE-M"]+'</p>';
    document.getElementById("zero-mother2").innerHTML=html;
    html='<p>'+tree["FECHA MATRIMONIO"]+'</p>';
    document.getElementById("zero-father3").innerHTML=tree["HIJO-P"];
    document.getElementById("date1").innerHTML="FECHA NACIMIENTO: "+tree["FECHA NACIMIENTO-P"];
    document.getElementById("zero-mother3").innerHTML=tree["HIJO-M"];
    document.getElementById("date2").innerHTML="FECHA NACIMIENTO: "+tree["FECHA NACIMIENTO-M"];
    html='<p> FECHA MATRIMONIO: '+tree["FECHA MATRIMONIO"]+'</p>';
    document.getElementById("date3").innerHTML=html;
    //principalline=principalline+1;
    pushData(flag,0,0,0);
} 

function pushData(principalline,firstLine,secondLine,thirdLine,fourline)
{
    document.getElementById("inject1").innerHTML = "";
    let lineTree;
    let headLine=principalline+2;
    let number1=0;
    let number2=0;
    let number3=0;
    let number4=0;
    let order="";
    //alert(principalline);
    
    switch(principalline)
    {
        case 0:
            lineTree=tree;
            order="one";
            flag=1;
        break;
        case 1:
            lineTree=tree.HIJOS[firstLine];
            order="two";
            flag=2;
            number1=firstLine;
        break;
        case 2:
            lineTree=tree.HIJOS[firstLine].HIJOS[secondLine];
            order="tree";
            flag=3;
            number1=firstLine;
            number2=secondLine;
        break;
        case 3:
            lineTree=tree.HIJOS[firstLine].HIJOS[secondLine].HIJOS[thirdLine];
            order="four";
            flag=4;
            number1=firstLine;
            number2=secondLine;
            //number3=thirdLine;
        break;  
        case 4:
           
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
    }
    //alert(principalline+"-"+flag+lineTree);
    let html = '<div class="f-frame-child" id="f-frame-child">';
          html +="<h3>LINEA FAMILIAR "+numberHead[headLine]+"</h3>";
            let tagi="marriage";
            lineTree.HIJOS.forEach(element => 
            {
                let age=element["FECHA NACIMIENTO-H"];
                let result=returnAge(age);
                
                if(element.HIJO && element.HIJO!="NO REGISTRADO")
                {
                    let send=tagi+numberChild;
                    html +='<div id="nameClick">';
                        html +='<h4 id="nameSon">'+"HIJO: "+element.HIJO+" - "+" EDAD: "+result+'</h4>';
                        if(element.CONYUGUE!="NO REGISTRADO" && element.CONYUGUE!=null)
                        {
                            try
                            {
                                
                                tagi="information";
                                send=tagi+numberChild;
                                
                                html +='<div id="barInformation'+numberChild+'" class="miniBar1" onclick="showInformation('+send+')"><h4 class="informationHeader1">MOSTRAR INFORMACION GENERAL</h4></div>';
                                html +='<div id="'+send+'" class="information">';
                                    age=element["FECHA NACIMIENTO-C"];
                                    result=returnAge(age);
                                    if(isNaN(result))
                                    {
                                        result=0;
                                    }
                                    
                                    html +='<p> FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-H"]+" - "+"ESTADO: "+element["ESTADO-H"]+'</p>';
                                    html +='<h4>'+"CONYUGUE: "+element.CONYUGUE+" - "+" EDAD: "+result+'</h4>';
                                    html +='<p>FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-C"]+" - "+"ESTADO: "+element["ESTADO-C"]+'</p>';
                                    html +='<h4>'+"FECHA MATRIMONIO: "+element["FECHA MATRIMONIO"]+'</h4>';
                                html+='</div>';
                                html +='<div id="consultSons'+numberChild+'" class="miniBar2" onclick="pushData('+flag+","+number1+","+number2+","+number3+","+number4+');'+'showInformation('+send+')"><h4 class="informationHeader2" >MOSTRAR HIJOS</h4></div>';
                                
                            }catch(err){}
                            
                        }else if(element.CONYUGUE1!=null)
                        {
                            
                            tagi="information";
                            send=tagi+numberChild;

                            html +='<div id="barInformation'+numberChild+'" class="miniBar1" onclick="showInformation('+send+')"><h4 class="informationHeader1">MOSTRAR INFORMACION GENERAL</h4></div>';
                              html +='<div id="'+send+'" class="information">';
                                age=element["FECHA NACIMIENTO-C1"];
                                result=returnAge(age);
                                if(isNaN(result))
                                {
                                    result=0;
                                }
                                
                                html +='<p> FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-H"]+" - "+"ESTADO: "+element["ESTADO-H"]+'</p>';
                                html +='<h4>'+"CONYUGUE: "+element.CONYUGUE1+" - "+" EDAD: "+result+'</h4>';
                                html +='<p>FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-C1"]+" - "+"ESTADO: "+element["ESTADO-C1"]+'</p>';
                                html +='<h4>'+"FECHA MATRIMONIO: "+element["FECHA MATRIMONIO1"]+'</h4>';
                            
                                if(element.CONYUGUE2!=null)
                                {
                                    age=element["FECHA NACIMIENTO-C2"];
                                    result=returnAge(age);
                                    if(isNaN(result))
                                    {
                                        result=0;
                                    }
                                    html +='<h4>'+"CONYUGUE: "+element.CONYUGUE2+" - "+" EDAD: "+result+'</h4>';
                                    html +='<p>FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-C2"]+" - "+"ESTADO: "+element["ESTADO-C2"]+'</p>';
                                    html +='<h4>'+"FECHA MATRIMONIO: "+element["FECHA MATRIMONIO2"]+'</h4>';
                                }
                                html +='</div>'; 
                                html +='<div id="consultSons'+numberChild+'" class="miniBar2"  onclick="pushData('+flag+","+number1+","+number2+","+number3+","+number4+');'+'showInformation('+send+')"><h4 class="informationHeader2">MOSTRAR HIJOS</h4></div>';
                              
                            
                        }else
                        {
                            
                            try
                            {
                                tagi="information";
                                send=tagi+numberChild;
                                html +='<div id="barInformation'+numberChild+'" class="miniBar1" onclick="showInformation('+send+')"><h4 class="informationHeader1">MOSTRAR INFORMACION GENERAL</h4></div>';
                                    html +='<div id="'+send+'" class="information">';
                                    html +='<p> FECHA NACIMIENTO: '+element["FECHA NACIMIENTO-H"]+" - "+"ESTADO: "+element["ESTADO-H"]+'</p>';
                                    html +='<h4>SIN MATRIMONIOS REGISTRADOS</h4>';
                                html+='</div>';
                            }catch(err){}
                            
                        }
                    html +='</div>';
                    numberChild=numberChild+1;
                    if(order=="one")
                    {
                        number1=number1+1;
                        number2=secondLine;
                        number3=thirdLine;
                        number4=fourline;
                    }else if(order=="two")
                    {
                        number1=firstLine;
                        number2=number2+1;
                        number3=thirdLine;
                        number4=fourline;
                    }else if(order=="tree")
                    {
                        number1=firstLine;
                        number2=secondLine;
                        number3=number3+1;
                        number4=fourline;
                    }else if(order=="four")
                    {
                        number1=firstLine;
                        number2=secondLine;
                        number3=thirdLine;
                        number4=number4+1;
                    }
                }else
                {
                    html +='<h4>SIN HIJOS REGISTRADOS</h4>';
                }
           });
        html +='</div>';

    switch(principalline)
    {
        
        case 0:
            index=0;
            originalDom1=html;
            document.getElementById("inject0").innerHTML = originalDom1;
            
        break;
        case 1:
            index=1;
            originalDom2=html;
            document.getElementById("inject0").innerHTML =originalDom1+ originalDom2;
           
        break;
        case 2:
            index=2;
            originalDom3=html;
            document.getElementById("inject0").innerHTML =originalDom1+originalDom2+ originalDom3;
          
        break;
        case 3:
            index=3;
            originalDom4=html;
            document.getElementById("inject0").innerHTML =originalDom2+originalDom3+ originalDom4;
        break;  
        case 4:
            
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
    }

}

let tree=
{ 
    "PADRE-P":"ABELARDO VARGAS LOBO",
    "MADRE-P":"RAFAELA HERNANDEZ",
    "PADRE-M":"ANANIAS VEGA",
    "MADRE-M":"BALBARENA UMAÑA PIEDRA",
    "HIJO-P":"JUAN DE DIOS VARGAS FERNANDEZ",
    "FECHA NACIMIENTO-P":"10/05/1910",
    "HIJO-M":"MARIA ROSA VEGA UMAÑA",
    "FECHA NACIMIENTO-M":"16/11/1912",
    "FECHA MATRIMONIO":"03/10/1931",
    "HIJOS":
    [
        {
            "HIJO":"OSCAR VICENTE VARGAS VEGA",
            "ESTADO-H":"FALLECIDO",
            "FECHA NACIMIENTO-H":"27/10/1941",
            "CONYUGUE":"MARIA CECILIA RIVERA GONZALEZ",
            "ESTADO-C":"NO FALLECIDO",
            "FECHA NACIMIENTO-C":"14/12/1945",
            "FECHA MATRIMONIO":"04/10/1973",
            "HIJOS":
            [
                {
                    "HIJO":"KATTIA MARIA VARGAS RIVERA",
                    "FECHA NACIMIENTO-H":"24/10/1974",
                    "ESTADO-H":"NO FALLECIDO"
                },
                {
                    "HIJO":"ALONSO ANDRES VARGAS RIVERA",
                    "FECHA NACIMIENTO-H":"19/12/1987",
                    "ESTADO-H":"NO FALLECIDO"
                }
            ]
        },
        {
            "HIJO":"CARLOS FRANCISCO VARGAS VEGA",
            "ESTADO-H":"FALLECIDO",
            "FECHA NACIMIENTO-H":"04/11/1935",
            "CONYUGUE":"LEONOR BRIZUELA SOLIS",
            "ESTADO-C":"NO FALLECIDO",
            "FECHA NACIMIENTO-C":"05/01/1939",
            "FECHA MATRIMONIO":"20/08/1960",
            "HIJOS":
            [
                {
                    "HIJO":"MARIA ESTHER DE LOS ANGELES VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"01/06/1961",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"EDGAR DE LA SANTISIMA TRINIDAD CHAVES SANCHEZ",
                    "FECHA NACIMIENTO-C":"19/10/1953",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"01/12/1984",
                    "HIJOS":
                    [
                        {
                            "HIJO":"SANDRA MARIA CHAVES VARGAS",
                            "FECHA NACIMIENTO-H":"26/09/1987",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"DIEGO MAURICIO MORA BARQUERO",
							"FECHA NACIMIENTO-C":"10/01/1987",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"30/12/2006",
							"HIJOS":
                            [
							 {
							    "HIJO":"SANTIAGO MORA CHAVES",
								"FECHA NACIMIENTO-H":"21/11/2004",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
							    "HIJO":"SAMUEL MORA CHAVES",
								"FECHA NACIMIENTO-H":"23/07/2007",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"MARIA DEL CARMEN CHAVES VARGAS",
                            "FECHA NACIMIENTO-H":"06/08/1995",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"EDUARDO MARTIN SOTO ROJAS",
							"FECHA NACIMIENTO-C":"08/10/1996",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"SEBASTIAN LUCIANO SOTO CHAVES",
								"FECHA NACIMIENTO-H":"16/11/2017",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"CARLOS HUMBERTO VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"31/05/1962",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"SONIA LORENA AGUILAR BLANCO",
                    "FECHA NACIMIENTO-C":"05/03/1961",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"25/11/1989",
                    "HIJOS":
                    [
                        {
                            "HIJO":"BEATRIZ DE LOS ANGELES VARGAS AGUILAR",
                            "FECHA NACIMIENTO-H":"28/09/1990",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"VALERIA MARIA VARGAS AGUILAR",
                            "FECHA NACIMIENTO-H":"08/02/1997",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }

                    ]
                },
                {
                    "HIJO":"MIGUEL ANGEL VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"29/08/1967",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MARTA EULALIA DE LA TRINIDAD AGUILAR BLANCO",
                    "FECHA NACIMIENTO-C":"02/01/1970",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"HECTOR MIGUEL VARGAS AGUILAR",
                            "FECHA NACIMIENTO-H":"29/02/1992",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"MARIA MILAGRO BLANCO SOTO",
							"FECHA NACIMIENTO-C":"27/06/1990",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"19/09/2020",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"LIGIA MARIA MARTINA VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"21/07/1965",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MAURICIO CECILIO GUEVARA CARVAJAL",
                    "FECHA NACIMIENTO-C":"01/04/1967",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"11/03/2000",
                    "HIJOS":
                    [
                        {
                            "HIJO":"JOSE MAURICIO GUEVARA VARGAS",
                            "FECHA NACIMIENTO-H":"19/02/2002",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"MELANIE MARIA GUEVARA VARGAS",
                            "FECHA NACIMIENTO-H":"29/09/2003",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"MARICRUZ GUEVARA VARGAS",
                            "FECHA NACIMIENTO-H":"04/09/2005",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"DORA ALICIA VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"17/04/1969",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"GERARDO DOMINGO JESUS MONESTEL NARANJO",
                    "FECHA NACIMIENTO-C":"10/07/1960",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"13/12/1996",
                    "HIJOS":
                    [
                        {
                            "HIJO":"MARIA GABRIELA MONESTEL VARGAS",
                            "FECHA NACIMIENTO-H":"05/05/1991",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"ISRAEL DE JESUS VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"04/04/1972",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"VIVIANA MARIA CASTRO MENA",
                    "FECHA NACIMIENTO-C":"21/09/1981",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"30/08/1997",
                    "HIJOS":
                    [
                        {
                            "HIJO":"JEISON DANIEL VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"13/01/1998",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"ESTEBAN ANDRES VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"27/09/2001",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"DAMIAN ALI VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"23/07/2008",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"ADRIANA VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"14/03/2011",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"ANDREY ROBERTO VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"24/11/2012",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"MOISES VARGAS CASTRO",
                            "FECHA NACIMIENTO-H":"13/12/2014",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"MARIA DE LOS ANGELES VARGAS BRIZUELA",
                    "FECHA NACIMIENTO-H":"10/08/1966",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"JORGE ARTURO DE LA TRINIDAD RODRIGUEZ VARGAS",
                    "FECHA NACIMIENTO-C":"25/02/1961",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"29/12/1984",
                    "HIJOS":
                    [
                        {
                            "HIJO":"JORGE ALBERTO RODRIGUEZ VARGAS",
                            "FECHA NACIMIENTO-H":"28/04/1987",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"JUAN GABRIEL RODRIGUEZ VARGAS",
                            "FECHA NACIMIENTO-H":"23/01/1998",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"JENNY MARIA RODRIGUEZ VARGAS",
                            "FECHA NACIMIENTO-H":"24/01/1986",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"JOSE DANIEL RODRIGUEZ VARGAS",
                            "FECHA NACIMIENTO-H":"15/04/1989",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                }
            ]			
        },
        {
            "HIJO":"RIGOBERTO VARGAS VEGA",
            "FECHA NACIMIENTO-H":"27/01/1940",
            "ESTADO-H":"NO FALLECIDO",
            "CONYUGUE":"FLORY DEIDAMIA MENDEZ GUTIERREZ",
            "FECHA NACIMIENTO-C":"23/07/1944",
            "ESTADO-C":"FALLECIDO",
            "FECHA MATRIMONIO":"30/11/1963",
            "HIJOS":
            [
                {
                    "HIJO":"ALEJANDRO VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"20/09/1967",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NILCIDE DEL CARMEN SALAS SANCHEZ",
                    "FECHA NACIMIENTO-C":"06/02/1967",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"03/11/1990",
                    "HIJOS":
                    [
                        {
                            "HIJO":"ESTEBAN VARGAS SALAS",
                            "FECHA NACIMIENTO-H":"07/07/1991",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"SILVIA ELENA VARGAS GONZALEZ",
							"FECHA NACIMIENTO-C":"14/02/1988",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"SANTIAGO VARGAS VARGAS",
								"FECHA NACIMIENTO-H":"29/10/2010",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"ELIAS VARGAS VARGAS",
								"FECHA NACIMIENTO-H":"27/02/2017",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"RUTH MARIA VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"17/06/1965",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"VICTOR JULIO DE JESUS PEREZ CERVANTES",
                    "FECHA NACIMIENTO-C":"17/11/1962",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"27/03/1982",
                    "HIJOS":
                    [
                        {
                            "HIJO":"FRANCINI TAMARA PEREZ VARGAS",
                            "FECHA NACIMIENTO-H":"27/01/1991",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"YEISON ORLANDO CASTRO SILES",
							"FECHA NACIMIENTO-C":"16/03/1990",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"12/01/2013",
							"HIJOS":
							[
							 {
								"HIJO":"SEBASTIAN ALONSO CASTRO PEREZ",
								"FECHA NACIMIENTO-H":"14/04/2013",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"EMILIANO ANDRES CASTRO PEREZ",
								"FECHA NACIMIENTO-H":"23/03/2017",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"JOSHUA AARON CASTRO PEREZ",
								"FECHA NACIMIENTO-H":"11/09/2019",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"JOHNNY DE JESUS VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"17/06/1965",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE1":"ROSIBEL DE LOS ANGELES ROJAS JIMENEZ",
                    "FECHA NACIMIENTO-C1":"08/07/1970",
                    "ESTADO-C1":"NO FALLECIDO",
                    "FECHA MATRIMONIO1":"11/03/1989",
                    "CONYUGUE2":"FLOR JUDITH SOLANO BARBOZA",
                    "FECHA NACIMIENTO-C2":"27/05/1965",
                    "ESTADO-C2":"NO FALLECIDO",
                    "FECHA MATRIMONIO2":"28/05/1998",
                    "HIJOS":
                    [
                        {
                            "HIJO":"YEHUDI ABIGAIL VARGAS SOLANO",
                            "FECHA NACIMIENTO-H":"23/03/2000",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"LIZETH JAZMIN VARGAS ROJAS",
                            "FECHA NACIMIENTO-H":"13/03/1990",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"MICHAEL ARMANDO OBANDO FERNANDEZ",
							"FECHA NACIMIENTO-C":"03/05/1983",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"ALAHIA JAZMIN OBANDO VARGAS",
								"FECHA NACIMIENTO-H":"11/09/2016",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"MARJORIE PATRICIA VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"08/03/1970",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"RANDALL MARTIN DEL CARMEN BRENES QUESADA",
                    "FECHA NACIMIENTO-C":"31/10/1969",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"21/01/1989",
                    "HIJOS":
                    [
                        {
                            "HIJO":"MARIA JOSE BRENES VARGAS",
                            "FECHA NACIMIENTO-H":"30/07/1998",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                }
            ]
        },
        {
            "HIJO":"JUAN JOSE VARGAS VEGA",
            "FECHA NACIMIENTO-H":"07/02/1938",
            "ESTADO-H":"NO FALLECIDO",
            "CONYUGUE":"ELIETH MENDEZ VARGAS",
            "FECHA NACIMIENTO-C":"11/07/1946",
            "ESTADO-C":"NO FALLECIDO",
            "FECHA MATRIMONIO":"30/12/1967",
            "HIJOS":
            [
                {
                    "HIJO":"XINIA MARIA VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"02/10/1970",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"JAVIER ARNULFO MORERA ARAUZ",
                    "FECHA NACIMIENTO-C":"18/07/1968",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"20/03/1992",
                    "HIJOS":
                    [
                        {
                            "HIJO":"JOSUE JAVIER MORERA VARGAS",
                            "FECHA NACIMIENTO-H":"23/06/1993",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"ISAAC DAVID MORERA VARGAS",
                            "FECHA NACIMIENTO-H":"06/10/1995",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"MANUEL ANTONIO VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"22/01/1972",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"JUANA FRANCISCA-JOHANNA GONZALEZ LOPEZ",
                    "FECHA NACIMIENTO-C":"",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"SOFIA VARGAS GONZALEZ",
                            "FECHA NACIMIENTO-H":"29/05/1999",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"ANDREY ANTONIO VARGAS GONZALEZ",
                            "FECHA NACIMIENTO-H":"06/12/2003",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"EDWIN GERARDO DEL SOCORRO VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"24/07/1969",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"LIZBETH CECILIA CARVAJAL FERNANDEZ",
                    "FECHA NACIMIENTO-C":"04/12/1965",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"23/07/1988",
                    "HIJOS":
                    [
                        {
                            "HIJO":"LIZBETH CECILIA VARGAS CARVAJAL",
                            "FECHA NACIMIENTO-H":"12/01/1990",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE1":"JOSE LUIS CAMACHO JIMENEZ",
							"FECHA NACIMIENTO-C1":"30/10/1986",
							"ESTADO-C1":"NO FALLECIDO",
							"FECHA MATRIMONIO1":"26/07/2008",
							"CONYUGUE2":"WILLIAM EDUARDO BARRANTES LOPEZ",
							"FECHA NACIMIENTO-C2":"18/07/1979",
							"ESTADO-C2":"NO FALLECIDO",
							"FECHA MATRIMONIO2":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"SOLANCHS FIORELLA CAMACHO VARGAS",
								"FECHA NACIMIENTO-H":"29/09/2010",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"MARIELA ALANA BARRANTES VARGAS",
								"FECHA NACIMIENTO-H":"30/10/2015",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"RUITHER GERARDO MENDEZ CARVAJAL",
                            "FECHA NACIMIENTO-H":"28/11/1991",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"ADRIANA MICHELLE ACUÑA HERNANDEZ",
							"FECHA NACIMIENTO-C":"04/12/1994",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"28/05/2011",
							"HIJOS":
							[
							 {
								"HIJO":"ITHAN FABRICIO MENDEZ ACUÑA",
								"FECHA NACIMIENTO-H":"20/12/2011",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"EMILY SOFIA MENDEZ ACUÑA",
								"FECHA NACIMIENTO-H":"05/06/2015",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"PAULINA GABRIELA VARGAS CARVAJAL",
                            "FECHA NACIMIENTO-H":"18/03/1999",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"JENNIFER VANESA VARGAS CARVAJAL",
                            "FECHA NACIMIENTO-H":"30/04/1995",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"JOEL ESTEBAN SEQUEIRA LOPEZ",
							"FECHA NACIMIENTO-C":"20/02/1995",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"16/09/2016",
							"HIJOS":
							[
							 {
								"HIJO":"AMADEO GAEL SEQUEIRA VARGAS",
								"FECHA NACIMIENTO-H":"03/10/2018",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"JORGE ARTURO VARGAS MENDEZ",
                    "FECHA NACIMIENTO-H":"12/05/1968",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NO REGISTRADO",
                    "FECHA NACIMIENTO-C":"NO REGISTRADO",
                    "ESTADO-C":"NO REGISTRADO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"NO REGISTRADO",
                            "FECHA NACIMIENTO-H":"NO REGISTRADO",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                }
            ]
        },
        {
            "HIJO":"MARIA GLADIS VARGAS VEGA",
            "FECHA NACIMIENTO-H":"20/12/1936",
            "ESTADO-H":"NO FALLECIDO",
            "CONYUGUE":"ROSENDO CHAVES GRANADOS",
            "FECHA NACIMIENTO-C":"02/07/1934",
            "ESTADO-C":"FALLECIDO",
            "FECHA MATRIMONIO":"09/02/1957",
            "HIJOS":
            [
                {
                    "HIJO":"ADRIANO DEL SOCORRO CHAVES VARGAS",
                    "FECHA NACIMIENTO-H":"10/05/1962",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MARIA ISABEL DEL SOCORRO ALVAREZ VARGAS",
                    "FECHA NACIMIENTO-C":"08/09/1963",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"21/02/1981",
                    "HIJOS":
                    [
                        {
                            "HIJO":"JOSELINE GABRIELA CHAVES ALVAREZ",
                            "FECHA NACIMIENTO-H":"13/09/2001",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"WAGNER ADRIAN CHAVES ALVAREZ",
                            "FECHA NACIMIENTO-H":"13/12/1984",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"KARLA VANESSA MUÑOZ RODRIGUEZ",
							"FECHA NACIMIENTO-C":"29/09/1986",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"09/12/2006",
							"HIJOS":
							[
							 {
								"HIJO":"CRISTHIAN ADRIAN CHAVES MUÑOZ",
								"FECHA NACIMIENTO-H":"02/04/2005",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"TIFFANY ELENA CHAVES MUÑOZ",
								"FECHA NACIMIENTO-H":"17/05/2009",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"DOMINIC JOSE CHAVES MUÑOZ",
								"FECHA NACIMIENTO-H":"09/05/2012",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"AMANDA LUCIA CHAVES MUÑOZ",
								"FECHA NACIMIENTO-H":"26/11/2016",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"JESSICA CRISTINA CHAVES ALVAREZ",
                            "FECHA NACIMIENTO-H":"11/01/1982",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"JOSE ELIECER SALGUERA GONZALEZ",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"23/09/2006",
							"HIJOS":
							[
							 {
								"HIJO":"JOSE ANTHONY SALGUERA CHAVES",
								"FECHA NACIMIENTO-H":"25/11/2006",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"ANGELYN SOFIA SALGUERA CHAVES",
								"FECHA NACIMIENTO-H":"21/11/2010",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"JOSEPH ELIEZER SALGUERA CHAVES",
								"FECHA NACIMIENTO-H":"19/04/2013",
								"ESTADO-H":"NO FALLECIDO"
							 },
							 {
								"HIJO":"EYDAN JOSE SALGUERA CHAVES",
								"FECHA NACIMIENTO-H":"23/11/2018",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"URBANO ROSENDO DEL CARMEN CHAVES VARGAS",
                    "FECHA NACIMIENTO-H":"17/11/1966",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NO REGISTRADO",
                    "FECHA NACIMIENTO-C":"NO REGISTRADO",
                    "ESTADO-C":"NO REGISTRADO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"NO REGISTRADO",
                            "FECHA NACIMIENTO-H":"NO REGISTRADO",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"OLGA MARTA CHAVES VARGAS",
                    "FECHA NACIMIENTO-H":"20/01/1958",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MARTIN GERARDO DE LA TRINIDAD ALVAREZ VARGAS",
                    "FECHA NACIMIENTO-C":"27/10/1960",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"20/12/1986",
                    "HIJOS":
                    [
                        {
                            "HIJO":"MARTIN DANIEL ALVAREZ CHAVES",
                            "FECHA NACIMIENTO-H":"17/10/1987",
							"ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"BERNAL DEL SOCORRO CHAVES VARGAS",
                    "FECHA NACIMIENTO-H":"23/03/1960",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MARIA MARITZA DEL SOCORRO QUIROS SOTO",
                    "FECHA NACIMIENTO-C":"11/07/1961",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"12/11/1983",
                    "HIJOS":
                    [
                        {
                            "HIJO":"CAROLINA DE LOS ANGELES CHAVES QUIROS",
                            "FECHA NACIMIENTO-H":"26/09/1988",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        },
                        {
                            "HIJO":"BERNAL ALONSO CHAVES QUIROS",
                            "FECHA NACIMIENTO-H":"14/07/1983",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"BLANCA ROSA DEL SOCORRO CHAVES VARGAS",
                    "FECHA NACIMIENTO-H":"16/08/1963",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"MANUEL ANTONIO ESQUIVEL PEREIRA",
                    "FECHA NACIMIENTO-C":"03/03/1955",
                    "ESTADO-C":"NO FALLECIDO",
                    "FECHA MATRIMONIO":"27/07/1991",
                    "HIJOS":
                    [
                        {
                            "HIJO":"ELVIS ANTONIO ESQUIVEL CHAVES",
                            "FECHA NACIMIENTO-H":"17/07/1992",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"ANA YANCY HERRERA SANABRIA",
							"FECHA NACIMIENTO-C":"04/05/1993",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"EIKER FAUBRICIO ESQUIVEL HERRERA",
								"FECHA NACIMIENTO-H":"04/11/2012",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        },
                        {
                            "HIJO":"FRANCINI VALERIA ESQUIVEL CHAVES",
                            "FECHA NACIMIENTO-H":"17/02/1994",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"EDDY STEVEN ARIAS ARIAS",
							"FECHA NACIMIENTO-C":"23/06/1995",
							"ESTADO-C":"NO FALLECIDO",
							"FECHA MATRIMONIO":"12/05/2018",
							"HIJOS":
							[
							 {
								"HIJO":"YEIDER JARETH ARIAS ESQUIVEL",
								"FECHA NACIMIENTO-H":"17/08/2019",
								"ESTADO-H":"NO FALLECIDO"
							 }
							]
                        }
                    ]
                }
            ]
        },
        {
            
            "HIJO":"MARIA VIRGINIA FRANCISCA VARGAS VEGA",
            "FECHA NACIMIENTO-H":"09/03/1948",
            "ESTADO-H":"NO FALLECIDO",
            "CONYUGUE":"CARLOS EDUARDO BARQUERO RICHMOND",
            "FECHA NACIMIENTO-C":"22/03/1949",
            "ESTADO-C":"NO FALLECIDO",
            "FECHA MATRIMONIO":"22/05/1980",
            "HIJOS":
            [
                {
                    "HIJO":"JOSE RAFAEL BARQUERO VARGAS",
                    "FECHA NACIMIENTO-H":"17/02/1987",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NO REGISTRADO",
                    "FECHA NACIMIENTO-C":"NO REGISTRADO",
                    "ESTADO-C":"NO REGISTRADO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"NO REGISTRADO",
                            "FECHA NACIMIENTO-H":"NO REGISTRADO",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"CARLOS IGNACIO BARQUERO VARGAS",
                    "FECHA NACIMIENTO-H":"07/08/1984",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NO REGISTRADO",
                    "FECHA NACIMIENTO-C":"NO REGISTRADO",
                    "ESTADO-C":"NO REGISTRADO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"NO REGISTRADO",
                            "FECHA NACIMIENTO-H":"NO REGISTRADO",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                },
                {
                    "HIJO":"PAULA VANESSA BARQUERO VARGAS",
                    "FECHA NACIMIENTO-H":"27/12/1982",
                    "ESTADO-H":"NO FALLECIDO",
                    "CONYUGUE":"NO REGISTRADO",
                    "FECHA NACIMIENTO-C":"NO REGISTRADO",
                    "ESTADO-C":"NO REGISTRADO",
                    "FECHA MATRIMONIO":"NO REGISTRADO",
                    "HIJOS":
                    [
                        {
                            "HIJO":"NO REGISTRADO",
                            "FECHA NACIMIENTO-H":"NO REGISTRADO",
                            "ESTADO-H":"NO FALLECIDO",
							"CONYUGUE":"NO REGISTRADO",
							"FECHA NACIMIENTO-C":"NO REGISTRADO",
							"ESTADO-C":"NO REGISTRADO",
							"FECHA MATRIMONIO":"NO REGISTRADO",
							"HIJOS":
							[
							 {
								"HIJO":"NO REGISTRADO",
								"FECHA NACIMIENTO-H":"NO REGISTRADO",
								"ESTADO-H":"NO REGISTRADO"
							 }
							]
                        }
                    ]
                }
            ]
        },
        {
            "HIJO":"EUGENIA MARIA VARGAS VEGA",
            "FECHA NACIMIENTO-H":"15/02/1955",
            "ESTADO-H":"NO FALLECIDO"
        },
        {
            "HIJO":"ROSA MARIA DEL PILAR VARGAS VEGA",
            "FECHA NACIMIENTO-H":"12/10/1944",
            "ESTADO-H":"NO FALLECIDO"
        },
        {
            "HIJO":"DINORAH MARIA VARGAS VEGA",
            "FECHA NACIMIENTO-H":"22/08/1949",
            "ESTADO-H":"NO FALLECIDO"
        },
        {
            "HIJO":"LUZ MARINA VARGAS VEGA",
            "FECHA NACIMIENTO-H":"26/08/1943",
            "ESTADO-H":"NO FALLECIDO"
        },
        {
            "HIJO":"URIEL VARGAS VEGA",
            "FECHA NACIMIENTO-H":"02/07/1932",
            "ESTADO-H":"NO FALLECIDO"
        }
    ]
};