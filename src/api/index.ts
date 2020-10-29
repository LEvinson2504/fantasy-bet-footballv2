import axios from "axios";

export const getMatches = async () => {
    const data = await axios.get("http://localhost:1337/matches");
    // console.log(data)
    return {data};
}