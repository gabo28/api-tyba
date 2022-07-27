
import * as bcrypt from 'bcrypt';

const encriptPassword = async (password) => {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash.toString()
}

const checkPassword = async (password, hast) => {
    const isMatch = await bcrypt.compare(password, hast);
    return isMatch;
}

export default {
    encriptPassword,
    checkPassword
}

