const img_folder = "img"
const file_name = "dice"
    
function set_img_src(index, id)
{
    var src = img_folder + "/" + file_name + index + ".png"
    document.getElementById(id).src = src
}

function create_img_div(i)
{
    var div = document.createElement("div")
    div.setAttribute("class", "dice")

    var img1 = document.createElement("img")
    img1.setAttribute("id", i + "die1")
    img1.setAttribute("width", 256)
    img1.setAttribute("height", 256)
    img1.setAttribute("src", "img/dice1.png")
    div.appendChild(img1)

    var img2 = document.createElement("img")
    img2.setAttribute("id", i + "die2")
    img2.setAttribute("width", 256)
    img2.setAttribute("height", 256)
    img2.setAttribute("src", "img/dice1.png")
    div.appendChild(img2)

    document.body.appendChild(div)
}

function roll()
{
    var num_dice = parseInt(document.getElementById("num_dice").value)
    var faces = parseInt(document.getElementById("num_sides").value)
    var img_divs = document.getElementsByClassName("dice")  
    
    if (num_dice > img_divs.length)
        for (var i = img_divs.length; i < num_dice; i++)
        {
            create_img_div(i)
        }

    else if (num_dice < img_divs.length)
        for (var i = img_divs.length - 1; i >= num_dice; i--)
        {
            console.log(i)
            img_divs[i].remove()
        }
    
    if (faces < 1)
        document.getElementById("num_sides").value = 1

    else if (faces > 6)
        document.getElementById("num_sides").value = 6

    var t1 = 0
    var t2 = 0

    for (var i = 0; i < num_dice; i++)
    {
        console.log(i)

        var index1 = Math.round(Math.random() * (faces - 1)) + 1
        set_img_src(index1, i + "die1")
        t1 += index1
        
        var index2 = Math.round(Math.random() * (faces - 1)) + 1
        set_img_src(index2, i + "die2")
        t2 += index2
    }

    document.getElementById("score1").innerHTML = t1
    document.getElementById("score2").innerHTML = t2

    if (t1 < t2)
        document.getElementById("winner").innerHTML = "Player 2 wins!"

    else if (t1 > t2)
        document.getElementById("winner").innerHTML = "Player 1 wins!"
    
    else
        document.getElementById("winner").innerHTML = "It's a tie!"
    
}

