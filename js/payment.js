window.onload = function () {
    //获取显示/隐藏按钮dom对象
    let showBtn = document.getElementById('showBtn');

    //获取订单明细dom对象
    let detailet = document.getElementById('detailet');

    //设置默认订单明细隐藏
    detailet.style.display = 'none';

    showBtn.onclick = function () {
        //判断订单明细dom对象是否隐藏，如果是，就显示，否则就隐藏
        if (detailet.style.display == 'none') {
            detailet.style.display = 'block';
        } else {
            detailet.style.display = 'none';
        }
    }
}