import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CityDescriptionPage.css";

const CityDescription = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);