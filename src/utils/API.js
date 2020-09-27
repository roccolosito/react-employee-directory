import axios from "axios";

export default {
    search: () => axios.get("https://randomuser.me/api/?nat=us&results=40")
}