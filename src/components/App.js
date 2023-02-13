import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  const style = { backgroundColor: "#e1e2e3", opacity: "0.8" };
  return (
    <div className="ui container" style={style}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/show/:id" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
