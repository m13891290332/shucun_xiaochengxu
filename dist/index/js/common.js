//表格
function tool_table(config = []) {
    layui.use(config, function () {
        //动态生成变量
        for (var i in config) {
            eval(config[i] + "=layui." + config[i])
        }

        renderTable = function () {
            if (typeof treetable !== "undefined") {

                var check = {
                    "请先定义 init.index_url": init.index_url,
                    "请先定义 init.table_elem": init.table_elem,
                    "请先定义 init.table_render_id": init.table_render_id,
                    "请先定义 init.tools": init.tools,
                    "请先定义 init.cols": init.cols,
                    "请先定义 init.pidName": init.pidName,
                }

                for (i in check) {
                    if (typeof check[i] == "undefined") {
                        layer.alert(i);
                        return;
                    }
                }


                treetable.render({
                    treeColIndex: 1,
                    treeSpid: 0,
                    homdPid: 99999999,
                    treeIdName: 'id',
                    treePidName: init.pidName,
                    url: init.index_url,
                    elem: init.table_elem,
                    id: init.table_render_id,
                    toolbar: init.tools,
                    page: false,
                    skin: 'line',
                    cols: init.cols,
                    done: function () {
                        layer.closeAll('loading');
                    }
                })
            }else{
                var check = {
                    "请先定义 init.table_render_id": init.table_render_id,
                }
                for (i in check) {
                    if (typeof check[i] == "undefined") {
                        layer.alert(i);
                        return;
                    }
                }
                table.reload(init.table_render_id);
            }
        };

        if (typeof treetable !== "undefined") {


            renderTable();


            //数据表格
        } else if (typeof table !== "undefined") {

            var check = {
                "请先定义 init.table_elem": init.table_elem,
                "请先定义 init.index_url": init.index_url,
                "请先定义 init.tools": init.tools,
                "请先定义 init.cols": init.cols,
            }
            for (i in check) {
                if (typeof check[i] == "undefined") {
                    layer.alert(i);
                    return;
                }
            }

            table.render({
                elem: init.table_elem,
                url: init.index_url,
                toolbar: init.tools,
                defaultToolbar: ['filter', 'exports', 'print', {
                    title: '搜索',
                    layEvent: 'LAYTABLE_TIPS',
                    icon: 'layui-icon-search'
                }],
                cols: init.cols,
                limits: [10, 15, 20, 25, 50, 100, 200, 500, 1000, 5000, 10000, 50000, 100000, -1],
                limit: 15,
                page: true,
                skin: 'line',
                done: function () {
                    layer.closeAll('loading');
                }
            });
        }

        //监听事件
        if (typeof init.table_render_id !== "undefined") {
            // 头部
            table.on('toolbar(' + init.table_render_id + ')', function (obj) {
                switch (obj.event) {
                    case "LAYTABLE_TIPS" :
                        $(".table-search-fieldset").toggleClass("layui-hide");
                        break;
                    case "LAYTABLE_COLS" :
                        break;
                    case "LAYTABLE_EXPORT" :
                        break;
                    case "LAYTABLE_PRINT" :
                        break;
                    case "add" :

                        var check = {
                            "请先定义 init.add_url": init.add_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }

                        var index = layer.open({
                            title: '添加',
                            type: 2,
                            shade: 0.2,
                            maxmin: true,
                            shadeClose: true,
                            area: ['70%', '80%'],
                            content: init.add_url,
                        });
                        $(window).on("resize", function () {
                            layer.full(index);
                        });
                        break;
                    case "edit":
                        var check = {
                            "请先定义 init.edit_url": init.edit_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }
                        var index = layer.open({
                            title: '编辑',
                            type: 2,
                            shade: 0.2,
                            maxmin: true,
                            shadeClose: true,
                            area: ['70%', '80%'],
                            content: init.edit_url,
                        });
                        $(window).on("resize", function () {
                            layer.full(index);
                        });
                        break;
                    case "del":
                        var check = {
                            "请先定义 init.delete_url": init.delete_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }
                        var arr = [];
                        var checkStatus = table.checkStatus(obj.config.id);
                        var data = checkStatus.data;
                        data.forEach(v => {
                            arr.push(v.id)
                        })
                        if(arr.length<=0){
                            layer.msg("未勾选需要操作的数据!")
                            return ;
                        }

                        layer.confirm('确定删除吗?', function (index) {
                            _curl(init.delete_url, "POST", {ids: arr}, function (res) {
                                layer.msg(res.msg);
                                renderTable();

                            })
                        })
                        break
                    case "refresh":
                        renderTable();
                        break;
                    default:
                        var url = $(this).attr("tools-url");
                        var content = $(this).attr("tools-msg")
                        var noid = $(this).attr("tools-noid")


                        if (!url) {
                            console.log("标签是否绑定 tools-url")
                        }
                        if (!content) {
                            console.log("标签是否绑定 tools-msg")
                        }

                        var arr = [];
                        var checkStatus = layui.table.checkStatus(obj.config.id);
                        var data = checkStatus.data;
                        data.forEach(v => {
                            arr.push(v.id)
                        })
                        if(noid===undefined){
                            if(arr.length<=0){
                                layer.msg("未勾选需要操作的数据!")
                                return ;
                            }
                        }

                        if ($(this).hasClass("ajax")) {
                            layer.confirm(content, function (index) {
                                _curl(url, "POST", {ids: arr}, function (res) {
                                    layer.msg(res.msg);
                                    layui.table.reload(init.table_render_id);
                                })
                            });
                        } else {
                            var index = layer.open({
                                title: content,
                                type: 2,
                                shade: 0.2,
                                maxmin: true,
                                shadeClose: true,
                                area: ['70%', '80%'],
                                content: url+"?ids="+arr.toString(),
                            });
                            $(window).on("resize", function () {
                                layer.full(index);
                            });
                            return false;
                        }


                        break;
                }
            });
            //右侧
            table.on('tool(' + init.table_render_id + ')', function (obj) {
                var data = obj.data;
                switch (obj.event) {

                    case "edit":
                        var check = {
                            "请先定义 init.edit_url": init.edit_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }

                        var index = layer.open({
                            title: '编辑',
                            type: 2,
                            shade: 0.2,
                            maxmin: true,
                            shadeClose: true,
                            area: ['70%', '80%'],
                            content: init.edit_url + "?id=" + data.id,
                        });
                        $(window).on("resize", function () {
                            layer.full(index);
                        });
                        return false;
                        break;
                    case "add":

                        var check = {
                            "请先定义 init.add_url": init.add_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }
                        var index = layer.open({
                            title: '添加',
                            type: 2,
                            shade: 0.2,
                            maxmin: true,
                            shadeClose: true,
                            area: ['70%', '80%'],
                            content: init.add_url + "?cid=" + data.id,
                        });
                        $(window).on("resize", function () {
                            layer.full(index);
                        });
                        return false;
                        break;
                    case "del":
                        var check = {
                            "请先定义 init.delete_url": init.delete_url,
                        }
                        for (i in check) {
                            if (typeof check[i] == "undefined") {
                                layer.alert(i);
                                return;
                            }
                        }
                        layer.confirm('确定删除吗?', function (index) {
                            _curl(init.delete_url, "POST", {ids: [data.id]}, function (res) {
                                layer.msg(res.msg);

                                obj.del();
                            })

                        });
                        break;
                    default:
                        var url = $(this).attr("tools-url");
                        var content = $(this).attr("tools-msg")
                        if (!url) {
                            console.log("标签是否绑定 tools-url")
                        }
                        if (!content) {
                            console.log("标签是否绑定 tools-msg")
                        }

                        if ($(this).hasClass("ajax")) {
                            layer.confirm(content, function (index) {
                                _curl(url, "POST", {id: data.id}, function (res) {
                                    renderTable();
                                    layer.msg(res.msg);
                                })

                            });
                        } else {

                            var index = layer.open({
                                title: content,
                                type: 2,
                                shade: 0.2,
                                maxmin: true,
                                shadeClose: true,
                                area: ['70%', '80%'],
                                content: url+"?id="+data.id,
                            });
                            $(window).on("resize", function () {
                                layer.full(index);
                            });
                            return false;
                        }
                        break;
                }
            });
            // 行内
            table.on("edit(" + init.table_render_id + ")", function (obj) {
                let data = obj.data;
                var postData = {}
                postData[obj.field] = obj.value;

                var check = {
                    "请先定义 init.edit_url": init.edit_url,
                }
                for (i in check) {
                    if (typeof check[i] == "undefined") {
                        layer.alert(i);
                        return;
                    }
                }


                layer.confirm('确定修改吗?', function (index) {

                    _curl(init.edit_url + "?id=" + data.id, "POST", postData, function (res) {
                        renderTable();
                        layer.msg(res.msg);
                    })

                });

            })
            //排序
            table.on("sort(" + init.table_render_id + ")", function (obj) {
                renderTable();

            })
            //搜索
            form.on('submit(data-search-btn)', function (data) {
                var result = JSON.stringify(data.field);
                //执行搜索重载
                table.reload(init.table_render_id, {
                    page: {
                        curr: 1
                    }
                    , where: {
                        searchParams: result
                    }
                }, 'data');

                return false;
            });
        }

    });

}


