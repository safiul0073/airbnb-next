import { CardPropsType } from "../../types";

export const CardDataGenerate = (len: number = 8):Array<CardPropsType> => {
    let data:Array<CardPropsType> = [];
    for (let i = 0; i < len; i++) {
        data.push({
            image:"/images/man1.jpeg",
            title:"The Coldest Sunset",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Funny pictures, backgrounds for your desktop, diagrams and illustrated instructions.",
            location:"Looking near: Bristol Bath & London",
            about:"23 years/Male"
        })
    }
    return data;
}