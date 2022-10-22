import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(cont){
  return <Card
  key={cont.id}
  name={cont.name}
  img={cont.imgURL}
  tel={cont.phone}
  email={cont.email}
  />
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}      
    </div>
  );
}

export default App;
