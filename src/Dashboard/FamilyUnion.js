import React, { Component } from 'react';
import { Jumbotron, Form, Row, Col} from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




export class Family extends Component 
{

  constructor(props) {
      super(props);
      var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.state = {
        date: date,
        username: '',
        usersurname: '',
        userid: Number,
        userbid: Number,
        userbirthday: Date,
        userstreetname: '',
        userhomenumber: Number,
        userpostcode: Number,
        userplace: '',
        usercanton: '',
        userdateofcametoswitzerland: Date,
        userdateofsubstitution: Date,
        usercountry: '',
        useradressincountry: '',
        userwifesname: '',
        userwifessurname:'',
        userwifesbirthday: Date,
        userfirstchildname: '',
        userfirstchildbirthday: Date,
        usersecondchildsname: '',
        usersecondchildbirthday: Date,

      };
  }

  
  

  sendToPrint(){
      var divContents = document.getElementById("family-pdf").innerHTML; 
      var a = window.open('', '', 'height=500, width=500'); 
      a.document.write('<html>'); 
      a.document.write('<body > <h1> <br>'); 
      a.document.write(divContents); 
      a.document.write('</body></html>'); 
      a.document.close(); 
      a.print(); 
  }

  generatePDF(){ 
    const input = document.getElementById('family-pdf');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0,);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;   
  }

  myChangeHandler(event) {
   let nam = event.target.name;
   let val = event.target.value;
   this.setState({[nam]: val})
  }

  render() {
    return (
      <Jumbotron>
        <Row>
          <Col>
        <h1>Family Union</h1>
        <p>
         The document needed for a person who has been living in Switzerland 
         and whose family is outside Europe to bring her family to Switzerland
         can be accessed from this section.
        </p>
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Please fill in the form below</Form.Label>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your name" name="username"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Surname</Form.Label>
            <Form.Control type="text" placeholder="please enter your surname" name="usersurname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your N-Id Number</Form.Label>
            <Form.Control type="number" placeholder="please enter your Id-Number" name="userid"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your B-Id Number</Form.Label>
            <Form.Control type="number" placeholder="please enter your Id-Number" name="userbid"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Birthday</Form.Label>
            <Form.Control type="date" name="userbirthday" onChange={this.myChangeHandler} />
          </Form.Group>

          <Form.Label>Your Adress in Switzerland</Form.Label>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <Form.Control type="text" placeholder="Street Name" name="userstreetname"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="number" placeholder="Home number" name="userhomenumber"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="number" placeholder="Post Code" name="userpostcode"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="text" placeholder="please enter your place" name="userplace"  onChange={this.myChangeHandler}/>
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Kanton</Form.Label>
            <Form.Control type="text" name="usercanton"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>The Date You Came To Switzerland</Form.Label>
            <Form.Control type="date" name="userdateofcametoswitzerland"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date Of Substitution</Form.Label>
            <Form.Control type="date" placeholder="please enter your wife's name" name="userdateofsubstitution"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Country</Form.Label>
            <Form.Control type="text" name="usercountry"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Adress In Your Country</Form.Label>
            <Form.Control type="text" placeholder="please enter your adress in your country" name="useradressincountry" onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Wife's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your wife's name" name="userwifesname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Wife's Surname</Form.Label>
            <Form.Control type="text" placeholder="please enter your wife's surname" name="userwifessurname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Wife's Birthday</Form.Label>
            <Form.Control type="date" name="userwifesbirthday" onChange={this.myChangeHandler} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Number Of Your Child</Form.Label>
            <Form.Control type="number" placeholder="please enter your child number" name="usernumberofchild" onChange={this.myChangeHandler} />
          </Form.Group>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your First Child's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your first child's name" name="userfirstchildname" onChange={this.myChangeHandler} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your First Child's Birthday</Form.Label>
            <Form.Control type="date" name="userfirstchildbirthday" onChange={this.myChangeHandler}/>
          </Form.Group>

        </Form>
        </Col>
        <Col>
        <div id="family-pdf">
            
                <div id="user-information">
                    <p id="user-name">{this.state.username !== ""? this.state.username:"........"}  {this.state.usersurname !== ""? this.state.usersurname:"........"}</p>
                    <p id="user-Id"> (N {this.state.userid !== ""? this.state.userid:"........"} , Pers.-Nr.{this.state.userbid !== ""? this.state.userbid:"........"} ) </p>
                       <p id="user-adress"> {this.state.userstreetname !== ""? this.state.userstreetname:"........"} {this.state.userhomenumber !== ""? this.state.userhomenumber:"........"}  , 
                                        {this.state.userpostcode !== ""? this.state.userpostcode:"........"} {this.state.userplace !== ""? this.state.userplace:"........"}
                       </p>
                </div>
                <br></br> 
                <br></br> 
                
                <div id="sem-adres">
                  <div>Einschreiben </div>
                <div>Staatssekretariat für Migration</div>
                <div>Quellenweg 6 </div>
                 3003 Bern-Wabern
                 <div id="user-place">{this.state.userplace !== ""? this.state.userplace:"........"} ,den <span id="today">{this.state.date}</span></div>
                 </div>

                

               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               <br></br> 
               <div>
                  <p>
                    Gesuch um Familienasyl im Sinne des Art. 51 AsylG für die Ehefrau    
                     <span> {this.state.userwifesname !== ""? this.state.userwifesname:"........"} {this.state.userwifessurname !== ""? this.state.userwifessurname:"........"} </span>   
                    geboren am <span> {this.state.userwifesbirthday !== ""? this.state.userwifesbirthday:"........"} </span>, für die Tochter, <span> {this.state.userfirstchildname !== ""? this.state.userfirstchildname:"........"} </span>,
                    geboren am {this.state.userfirstchildbirthday !== ""? this.state.userfirstchildbirthday:"........"}, für die
                    alle türkische Staatsangehörige
                    <span id="user-name"> {this.state.username !== ""? this.state.username:"........"} {this.state.usersurname !== ""? this.state.usersurname:"........"} </span>, geboren am
                    <span id="user-birthday"> {this.state.userbirthday !== ""? this.state.userbirthday:"........"} </span>, anerkannter Flüchtling, 
                    türkischer Staatsangehöriger
                  </p>
                

                <p>Sehr geehrte Damen und Herren</p>

                <p>
                    Am <span id="user-comeDate"> {this.state.userdateofcametoswitzerland !== ""? this.state.userdateofcametoswitzerland:"........"} </span> habe ich in der Schweiz einen Asylantrag gestellt.
                    Schliesslich wurde ich am <span id="user-asylDate"> {this.state.userdateofsubstitution !== ""? this.state.userdateofsubstitution:"........"} </span> als Flüchtling anerkannt.
                    Danach wurde ich dem Kanton <span id="user-canton"> {this.state.usercanton !== ""? this.state.usercanton:"........"} </span> zugeteilt, wo ich zurzeit
                    wohnhaft bin. Jedoch ist meine Familie noch in der <span id="user-country"> {this.state.usercountry !== ""? this.state.usercountry:"........"} </span> und
                    sie ist in grosser Gefahr. Denn es wird nicht lange dauern bis die
                    <span id="user-country"> {this.state.usercountry !== ""? this.state.usercountry:"........"} </span> Regierung meinen Aufenthalt in der Schweiz ausfindig
                    macht. In diesem Fall würde man wahrscheinlich meiner Familie eine Ausreisesperre anordnen. Ähnliche
                    Fälle sind sicherlich auch Ihnen bekannt.
                </p>

                <p><span id="user-country"> {this.state.usercountry !== ""? this.state.usercountry:"........"} </span> Adresse: {this.state.useradressincountry !== ""? this.state.useradressincountry:"........"}
              </p>
                <p>
                    Ich ersuche Sie deshalb, die Einreise meiner Familienangehörigen in die Schweiz im Sinne des Art. 51
                    Asyl zu genehmigen. Folgende Unterlagen lege ich diesem Brief bei :
                </p>

                <ul>
                    <li>Auszug aus dem Personenstandsregister</li>
                    <li>Aufenthaltsbescheinigung</li>
                    <li>Kopie des Familienbuches</li>
                    <li>Kopien der Identitätskarten</li>
                    <li>Kopien der Reisepässe</li>
                </ul>
                </div>
            </div>
        <div>
                <p><input type="button" value="PRINT" id="print" onClick={this.sendToPrint} /></p>
                <p><input type="button" value="Download PDF" onClick={this.generatePDF} /></p>
            </div>
        </Col>
        
        </Row> 
      </Jumbotron>   
    );
  }
}