//form表单
function tool_form(config = []) {
   return layui.use(config, function () {
        for (var i in config) {
            eval(config[i] + "=layui." + config[i])
        }
        if (typeof form !== "undefined") {

            var check = {
                "请先定义 init.table": init.table,
                "请先定义 init.post_url": init.post_url,
                "请先定义 init.saveBtn": init.saveBtn,
            }

            for (i in check) {
                if (typeof check[i] == "undefined") {
                    layer.alert(i);
                    return;
                }
            }

            form.on("submit(" + init.saveBtn + ")", function (data) {


                _curl(init.post_url, "POST", data.field, function (res) {
                    parent.layer.msg(res.msg);
                    if (init.table) {
                        parent.renderTable();
                    }
                    var iframeIndex = parent.layer.getFrameIndex(window.name);
                    parent.layer.close(iframeIndex);
                })
            })
        }

        if (typeof iconPickerFa !== "undefined") {
            var check = {
                "请先定义 init.iconPickerFa": init.iconPickerFa,
            }
            for (i in check) {
                if (typeof check[i] == "undefined") {
                    layer.alert(i);
                    return;
                }
            }

            iconPickerFa.render({
                // 选择器，推荐使用input
                elem: init.iconPickerFa,
                // fa 图标接口
                url: "/layuimini/lib/font-awesome-4.7.0/less/variables.less",
                // 是否开启搜索：true/false
                search: true,
                // 是否开启分页
                page: true,
                // 每页显示数量，默认12
                limit: 16,
                // 点击回调
                click: function (data) {

                },
                // 渲染成功后的回调
                success: function (d) {

                }
            });
        }


    });
}

//请求
function _curl(url, type, data, fun) {

    $.ajax({
        url,
        type,
        data,
        dataType: "json",
        success(e) {
            if (e.code != 200) {
                layer.msg(e.msg)
            } else {
                fun(e)
            }
        },
        error(e) {
            if (e.status != 200) {
                layer.msg("请求错误")
            }
        }, complete(e, b) {
            if (!e.responseJSON) {
                // layer.msg("操作失败");
                return
            }

        }
    })
}

//图片预览
function previewImg(obj) {
    layer.photos({
        photos: {
            "data": [
                {
                    "src": obj.src
                }
            ]
        },
    });
}





