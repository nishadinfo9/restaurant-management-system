import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import ConnectDB from "@/lib/ConnectDB";
import UserModel from "@/models/UserModel";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET() {
  try {
    // connect database
    await ConnectDB();

    // get session
    const session = await getServerSession(authOptions);

    // check authentication
    if (!session?.user?._id) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized access",
        },
        {
          status: 401,
        },
      );
    }

    // find user
    const user = await UserModel.findById(session.user._id).select(
      "-password -__v",
    );

    // user not found
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    // account suspended/inactive check
    // if (user.isActive === false) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Account is suspended",
    //     },
    //     {
    //       status: 403,
    //     },
    //   );
    // }

    // success response
    return NextResponse.json(
      {
        success: true,
        message: "User retrieved successfully",
        data: user,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("[ME_ROUTE_ERROR]", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
