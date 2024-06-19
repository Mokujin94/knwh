import { $host } from "./index";


export const sendForm = async (name, number, email, rate, mailTo, activeRate) => {
    const { data } = await $host.post("/send", {
        name,
        number,
        email,
        rate,
        mailTo,
        activeRate
    });
    return data;
}