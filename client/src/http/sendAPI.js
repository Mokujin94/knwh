import { $host } from "./index";


export const sendForm = async (name, number, email, rate, mailTo, defaultRate) => {
    const { data } = await $host.post("/send", {
        name,
        number,
        email,
        rate,
        mailTo,
        defaultRate
    });
    return data;
}