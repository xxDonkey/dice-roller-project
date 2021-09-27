const img_folder = "img"
const file_name = "dice"

var sides = "six";
var reg_mode = true;
    
function set_img_src(index)
{
    var src = img_folder + "/" + sides + "/" + file_name + index + ".png";
    document.getElementById("die").src = src;
}

function roll()
{
    
    var index = Math.round(Math.random() * 5) + 1;
    set_img_src(index);
}

function on_roll_die()
{
    var num_rolls = document.getElementById("num_dice").value;

    for (var i = 0; i < num_rolls; i++)
    {
        setTimeout(roll, 1000 * i);
    }
}

function switch_mode()
{
    reg_div = document.getElementById("reg_mode");
    reg_div.hidden = !reg_div.hidden;

    vs_div = document.getElementById("vs_mode");
    vs_div.hidden = !vs_div.hidden;

    reg_mode = !reg_mode;
}
