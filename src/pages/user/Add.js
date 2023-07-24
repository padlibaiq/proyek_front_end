import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [departemen, setDepartemen] = useState("");

  const navigate = useNavigate();
  const data = {
    nim,
    name,
    birthdate,
    departemen
  };

  function submitForm(e) {
    e.preventDefault();


    axios.post("http://localhost:3001/mahasiswa", data)
      .then(() => {
        alert("Data submitted successfully!");
        navigate("/home");
      })
      .catch((error) => {
        alert("An error occurred while submitting the data.");
        console.error(error);
      });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Tambahkan Data Mahasiwa</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Nim"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Name"
        />
        
        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
          placeholder="Birthdate"
        />
        <select
          value={departemen}
          onChange={(e) => setDepartemen(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        >
          <option value="">Pilih Program Studi</option>
          <option value="Sistem Informasi">Sistem Informasi</option>
          <option value="Biologi">Biologi</option>
          <option value="Fisika">Fisika</option>
          <option value="Matematika">Matematika</option>
        </select>
        <button
          className="bg-green-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
}

export default Add;
