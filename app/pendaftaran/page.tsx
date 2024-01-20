import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

export default function PendaftaranPage() {
  const biodataAnakFields: any[] = [
    {
      label: "Nama",
      id: "nama-anak",
    },
    {
      label: "Tempat/Tanggal Lahir",
      id: "ttl",
    },
    {
      label: "Agama",
      id: "agama-anak",
    },
    {
      label: "Alamat",
      id: "alamat-anak",
    },
    {
      label: "Masuk Kelas",
      id: "masuk-kelas",
    },
  ];

  const biodataOrangtuaFields: any[] = [
    {
      label: "Nama Ayah",
      id: "nama-ayah",
    },
    {
      label: "Tempat/Tanggal Lahir Ayah",
      id: "ttl-ayah",
    },
    {
      label: "Nama Ibu",
      id: "nama-ibu",
    },
    {
      label: "Tempat/Tanggal Lahir Ibu",
      id: "ttl-ibu",
    },
  ];

  const requiredDocumentsFields: any[] = [
    {
      label: "Pas Foto 3x4 cm",
      id: "pas-foto",
    },
    {
      label: "Fotocopy Akta Kelahiran",
      id: "fc-akta-kelahiran",
    },
    {
      label: "Fotocopy Kartu Keluarga",
      id: "fc-kk",
    },
    {
      label: "Fotocopy Ijazah dan Nilai (jika ada)",
      id: "fc-ijazah-nilai",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        id="page-pendaftaran"
        className="w-full flex justify-center items-center py-32"
      >
        <div id="page-pendaftaran"></div>
        <section className="w-full md:w-1/2 border rounded-xl bg-white shadow-xl px-4">
          <h1 className="text-center font-bold py-10 text-xl md:text-2xl border-b">
            Formulir Pendaftaran Siswa Baru <br />
            Tahun Ajaran 2023-204
          </h1>
          <section className="py-4">
            <form action="" className="flex flex-col gap-2 py-2">
              <div className="py-4">
                <h1 className="text-dark-green font-bold text-lg md:text-xl bg-gray-200 p-4">
                  A. Biodata Anak
                </h1>
                {biodataAnakFields.map((field, i) => (
                  <div key={i} className="py-2">
                    <label htmlFor={field.id} className="flex">
                      {field.label}:
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      className="w-full border-b p-2 focus:outline-none focus:border-dark-green"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="py-4">
                <h1 className="text-dark-green font-bold text-lg md:text-xl bg-gray-200 p-4">
                  B. Biodata Orang tua
                </h1>
                {biodataOrangtuaFields.map((field, i) => (
                  <div key={i} className="py-2">
                    <label htmlFor={field.id} className="flex">
                      {field.label}:
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      className="w-full border-b p-2"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="py-4">
                <h1 className="text-dark-green font-bold text-lg md:text-xl bg-gray-200 p-4">
                  C. Persyaratan Dokumen
                </h1>
                {requiredDocumentsFields.map((field, i) => (
                  <div key={i} className="py-2">
                    <label htmlFor={field.id} className="flex">
                      {field.label}:
                    </label>
                    <input
                      type="file"
                      id={field.id}
                      className="w-full p-2"
                      required
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="bg-dark-green py-2 px-4 rounded-full text-white my-4"
              >
                Daftar
              </button>
              <p className="w-full text-center text-gray-600 py-4 border-t">Hubungi kami jika butuh bantuan</p>
              <ContactButton />
            </form>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
