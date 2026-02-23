/* =========================================
   MAIN JS - MINI LMS PKN KELAS 6
   Versi Stabil & Anti Error
========================================= */

console.log("Aplikasi PKN Kelas 6 siap digunakan.");

/* ===============================
   Jalankan setelah halaman siap
================================= */
document.addEventListener("DOMContentLoaded", function(){

    // ===============================
    // Tampilkan Nama Siswa (jika ada)
    // ===============================
    let nama = localStorage.getItem("nama_siswa");
    let namaEl = document.getElementById("namaSiswa");

    if(nama && namaEl){
        namaEl.innerText = nama;
    }

    // ===============================
    // Hitung Progress Global (Materi 1–5)
    // ===============================
    let total = 0;
    let jumlahMateri = 5;

    for(let i = 1; i <= jumlahMateri; i++){
        total += parseInt(localStorage.getItem("nilai_materi" + i)) || 0;
    }

    let rata = total / jumlahMateri;

    let progressEl = document.getElementById("globalProgress");
    if(progressEl){
        progressEl.style.width = rata + "%";
        progressEl.innerText = Math.round(rata) + "%";
    }

    // ===============================
    // Update Progress Bar Materi (jika ada)
    // ===============================
    let bar = document.querySelector(".progress-bar");
    if(bar){
        bar.style.width = "100%";
    }

});


/* =========================================
   Fungsi Bacakan (TTS Aman)
========================================= */
function bacakan(){
    let teks = document.body.innerText;

    if('speechSynthesis' in window){
        let suara = new SpeechSynthesisUtterance(teks);
        suara.lang = "id-ID";
        speechSynthesis.speak(suara);
    } else {
        alert("Browser tidak mendukung fitur suara.");
    }
}

window.onload = function(){
    let nama = localStorage.getItem("nama_siswa");
    if(nama){
        document.getElementById("namaSiswa").innerText = nama;
    }

    let selesai = 0;

    for(let i=1;i<=5;i++){
        if(localStorage.getItem("materi"+i+"_selesai")){
            selesai++;
        }
    }

    let persen = (selesai/5)*100;

    let bar = document.getElementById("globalProgress");
    bar.style.width = persen + "%";
    bar.innerText = persen + "%";
}