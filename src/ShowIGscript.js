document.addEventListener("DOMContentLoaded", function () {

    const googleFormUrl = "https://forms.gle/wue9BP7sSYKT6Z3o9";

    // หากคุณใช้ Google Form สามารถดึงข้อมูลได้จาก iframe
    const iframe = document.createElement("iframe");
    iframe.src = googleFormUrl;
    iframe.style.display = "none";

    document.body.appendChild(iframe);

    iframe.addEventListener("load", function () {
        const googleFormDocument = iframe.contentDocument;

        // เลือกข้อมูลที่คุณต้องการจาก Google Form
        const instagramAccount = googleFormDocument.querySelector(
            'input[name="entry.YOUR_INSTAGRAM_FIELD_ID"]'
        ).value;

        const message = googleFormDocument.querySelector(
            'textarea[name="entry.YOUR_MESSAGE_FIELD_ID"]'
        ).value;

        // แสดงข้อมูลบนหน้าเว็บ
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = `
            <p><strong>ชื่อบัญชี Instagram:</strong> ${instagramAccount}</p>
            <p><strong>ข้อความ:</strong> ${message}</p>
        `;
    });
});