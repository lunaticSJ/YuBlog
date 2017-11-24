(function() {
    // 去掉重复函数，分装鼠标点击时间
    var clickEvent = function(el1, el2) {
        el1.onclick = function() {
            if (el2.style.display === 'none') {
                el2.style.display = 'block';
            } else {
                el2.style.display = 'none';
            }
        }
    };

    // 下拉菜单事件
    var dropNav = document.getElementById('drop');
    var navCate = document.getElementsByClassName('category-nav')[0];

    // 鼠标进入
    navCate.onmouseenter = function() {
        dropNav.style.display = 'block';
    };

    // 鼠标离开
    navCate.onmouseleave = function() {
        dropNav.style.display = 'none';
    };

    // 搜索框事件
    var searchNav = document.getElementsByClassName('search-btn')[0];
    var searchDiv = document.getElementsByClassName('search')[0];
    var searchIpt = document.getElementsByClassName('search-ipt')[0];

    // 鼠标点击
    searchNav.onclick = function() {
        if (searchDiv.style.display === 'none') {
            searchDiv.style.display = 'block';
            searchIpt.focus();
        } else {
            searchDiv.style.display = 'none';
        }
    };

    // 回到顶部
    window.onscroll = function() {
        var toTop = document.getElementById('go-to-top');
        var oldTop = document.documentElement.scrollTop || document.body.scrollTop;
        var timer;
        toTop.onclick = function() {
            var speed = 5;
            timer = setInterval(function() {
                var top = document.documentElement.scrollTop || document.body.scrollTop;
                var goSpeed = top/100;
                if (goSpeed > speed) {
                    goSpeed = speed;
                } else if (goSpeed < 3) {
                    goSpeed = 3;
                }

                if (top > speed) {
                    if(document.documentElement.scrollTop){
                        top = document.documentElement.scrollTop-=speed;
                    }else{
                        top = document.body.scrollTop-=speed;
                    }
                } else {
                    clearInterval(timer);
                }
            }, 5);
        };

        var newTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (newTop > 100) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
        if (newTop > oldTop) {
            clearInterval(timer);
        }
        oldTop = newTop;
    };

    // width < 960px
    // 导航事件
    var mobileNav = document.getElementsByClassName('mobile-site-nav')[0];
    var mobileNavBtn = document.getElementsByClassName('mobile-menu-btn')[0];

    clickEvent(mobileNavBtn, mobileNav);

    // 分类显示下拉
    var mobileCate = document.getElementsByClassName('mobile-category')[0];
    var mobileDrop = document.getElementsByClassName('mobile-drop-category')[0];

    clickEvent(mobileCate, mobileDrop);

})();
