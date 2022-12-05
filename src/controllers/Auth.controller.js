import bcrypt from "bcryptjs";
import AuthServices from "../services/Auth.services.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: "Preencha o usuario/senha" });
    }

    const user = await AuthServices.loginService(username);

    if (!user) {
      return res.status(400).send({ message: "Usuario/Senha está errado" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: "Usuario/Senha está errado" });
    }

    const token = AuthServices.generateToken(user._i);

    return res.send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default { login };
