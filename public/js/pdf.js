//pdf stuff
function demoFromHTML() {
         var doc = new jsPDF('p', 'in', 'letter');
         var source = $('#testcase').first();
         var specialElementHandlers = {
             '#bypassme': function(element, renderer) {
                 return true;
             }
         };

         doc.fromHTML(
            $('#testcase').get(0), // [Refer Exact code tutorial][2]HTML string or DOM elem ref.
             0.5,    // x coord
             0.5,    // y coord
             {
                 'width': 7.5, // max width of content on PDF
                 'elementHandlers': specialElementHandlers
             });

         doc.output('dataurl');
    }
