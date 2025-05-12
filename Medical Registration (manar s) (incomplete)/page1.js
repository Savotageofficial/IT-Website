document.addEventListener("DOMContentLoaded", function() {
    // كائن اللغة
    const lang = {
        ar: {
            college: "الكلية",
            egyptian: "مصري",
            expatriate: "وافد",
            nationalid: "الرقم القومي",
            Login: "تسجيل الدخول",
            student_type: "نوع الطالب",
            footerText: "تنويه هام: طلابنا الأعزاء في حالة عدم تمكنك من الدخول الرجاء مراجعة بياناتك في شئون الطلاب في كليتك المرشح لها"
        },
        en: {
            college: "College",
            egyptian: "Egyptian",
            expatriate: "Expatriate",
            nationalid: "National ID",
            Login: "Login",
            student_type: "Student Type",
            footerText: "Important Notice: If you can't log in, please check your data with Student Affairs at your nominated faculty."
        }
    };

    // تسجيل الدخول
    document.getElementById("loginform").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const currentLang = document.body.getAttribute("dir") === "ltr" ? "en" : "ar";
        let college = document.getElementById("college").value.trim();
        let nationalId = document.getElementById("national-id").value.trim();
        let nationality = document.querySelector('input[name="nationality"]:checked');

        if (!college) {
            alert(lang[currentLang].college + (currentLang === "ar" ? " مطلوب" : " is required"));
            return;
        }

        if (!nationality) {
            alert(currentLang === "ar" ? "من فضلك اختر الجنسية" : "Please select nationality");
            return;
        }

        if (nationalId.length !== 14) {
            alert(currentLang === "ar" ? "الرقم القومي يجب أن يحتوي على 14 رقمًا" : "National ID must be 14 digits");
            return;
        }

        alert(currentLang === "ar" ? "تم التحقق بنجاح" : "Verification successful");
    });

    // تغيير اللغة
    document.getElementById("lang-selector").addEventListener("change", function() {
        const selectedLang = this.value;
        document.body.setAttribute("dir", selectedLang === "en" ? "ltr" : "rtl");
        
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (lang[selectedLang][key]) {
                el.tagName === "INPUT" ? el.placeholder = lang[selectedLang][key] : el.textContent = lang[selectedLang][key];
            }
        });
        
        const footer = document.querySelector("footer h2");
        if (footer) footer.textContent = lang[selectedLang].footerText;
        
        document.querySelectorAll(".Login").forEach(btn => {
            btn.textContent = lang[selectedLang].Login;
        });
    });

    // الدارك مود
    const darkModeBtn = document.getElementById("dark-mode-btn");
    if (darkModeBtn) {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
        
        darkModeBtn.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", 
                document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
                this.innerHTML = document.body.classList.contains("dark-mode") ? 
                '<span class="material-symbols-outlined">light_mode</span>' : 
                '<span class="material-symbols-outlined">dark_mode</span>';
        });
    }
});
