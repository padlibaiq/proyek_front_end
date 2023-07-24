import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import { FaUserGraduate } from 'react-icons/fa';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    axios.get("https://proyek-backend-fay5.vercel.app/mahasiswa").then((res) => {
      setUsers(res.data.reverse());
      console.log(res.data.reverse())
    });
  }

  function deleteUser(id) {
    console.log(id)

    axios.delete(`https://proyek-backend-fay5.vercel.app/mahasiswa/${id}`).then(() => {
      loadUsers();
    });
  }
  

  return (
    <>
    <Navbar/>
      <div className="w-[100vw] h-full  flex flex-col px-10 py-8 mt-8">
      <div className="flex justify-between items-center w-full">
        
        <h1 className="text-3xl font-bold" style={{ color: '#4169E1' }}><FaUserGraduate className="text-3xl text-brown-900 mr-2" />Sistem Informasi FAST</h1>
      </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
              <div style={{backgroundColor: 'white', paddingTop: '10px', paddingBottom: '20px'}} className="flex justify-between items-center w-full px-8">
                <h1 className="text-3xl">Data Mahasiswa</h1>
                <Link to={"/add-user"} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" style={{ backgroundColor: '#B0E0E6', color: '#4169E1' }}>Tambah</Link>
              </div>
                <table className="min-w-full shadow-xl">
                  <thead className="border-b" style={{backgroundColor: '#B0E0E6'}}>
                    
                    <tr style={{color: '#4169E1'}}>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        Nim
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        Tanggal lahir
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        Program Studi
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg px-6 py-4"
                      >
                        Opsi
                      </th>
                        
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.nim}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.birthdate ? data.birthdate.split("T")[0] : ""}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.departemen}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${data._id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Lihat
                          </Link>
                          <Link
                            to={`/edit-user/${data._id}`}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>

                          <Link
                            onClick={() => deleteUser(data._id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                      
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex">
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;