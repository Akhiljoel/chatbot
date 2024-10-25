import User from "../models/User.js";
import { hash, compare } from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        return res.status(200).json({ message: "Error", cause: error.message });
    }
};
export const usersignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser)
            return res.status(401).send("User already existed");
        const hashedpassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedpassword });
        await user.save();
        return res.status(201).json({ message: "Ok", id: user._id.toString() });
    }
    catch (error) {
        return res.status(200).json({ message: "Error", cause: error.message });
    }
};
export const userlogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const iscorrect = await compare(password, user.password);
        if (!iscorrect)
            return res.status(403).send("Incorrect password");
        return res.status(201).json({ message: "Ok", id: user._id.toString() });
    }
    catch (error) {
        return res.status(200).json({ message: "Error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map