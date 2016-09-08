module.exports = {
    /**
     * 图片压缩
     */
    imgScale: function(src, scale, cbk) {
        if (!src) return cbk(false)
        var canvas = document.createElement('canvas')
        var tImg = new Image
        tImg.onload = function() {
            var initSize = tImg.src.length;
            var width = tImg.width;
            var height = tImg.height;

            //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
            var ratio;
            if ((ratio = width * height / 4000000) > 1) {
                ratio = Math.sqrt(ratio);
                width /= ratio;
                height /= ratio;
            } else {
                ratio = 1;
            }

            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            //铺底色
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(tImg, 0, 0, width, height);

            //进行最小压缩
            var ndata = canvas.toDataURL("image/jpeg", 1);

            // console.log("压缩前：" + initSize);
            // console.log("压缩后：" + ndata.length);
            // console.log("压缩率：" + ~~(100 * (initSize - ndata.length) / initSize) + "%");

            cbk(ndata);
        };
        tImg.src = src

    },
    /**
     * 获取文件的大小
     * @param input 文件选择框
     * @return 文件的大小 以KB为单位
     */
    fileSize: function(input, size) {
        var kb = 0;
        if (input.files && input.files[0]) {
            var size = input.files[0].size;
            if (size > 0) {
                kb = (Math.round(size * 100 / 1024) / 100); //转为kb
            }
        }
        return kb;
    },
    /**
     * 验证是否是图片
     */
    isImg: function(str) {
        if (!str) {
            return false;
        }
        var ext = str.substring(str.lastIndexOf('.') + 1, str.length);
        ext = ext.toLowerCase();
        if (ext != 'jpg' && ext != 'jpeg' && ext != "png" && ext != "gif" && ext != "bmp") {
            return false;
        }
        return true;
    },
    /**
     * file绑定选择事件，并读图片为base64
     * @param el 要绑定事件的对象
     * @param before 图片识别前的处理
     * @param compiled 识别图片后的回调
     */
    bindImgChange: function(el, before,compiled) {
        var self = this;
        el.onchange = function() {
            var val = el.value;
            if (self.isImg(val)) {
                var fileSize = self.fileSize(el);
                if (fileSize > 30720) {
                    compiled({ status : 'err',content : '图片大小请不要超过30MB'});
                } else {
                    before({status:'reading',content:'正在识别图片,请稍等...'});
                    var fr = new FileReader();
                    fr.onload = function(e) {
                        var sBase64 = e.target.result;
                        // 部分Android下base64字符串格式不完整
                        if (window.gIsAndroid && sBase64.indexOf("data:image/") != 0) {
                            var sMime = sName.split(".").pop().toLowerCase();
                            sBase64 = sBase64.replace("base64,", "image/" + sMime + ";base64,");
                        }
                        el.value = ''; //清空file的value
                        self.imgScale(sBase64, 0.5, function(rs){
                        	compiled({status : 'succ',content : rs});
                        }); //压缩图片
                    }
                    fr.readAsDataURL(this.files[0]);
                }
            } else {
                compiled({ status : 'err',content : '请选择格式正确的图片'});
            }
        }
    }
}
