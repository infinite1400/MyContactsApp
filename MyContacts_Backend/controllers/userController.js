import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
//@desc Register User
//@route Post /api/users/register
//@access public

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({msg : "All fields are Mandatory !"})
            return;
        }
        const userAvailble = await User.findOne({ email: email });
        if (userAvailble) {
            res.status(400).json({msg : `User with this email :- ${email} already exists`})
        }
        else {
            //Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            const newUser = await User.create({
                username: username,
                email: email,
                password: hashedPassword
            });
            console.log("User Created ", newUser);
            if (newUser) {
                res.status(200).json({ _id: newUser._id, email: newUser.email });
            }
            else {
                res.status(400).json({ msg : "Error in Saving the user to database"});
            }
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

//@desc login User
//@route Post /api/users/login
//@access public

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({msg : "All fields are Mandatory !"});
        }
        const user = await User.findOne({ email: email });
        console.log(user);
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign({
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            }, process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "45m" }
            )
            res.status(200).json({accessToken : accessToken });
        }
        else {
            res.status(400).json({msg : "email or password is not valid !"});
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
}

//@desc Current User Information
//@route Get /api/users/current
//@access private

const currentUser = async (req, res) => {
    try{
        res.status(200).json({data : req.user});
    }catch(error){
        res.status(400).json(error);
    }
}

export { registerUser, loginUser, currentUser };
