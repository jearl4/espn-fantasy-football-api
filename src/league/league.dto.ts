export interface League {
  members: [
    {
      displayName: string;
      isLeagueManager: boolean;
    },
  ];
  seasonId: number;
  settings: {
    name: string;
  };
  teams: [
    {
      abbrev: string;
      location: string;
      nickname: string;
      id: number
    },
  ];
  status: {
    currentMatchupPeriod: number;
  };
}
