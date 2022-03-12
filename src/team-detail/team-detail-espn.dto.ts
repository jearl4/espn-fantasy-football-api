export interface TeamDetailEspn {
  teams: [
    {
      abbrev: string;
      currentProjectedRank?: number;
      divisionId: number;
      draftDayProjectedRank: number;
      draftStrategy: { keeperPlayerIds: [] };
      id: number;
      isActive: boolean;
      location: string;
      logo: string;
      logoType: string;
      nickname: string;
      owners: [string];
      playoffSeed: number;
      points: number;
      pointsAdjusted: number;
      pointsDelta: number;
      primaryOwner: string;
      rankCalculatedFinal: number;
      rankFinal: number;
      record: {
        away: {
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
      tradeBlock: {};
      transactionCounter: {
        acquisitionBudgetSpent: number;
        acquisitions: number;
        drops: number;
        matchupAcquisitionTotalnumber: {};
        misc: number;
        moveToActive: number;
        moveToIR: number;
        paid: number;
        teamCharges: number;
        trades: number;
      };
      valuesByStat: {};
      waiverRank: number;
    },
  ];
}
