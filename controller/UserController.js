import User from "../modal/UserModel.js";

export const createUser = async (req, res) => {
  const userExist = req.body.email;
  try {
    const findUser = await User.findOne({ email: userExist });
    console.log(findUser);
    if (findUser) {
      res.status(400).send({ error: "User exist" });
    }
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).send({ newUser });
  } catch {
    (e) => {
      res.status(500).send(e);
    };
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(201).send(user);
  } catch {
    (e) => {
      console.error("Error:", e);
      res.status(500).send("Internal Server Error");
    };
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: req.body?.name,
        email: req.body?.email,
        mobile: req.body?.mobile,
        password: req.body?.password,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).send({ error: "User not found" });
    }
    console.log("Deleted User:", deleteUser);

    res.send({ deleteUser });
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
