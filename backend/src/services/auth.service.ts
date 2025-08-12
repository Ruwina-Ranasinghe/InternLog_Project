import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
import { generateToken } from '../util/jwt';

export const registerUser = async (name: string, email: string, password: string, isAdmin: boolean) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin })
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin })
  };
};
