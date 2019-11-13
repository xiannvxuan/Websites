function Slider(id, wid, hei) {

    this.sliderBox = document.getElementById(id); //轮播图展示区域
    console.log(this.sliderBox)
    this.sliderBox.style.position = "relative";
    this.sliderBox.style.overflow = "hidden";
    this.sliderBox.style.width = wid + "px";
    this.sliderBox.style.height = hei + "px";

    this.aImgList = this.sliderBox.querySelectorAll(".imgList")[0].children; //获取轮播图列表

    //设置图片的宽高
    /*for(let i = 0; i < this.aImgList.length; i++){
    	this.aImgList[i].children[0].style.width = wid + "px";
    	this.aImgList[i].children[0].style.height = hei + "px";
    }*/


    this.optTimer(); //开启和清除定时器


}

//自动轮播
Slider.prototype.autoplay = function() {

    console.log(22);

    this.i = 0; //轮播图的计数器
    this.timer = setInterval(() => {
        this.move();
    }, 3000);

    this.move = function() {
        this.i++;

        //临界值处理
        if (this.i == this.aImgList.length) {
            this.i = 0;
        }
        if (this.i == -1) {
            this.i = this.aImgList.length - 1;
        }

        //角标点亮
        //console.log(this.aNumList);

        if (this.aNumList) {

            for (let j = 0; j < this.aNumList.length; j++) {
                this.aNumList[j].className = "";
            }

            this.aNumList[this.i].className = "hover";
        }



        //先把所有的轮播图透明度变成0
        for (let j = 0; j < this.aImgList.length; j++) {
            startMove(this.aImgList[j], { opacity: 0 });
        }
        //再把当前的变成1
        startMove(this.aImgList[this.i], { opacity: 100 });
    }


}

//添加按钮
Slider.prototype.addBtns = function() {
    let oDiv = document.createElement("div");
    oDiv.className = "btns";
    oDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
    this.sliderBox.appendChild(oDiv);

    let aBtns = oDiv.children; //获取按钮

    //左边的按钮321321
    aBtns[0].onclick = () => {
        this.i = this.i - 2;
        this.move();
    }

    //右边的按钮123123
    aBtns[1].onclick = () => {
        this.move();
    }



}


//添加角标
Slider.prototype.addNums = function() {
    let oUl = document.createElement("ul");
    oUl.className = "numList";
    oUl.innerHTML = "<li>1</li><li>2</li><li>3</li>";
    this.sliderBox.appendChild(oUl);


    this.aNumList = oUl.children;
    this.aNumList[0].className = "hover";


    for (let j = 0; j < this.aNumList.length; j++) {
        this.aNumList[j].onmouseover = () => {
            this.i = j - 1;
            this.move();
        }
    }


}

//清除和开启定时器
Slider.prototype.optTimer = function() {
    console.log("111");
    this.sliderBox.onmouseover = () => {
        clearInterval(this.timer);
    }
    this.sliderBox.onmouseout = () => {
        this.timer = setInterval(() => {
            this.move();
        }, 3000);
    }
}