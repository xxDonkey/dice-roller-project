const img_folder = "img"
const file_name = "dice"

// Sets the src of the <img> tag with the given ID to the corresponding face.
function set_img_src(index, id)
{
    var src = img_folder + "/" + file_name + index + ".png"
    document.getElementById(id).src = src
}

// Creates a div housing 2 die <img> tags
function create_img_div(i)
{
    // create the div
    var div = document.createElement("div")
    div.setAttribute("class", "dice")

    // create the first img
    var img1 = document.createElement("img")
    img1.setAttribute("id", i + "die1")
    img1.setAttribute("width", 256)
    img1.setAttribute("height", 256)
    img1.setAttribute("src", "img/dice1.png")
    div.appendChild(img1)

    // create the second img
    var img2 = document.createElement("img")
    img2.setAttribute("id", i + "die2")
    img2.setAttribute("width", 256)
    img2.setAttribute("height", 256)
    img2.setAttribute("src", "img/dice1.png")
    div.appendChild(img2)

    // append to the webpage
    document.body.appendChild(div)
}

function roll()
{
    // read info from webpage
    var num_dice = parseInt(document.getElementById("num_dice").value)
    var faces = parseInt(document.getElementById("num_sides").value)
    var img_divs = document.getElementsByClassName("dice")  
    
    // if we dont have enough dice, create more
    if (num_dice > img_divs.length)
        for (var i = img_divs.length; i < num_dice; i++)
        {
            create_img_div(i)
        }

    // if we have too many, delete extra
    else if (num_dice < img_divs.length)
        for (var i = img_divs.length - 1; i >= num_dice; i--)
        {
            img_divs[i].remove()
        }
    
    // clamp value of 'faces' to between 1 and 6

    if (faces < 1)
        document.getElementById("num_sides").value = 1

    else if (faces > 6)
        document.getElementById("num_sides").value = 6

    var t1 = 0
    var t2 = 0

    // for each div, roll the 2 dice, add their values to t1 and t2
    for (var i = 0; i < num_dice; i++)
    {
        var index1 = Math.round(Math.random() * (faces - 1)) + 1
        set_img_src(index1, i + "die1")
        t1 += index1
        
        var index2 = Math.round(Math.random() * (faces - 1)) + 1
        set_img_src(index2, i + "die2")
        t2 += index2
    }

    // set the score text
    document.getElementById("score1").innerHTML = t1
    document.getElementById("score2").innerHTML = t2

    // set the winner text
    if (t1 < t2)
        document.getElementById("winner").innerHTML = "Player 2 wins!"

    else if (t1 > t2)
        document.getElementById("winner").innerHTML = "Player 1 wins!"
    
    else
        document.getElementById("winner").innerHTML = "It's a tie!"
}

