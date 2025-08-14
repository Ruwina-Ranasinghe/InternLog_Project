import bcrypt from 'bcrypt';
import { generateToken } from '../util/jwt';
import {createUserRepo, findOneUserRepo} from "../data_access/user.repo";
import {ErrorMessages,} from "../ constants/messages";

export const registerUserService = async (data :any) => {
  const exist = await findOneUserRepo({ email: data.email});
  if (exist) throw new Error(ErrorMessages.USER_ALREADY_EXIST);
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await createUserRepo({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    isAdmin: data.isAdmin
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin })
  };
};

export const loginUserService = async (data: any) => {
  const user = await findOneUserRepo({ email: data.email});
  if (!user) throw new Error(ErrorMessages.NO_USER_ACCOUNT_FOUND);
  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error(ErrorMessages.INVALID_CREDENTIALS);

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin })
  };
};
