<template>
	<div class="form-group">
        <label for="name">权限标识</label>
        <input id="name" type="text" class="form-control" name="name">
    </div>
    <div class="form-group">
        <label for="type">权限分类</label>
        <select id="type" class="form-control" name="type">
            <option value="menu">菜单权限</option>
            <option value="action">操作权限</option>
        </select>
    </div>
    <div class="form-group">
        <label for="display_name">权限名称</label>
        <input id="display_name" type="text" class="form-control" name="display_name">
    </div>
    <div class="form-group">
        <label for="description" class="col-sm-3 control-label">权限描述</label>
    	<input id="description" type="text" class="form-control" name="description">
    </div>
</template>