import CryptoJS from "crypto-js";

export const encryptWithAES = (text: string) => {
  const passphrase = 'huyvippro9x';
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

export const decryptWithAES = (ciphertext: string) => {
  const passphrase = 'huyvippro9x';
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};