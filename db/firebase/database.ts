import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "./init";

export interface LeadsProps {
  name: string;
  ttlAnak: string;
  agamaAnak: string;
  alamatAnak: string;
  masukKelas: string;

  namaAyah: string;
  ttlAyah: string;
  namaIbu: string;
  ttlIbu: string;

  pasFoto: string;
  fcAkta: string;
  fcKK: string;
  fcIjazah: string;
}

export const db = getDatabase(app);

export const insertData = async (name: string, data: LeadsProps) => {
  const leadsRef = ref(db, "leads/" + name);
  try {
    await set(leadsRef, data);

    alert("Pendaftaran sudah diterima!");
  } catch (error) {
    console.log("Error inserting data: ", error);
  }
};

export const getData = () => {
  const leadsRef = ref(db, "leads/");
  onValue(leadsRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Data from db: ", data);
  });
};
