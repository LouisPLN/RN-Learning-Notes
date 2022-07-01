import React, { Component, useState, useEffect } from "react";
// interface
import { INote } from "./interfaces/note";
import { getAllNotes, getStoredNotes } from "../services/noteApi";

const useRequestNotes = () => {
  const [allNotes, setAllNotes] = useState([] as INote[]);

  const getNotes = async () => {
    const data = await getAllNotes();
    setAllNotes(data);
  };

  const getMyNotes = async () => {
    const data = await getStoredNotes();
    setAllNotes(data);
  };

  let interval: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    getMyNotes();
  }, []);

  useEffect(() => {
    interval = setInterval(() => {
      getNotes();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return {
    allNotes,
  };
};

export { useRequestNotes };
