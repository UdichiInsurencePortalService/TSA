const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const usersModel = require("../Model/usersModel");
const { createJWT } = require("../Token/tokens");

const COOKIE_NAME = process.env.COOKIE_NAME || "ta_token";

/* ================= SIGNUP ================= */

const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const existing = await usersModel.findByEmail(email);

    if (existing) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const password_hash = await bcrypt.hash(password, 12);

    const user = await usersModel.createUser({
      id: uuidv4(),
      email,
      name,
      password_hash,
      is_admin: true
    });

    res.json({
      message: "Admin created successfully",
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= LOGIN ================= */

const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await usersModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = createJWT({
      sub: user.id,
      email: user.email,
      is_admin: user.is_admin
    });

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= RESET PASSWORD ================= */

const resetPassword = async (req, res) => {
  try {

    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: "New password required" });
    }

    const hash = await bcrypt.hash(newPassword, 12);

    await usersModel.updatePassword(req.user.id, hash);

    res.json({ message: "Password updated" });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= GET USER ================= */

const authMe = async (req, res) => {
  res.json({
    user: req.user
  });
};

module.exports = {
  signup,
  login,
  resetPassword,
  authMe
};