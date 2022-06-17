export const validateEmail = (mail) => mail && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  .test(mail);

const SIX = 6;
const TWELVE = 12;

export const validatePassword = (pass) => pass && pass.length >= SIX;

export const validateName = (name) => name && name.length >= TWELVE;

export const formattedDate = (date) => {
  const MAGIC_NUMBER = 10;
  const ximira = date.slice(0, MAGIC_NUMBER);
  return ximira.replaceAll('-', '/').split('/').reverse().join('/');
};
