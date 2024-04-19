"use client";

import { IFile } from "@/libs/firebase/storage";
import Image from "next/image";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import { useRouter } from "next/router";

export default function ImageList({ data }: { data: IFile[] | [] }) {
  const [details, setDetails] = useState<IFile | null>(null);
  // const router = useRouter();
  return (
    <>
      <section className="py-4">
        <b>Uploaded images: </b>
        <div className="flex flex-wrap gap-2 py-8">
          {data.map((image: IFile, i: number) => (
            <Image
              src={image.url}
              width={400}
              height={400}
              key={i}
              alt={image.fileName}
              className="w-20 h-20 object-cover cursor-pointer"
              onClick={() => {
                setDetails(image);
                // router.replace("/dashboard?section=Gallery&i=1");
              }}
            />
          ))}
        </div>
      </section>

      {details && <ItemDetails image={details ? details : null} />}
    </>
  );
}
