export function button(){
    window.onload = function () {
        console.log(document.getElementsByClassName('btn'));
        for(var whl_btn_i = 0; whl_btn_i < document.getElementsByClassName('btn').length; whl_btn_i++){
            console.log(whl_btn_i);
            document.getElementsByClassName('btn')[whl_btn_i].addEventListener('click', (e)=>{
                console.log(e);
                console.log(e.target.style);
                e.target.style.boxShadow = "0px 0px 0px 0px var(--btn-wave-begin)";
                e.target.style.boxShadow = "0px 0px 0px 6px var(--btn-wave)";
                e.target.style.transition = ".4s ease-out";
                setTimeout(()=>{
                    e.target.style.boxShadow = null;
                    e.target.style.transition = "none";
                },400)
            })
        }
    }
}//box-shadow: 0px 0px 0px 7px var(--btn-color);