$('#gu_btn').on("click", function () { janken(0) }); //janken 0:グー 1:チョキ 2:パー
$('#cho_btn').on("click", function () { janken(1) });
$('#par_btn').on("click", function () { janken(2) });

function janken(select) {
    var pc = Math.floor(Math.random() * 3); //janken 0:グー 1:チョキ 2:パー
    $("#pc_hands").children('img').attr('src',"./img/0"+pc+".jpg");
    $("#judgement").children('img').attr('src',"./img/"+judge(select, pc));
};

function judge(select, pc) {
    var result = pc - select;
    if (result === 0) return "draw.jpg";
    else if ((result) === 1 | (result) === -2) return "win.jpg";
    else return "lose.jpg";
};

