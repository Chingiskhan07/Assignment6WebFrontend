$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#ready").text("jQuery is ready!");

  $("#headline").text("I'm learning frontend development");
  $("h2").css("letter-spacing", "-1px");
  $(".label").css("text-transform", "uppercase");

  $("#light").click(function () {
    $("body").removeClass("dark");
  });

  $("#dark").click(function () {
    $("body").addClass("dark");
  });

  $("#hide").click(function () {
    $("#status").hide();
  });

  $("#show").click(function () {
    $("#status").show();
  });

  $("#toggle").click(function () {
    $("#status").toggle();
  });

  const pictures = $(".pictures img");

  $("#fade-in").click(function () {
    pictures.fadeIn();
  });

  $("#fade-out").click(function () {
    pictures.fadeOut();
  });

  $("#fade-toggle").click(function () {
    pictures.fadeToggle();
  });

  $(".topic").click(function () {
    const heading = $(this).parent();
    heading.next(".panel").slideToggle();
  });

  $("#open-all").click(function () {
    $(".panel").slideDown();
  });

  $("#close-all").click(function () {
    $(".panel").slideUp();
  });

  $("#add, #prepend").click(function () {
    const skill = $("#skill").val().trim();

    if (skill === "") {
      return;
    }

    const item = $("<li>").text(skill);

    if (this.id === "add") {
      $("#skill-list").append(item);
    } else {
      $("#skill-list").prepend(item);
    }

    $("#skill").val("");
  });

  $("#remove").click(function () {
    $("#skill-list li").last().remove();
  });

  $("#change-link").click(function () {
    const link = $("#social-link");

    if (link.text() === "GitHub") {
      link.attr("href", "https://www.linkedin.com/");
      link.text("LinkedIn");
    } else {
      link.attr("href", "https://github.com/");
      link.text("GitHub");
    }
  });

  $("#name").on("input", function () {
    $("#preview-name").text($(this).val());
  });

  $("#email").on("input", function () {
    $("#preview-email").text($(this).val());
  });

  $("#contact form").on("submit", function (event) {
    event.preventDefault();
  });

  let barsFilled = false;

  $("#animate").click(function () {
    $(".bar").stop();

    if (barsFilled) {
      $(".bar").animate({ width: "0%" }, 600);
      barsFilled = false;
    } else {
      $("#html-bar").animate({ width: "85%" }, 600);
      $("#css-bar").animate({ width: "70%" }, 600);
      $("#js-bar").animate({ width: "50%" }, 600);
      barsFilled = true;
    }
  });
});