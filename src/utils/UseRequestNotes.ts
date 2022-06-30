import React, { Component, useState, useEffect } from "react";
// interface
import { INote } from "./interfaces/note";

const useRequestNotes = () => {
  const axios = require("axios");

  const [allNotes, setAllNotes] = useState([] as INote[]);


  const getAnswer = async () => {
    const { data } = await axios(
      "https://m66nqp6pe8.eu-west-1.awsapprunner.com/note"
    );
    setAllNotes(data);
  };

  let interval: any;

  useEffect(() => {
    getAnswer();
  }, []);

  useEffect(() => {
    interval = setInterval(() => {
      getAnswer();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  console.log(allNotes);
  return {
    allNotes,
  };
};

export { useRequestNotes };
