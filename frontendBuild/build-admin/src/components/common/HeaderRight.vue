<style>
.header-right {
    float: right;
    line-height: 65px;
}

.headermenu > li {
    /*display: inline-block;*/
    float: left;
    border-left: 1px solid #eee;
    position: relative;
}


.headermenu .dropdown-toggle {
    padding: 12px 10px;
    border-color: #fff;
    background: #fff;
    border-radius: 0;
    /*border: 1;*/
}

.btn-group {
    height: 100%;
    width: 100%;
}
.btn-group>.btn{
    position: relative;
    float: left;
}

.btn-group>.btn:hover{
    font-weight: 900;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.headermenu .dropdown-toggle img {
    vertical-align: middle;
    margin-right: 5px;
    width: 26px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}

</style>
<template>
    <div class="header-right">
        <ul class="headermenu">
            <li>
                <div role="group" aria-label="Button group with nested dropdown" class="btn-group">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn dropdown-toggle">
                        <img src="../../static/img/admin.png" alt="">
                        Admin
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#">Dropdown link</a></li>
                        <li><a href="#">Check Out</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- header-right -->
</template>

<script>

</script>

