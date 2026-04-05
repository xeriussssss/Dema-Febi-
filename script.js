// Navbar scroll effect
window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	});
});

// Team filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const teamCards = document.querySelectorAll(".team-card");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// Update active button
		filterButtons.forEach((btn) => btn.classList.remove("active"));
		button.classList.add("active");

		// Filter cards
		const filterValue = button.getAttribute("data-filter");

		teamCards.forEach((card) => {
			if (
				filterValue === "all" ||
				card.getAttribute("data-category") === filterValue
			) {
				card.style.display = "block";
				setTimeout(() => {
					card.style.opacity = "1";
					card.style.transform = "scale(1)";
				}, 10);
			} else {
				card.style.opacity = "0";
				card.style.transform = "scale(0.8)";
				setTimeout(() => {
					card.style.display = "none";
				}, 300);
			}
		});
	});
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll(".timeline-item");

function checkTimelineVisibility() {
	timelineItems.forEach((item) => {
		const itemTop = item.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (itemTop < windowHeight - 100) {
			item.classList.add("visible");
		}
	});
}

window.addEventListener("scroll", checkTimelineVisibility);
window.addEventListener("load", checkTimelineVisibility);

// Parallax effect for hero section
window.addEventListener("scroll", () => {
	const hero = document.querySelector(".hero");
	const scrolled = window.scrollY;
	hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Animation on scroll for sections
const sections = document.querySelectorAll("section");

function checkSectionVisibility() {
	sections.forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (sectionTop < windowHeight - 200) {
			section.classList.add("visible");
		}
	});
}

window.addEventListener("scroll", checkSectionVisibility);
window.addEventListener("load", checkSectionVisibility);

// Mobile menu toggle (optional - bisa ditambahkan jika diperlukan)
const createMobileMenu = () => {
	const navbar = document.querySelector(".navbar");
	const navLinks = document.querySelector(".nav-links");

	// Buat tombol hamburger untuk mobile
	const hamburger = document.createElement("div");
	hamburger.classList.add("hamburger");
	hamburger.innerHTML = '<i class="fas fa-bars"></i>';

	// Hanya tambahkan jika di mobile dan belum ada
	if (window.innerWidth <= 768 && !document.querySelector(".hamburger")) {
		navbar.insertBefore(hamburger, navLinks);

		hamburger.addEventListener("click", () => {
			navLinks.classList.toggle("active");
			hamburger.classList.toggle("active");
		});
	}
};

// Panggil function untuk mobile menu
createMobileMenu();

// Resize handler untuk mobile menu
window.addEventListener("resize", () => {
	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");

	if (window.innerWidth > 768) {
		if (hamburger) hamburger.remove();
		if (navLinks) navLinks.classList.remove("active");
	} else {
		createMobileMenu();
	}
});
