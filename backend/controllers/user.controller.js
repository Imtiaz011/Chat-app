import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";

export async function signup(req, res) {
    try {
        const { username, email, fullname, password, confirmPassword } = req.body;
        if (!username || !email || !fullname || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields are required" })
        }

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password doesn't match" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, fullname, password: hashedPassword });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.error("Error in Sign Up controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).json({ message: "Invalid User Credentials" });
        }
        const passwordMatch = await bcrypt.compare(password, userExists.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid User Credentials" });
        }
        res.status(200).json(userExists);
    } catch (error) {
        console.error("Error in login controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
