export const formSend = ({ name, tel, texto }) => {

    // Variable con celular de la empresa que recibe el fomrulario
    const ownerPhone = '55587475';

    // variable con la url de whatsApp
    const url = `https://api.whatsapp.com/send?phone=${ownerPhone}&text=
    *_${name} desea información:_*%0A
    *_Nombre:_*%0A
    ${name}%0A%0A
    *Celular:*%0A
    ${tel}%0A%0A
    *Servicio:*%0A
    ${texto}%0A`;

    window.open(url);
};