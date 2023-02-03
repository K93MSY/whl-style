export function button(){
    //Query
    function $(query){
        if(query.charAt(0) == '.'){
            return document.querySelector(query.slice(1));
        }else if(query.charAt(0) == '#'){
            return document.getElementById(query.slice(1));
        }
    }

    for(var whl_btn_i = 0; whl_btn_i < $(".btn").length; i++){
        $(".btn")[i].addEventListener("click",() => {
            $(".btn").insertAdjacentHTML('afterbegin', '<div style=""></div>');
        }, false);
    }
}