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
            ambassador_message: `Chers compatriotes, chers visiteurs,

C'est avec un réel plaisir que je vous souhaite la bienvenue sur le site officiel de l'Ambassade de la République du Congo en République du Kenya.

Cette plateforme a été conçue afin de vous fournir des informations utiles sur les activités diplomatiques de l'Ambassade, les services consulaires ainsi que les opportunités de coopération entre nos deux pays.

Notre mission est de renforcer les relations d'amitié et de coopération entre la République du Congo et la République du Kenya, tout en assurant la protection et l'accompagnement de nos compatriotes établis dans notre juridiction.

Je vous remercie de votre visite et vous invite à découvrir les différentes rubriques de ce site.

Veuillez recevoir l'expression de ma haute considération.`,

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
                "Veuillez remplir tous les champs correctement.",

            about_intro: "L'Ambassade de la République du Congo en République du Kenya représente les intérêts de l'État congolais et œuvre au renforcement des relations diplomatiques, économiques, culturelles et de coopération entre les deux pays.",

            mission_title: "Mission Diplomatique",
            mission_desc: "Représenter la République du Congo auprès des autorités kényanes et des organisations internationales.",

            consular_services_title: "Services Consulaires",
            consular_services_desc: "Fournir assistance et protection aux ressortissants congolais vivant ou voyageant dans notre juridiction.",

            cooperation_title: "Coopération Bilatérale",
            cooperation_desc: "Promouvoir les échanges économiques, culturels et institutionnels entre le Congo et le Kenya.",

            news_intro: "Suivez les dernières activités diplomatiques, les événements officiels et les annonces de l'Ambassade.",

            news_cat_1: "DIPLOMATIE",
            news_1_title: "Renforcement de la coopération bilatérale",
            news_1_desc: "Nouvelle série d'échanges économiques et culturels entre les deux nations.",

            news_cat_2: "COOPÉRATION",
            news_2_title: "Rencontre officielle à Nairobi",
            news_2_desc: "Discussions autour du commerce, de l'agriculture et de l'investissement.",

            news_cat_3: "DIASPORA",
            news_3_title: "Services dédiés à la communauté",
            news_3_desc: "Mise en place de nouvelles ressources pour les ressortissants congolais au Kenya.",

            contact_intro: "Notre équipe est à votre disposition pour toute demande d'information, assistance consulaire ou prise de rendez-vous.",

            address_title: "Adresse",
            phone_title: "Téléphone",
            email_title: "Email",
            hours_title: "Heures d'ouverture",

            office_days: "Lundi - Vendredi",

            contact_form_title: "Envoyez-nous un message"
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
            ambassador_message: `Dear fellow citizens and distinguished visitors,

It is with great pleasure that I welcome you to the official website of the Embassy of the Republic of Congo in the Republic of Kenya.

This platform has been designed to provide you with useful information about the Embassy's diplomatic activities, consular services, and the various opportunities for cooperation between our two countries.

Our mission is to strengthen the bonds of friendship and cooperation between the Republic of Congo and the Republic of Kenya while ensuring the protection and support of our citizens residing within our jurisdiction.

Thank you for your visit, and I invite you to explore the different sections of this website.

Please accept the assurances of my highest consideration.`,
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
                "Please complete all fields correctly.",
            about_intro: "The Embassy of the Republic of Congo in the Republic of Kenya represents the interests of the Congolese State and works to strengthen diplomatic, economic, cultural and cooperation relations between the two countries.",

            mission_title: "Diplomatic Mission",
            mission_desc: "Represent the Republic of Congo before Kenyan authorities and international organizations.",

            consular_services_title: "Consular Services",
            consular_services_desc: "Provide assistance and protection to Congolese nationals living or travelling within our jurisdiction.",

            cooperation_title: "Bilateral Cooperation",
            cooperation_desc: "Promote economic, cultural and institutional exchanges between Congo and Kenya.",

            news_intro: "Follow the latest diplomatic activities, official events and announcements from the Embassy.",

            news_cat_1: "DIPLOMACY",
            news_1_title: "Strengthening Bilateral Cooperation",
            news_1_desc: "New series of economic and cultural exchanges between the two nations.",

            news_cat_2: "COOPERATION",
            news_2_title: "Official Meeting in Nairobi",
            news_2_desc: "Discussions on trade, agriculture and investment.",

            news_cat_3: "DIASPORA",
            news_3_title: "Services for the Community",
            news_3_desc: "Introduction of new resources for Congolese nationals in Kenya.",

            contact_intro: "Our team is available to assist you with information requests, consular assistance and appointment scheduling.",

            address_title: "Address",
            phone_title: "Phone",
            email_title: "Email",
            hours_title: "Opening Hours",

            office_days: "Monday - Friday",

            contact_form_title: "Send Us a Message"

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


// Force update sync 2026