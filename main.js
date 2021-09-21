const img_folder = "img"
const file_name = "dice"

function set_img_src(index)
{
    var src = img_folder + "/" + file_name + index + ".png";
    document.getElementById("dice").src = src;
}

function on_press()
{
    var index = Math.round(Math.random() * 5) + 1;
    set_img_src(index);
}