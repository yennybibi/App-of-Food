
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secretKey = 'your-secret-key-here';
const users = []; // Simulated user database

export const registerUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
};

export const authenticateUser = async (username, password) => {
  const user = users.find(u => u.username === username);

  if (!user) {
    return null; // Usuario no encontrado
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return null; // Contraseña incorrecta
  }

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return token;
};
