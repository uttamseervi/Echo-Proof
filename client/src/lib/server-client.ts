import { createThirdwebClient } from "thirdweb";
import { createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";



const secretKey: string = process.env.SECRET_KEY || ""
const privateKey: string = process.env.ACCOUNT_PRIVATE_KEY || ""
const domain = process.env.AUTH_DOMAIN
const client = createThirdwebClient({
    secretKey, // always use secret key for backend code
});

const thirdwebAuth = createAuth({
    domain: domain!,
    client,
    adminAccount: privateKeyToAccount({ client, privateKey }),
});

export default thirdwebAuth