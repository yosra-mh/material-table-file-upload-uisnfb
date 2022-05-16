import React, { useState } from "react";
import { render } from "react-dom";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons.js";

const rando = max => Math.floor(Math.random() * max);

const words = ["Paper", "Rock", "Scissors"];

const rawData = [];
for (let i = 0; i < 100; i++) {
  const date = new Date(Date.now()).toUTCString();
  console.log( { date } )
  rawData.push({ date, id: rando(300), word: words[i % words.length], title: 'aaa'});
}

const TitleImg = (rowData) => {
  return (
    <div>
      <input type="file" />
    </div>
)};

const columns = [
  { title: "Id", field: "id" },
  { title: "Word", field: "word" },
  { title: "Date", field: "date", type: "time" },
  { title: 'Title', field: "title", render: (rowData) => <TitleImg rowData={rowData}/> }
];

const App = () => {
  const [data, setData] = useState(rawData);

  return (
    <MaterialTable
      data={data}
      columns={columns}
      options={}
      title={window.location.host.replace(/.stackblitz.io/, '') || 'Starter Template'}
      icons={tableIcons}
    />
  );
};

render(<App />, document.querySelector("#root"));
