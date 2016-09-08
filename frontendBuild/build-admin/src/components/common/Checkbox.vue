<style>
.check-left {
    display: inline;
    margin-right: 10px;
}

.check-ul {
    margin: 20px 15px !important;
}

.tagsinput {
    border: 1px solid #e6e6e6;
    box-shadow: none;
    padding: 6px 12px;
    line-height: 20px;
    display: block;
}

.tagsinput > .tag {
    display: inline-block;
    margin-right: 5px !important;
}
</style>
<template>
    <slot name="checkbox_label"></slot>
    <div class="tagsinput form-control">
        <span class="tag label label-success" v-for="item in dataModel"> {{item}} </span>
    </div>
    <ul class="has-success check-ul">
        <li class="checkbox-custom check-left" v-for="item in value">
            <input id="checkbox{{ item.id }}" type="checkbox" v-model="dataModel" value="{{ item.display_name }}">
            <label for="checkbox{{ item.id }}" class="checkbox-success">{{ item.display_name }}</label>
        </li>
    </ul>
</template>
<script>
var http = require('../../utils/HttpHelper.js');

module.exports = {
    props: ['value'],
    data: function() {
        return {
            dataModel: []
        }
    },
    ready: function() {

        var self = this;
        http.role.query({
            succ: function(rs) {
                self.value = rs
            },
            err: function(msg) {
                console.log(msg)
            }
        })
    }
}
</script>
