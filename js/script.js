// document.addEventListener('DOMContentLoaded', () => {
//     const pages = document.querySelectorAll('.page');
//     const nextButtons = document.querySelectorAll('.next-button');

//     function showPage(id) {
//         pages.forEach(page => {
//             page.classList.remove('active');
//             // Reset animations by re-applying them (optional, can be refined)
//             page.querySelectorAll('.fade-in, .delayed-fade, .delayed-fade-more').forEach(el => {
//                 el.style.animation = 'none';
//                 el.offsetHeight; /* Trigger reflow */
//                 el.style.animation = null;
//             });
//         });
//         document.getElementById(id).classList.add('active');

//         // Khusus untuk halaman pertama (index), jalankan efek ketik saat aktif
//         if (id === 'welcomePage') {
//             typeWriterEffect();
//         }
//     }

//     // --- Navigasi Halaman ---
//     nextButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const targetPageId = button.dataset.target;
//             showPage(targetPageId);
//         });
//     });

//     // --- Efek Ketik (Typewriter Effect) untuk welcomePage ---
//     const typedTextElement = document.getElementById('typed-text');
//     const textToType = `Hai Viranisa, ini dari si ganteng wkwk. gini, gw tu smk jurusan RPL (rekayasa perangkat lunak) nah gw tu bisa bikin website gini. ni gw buatin buat lu hehe`;
//     let charIndex = 0;
//     const typingSpeed = 50;

//     function typeWriterEffect() {
//         if (!typedTextElement) return;
//         typedTextElement.textContent = '';
//         charIndex = 0;
        
//         const button = document.querySelector('#welcomePage .button.next-button');
//         const signature = document.querySelector('#welcomePage .signature');
//         if (button) button.style.opacity = '0';
//         if (signature) signature.style.opacity = '0';

//         function type() {
//             if (charIndex < textToType.length) {
//                 typedTextElement.textContent += textToType.charAt(charIndex);
//                 charIndex++;
//                 setTimeout(type, typingSpeed);
//             } else {
//                 if (button) button.style.opacity = '1';
//                 if (signature) signature.style.opacity = '1';
//             }
//         }
//         type();
//     }


//     // --- Interaksi Bintang di page2 ---
//     const interactiveStar = document.getElementById('interactiveStar'); // Mengganti 'interactiveHeart'
//     const starMessage = document.getElementById('starMessage');       // Mengganti 'heartMessage'
//     if (interactiveStar && starMessage) {
//         interactiveStar.addEventListener('click', () => {
//             starMessage.textContent = "Makasi ya udah mau dengerin gw walaupun di ketawain ! ✨";
//             interactiveStar.style.transform = 'scale(1.2) rotate(15deg)';
//             setTimeout(() => {
//                 interactiveStar.style.transform = 'scale(1) rotate(0deg)';
//             }, 300);
//         });
//     }

//     // --- Interaksi Tombol OK di page3 ---
//     const okButton = document.getElementById('okButton'); // Mengganti 'yesButton' dan 'noButton'
//     const responseMessage = document.getElementById('responseMessage');
//     const buttonGroup = document.querySelector('#page3 .button-group');

//     if (okButton && responseMessage && buttonGroup) {
//         okButton.addEventListener('click', () => {
//             responseMessage.textContent = "Dah gtu aja, Sampai jumpa lagi!";
//             responseMessage.style.color = '#4CAF50'; // Hijau
//             buttonGroup.style.display = 'none';
//             createConfetti(); // Confetti tetap bisa untuk perayaan apresiasi teman
//         });
//     }

//     // --- Fungsi Confetti (opsional) ---
//     function createConfetti() {
//         for (let i = 0; i < 100; i++) {
//             const confetti = document.createElement('div');
//             confetti.classList.add('confetti');
//             confetti.style.left = Math.random() * 100 + 'vw';
//             confetti.style.animationDelay = Math.random() * 2 + 's';
//             document.body.appendChild(confetti);

//             confetti.addEventListener('animationend', () => {
//                 confetti.remove();
//             });
//         }
//     }

//     // Tampilkan halaman pertama saat DOM selesai dimuat
//     showPage('welcomePage');
// });

