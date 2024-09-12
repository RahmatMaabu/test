import React from 'react'

const FormInputKesiswaan = () => {
  return (
    <form action="" method="post" className="flex flex-col items-center gap-4 w-full h-full p-4">
      {/* Full Name */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="Name" className="text-sm w-32">Nama Lengkap :</label>
        <input 
          type="text" 
          name="Name" 
          id="Name" 
          placeholder="Masukkan Nama Lengkap" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        />
      </div>

      {/* NISN */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="nisn" className="text-sm w-32">NISN :</label>
        <input 
          type="text" 
          name="nisn" 
          id="nisn" 
          placeholder="Masukkan NISN" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* TTL */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="ttl" className="text-sm w-32">Tempat Tanggal Lahir :</label>
        <input 
          type="text" 
          name="ttl" 
          id="ttl" 
          placeholder="Masukkan Tempat Tanggal Lahir" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Gender */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="gender" className="text-sm w-32">Jenis Kelamin :</label>
        <select 
          name="gender" 
          id="gender" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="male">Laki-laki</option>
          <option value="female">Perempuan</option>
        </select>
      </div>

      

      {/* Phone Number */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="phone" className="text-sm w-32">Nomor Telepon :</label>
        <input 
          type="text" 
          name="phone" 
          id="phone" 
          placeholder="Masukkan Nomor Telepon" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="email" className="text-sm w-32">Email :</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Masukkan Email" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        />
      </div>

      {/* Address */}
      <div className="flex flex-row items-center justify-between gap-2 w-full h-auto">
        <label htmlFor="address" className="text-sm w-32">Alamat :</label>
        <textarea 
          name="address" 
          id="address" 
          placeholder="Masukkan Alamat Lengkap" 
          className="w-full px-4 text-sm text-neutral-600 py-2 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          rows="3"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-row gap-2 justify-end w-full mt-4">
        <button 
          type="submit" 
          className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormInputKesiswaan
