// GANTI SELURUH ISI report.js DENGAN INI

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reportForm');
    const usernameInput = document.getElementById('username');
    const loginContainer = document.getElementById('login-container');
    const tagContainer = document.getElementById('discord-tag-container');

    // Cek apakah ada parameter 'discord_user' di URL
    const urlParams = new URLSearchParams(window.location.search);
    const discordUser = urlParams.get('discord_user');

    if (discordUser) {
        // Jika ada, isi kolom input, tampilkan, dan sembunyikan tombol login
        usernameInput.value = decodeURIComponent(discordUser);
        tagContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    } else {
        // Jika tidak ada, sembunyikan kolom input dan tampilkan tombol login
        tagContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const webhookURL = "https://discord.com/api/webhooks/1428241871364292799/uxc8BUYTygFqiE3fQI_PFcoQhQ8ZtbnL_CC93-WoDZYXZ4qFeH1IcwQRXaPXEHO1eD8A";

        // Ambil data dari form
        const username = usernameInput.value || "Login Gagal / Tidak Login"; // Fallback jika kosong
        const command = document.getElementById('command').value;
        const description = document.getElementById('description').value;
        const steps = document.getElementById('steps').value;

        const payload = {
            username: "Lucy Bot Bug Reporter",
            avatar_url: "https://cdn.discordapp.com/attachments/1414606152179912714/1427751984110506207/IMG_0785.jpg?ex=68f00127&is=68eeafa7&hm=315e34d7d922f150e40d502c51d3670f72f3b94331c46d0ece63a2cd42d7814e&",
            embeds: [{
                title: `🐞 Laporan Bug Baru!`,
                color: 16711680,
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

        fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (response.ok) {
                alert('Laporan berhasil dikirim! Terima kasih atas bantuan Anda.');
                form.reset();
                // Arahkan kembali ke halaman report tanpa parameter
                window.location.href = window.location.pathname;
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
