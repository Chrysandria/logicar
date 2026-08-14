import Swal from "sweetalert2";

export default {
    notify(title,text,icon){
        Swal.fire({
            "title" : title,
            "text" : text,
            "icon" : icon,
            "timer" : 3000,
            "timerProgressBar" : true,
            "showConfirmButton" : false
        })
    },

    async ask(text){
        var question = await Swal.fire({
            "title" : "Attention",
            "text" : text,
            "icon" : "question",
            "showCancelButton" : true,
        });

        return question.isConfirmed;
    },

    loading(title,text) {
        Swal.fire({
            title: title,
            text: text,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    },

    close(){
        Swal.close();
    }
}