import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$hv8upgZIXTTmIpGs1QlC8eoKqHqv4s2a1FSVjOGW5BlsRIU.WcMPq";

const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);

console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext, hashedPassword);
console.log(isSame);
