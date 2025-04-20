import React from "react";
import { WalletGate } from "../../components/drizzvia/WalletGate";
import { TriviaGame } from "../../components/drizzvia/TriviaGame";

const Drizzvia = () => {
  return (
    <div className="min-h-screen bg-[#fff9f0] p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎯 DRIZZVIA</h1>
      <WalletGate>
        <TriviaGame />
      </WalletGate>
    </div>
  );
};

export default Drizzvia;
