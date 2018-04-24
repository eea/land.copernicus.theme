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
        }, survey_delay);
      }
    }
  });
}

if(window.jQuery) {
  // Only pages with jQuery loaded are counted.
  survey_behaviour();
}