document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const nextButtons = document.querySelectorAll('.next-button');

    function showPage(id) {
        pages.forEach(page => {
            page.classList.remove('active');
            page.querySelectorAll('.fade-in, .delayed-fade, .delayed-fade-more').forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; 
                el.style.animation = null;
            });
        });
        document.getElementById(id).classList.add('active');

        if (id === 'welcomePage') {
            typeWriterEffect();
        }
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.dataset.target;
            showPage(targetPageId);
        });
    });

    // --- Efek Ketik (Typewriter Effect) untuk welcomePage ---
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Hai Viranisa, ini dari si ganteng wkwk. gini, gw tu smk jurusan RPL (rekayasa perangkat lunak) nah gw tu bisa bikin website gini. ni gw buatin buat lu hehe..";
    let charIndex = 0;
    const typingSpeed = 50;

    function typeWriterEffect() {
        if (!typedTextElement) return;
        typedTextElement.textContent = '';
        charIndex = 0;
        
        const button = document.querySelector('#welcomePage .button.next-button');
        const signature = document.querySelector('#welcomePage .signature');
        if (button) button.style.opacity = '0';
        if (signature) signature.style.opacity = '0';

        function type() {
            if (charIndex < textToType.length) {
                typedTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                if (button) button.style.opacity = '1';
                if (signature) signature.style.opacity = '1';
            }
        }
        type();
    }


    // --- Interaksi Hati di page2 ---
    const interactiveHeart = document.getElementById('interactiveHeart');
    const heartMessage = document.getElementById('heartMessage');
    let heartClickCount = 0; // Tambahkan counter klik hati
    if (interactiveHeart && heartMessage) {
        interactiveHeart.addEventListener('click', () => {
            heartClickCount++;
            interactiveHeart.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                interactiveHeart.style.transform = 'scale(1) rotate(0deg)';
            }, 300);

            // Respon berbeda berdasarkan jumlah klik
            if (heartClickCount === 1) {
                heartMessage.textContent = "Hehe keren ga ";
            } else if (heartClickCount === 2) {
                heartMessage.textContent = "Makasi lagi deh ya🥰";
            } else if (heartClickCount === 3) {
                heartMessage.textContent = "lu catik ge serius, moga aja blom ada yg punya ✨";
            } else {
                heartMessage.textContent = "Mmm... Minta pap boleh gasi klo bukan siapa-siapa wkwk";
            }
        });
    }

    // --- Interaksi Tombol YA/TIDAK di page3 ---
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseMessage = document.getElementById('responseMessage');
    const buttonGroup = document.querySelector('#page3 .button-group');

    const finalTitle = document.getElementById('finalTitle');
    const finalMessage = document.getElementById('finalMessage');
    const finalImage = document.getElementById('finalImage');


    if (yesButton && noButton && responseMessage && buttonGroup) {
        // Menonaktifkan tombol 'Tidak'
        noButton.disabled = true;
        noButton.style.cursor = 'not-allowed';
        noButton.style.opacity = '0.5';
        
        yesButton.addEventListener('click', () => {
            // Respon awal saat YA diklik
            responseMessage.textContent = "Rill kah brokkk";
            responseMessage.style.color = '#4CAF50';
            buttonGroup.style.display = 'none'; 
            createConfetti();

            // Pindah ke halaman 4 dengan pesan "YA" setelah jeda
            setTimeout(() => {
                finalTitle.textContent = "Yeyy Anjayzz";
                finalMessage.textContent = "Wkwkwk makasih yakk, jangan lupa kasi tau jawabannya yaa ke wa .";
                finalImage.src = "https://via.placeholder.com/150/FFD700/FFFFFF?text=Love";
                showPage('page4');
            }, 1500); 
        });

        noButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Respon saat TIDAK diklik (walaupun disabled)
            responseMessage.textContent = "Eitss jangan dongg harus mau ya wkwk";
            responseMessage.style.color = '#F44336';
            // Bisa juga tambahkan sedikit getaran pada tombol 'Tidak' jika ingin
            // noButton.style.animation = 'shake 0.3s';
            // setTimeout(() => noButton.style.animation = 'none', 300);
        });
    }

    // --- Fungsi Confetti (opsional) ---
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    showPage('welcomePage');
});