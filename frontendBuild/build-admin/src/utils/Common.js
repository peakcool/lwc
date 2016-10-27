module.exports = {
    go : function(rou){
        window.location.href = '#!/' + rou;
    },
    /**
     * 价格／浮点数验证
     */
    isFloat: function(str) {
        str += '';
        var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
        var result = str.match(reg);
        if(result == null){return false;}
        return true;
    },
    /**
     * 标题的验证
     */
    isTitle: function(str) {
        str += '';
        if(str.length >= 2 && str.length <= 32){
            return true;
        }else{
            return false;
        }
    },
    /**
    * 商品简介得验证
    */
    isProductAbout : function(str){
        str += '';
        if(str.length >= 10 && str.length <= 300){
            return true;
        }else{
            return false;
        }
    },
    /**
    * URL的验证
    * 匹配 xx.xxx.com 这种
    */
    isUrl : function(str_url) {// 验证url
        str_url = 'http://' + str_url;
        var strRegex = "^((https|http)?://)"
        + "(" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(str_url);
    }, 
    /**
    * 判断各个组件，是否验证通过
    * @param vm 用于判断的组件对象
    */
    isAdopt : function(vm){
        var comp = vm.$children;//组件列表
        var isOK = true;//记录输入框组件，是否全部通过
        for(var i = 0,len = comp.length; i < len; i++){
            if(comp[i].isAdopt){
                if(!comp[i].isAdopt()){
                    isOK = false;
                }
            }
        }
        return isOK;
    },
    /**
     * 提示框
     * @param  {[type]} txt  文本内容
     * @param  {[type]} time 持续秒数
     * @param  {[type]} type success||error||load
     * @parma callback 回调函数
     * @return {[type]}      [description]
     */
    tips: function(txt,type,time,callback) {
        var self = this;
        self.rmTips();//之前有提示框，先移除
        var tips = document.getElementById('dialog');
        if(tips) {
            return false;
        }
        tips = document.createElement('div');
        tips.id = 'dialog';
        var html = '<div class="dialog-content">';
        if(type == 'success') {
            html += '<p class="alert-success"><i class="fa fa-check"></i>'+txt+'</p>';
        } else if(type == 'error') {
            html += '<p class="alert-danger"><i class="fa fa-close"></i>'+txt+'</p>';
        }else if(type == 'loading'){
            html += '<p class="alert-info"><i class="fa fa-circle-o-notch eleCircle"></i>'+txt+'</p>';
        }
        tips.innerHTML = html;
        
        document.body.appendChild(tips);
        if(time > 0){
            setTimeout(function() {
                self.rmTips();
                if(callback){
                    callback();
                }
            },time);
        }
    },
    /**
    * 移除多话框
    */
    rmTips: function(){
        var dialog = document.getElementById("dialog");
        if(dialog != null && dialog != undefined){
            document.body.removeChild(dialog);
        }
    }
}