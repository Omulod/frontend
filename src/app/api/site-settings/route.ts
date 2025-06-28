import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/omulod/site-settings`
    );

    const { data } = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message:
          error?.response?.data ||
          error?.response?.message ||
          error?.response ||
          "Something went wrong",
      },
      { status: error?.response?.status ?? 500 }
    );
  }
}
