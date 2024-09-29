import memesData from "../memesData.js"

function MemeForm () {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Shut up" />
                <input type="text" className="form--input" placeholder="and take my money" />
                <button className="form--button">Get a new meme image</button>
            </div>
        </main>
    )
}

export default MemeForm