import curryBtl from './gifs/curry-btl.gif'
import behindBack from './gifs/behind-back.gif'
import btl from './gifs/btl.gif'
import crossover from './gifs/crossover.gif'
import crossover2 from './gifs/crossover2.gif'
import highDribble from './gifs/high-dribble.gif'
import frontBetweenBack from './gifs/front-between-back.gif'

const dribbleDrills = [
    { 
        name: "High Dribble Right Hand",
        description: "description",
        videoURL: "DdfWxlFoENw?start=40",
        difficulty: 'easy',
        duration: 15,
        gif:highDribble,
    },
    { 
        name: "One Hand Cross to a Crossover",
        description: "description",
        videoURL: "DdfWxlFoENw?start=40",
        difficulty: 'easy',
        duration: 15,
        gif:crossover2,
    },
    { 
        name: "Between the Legs",
        description: "description",
        videoURL: "DdfWxlFoENw?start=40",
        difficulty: 'medium',
        duration: 30,
        gif:curryBtl,
    },
    { 
        name: "Behind Back",
        description: "description",
        videoURL: "",
        difficulty: 'medium',
        duration: 30,
        gif:behindBack,
    },
    { 
        name: "Front, Between, Back",
        description: "description",
        videoURL: "",
        difficulty: 'hard',
        duration: 30,
        gif:frontBetweenBack,
    },
]

export default dribbleDrills
