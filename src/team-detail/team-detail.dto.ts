export interface TeamDetail {
  teams: [
    {
      currentProjectedRank?: number;
      draftDayProjectedRank: number;
      logo: string;
      firstName: string;
      secondName: string;
      playoffSeed: number;
      points: number;
      rankCalculatedFinal: number;
      record: {
        away: {
          gamesBack: number;
          losses: number;
          percentage: number;
          pointsAgainst: number;
          pointsFor: number;
          streakLength: number;
          streakType: string; //WIN or LOSS
          ties: number;
          wins: number;
        };
        division: {
          gamesBack: number;
          losses: number;
          percentage: number;
          pointsAgainst: number;
          pointsFor: number;
          streakLength: number;
          streakType: string;
          ties: number;
          wins: number;
        };
        home: {
          gamesBack: number;
          losses: number;
          percentage: number;
          pointsAgainst: number;
          pointsFor: number;
          streakLength: number;
          streakType: string;
          ties: number;
          wins: number;
        };
        overall: {
          gamesBack: number;
          losses: number;
          percentage: number;
          pointsAgainst: number;
          pointsFor: number;
          streakLength: number;
          streakType: string;
          ties: number;
          wins: number;
        };
      };
      transactionCounter: {
        acquisitions: number;
        drops: number;
        moveToActive: number;
        moveToIR: number;
        trades: number;
      };
      waiverRank: number;
    },
  ];
}
