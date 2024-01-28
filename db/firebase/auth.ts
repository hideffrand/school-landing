import { app } from "./init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const getCurrentUser = async () => {
  try {
    const user = auth.currentUser;
    return user ? user.email : null;
  } catch (error) {
    console.log("Error getting current user: ", error);
  }
};
