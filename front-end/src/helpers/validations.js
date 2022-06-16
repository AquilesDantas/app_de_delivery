export const validateEmail = (mail) => mail && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  .test(mail);

const six = 6;
const twelve = 12;

export const validatePassword = (pass) => pass && pass.length >= six;

export const validateName = (name) => name && name.length >= twelve;

export const formattedDate = (date) => {
  const MAGIC_NUMBER = 10;
  const ximira = date.slice(0, MAGIC_NUMBER);
  return ximira.replaceAll('-', '/').split('/').reverse().join('/');
};
