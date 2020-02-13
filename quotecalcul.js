// selection du type de batiments pour le dropdown menu (id:dropMenu) pour ensuite retourne l'index selectionné

  function menuChoice(){
    console.log("sa marche")

        var type = document.getElementById("ddSelect").value
        console.log(type)
          if (type=="residentialVal") 
          {
            console.log("RESIDENTIAL")
            document.getElementById("residentialQ").style.display="block"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none" 
          }
          if (type=="commercialVal")
          {
            console.log("COMMERCIAL")
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="block"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none"
          }
          if (type=="corporateVal") 
          {
            console.log("CORPORATE")
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="block"
            document.getElementById("hybridQ").style.display="none" 
          }
          if (type=="hybridVal") 
          {
            console.log("HYBRID")
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="block"
          }
          if (type=="select")
          {
            document.getElementById("residentialQ").style.display="none"
            document.getElementById("commercialQ").style.display="none"
            document.getElementById("corporateQ").style.display="none"
            document.getElementById("hybridQ").style.display="none"
          }

    }

// calcul
// champs finale
var totalElevator =document.getElementById("requiredElevatorID").value;
var unitPrice =document.getElementById("unitPriceID").value;
var totalPrice =document.getElementById("totalPriceID").value;







//commercial: nb de cages spécifiés == nb requis
function commElevators() {
  commercial_depElevator = document.getElementById("commercial_depElevator").value
  document.getElementById("requiredElevatorID").value = commercial_depElevator
  
}


/*residential: nb de logements/nb etages= moy logements par etages
moy logements par etage/6= nb de cages requises
(si +20 etages = +1colonnes(à toutes les tranches de 20 étages)calcul pour colonnes?)
*/

function calculRes() {
  //residential
  var appartmentsRes =document.getElementById("residential_nb_appartments").value;
  var floorsRes =document.getElementById("residential_nb_floors").value;
  console.log("appartmentsRes",appartmentsRes)
  var avgAppRes = appartmentsRes / floorsRes
  document.getElementById("requiredElevatorID").value = avgAppRes
  var requiredCages = avgAppRes/6
  document.getElementById("requiredElevatorID").value = requiredCages
  
    var stdPrice =document.getElementById("standardPrice").value;
    var premPrice =document.getElementById("premiumPrice").value;
    var excelPrice =document.getElementById("exceliumPrice").value;
    var elvQuality =document.getElementById("elevatorQuality").value;
    if(elvQuality[0].checked)//faire une vrariable pour chaque gamme et prendre cette varialble pour le total et lintegrer dans mon calcul
    {
      var totalCostRes = (requiredCages * stdPrice) * 0.10
      document.getElementById("totalPriceID").value = totalCostRes
    }
    if(elvQuality[1].checked)
      {
      var totalCostRes = (requiredCages * premPrice) * 0.13
      document.getElementById("totalPriceID").value = totalCostRes
      }
      if(elvQuality[2].checked)
      {
      var totalCostRes = (requiredCages * excelPrice) * 0.16
      document.getElementById("totalPriceID").value = totalCostRes
      }
    
    }

/*corporate: nb occupants max par etages * nb d'étages(avec sous-sol)= nb occupants total
nb occupants total/1000= nb ascenseur requis
nb étages(avec sous-sol)/20=nb colonnes requises
nb cages d'ascenseur/nb de colonnes= nb total d'ascenseur
*/

function calculCorp() {
  //corporate
  var occupantsCorporate =document.getElementById("corporate_maxOccupants").value;
  var floorsCorp =document.getElementById("corporate_nb_floors").value;
  var basementsCorp =document.getElementById("corporate_nb_basements").value;

  var totOccCorpo = occupantsCorporate * (floorsCorp + basementsCorp)
  var ascenseurRequisCorp = totOccCorpo / 1000
  var requiredColumnCorp = (floorsCorp + basementsCorp)/20
  document.getElementById("requiredElevatorID").value = ascenseurRequisCorp / requiredColumnCorp

  //var totalCostCorp = ascenseurRequisCorp
  
  
}
/*hybrid: nb occupants max par etages * nb d'étages(avec sous-sol)= nb occupants total
nb occupants total/1000= nb ascenseur requis
nb étages(avec sous-sol)/20=nb colonnes requises
nb cages d'ascenseur/nb de colonnes= nb total d'ascenseur
*/

function calculHybrid() {
  //hybrid
  var occupantsHybrid =document.getElementById("hybrid_maxOccupants").value;
  var floorsHybrid =document.getElementById("hybrid_nb_floors").value;
  var basementsHybrid =document.getElementById("hybrid_nb_basements").value;

  var totOccHybrid = occupantsHybrid * (floorsHybrid + basementsHybrid)
  var ascenseurRequisHybrid = totOccHybrid / 1000
  var requiredColumnHybrid = (floorsHybrid + basementsHybrid) / 20
  document.getElementById("requiredElevatorsID").value = ascenseurRequisHybrid / requiredColumnHybrid

  //calcul selon la gamme choisi et ensuite ajouter les frais d'installation

}
