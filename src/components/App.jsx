import React from "react";
import Entry from "./Entry";
import emojiP from "../emojipedia";

//how to get rid of this things.
//Firstof all. create Entry components
// create props to replace hard coded data
// import emojipedia const
// map kai though sbb chiz link kro

function emojiDetail(emojiP) {
  return (
    <Entry
      key={emojiP.id}
      emoji={emojiP.emoji}
      name={emojiP.name}
      description={emojiP.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiP.map(emojiDetail)}</dl>
    </div>
  );
}

export default App;
