const bcrypt = require('bcrypt');
exports.EncryptPsd = async (plain_text) => await bcrypt.hash(plain_text, 10);