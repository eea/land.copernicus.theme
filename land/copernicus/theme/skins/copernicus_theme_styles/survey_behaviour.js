function survey_behaviour() {
  $(document).ready(function($) {

    var survey_title = "We value your opinion!";
    var survey_text = "Would you be willing to spend 4-5 min to provide your feedback on our website?";

    if(!localStorage.getItem("survey_answered")) {
      var pageviews = (+localStorage.getItem("page_views") || 0) + 1;
      localStorage.setItem("page_views", pageviews);

      if(pageviews >= survey_delay_pageviews) {
        setTimeout(function() {
          swal({
            title: survey_title,
            text: survey_text,
            type: "success",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then(function(result) {
            localStorage.setItem("survey_answered", "true");
            window.location.replace(survey_url);
          }).catch(function() {
            localStorage.setItem("survey_answered", "true");
          });

          // Replace default Yes with custom button with external url and behaviour
          // In this way the survey will be opened in a new tab.
          setTimeout(function () {
            $("button.swal2-confirm").replaceWith('<a target="_blank" class="swal2-confirm swal2-styled" style="background-color: rgb(48, 133, 214); border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);" href="' + survey_url + '">Yes</a>');
            $("a.swal2-confirm").click(function () {
              localStorage.setItem("survey_answered", "true");
              swal.close()
            })
          }, 400);

        }, survey_delay);
      }
    }
  });
}

if(window.jQuery) {
  // Only pages with jQuery loaded are counted.
  survey_behaviour();
}
