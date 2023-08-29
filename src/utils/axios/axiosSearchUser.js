import axios from "axios";

export const axiosSearchUser = async (data) => {
    return await axios({
        method: "get",
        url: `http://localhost:3000/api/auth/searchUser/${data}`,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
