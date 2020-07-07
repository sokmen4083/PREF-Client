import React, { Component } from 'react';

 class Dosya extends React.Component {
  render() {
    return (
      <div>
        {this.props.dosyaIsmi}
      </div>
    );
  }
}

class DosyaListesi extends React.Component {
  
    render() {
const dosyalar = 
this.state.dosyalar.map(d => <Dosya dosyaIsmi={d.ismi}/>)

      return (
        <div>
          {dosyalar}
        </div>
      );
    }
  }
