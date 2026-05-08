import ConnectDB from "@/lib/ConnectDB";
import UserModel from "@/models/UserModel";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await ConnectDB();
  try {
    const { username, email, password } = await request.json();
    if (!username || !email || !password) {
      return Response.json({ success: false, message: "all fieald are empty" });
    }

    const existUser = await UserModel.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existUser) {
      return Response.json({
        success: false,
        message: "user already exist with this email or username",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return Response.json(
        {
          success: false,
          message: "error hashing password",
        },
        { status: 400 },
      );
    }

    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    return Response.json(
      {
        success: true,
        message: "user created successfully",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating user", error);
    return Response.json(
      {
        success: false,
        message: "error creating user",
      },
      { status: 500 },
    );
  }
}
