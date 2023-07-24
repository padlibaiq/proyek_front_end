import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [departemen, setDepartemen] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/mahasiswa/${id}`)
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          const { name, nim, birthdate, departemen } = data[0];
          setName(name);
          setNim(nim);
          setBirthdate(formatDate(birthdate)); // Format the date
          setDepartemen(departemen);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const navigate = useNavigate();

  function updateData(e) {
    e.preventDefault();
    const data = {
      nim,
      name,
      birthdate,
      departemen,
    };
    axios
      .put(`http://localhost:3001/mahasiswa/${id}`, data)
      .then(() => navigate("/home"))
      .catch((error) => console.error(error));
  }

  function formatDate(date) {
    // Format the date as "YYYY-MM-DD" for the input field
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Perbaharui Data</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
      <input
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Enter your nim"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
          placeholder="Enter your date"
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
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={updateData}
        >
          Perbarui Data
        </button>
      </form>
    </div>
  );
}

export default Edit;
