const kirim = document.querySelector('.container .kirim');
const input = document. querySelector('.container .input-user');
const comp = document.querySelector('.container .komputer');
const result = document.querySelector('.container .result');

var counter = 2; //Kesempatan
var komp = Math.round(Math.random() *  10 + 1);
console.log(comp);

function hasil(player, komputer){

    // Kalau menang
    if(player == komputer){
        result.style.color = 'red';
        result.innerHTML = "SELAMAT ANDA BERHASIL MENEBAK ANGKA TERSEBUT";
        komp.innerHTML = komputer;
        input.setAttribute('disabled',true);
        return;
    }

    // Kalau kalah
    else{

        //Kalau masih ada kesempatan //2 //1
        if(counter >= 2){
            counter--;
            kirim.innerHTML = 'Submit (' + (counter) +')';

            if(komputer > player){
                result.style.color = 'yellow';
                result.innerHTML = "Komputer punya nilai lebih besar";
                return;

            }
            else{
                result.style.color = 'yellow';
                result.innerHTML = "Komputer punya nilai lebih kecil";
                return;
            }
        }

        //Kalau udah ga ada kesempatan
        else{
            kirim.innerHTML = 'Submit';
            result.style.color = 'red';
            result.innerHTML = "Maaf, Anda Gagal";
            komp.innerHTML = komputer;
            input.setAttribute('disabled',true);
            return;
        }
    }
 }

 // Setiap Button Di Click
 kirim.addEventListener('click',function(){
    hasil(input.value,  comp); 
});





