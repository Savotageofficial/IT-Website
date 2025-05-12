document.addEventListener("DOMContentLoaded", function() {
    // كائن اللغة
    const lang = {
        ar: { 
            profile: "الصفحة الشخصية",
            salary: "المرتب",
            trainingcourses: "دوراتي التدريبية",
            Researchprojects: "مشاريعي البحثية",
            Internationalpublishingbonus: "مكافأة النشر الدولي",
            CreateAccountRequest: "طلب انشاء حساب",
            AppealRequest: "طلب التماس",
            ExperienceCertificateRequest: "طلب شهادة خبرة",
            footer:"جميع الحقوق محفوظة © جامعة حلوان  "
        },
        en: {
            profile: "Profile",
            salary: "Salary",
            trainingcourses: "Training Courses",
            Researchprojects: "Research Projects",
            Internationalpublishingbonus: "International Publishing Bonus",
            CreateAccountRequest: "Create Account Request",
            AppealRequest: "Appeal Request",
            ExperienceCertificateRequest: "Experience Certificate Request",
            footer:"All rights reserved © Helwan University",
        }
    };

    // تبديل اللغة
    document.getElementById("lang-selector").addEventListener("change", function() {
        const selectedLang = this.value;
        document.body.setAttribute("dir", selectedLang === "en" ? "ltr" : "rtl");
        
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            const translation = lang[selectedLang][key];
            if (translation) {
                el.textContent = translation;
            }
        });
    });

    // الدارك مود
    const darkModeBtn = document.getElementById("dark-mode-btn");
    if (darkModeBtn) {
        // تحميل الإعدادات المحفوظة
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
        
        // تبديل الوضع
        darkModeBtn.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", 
                document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
            
            // تغيير الأيقونة ديناميكيًا
            this.innerHTML = document.body.classList.contains("dark-mode") ? 
                '<span class="material-symbols-outlined">light_mode</span>' : 
                '<span class="material-symbols-outlined">dark_mode</span>';
        });
    }
});
