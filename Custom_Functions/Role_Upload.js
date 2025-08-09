import axios from "axios"

const Upload_User_Role = async (username , usermail , userimage) =>{
    const RoleInfo = {
        Name: username,
        Email: usermail,
        Image: userimage || "N/A",
        Role: "Customer",
    }
const res = await axios.post(`${import.meta.env.VITE_API_URL}/add-userrole`, {RoleInfo} );
    return res?.data;
}
export default Upload_User_Role
