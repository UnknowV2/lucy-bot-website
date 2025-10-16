// Tunggu hingga seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Pilih formulir berdasarkan ID yang kita tambahkan
    const form = document.getElementById('reportForm');

    // Tambahkan event listener untuk saat formulir disubmit
    form.addEventListener('submit', function(event) {
        // Hentikan aksi default formulir (yang akan me-reload halaman)
        event.preventDefault();

        // GANTI DENGAN URL WEBHOOK ANDA YANG SEBENARNYA
        const webhookURL = "https://discord.com/api/webhooks/1428241871364292799/uxc8BUYTygFqiE3fQI_PFcoQhQ8ZtbnL_CC93-WoDZYXZ4qFeH1IcwQRXaPXEHO1eD8A";

        // Ambil data dari setiap input di dalam formulir
        const formData = new FormData(form);
        const username = formData.get('username') || "Tidak disebutkan";
        const command = formData.get('command');
        const description = formData.get('description');
        const steps = formData.get('steps');

        // Buat format pesan yang akan dikirim ke Discord
        // Kita akan menggunakan format "Embed" agar terlihat keren
        const payload = {
            username: "Lucy Bot Bug Reporter", // Nama bot yang muncul di Discord
            avatar_url: "https://cdn.discordapp.com/attachments/1414606152179912714/1427751984110506207/IMG_0785.jpg?ex=68f00127&is=68eeafa7&hm=315e34d7d922f150e40d502c51d3670f72f3b94331c46d0ece63a2cd42d7814e&", // Avatar bot
            embeds: [{
                title: `🐞 Laporan Bug Baru!`,
                color: 16711680, // Warna merah untuk bug
                fields: [
                    { name: "👤 Pelapor", value: `\`\`\`${username}\`\`\``, inline: true },
                    { name: "📟 Perintah Bermasalah", value: `\`\`\`${command}\`\`\``, inline: true },
                    { name: "📄 Deskripsi Bug", value: `\`\`\`${description}\`\`\`` },
                    { name: "📋 Langkah Reproduksi", value: `\`\`\`${steps}\`\`\`` }
                ],
                footer: {
                    text: `Laporan dikirim pada: ${new Date().toLocaleString('id-ID')}`
                }
            }]
        };

        // Kirim data ke URL Webhook menggunakan Fetch API
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (response.ok) {
                alert('Laporan berhasil dikirim! Terima kasih atas bantuan Anda.');
                form.reset(); // Kosongkan formulir setelah berhasil
            } else {
                alert('Gagal mengirim laporan. Coba lagi nanti.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Periksa konsol untuk detailnya.');
        });
    });
});
