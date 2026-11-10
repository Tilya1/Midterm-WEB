$(document).ready(function () {

    // 1. Registration form validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function checkName() {
        const ok = $("#name").val().trim() !== "";
        setState($("#name"), ok);
        return ok;
    }

    function checkEmail() {
        const ok = emailRegex.test($("#email").val().trim());
        setState($("#email"), ok);
        return ok;
    }

    function checkPassword() {
        const ok = $("#password").val().length >= 6;
        setState($("#password"), ok);
        return ok;
    }

    function checkConfirm() {
        const ok = $("#confirm").val() !== "" && $("#confirm").val() === $("#password").val();
        setState($("#confirm"), ok);
        return ok;
    }

    function setState(input, ok) {
        if (ok) {
            input.removeClass("is-invalid").addClass("is-valid");
        } else {
            input.removeClass("is-valid").addClass("is-invalid");
        }
    }

    function showStrength() {
        const password = $("#password").val();
        let score = 0;

        if (password.length >= 6) score++;
        if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
        if (password.length >= 10 && /[^A-Za-z0-9]/.test(password)) score++;

        if (password === "") {
            $("#strengthFill").css({ width: "0%" });
            $("#strengthText").text("");
        } else if (score <= 1) {
            $("#strengthFill").css({ width: "33%", backgroundColor: "#dc3545" });
            $("#strengthText").text("Weak password").css("color", "#dc3545");
        } else if (score === 2) {
            $("#strengthFill").css({ width: "66%", backgroundColor: "#ffc107" });
            $("#strengthText").text("Medium password").css("color", "#ffc107");
        } else {
            $("#strengthFill").css({ width: "100%", backgroundColor: "#28a745" });
            $("#strengthText").text("Strong password").css("color", "#28a745");
        }
    }

    $("#name").on("input", checkName);
    $("#email").on("input", checkEmail);
    $("#password").on("input", function () {
        checkPassword();
        showStrength();
        if ($("#confirm").val() !== "") {
            checkConfirm();
        }
    });
    $("#confirm").on("input", checkConfirm);

    $("#registerForm").on("submit", function (event) {
        event.preventDefault();

        const nameOk = checkName();
        const emailOk = checkEmail();
        const passwordOk = checkPassword();
        const confirmOk = checkConfirm();

        if (nameOk && emailOk && passwordOk && confirmOk) {
            $("#formAlert").removeClass("alert-danger").addClass("alert-success")
                .text("Registration successful! Welcome, " + $("#name").val().trim() + "!").fadeIn();
            this.reset();
            $("#registerForm .form-control").removeClass("is-valid");
            showStrength();
        } else {
            $("#formAlert").removeClass("alert-success").addClass("alert-danger")
                .text("Please fix the red fields before submitting.").fadeIn();
        }
    });


    // 2. Search and filter

    let currentGenre = "All";

    function filterAnime() {
        const text = $("#searchInput").val().toLowerCase();
        let shown = 0;

        $("#animeList .anime-card").each(function () {
            const title = $(this).find("h3").text().toLowerCase();
            const genre = $(this).find(".genre").text();

            const matchText = title.includes(text);
            const matchGenre = currentGenre === "All" || genre === currentGenre;

            if (matchText && matchGenre) {
                $(this).show();
                shown++;
            } else {
                $(this).hide();
            }
        });

        if (shown === 0) {
            $("#noResults").show();
        } else {
            $("#noResults").hide();
        }
    }

    $("#searchInput").on("keyup", filterAnime);

    $(".filter-btn").on("click", function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        currentGenre = $(this).data("genre");
        filterAnime();
    });


    // 3. Watchlist table (CRUD)

    let watchlist = [
        { title: "Naruto", genre: "Action", episodes: 220 },
        { title: "Death Note", genre: "Thriller", episodes: 37 },
        { title: "Haikyuu!!", genre: "Sports", episodes: 85 }
    ];
    let editIndex = -1;

    function showTable() {
        $("#watchBody").empty();

        watchlist.forEach(function (item, index) {
            $("#watchBody").append(
                "<tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td>" + item.title + "</td>" +
                "<td>" + item.genre + "</td>" +
                "<td>" + item.episodes + "</td>" +
                "<td>" +
                "<button class='edit-btn' data-index='" + index + "'>Edit</button> " +
                "<button class='delete-btn' data-index='" + index + "'>Delete</button>" +
                "</td>" +
                "</tr>"
            );
        });
    }

    $("#watchForm").on("submit", function (event) {
        event.preventDefault();

        const title = $("#watchTitle").val().trim();
        const genre = $("#watchGenre").val().trim();
        const episodes = Number($("#watchEpisodes").val());

        if (title === "" || genre === "" || episodes < 1) {
            $("#watchError").text("Please fill in all fields.");
            return;
        }
        $("#watchError").text("");

        if (editIndex === -1) {
            watchlist.push({ title: title, genre: genre, episodes: episodes });
        } else {
            watchlist[editIndex] = { title: title, genre: genre, episodes: episodes };
            editIndex = -1;
            $("#saveBtn").text("Add");
        }

        this.reset();
        showTable();
    });

    $("#watchBody").on("click", ".edit-btn", function () {
        editIndex = $(this).data("index");
        const item = watchlist[editIndex];

        $("#watchTitle").val(item.title);
        $("#watchGenre").val(item.genre);
        $("#watchEpisodes").val(item.episodes);
        $("#saveBtn").text("Save");
    });

    $("#watchBody").on("click", ".delete-btn", function () {
        const index = $(this).data("index");

        if (confirm("Delete " + watchlist[index].title + "?")) {
            watchlist.splice(index, 1);
            editIndex = -1;
            $("#saveBtn").text("Add");
            $("#watchForm")[0].reset();
            showTable();
        }
    });

    if ($("#watchBody").length) {
        showTable();
    }


    // 4. Gallery lightbox

    const images = $(".gallery-item img");
    let currentImage = 0;

    $(".gallery-item").hide().each(function (i) {
        $(this).delay(i * 100).fadeIn(400);
    });

    function openImage(index) {
        currentImage = index;
        const img = images.eq(index);

        $("#lightboxImg").fadeOut(150, function () {
            $(this).attr("src", img.attr("src")).attr("alt", img.attr("alt")).fadeIn(250);
        });
        $("#lightboxCaption").text(img.attr("alt")).css("opacity", 0).animate({ opacity: 1 }, 400);
    }

    images.on("click", function () {
        openImage(images.index(this));
        $("#lightbox").fadeIn(300);
    });

    $("#nextBtn").on("click", function () {
        openImage((currentImage + 1) % images.length);
    });

    $("#prevBtn").on("click", function () {
        openImage((currentImage - 1 + images.length) % images.length);
    });

    $("#closeBtn").on("click", function () {
        $("#lightbox").fadeOut(300);
    });

    $("#lightbox").on("click", function (event) {
        if (event.target === this) {
            $("#lightbox").fadeOut(300);
        }
    });

});
