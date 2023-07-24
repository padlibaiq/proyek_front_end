import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/mahasiswa/${id}`).then((res) => {
      console.log('data', res.data)
      setMahasiswa(res.data);
      console.log('mahasiswa ', mahasiswa)

    });
  }, [id]);



  console.log('mahasiswa ok', mahasiswa);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
       
        {mahasiswa && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Nim
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Tanggal Lahir
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Program Studi
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">

{            mahasiswa.map((value) => (
  <>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.nim}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.name}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{new Date(value.birthdate).toDateString()}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.departemen}</h2>
    </>

  ))}
              
            </div>
          </div>
        )}
         <Link
          to={`/home`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          back
        </Link>
      </div>
    </>
  );
}

export default Users;