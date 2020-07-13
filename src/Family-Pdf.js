import React, { Component } from 'react';

export class FamilyPdf extends Component {
  render() {

    console.log(this.props);

    return (
        <div id="family-pdf">
         <div id="user-information"> 
<p id="user-name">.............</p>
<p id ="user-Id">..............................</p>
<p id ="user-adress">.....................................</p>
</div>



								<div id="sem-adres">Einschreiben
								Staatssekretariat für Migration
								Quellenweg 6
								3003 Bern-Wabern</div>


<div id="user-place">...........</div>,den <div id="user-date">...............</div>


<p>Gesuch um Familienasyl im Sinne des Art. 51 AsylG für die Ehefrau <span id="user-wifeName">..............</span>, geboren am <span id="user-wifeBirthday">..........</span>, für den Sohn, <span id="user-firstChildName">..............</span>, geboren am <span id="user-firstChildBirthday">.............</span>, für die Tochter, <span id="user-secondChildName">................</span>, geboren am <span id="user-secondChildBirthday">.............</span>, 
für die Tochter, <span id="user-thirdChildName">..........</span>, geboren am <span id="user-thirdChildBirthday">..............</span>, und für den Sohn <span id="user-forthChildName">..............</span>, geboren am <span id="user-forthChildBirthday">...............</span>, alle türkische Staatsangehörige
<span id="user-name">................</span>, geboren am <span id="user-birthday">..............</span>, anerkannter Flüchtling, türkischer Staatsangehöriger</p>

<p>Sehr geehrte Damen und Herren</p>

<p>Am <span id="user-comeDate">.............</span> habe ich in der Schweiz einen Asylantrag gestellt. Schliesslich wurde ich am <span id="user-asylDate">...............</span> als Flüchtling anerkannt. Danach wurde ich dem Kanton <span id="user-canton">..........</span> zugeteilt, wo ich zurzeit wohnhaft bin.
Jedoch ist meine Familie noch in der <span id="user-country">.........</span> und sie ist in grosser Gefahr. Denn es wird nicht lange dauern bis die <span id="user-country">...........</span> Regierung meinen Aufenthalt in der Schweiz ausfindig macht. In diesem Fall würde man wahrscheinlich meiner Familie eine Ausreisesperre anordnen. Ähnliche Fälle sind sicherlich auch Ihnen bekannt.</p> 


<p><span id="user-country">.............</span> Adresse: </p>
<p><span id="user-countryAdress">...................................................</span></p>

<p>Ich ersuche Sie deshalb, die Einreise meiner Familienangehörigen in die Schweiz im Sinne des Art. 51 Asyl zu genehmigen. Folgende Unterlagen lege ich diesem Brief bei :</p> 
<p><ul>
    <li>Auszug aus dem Personenstandsregister</li>
    <li>Aufenthaltsbescheinigung</li>
    <li>Kopie des Familienbuches</li>
    <li>Kopien der Identitätskarten</li>
    <li>Kopien der Reisepässe</li>
    </ul></p>   
    </div>
      
    );
  }
}