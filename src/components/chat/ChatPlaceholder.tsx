import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import gptdevImage from "src/playground/gptdev.png";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">GPT-4 Playground</h1>
        <img src={gptdevImage} alt="GPTDev" className="h-24 mx-auto" />
        <div className="m-4 flex items-center justify-center">
          <AddTokenModal />
        </div>
        <p className="mt-4 text-lg">
          Want more freedom? Check out the{" "}
          <Link
            href="/playground"
            className="font-medium text-primary hover:underline"
          >
            Playground
          </Link>
          !
        </p>

        <div className="p-4">

        </div>
      </div>
    </div>
  );
}
