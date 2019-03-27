function Fire(){
    this.source_header = null;
    this.createSpan();
}

Fire.prototype = {
    createSpan:function () {
        this.source_header = document.createElement("span");
        this.source_header.className = "fire_header";

        // 获得屏幕的宽高
        let w = document.documentElement.clientWidth;

        // 生成随机位置
        let l = Math.random() * w;

        // 随机大小
        let size =parseInt( Math.random() * 20 + 15);

        this.source_header.style.width = size + "px";
        this.source_header.style.height = size + "px";

        // 随机运行时长
        let count_time = Math.random() * 1 + 1;
        this.source_header.style.animationDuration = count_time + "s";

        // 随机颜色
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);

        this.source_header.style.backgroundColor = "rgb("+r+","+g+","+b+")";

        // 设置位置
        this.source_header.style.left = l + "px";

        // 设置动画类型
        let anim_type =  Math.round(Math.random());
        if(anim_type === 0){
            this.source_header.style.animationName = "move_500";
        }else{
            this.source_header.style.animationName = "move_600";
        }

        // 延迟动画
        let time = Math.random() * 1.5;
        this.source_header.style.animationDelay = time + "s";

        // 监听动画
        this.source_header.addEventListener("animationend",function(){
            // 1.1 获得其位置
            let l = this.offsetLeft;
            let t = 0;

            if(anim_type === 0){
                t = this.offsetTop - 500;
            }else{
                t = this.offsetTop - 650;
            }

            // 1.2 创建替代元素
            let end_span =  document.createElement("span");
            end_span.className  = "end_span";

            let e_h = size * 17;
            end_span.style.width = e_h + "px";
            end_span.style.height = e_h + "px";

            end_span.style.left = l - (e_h - size) / 2  + "px";
            end_span.style.top = t - (e_h - size) / 2 + "px";

            // 背景
            let index = Math.round(Math.random()*8) + 1;
            let img_src = "url(./imgs/"+index+".png)";
            end_span.style.backgroundImage = img_src;



            // 1.3 监听动画完成
            end_span.addEventListener("animationend",function () {
                document.body.removeChild(this);
            });

            document.body.appendChild(end_span);

            this.source_header = null;
            document.body.removeChild(this);
        });

        document.body.appendChild(this.source_header);
    }
};