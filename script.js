/* ======================================================
   EMBASSY OF THE REPUBLIC OF CONGO IN KENYA
   Official Website JavaScript
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MOBILE NAVIGATION
    ====================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            navigation.classList.toggle("active");
            const isOpen = navigation.classList.contains("active");

            menuToggle.textContent =
                isOpen
                    ? "×"
                    : "☰";

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        /* Close menu after clicking a link */

        document.querySelectorAll(".navigation a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open menu");
            });

        });
    }


    /* ======================================================
       LANGUAGE SWITCHER
    ====================================================== */

    const translations = {

        fr: {

            nav_home: "Accueil",
            nav_about: "À propos",
            nav_services: "Services",
            nav_appointments: "Rendez-vous",
            nav_news: "Actualités",
            nav_contact: "Contact",

            gov_banner: "République du Congo • Ministère des Affaires étrangères, de la Francophonie et des Congolais de l'étranger • Site officiel",
            eyebrow: "République du Congo",
            logo: "Ambassade de la République du Congo au Kenya",
            hero_label: "Ambassade de la République du Congo",
            hero_title: "Bienvenue à l’Ambassade de la République du Congo au Kenya",
            hero_description:
                "Nous œuvrons au renforcement des relations diplomatiques entre le Congo et le Kenya tout en offrant des services consulaires de qualité.",

            book_appointment: "Prendre rendez-vous",
            consular_services: "Services consulaires",
            quick_access: "Accès rapide",
            passport: "Services de passeport",
            passport_desc: "Renouvellement et délivrance de passeports.",
            consular: "Assistance consulaire",
            consular_desc: "Assistance aux ressortissants congolais.",
            civil: "État civil",
            civil_desc: "Actes de naissance, de mariage et certificats légaux.",
            emergency: "Assistance d'urgence",
            ambassador_tag: "Message de l'ambassadeur",
            ambassador_title: "Bienvenue à l'Ambassade",
            ambassador_message:
                "L'Ambassade de la République du Congo au Kenya s'engage à promouvoir la coopération, à renforcer les relations diplomatiques et à servir la communauté congolaise avec professionnalisme et intégrité.",
            about_title: "À propos de l'Ambassade",
            about_description:
                "L'Ambassade représente la République du Congo et promeut la coopération diplomatique, économique et culturelle avec le Kenya.",
            services_title: "Services consulaires",
            service_passport: "Services de passeport",
            service_travel: "Documents de voyage",
            service_civil: "État civil",
            service_notarial: "Services notariaux",
            service_emergency: "Assistance d'urgence",
            service_diaspora: "Services à la diaspora",
            appointment_title: "Besoin d'un rendez-vous ?",
            appointment_description: "Planifiez votre visite à l'Ambassade.",
            book_now: "Réserver",
            news_title: "Actualités et annonces",
            news_category_diplomacy: "Diplomatie",
            news_item_1_title: "Réunion de coopération bilatérale",
            news_item_1_desc: "Renforcement des relations entre le Congo et le Kenya.",
            news_category_notice: "Avis",
            news_item_2_title: "Fermeture pour jour férié",
            news_item_2_desc: "Les bureaux de l'Ambassade resteront fermés pendant les jours fériés nationaux.",
            contact_title: "Contactez-nous",
            contact_address: "Zone diplomatique de Gigiri, Nairobi, Kenya",
            contact_tel_label: "Tél :",
            contact_email_label: "Email :",
            form_name_label: "Nom complet",
            form_email_label: "Adresse email",
            form_message_label: "Votre message",
            send_message: "Envoyer le message",
            footer_title: "Ambassade de la République du Congo",
            footer_location: "Nairobi, Kenya",
            footer_quick_links: "Liens rapides",
            footer_ministry_title: "Ministère",
            footer_ministry: "Ministère des Affaires étrangères, de la Francophonie et des Congolais de l'étranger",
            copyright: "© 2026 Ambassade de la République du Congo au Kenya. Tous droits réservés.",

            contact_success:
                "Votre message a été envoyé avec succès.",

            contact_error:
                "Veuillez remplir tous les champs correctement."
        },

        en: {

            nav_home: "Home",
            nav_about: "About",
            nav_services: "Services",
            nav_appointments: "Appointments",
            nav_news: "News",
            nav_contact: "Contact",

            gov_banner: "Republic of Congo • Ministry of Foreign Affairs, Francophonie and Congolese Abroad • Official Website",
            eyebrow: "Republic of Congo",
            logo: "Embassy of the Republic of Congo in Kenya",
            hero_label: "Embassy of the Republic of Congo",
            hero_title:
                "Welcome to the Embassy of the Republic of Congo in Kenya",

            hero_description:
                "We are committed to strengthening diplomatic relations between Congo and Kenya while providing quality consular services.",

            book_appointment: "Book Appointment",
            consular_services: "Consular Services",
            quick_access: "Quick Access",
            passport: "Passport Services",
            passport_desc: "Renewal and issuance of passports.",
            consular: "Consular Assistance",
            consular_desc: "Assistance for Congolese nationals.",
            civil: "Civil Registration",
            civil_desc: "Birth, marriage and legal certificates.",
            emergency: "Emergency Assistance",
            ambassador_tag: "Ambassador's Message",
            ambassador_title: "Welcome to the Embassy",
            ambassador_message:
                "The Embassy of the Republic of Congo in Kenya is committed to promoting cooperation, strengthening diplomatic relations, and serving the Congolese community with professionalism and integrity.",
            about_title: "About the Embassy",
            about_description:
                "The Embassy represents the Republic of Congo and promotes diplomatic, economic and cultural cooperation with Kenya.",
            services_title: "Consular Services",
            service_passport: "Passport Services",
            service_travel: "Travel Documents",
            service_civil: "Civil Registration",
            service_notarial: "Notarial Services",
            service_emergency: "Emergency Assistance",
            service_diaspora: "Diaspora Services",
            appointment_title: "Need an Appointment?",
            appointment_description: "Schedule your visit to the Embassy.",
            book_now: "Book Now",
            news_title: "News & Announcements",
            news_category_diplomacy: "Diplomacy",
            news_item_1_title: "Bilateral Cooperation Meeting",
            news_item_1_desc: "Strengthening relations between Congo and Kenya.",
            news_category_notice: "Notice",
            news_item_2_title: "Public Holiday Closure",
            news_item_2_desc: "Embassy offices will remain closed during national holidays.",
            contact_title: "Contact Us",
            contact_address: "Gigiri Diplomatic Zone, Nairobi, Kenya",
            contact_tel_label: "Tel:",
            contact_email_label: "Email:",
            form_name_label: "Full Name",
            form_email_label: "Email Address",
            form_message_label: "Your Message",
            send_message: "Send Message",
            footer_title: "Embassy of the Republic of Congo",
            footer_location: "Nairobi, Kenya",
            footer_quick_links: "Quick Links",
            footer_ministry_title: "Ministry",
            footer_ministry: "Ministry of Foreign Affairs, Francophonie and Congolese Abroad",
            copyright: "© 2026 Embassy of the Republic of Congo in Kenya. All Rights Reserved.",

            contact_success:
                "Your message has been sent successfully.",

            contact_error:
                "Please complete all fields correctly."
        }
    };


    const frBtn = document.getElementById("fr-btn");
    const enBtn = document.getElementById("en-btn");


    function changeLanguage(language) {

        const dictionary = translations[language];

        if (!dictionary) return;


        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (dictionary[key]) {

                element.textContent = dictionary[key];

            }

        });

        document.documentElement.lang = language;

        const placeholders = {
            name: dictionary.form_name_label,
            email: dictionary.form_email_label,
            message: dictionary.form_message_label
        };

        Object.entries(placeholders).forEach(([id, value]) => {
            const field = document.getElementById(id);

            if (field && value) {
                field.setAttribute("placeholder", value);
            }
        });


        if (frBtn && enBtn) {

            frBtn.classList.toggle(
                "active",
                language === "fr"
            );

            enBtn.classList.toggle(
                "active",
                language === "en"
            );

        }

        localStorage.setItem("language", language);
    }


    if (frBtn) {

        frBtn.addEventListener("click", () => {

            changeLanguage("fr");

        });

    }


    if (enBtn) {

        enBtn.addEventListener("click", () => {

            changeLanguage("en");

        });

    }


    /* Load saved language */

    const savedLanguage =
        localStorage.getItem("language") || "fr";

    changeLanguage(savedLanguage);



    /* ======================================================
       SMOOTH SCROLLING
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });



    /* ======================================================
       CONTACT FORM VALIDATION
    ====================================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                form.querySelector('input[name="name"]');

            const email =
                form.querySelector('input[name="email"]');

            const message =
                form.querySelector("textarea");


            const currentLanguage =
                localStorage.getItem("language") || "fr";


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            const valid =

                name &&

                email &&

                message &&

                name.value.trim() !== "" &&

                emailPattern.test(email.value.trim()) &&

                message.value.trim() !== "";


            if (valid) {

                alert(
                    translations[currentLanguage]
                        .contact_success
                );

                form.reset();

            } else {

                alert(
                    translations[currentLanguage]
                        .contact_error
                );

            }

        });

    }



    /* ======================================================
       REVEAL ON SCROLL
    ====================================================== */

    const animatedElements =

        document.querySelectorAll(

            ".fade-in-up"

        );


    if (animatedElements.length > 0) {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(

                            "show"

                        );

                    }

                });

            },

            {

                threshold: 0.15

            }

        );


        animatedElements.forEach(element => {

            observer.observe(element);

        });

    }



    /* ======================================================
       HEADER SHADOW ON SCROLL
    ====================================================== */

    const header = document.querySelector(".header");


    window.addEventListener("scroll", () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.style.boxShadow =

                "0 4px 20px rgba(0,0,0,0.08)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });

});
const slider = document.querySelector('.news-slider');

document.getElementById('nextNews').addEventListener('click', () => {
    slider.scrollBy({
        left: 550,
        behavior: 'smooth'
    });
});

document.getElementById('prevNews').addEventListener('click', () => {
    slider.scrollBy({
        left: -550,
        behavior: 'smooth'
    });
});