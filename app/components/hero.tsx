import foto from "../Riezz.jpeg";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Ahmad Fauzan Alfarizi</h2>
            <Profile />
            <p>
                Saya adalah mahasiswa semester 5 yang sangat berkharisma, jurusan Sistem Informasi dari Universitas Ma'soem.
                Saya bercita-cita ingin menjadi seorang billioner seperti Bruce Wayne atau Batman.
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Ahmad Fauzan Alfarizi" className="fotoku" />;
}