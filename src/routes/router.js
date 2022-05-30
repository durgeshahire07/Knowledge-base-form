import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layouts/header/main";
import SportsForm from "../Pages/sportsForm/main";
import HomePage from "../Pages/Home/main";
import StarsForm from "../Pages/StarsForm/main";
import EventForm from '../Pages/EventForm/main'
import RecordForm from '../Pages/RecordForm/main'
import EquipmentForm from "../Pages/EquipmentForm/main";
import RulesForm from "../Pages/RulesForm/main";
import ErrorPage from '../Pages/ErrPage/error'
export default function PagesRoute() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sport-form" element={<SportsForm />} />
        <Route path="/star-form" element={<StarsForm />} />
        <Route path="/event-form" element={<EventForm />} />
        <Route path="/record-form" element={<RecordForm />} />
        <Route path="/equipment-form" element={<EquipmentForm />} />
        <Route path="/rules-and-format-form" element={<RulesForm />} />

        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}
