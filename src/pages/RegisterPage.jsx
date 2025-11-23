import React from 'react'
import logo from '../assets/images/logo-videobelajar.svg'
import regisGoogle from '../assets/images/RegisGoogle.svg'
import Input from '../components/atom/Input'

export default function RegisterPage() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="flex justify-between items-center py-5 px-6 md:px-12 sticky top-0 bg-white z-20">
                <a href="#" aria-label="Home"><img src={logo} alt="logo-videobelajar" className="h-10" /></a>
            </header>

            <main className="flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-4xl font-extrabold text-center">Pendaftaran Akun</h2>
                    <p className="text-sm text-gray-500 mt-1 text-center">Yuk, daftarkan akunmu sekarang juga!</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <Input id="fullname" name="fullname" type="text" label="Nama Lengkap" required />

                        <Input id="email" name="email" type="email" label="E-mail" required />

                        <div>
                            <label className="block text-sm font-medium text-gray-700">No. HP <span className="text-red-500">*</span></label>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 border border-gray-200">
                                    <img src="https://flagcdn.com/w20/id.png" alt="Indonesia" className="h-4 w-4" />
                                    <span className="text-sm">+62</span>
                                </div>
                                <input type="tel" name="phone" placeholder="8123456789" required className="flex-1 rounded-md border-gray-300 shadow-sm px-3 py-2 " />
                            </div>
                        </div>

                        <Input id="password" name="password" type="password" label="Kata Sandi" required showToggle />

                        <Input id="confirmPassword" name="confirmPassword" type="password" label="Konfirmasi Kata Sandi" required showToggle />

                        <div className="flex justify-end">
                            <a href="#" className="text-sm ">Lupa Password?</a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button type="submit" className="w-full inline-flex justify-center items-center bg-[#00d26a] text-white px-4 py-2 rounded-md hover:bg-[#00b85d]">Daftar</button>
                            <a href="#" className="w-full inline-flex justify-center items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md">Masuk</a>
                        </div>

                        <div className="flex items-center my-2">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="px-3 text-sm text-gray-500">atau</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <div className="flex justify-center">
                            <a href="#" className="inline-flex items-center">
                                <img src={regisGoogle} alt="Google SSO" className="h-10" />
                            </a>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    )
}