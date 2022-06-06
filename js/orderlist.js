window.onload = function () {
    //获取显示隐藏按钮dom数组
    let showBtnArr = document.getElementsByClassName('fa-caret-down');

    //获取订单明细dom数组
    let detailet = document.getElementsByClassName('order-detailet');

    for(let i = 0;i<detailet.length;i++){
        detailet[i].style.display='none';
    }
    
    for (let i = 0; i < showBtnArr.length; i++) {
        showBtnArr[i].onclick = function () {
            if (detailet[i].style.display == 'none') {
                detailet[i].style.display = 'block';
            } else {
                detailet[i].style.display = 'none';
            }
        }
    }

}