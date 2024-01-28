// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
// import { storage } from "@/db/firebase/storage";

// const folderName = "gallery";

// export async function GET({ query }) {
//   try {
//     const { fileName } = query;
//     const listRef = ref(storage, folderName);
//     const result = await listAll(listRef);

//     const data = await Promise.all(
//       result.items.map(async (itemRef) => {
//         // If fileName parameter is provided, filter by fileName
//         if (fileName && !itemRef.name.includes(fileName)) {
//           return null;
//         }

//         const downloadUrl = await getDownloadURL(itemRef);

//         return {
//           fileName: itemRef.name,
//           url: downloadUrl,
//         };
//       })
//     );

//     // Remove entries with null (filtered out) from the data array
//     const filteredData = data.filter((item) => item !== null);

//     return NextResponse.json({ message: "Success", data: filteredData });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Failed to retrieve images",
//       data: "",
//     });
//   }
// }

// export async function POST(req: NextApiRequest) {
//   try {
//     const imageToUpload = req.body.image;
//     console.log("Request body check:", imageToUpload);

//     const imageRef = ref(storage, `${folderName}/${imageToUpload.name}`);

//     await uploadBytes(imageRef, imageToUpload);

//     return NextResponse.json({ message: "Image uploaded successfully" });
//   } catch (error) {
//     return NextResponse.json({ message: "Failed to upload image" });
//   }
// }
