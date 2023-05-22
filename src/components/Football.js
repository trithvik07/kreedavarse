import React from "react";

const Cricket = () => {
  return (
    <div className="bg-blue-500 h-[100vh]">
      <div className="grid grid-cols-3 gap-8 mx-60 pt-5">
        <div className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>It-1 vs Cse-1</p>
          <p>It-1 : 4</p>
          <p>Cse-4 : 3</p>

        </div>
        <div className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>It-2 vs MCA</p>
          <p>IT-2 : 1</p>
          <p>MCA : 2</p>

        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-8 mt-10">
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold">
          Manoj and Civil-1 win football cup consecutivley
          </h2>
          <p className="text-md mt-4">
          The CSE-4 and Civil-1 teams faced off in the highly-anticipated football final, with CSE-4 coming out on top. The match was highlighted by the outstanding performance of Manoj, a national football player who helped lead his team to victory. This marks Manoj's second consecutive year winning the football cup, solidifying his status as a top player and leader on the field. Congratulations to CSE-4 on a well-deserved victory and to Manoj for his impressive achievements.
          </p>
        </div>
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold text-center">
          IT-1 advances to Third Round in Football after MBA and MCA Give Walkover
          </h2>
          <p className="text-md mt-4">
          The excitement was palpable as IT-1 took to the field for their football match against MBA and MCA. However, much to the surprise of the players and fans alike, MBA and MCA announced that they would be giving a walkover, citing a lack of a team. IT-1 advanced to the third round as a result of the walkover, and they are now poised to take on their next opponents. The players and fans of IT-1 celebrated their win on the field, grateful for the opportunity to move forward in the tournament. While the outcome of the match was not what many had expected, it was a testament to the hard work and determination of IT-1. They will continue to prepare for their next challenge, eager to demonstrate their skills on the field. Overall, the walkover was a disappointment for fans of the tournament, but it serves as a reminder of the dedication and perseverance of the players and teams involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cricket;
