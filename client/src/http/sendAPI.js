import { $host } from "./index";


export const sendForm = async (name, number, email, rate, mailTo, activeRate) => {
    if(mailTo == '') mailTo = 'tickets@knwh.ru';
    
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