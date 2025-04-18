export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL)
    return res.status(401).json({ message: "Invalid email" });

  const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  res.json({ token });
};
