import memesData from "../../memesData.js"
import React from "react"

function MemeForm () {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Shut up" />
                <input type="text" className="form--input" placeholder="and take my money" />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}

export default MemeForm