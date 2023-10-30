var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1200)
    .typeString("嗨, 我是<strong>Annice</strong>, 欢迎来到我的主页！")
    .pauseFor(300)
    .deleteChars(22)
    .typeString("你准备好开始今天的冒险了吗？")
    .pauseFor(300)
    .deleteChars(22)
    .typeString("准备好的话就按下面的按钮！")
    .pauseFor(1000)
    .start();
