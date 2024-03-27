import { $host } from "./index";


export const sendForm = async (name, number, email, rate) => {
    const { data } = await $host.post("/send", {
        name,
        number,
        email,
        rate
    });
    return data;
}