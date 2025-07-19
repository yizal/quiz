let questions = [
    { question: "Apa kepanjangan dari IP?", answers: ["Internet Protocol", "Internal Port", "Internet Provider", "Intelligent Program"], correct: 0 },
    { question: "Fungsi utama dari router adalah?", answers: ["Menghubungkan jaringan", "Menambah kecepatan internet", "Menghapus virus", "Menyimpan data"], correct: 1 },
    { question: "Tag HTML untuk membuat hyperlink adalah?", answers: ["< a >", "< link >", "< href >", "< h1 >"], correct: 2 },
    { question: "Apa kepanjangan dari DNS?", answers: ["Domain Name System", "Data Network Server", "Digital Number System", "Dynamic Name Service"], correct: 3 },
    { question: "Perangkat keras yang menghubungkan komputer ke jaringan?", answers: ["NIC", "CPU", "RAM", "SSD"], correct: 0 },
    { question: "Apa kepanjangan dari LAN?", answers: ["Local Area Network", "Long Access Node", "Logical Address Naming", "Large Area Network"], correct: 1 },
    { question: "Protokol untuk mentransfer file di internet?", answers: ["FTP", "HTTP", "IP", "SMTP"], correct: 2 },
    { question: "Perintah ping digunakan untuk?", answers: ["Menguji koneksi jaringan", "Memblokir situs web", "Menghapus cache", "Mengganti alamat IP"], correct: 3 },
    { question: "Berapa jumlah bit dalam alamat IPv4?", answers: ["32", "64", "128", "256"], correct: 0 },
    { question: "Teknologi wireless yang digunakan di jaringan lokal?", answers: ["Wi-Fi", "Bluetooth", "NFC", "Infrared"], correct: 1 },
    { question: "Port standar untuk HTTP adalah?", answers: ["80", "443", "21", "22"], correct: 2 },
    { question: "Port standar untuk HTTPS adalah?", answers: ["443", "80", "21", "25"], correct: 3 },
    { question: "Apa kepanjangan dari MAC Address?", answers: ["Media Access Control", "Multiple Access Channel", "Machine Automated Code", "Main Access Controller"], correct: 0 },
    { question: "Perangkat yang digunakan untuk memperluas jangkauan jaringan Wi-Fi?", answers: ["Repeater", "Router", "Modem", "Switch"], correct: 1 },
    { question: "Apa fungsi dari subnet mask?", answers: ["Membagi jaringan menjadi sub-jaringan lebih kecil", "Mengubah alamat IP", "Menghubungkan jaringan dengan internet", "Meningkatkan kecepatan jaringan"], correct: 2 },
    { question: "Apa kepanjangan dari DHCP?", answers: ["Dynamic Host Configuration Protocol", "Data Hypertext Control Protocol", "Domain Host Control Panel", "Dynamic Hyperlink Communication Port"], correct: 3 },
    { question: "Teknologi yang digunakan untuk mengamankan komunikasi dalam jaringan?", answers: ["VPN", "FTP", "SMTP", "DNS"], correct: 0 },
    { question: "Perintah untuk melihat konfigurasi jaringan di Windows?", answers: ["ipconfig", "ping", "tracert", "netstat"], correct: 1 },
    { question: "Satuan kecepatan transfer data dalam jaringan adalah?", answers: ["bps (bit per second)", "Hz (Hertz)", "Watt", "Ohm"], correct: 2 },
    { question: "Jenis jaringan yang mencakup area luas seperti kota atau negara?", answers: ["WAN", "LAN", "MAN", "PAN"], correct: 3 },
    { question: "Tag HTML untuk membuat teks tebal adalah?", answers: ["< b >", "< strong >", "< i >", "< u >"], correct: 0 },
    { question: "Apa fungsi dari switch dalam jaringan?", answers: ["Menghubungkan jaringan", "Membagikan koneksi internet", "Mendistribusikan data ke perangkat yang tepat", "Menghapus cache jaringan"], correct: 2 },
    { question: "Jenis kabel jaringan yang sering digunakan di LAN?", answers: ["Fiber Optic", "Coaxial", "UTP", "HDMI"], correct: 2 },
    { question: "Apa kepanjangan dari ISP?", answers: ["Internet Service Provider", "Internal System Protocol", "Interconnect System Provider", "Internet Security Protocol"], correct: 0 },
    { question: "Apa kepanjangan dari VPN?", answers: ["Virtual Private Network", "Very Protected Network", "Virtual Public Node", "Verified Personal Network"], correct: 0 },
    { question: "Apa yang terjadi jika dua perangkat memiliki IP yang sama dalam satu jaringan?", answers: ["Konflik IP terjadi", "Koneksi menjadi lebih cepat", "Salah satu perangkat mendapatkan IP baru otomatis", "Tidak ada efek apa-apa"], correct: 0 },
    { question: "Tag HTML untuk membuat paragraf adalah?", answers: ["< p >", "< div >", "< span >", "< br >"], correct: 0 },
    { question: "Protokol yang digunakan untuk mengirim email?", answers: ["SMTP", "HTTP", "FTP", "IP"], correct: 0 },
    { question: "Fungsi dari kabel crossover?", answers: ["Menghubungkan dua perangkat langsung tanpa switch", "Meningkatkan kecepatan jaringan", "Memperpanjang kabel jaringan", "Menyediakan koneksi internet"], correct: 0 },
    { question: "Teknologi yang digunakan untuk komunikasi antar perangkat tanpa kabel?", answers: ["Wireless", "Fiber Optic", "Ethernet", "Coaxial"], correct: 0 },
    { question: "Jenis jaringan yang digunakan dalam satu ruangan?", answers: ["PAN", "LAN", "MAN", "WAN"], correct: 0 },
    { question: "Tag HTML untuk memasukkan gambar adalah?", answers: ["< img >", "< image >", "< picture >", "< media >"], correct: 0 },
    { question: "Jenis perangkat jaringan yang bertugas mengarahkan lalu lintas data?", answers: ["Router", "Switch", "Hub", "Repeater"], correct: 0 },
    { question: "Fungsi utama dari modem?", answers: ["Menghubungkan komputer ke internet", "Meningkatkan kecepatan Wi-Fi", "Menyimpan data jaringan", "Mengubah alamat IP"], correct: 0 },
    { question: "Apa kepanjangan dari TCP/IP?", answers: ["Transmission Control Protocol / Internet Protocol", "Technical Communication Port / Internet Provider", "Total Connection Path / Interconnect Protocol", "Terminal Communication Process / Internal Path"], correct: 0 },
    { question: "Bagaimana cara mengubah alamat IP secara manual di Windows?", answers: ["Melalui Network Settings", "Menggunakan Command Prompt", "Menghubungi ISP", "Menggunakan aplikasi pihak ketiga"], correct: 0 },
    { question: "Tag HTML untuk membuat tabel adalah?", answers: ["< table >", "< tr >", "< td >", "< th >"], correct: 0 },
    { question: "Port standar untuk FTP adalah?", answers: ["21", "22", "23", "25"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = new Array(questions.length).fill(null);

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

const startBtn = document.getElementById("start-btn");
const quizContent = document.getElementById("quiz-content");
const questionText = document.getElementById("question");
const btnContainer = document.getElementById("btn-container");
const nextBtn = document.getElementById("next-btn");
const answersContainer = document.getElementById("answers-container");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    quizContent.style.display = "block";
    shuffleQuestions();
    showQuestion();
});

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionText.textContent = q.question;
    btnContainer.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        btnContainer.appendChild(button);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(index) {
    selectedAnswers[currentQuestionIndex] = index;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (selectedAnswers[currentQuestionIndex] === null) return;

    if (selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContent.style.display = "none";
    answersContainer.innerHTML = `<h2>Quiz Selesai!</h2>
        <p>Skor: ${(score / questions.length * 100).toFixed(0)} / 100</p>
        <h3>Jawaban Kamu:</h3>`;

    questions.forEach((q, index) => {
        let userAnswer = selectedAnswers[index];
        let correctAnswer = q.correct;
        let answerColor = userAnswer === correctAnswer ? "green" : "red";
        let userAnswerText = userAnswer !== null ? q.answers[userAnswer] : "Tidak Dijawab";

        let answerElement = document.createElement("div");
        answerElement.classList.add("answer-container");
        answerElement.innerHTML = `
            <p>${q.question}</p>
            <p style="color: ${answerColor};">Jawaban Kamu: ${userAnswerText}</p>
            ${userAnswer !== correctAnswer ? `<p style="color: green;">Jawaban Benar: ${q.answers[correctAnswer]}</p>` : ""}
        `;
        answersContainer.appendChild(answerElement);
    });
}