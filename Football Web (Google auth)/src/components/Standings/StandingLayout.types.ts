export type League = {
    code: string;
    name: string;
  };

 export type Team = {
    position: number;
    team: {
      id: number;
      name: string;
      crestUrl: string;
    };
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
  };

  export type Club = {
    id: number;
    name: string;
    crestUrl: string;
  };

  export type Error = {
    type: string;
    status: boolean;
    message: string;
  }
