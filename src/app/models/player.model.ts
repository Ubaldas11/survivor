export interface IPlayer {
    id?: string;
    img: string;
    fullName: string;
    questionAnswers: Array<string>;
    birthdate: any;
    wins: number;
    yearsPlayed: string[];
    profession: string;
    timesInFinalThree: number;
    favoriteVotes?: number;
}
