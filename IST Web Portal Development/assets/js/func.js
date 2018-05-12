//api:  http://www.ist.rit.edu/api/
$(document).ready(function() {
    //Get the height of header
    var headerHeight = $('.newContainer').outerHeight(true);
    
    $('.slide-section').click(function(e) {             //Get the navigation tab pressed
        var linkHref = $(this).attr('href');            //store the current value of href
        if (linkHref === '#top') {                      //if the selected tab is top 
            $('html,body').animate({
                scrollTop: $(linkHref).offset().top - 1200     //move the screen to the top
            }, 2000);
        } else {
            $('html,body').animate({                          //else move the screen to the seleted tab
                scrollTop: $(linkHref).offset().top - headerHeight - 130
            }, 1000);
        }
        e.preventDefault();          //this prevents the default movement
    });

    //Get about data through a xhr call
    xhr('get', {
        path: '/about'
    }, '#about').done(function(json) {
        $('#about-title').append(json.title);                         //append different attribute values to about section
        $('#about-description').append(json.description);
        $('#about-quote').append(json.quote);
        $('#about-quoteAuthor').append("~" + json.quoteAuthor);
    });

    //Get undergraduate data through a xhr call 
    xhr('get', {
        path: '/degrees/undergraduate'
    }, '#degrees').done(function(json) {
        $.each(json.undergraduate, function() {
            if (this.degreeName === 'wmc') {                    //check the degree name selected. I can use loop here 
                $('#wmcName').append(this.title);               //but wanted to display different icon for column div
                $('#wmc').append(this.description);
            } else if (this.degreeName === 'hcc') {
                $('#hccName').append(this.title);
                $('#hcc').append(this.description);
            } else {
                $('#citName').append(this.title);
                $('#cit').append(this.description);
            }
        });
            
        var webData1 = '';             
        webData1 += "<h2 style='color:red; text-align:center'>" + json.undergraduate[0].title + "</h2><hr/>";
        webData1 += "<ul class='fa-ul'>";
        $.each(json.undergraduate[0].concentrations, function(i, item) {
            webData1 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData1 += "</ul>";
        $('#popupdiv1').html(webData1);    //create the content to display first undergraduate program i.e. web & mobile computing

        var webData2 = '';
        webData2 += "<h2 style='color:red; text-align:center'>" + json.undergraduate[1].title + "</h2><hr/>";
        webData2 += "<ul class='fa-ul'>";
        $.each(json.undergraduate[1].concentrations, function(i, item) {
            webData2 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData2 += "</ul>";
        $('#popupdiv2').html(webData2);    //create the content to display second undergraduate program i.e. human centered computing

        var webData3 = '';
        webData3 += "<h2 style='color:red; text-align:center'>" + json.undergraduate[2].title + "</h2><hr/>";
        webData3 += "<ul class='fa-ul'>";
        $.each(json.undergraduate[2].concentrations, function(i, item) {
            webData3 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData3 += "</ul>";
        $('#popupdiv3').html(webData3);  //create the content to display first undergraduate program i.e. computing & information technology

    });

    $('.col1').magnificPopup({  //used mangnific popup jquery plugin to display content
        type: 'inline',
        midClick: true
    });

    $('.col2').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.col3').magnificPopup({
        type: 'inline',
        midClick: true
    });



    // Get graduate data through a xhr call
    xhr('get', {
        path: '/degrees/graduate'
    }, '#gradDegree').done(function(json) {
        $.each(json.graduate, function() {
            if (this.degreeName === 'ist') {       //Identify the degree name selected for graduate degree
                $('#istName').append(this.title);
                $('#ist').append(this.description);
            } else if (this.degreeName === 'hci') {
                $('#hciName').append(this.title);
                $('#hci').append(this.description);
            } else {
                $('#nsaName').append(this.title);
                $('#nsa').append(this.description);
            }
        });

        var webData4 = '';
        webData4 += "<h2 style='color:red; text-align:center'>" + json.graduate[0].title + "</h2><hr/>";
        webData4 += "<ul class='fa-ul'>";
        $.each(json.graduate[0].concentrations, function(i, item) {
            webData4 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData4 += "</ul>";
        $('#popupdiv4').html(webData4);  //create the content to display first graduate program i.e. Information Sciences and Technologies   

        var webData5 = '';
        webData5 += "<h2 style='color:red; text-align:center'>" + json.graduate[1].title + "</h2><hr/>";
        webData5 += "<ul class='fa-ul'>";
        $.each(json.graduate[1].concentrations, function(i, item) {
            webData5 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData5 += "</ul>";
        // console.log(webData); 
        $('#popupdiv5').html(webData5);   //create the content to display second graduate program i.e. Human computer interaction

        var webData6 = '';
        webData6 += "<h2 style='color:red; text-align:center'>" + json.graduate[2].title + "</h2><hr/>";
        webData6 += "<ul class='fa-ul'>";
        // console.log(json.undergraduate[0].concentrations);
        $.each(json.graduate[2].concentrations, function(i, item) {
            webData6 += "<li><i class='fa-li fa fa-check-square'></i>" + item + "</li>";
        });
        webData6 += "</ul>";
        // console.log(webData); 
        $('#popupdiv6').html(webData6);  //create the content to display third graduate program i.e. Networking and systems administration

    });

    $('.gradcol1').magnificPopup({   //used mangnific popup jquery plugin to display content
        type: 'inline',
        midClick: true
    });

    $('.gradcol2').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.gradcol3').magnificPopup({
        type: 'inline',
        midClick: true
    });
    
    
    // Get undergraduate minor data through a xhr call
    xhr('get', {
        path: '/minors/UgMinors'
    }, '#undergradMinor').done(function(json) {
        $.each(json.UgMinors, function(i, item) {
            $('#minor_row').append('<div class="ugMinorCol"><div class="minorCol1"><i class="fas fa-users" style="font-size:60px;padding-top:10px;color:#f8b64d;"></i><h4 class="minorTitle">' + item.title + '</h4></div></div>');

            $('.ugMinorCol').eq(i).on('click', function() {      //displaying a popup with course id when div of a field is clicked
                var minorData = '';

                $.each(json.UgMinors[i].courses, function(j, newItem) {   //Onclick for each course id it calls courseDesc function
                    minorData += '<div class="courseDetail" style= "cursor:pointer" id="' + newItem + '" onclick ="courseDesc(this);"><h6>' +
                        newItem + '</h6></div>';
                })

                $.confirm({    //uses jconfirm to display a popup window with minors detail
                    columnClass: 'col-lg-12',
                    title: '<h3 style="margin-left:150px; color:red;text-shadow:none;">' + item.title + '</h3><hr/>',
                    content: '<div class="envelop"><p style="text-shadow:none; color:#000; font-size:17px;">' + item.description + '</p><h3 class="crs" style="text-align:center;color:red;text-shadow:none;padding:0.5%;color:#fdfdfe;background:rgb(207, 0, 15)">Courses</h3><hr/><div class="crsName" style="text-align:center;color:#000;text-shadow:none;text-decoration:underline;">' + minorData + '</div><br><p style="color:red;font-size:17px;text-shadow:none;font-style:italic;">' + item.note + '</p><p style="text-align:center;color:red;text-shadow:none;">*Click on the courses to see the descriptions</p></div>',
                    buttons: {
                        close: function() {}
                    }
                })
            });
        })
    });
    
    

    xhr('get', {                           //xhr call to get employment details
        path: '/employment'
    }, '#stats').done(function(json) {
        var acadsData = " ";
        acadsData += '<div class="acadsCol1"><h2 class="acadsTitle" style="text-align:center;">' + json.introduction.title + '</h2></div><br/>';

        $.each(json.introduction.content, function(i, item) {  //Gives the discription of employment and cooperative education
            acadsData += '<div class="acadsCol2"><h4 class="contentTitle" style="text-align:center; color:orange; text-shadow:none;font-weight:bold;">' + json.introduction.content[i].title + '</h4><hr/><p class="contentDescription" style="text-align:center;text-shadow:none;">' + json.introduction.content[i].description + '</p></div>';
        })

        acadsData += '<div class="acads_row1" style="display:flex;">';  
        $.each(json.degreeStatistics.statistics, function(j, item1) {  //displays the statistic of avg salary,univeristy rank and other info. 
            acadsData += '<div class="statisticsCol1" style="border:4px solid white;height:200px; width:250px; text-align:center;flex-basis: 30%;flex-wrap: wrap;margin: 1em;padding: 30px;background-color:#f6a21c;text-shadow:none;"><div class="statCol1"><h4 class="statisticsValue">' + item1.value + '</h4>' + item1.description + '</div></div>';
        })
        acadsData += '</div>';

        acadsData += '<div class="acadsCol3" style="text-align:center;"><h4 class="employerTitle" style="color:orange; text-shadow:none;font-weight:bold;">' + json.employers.title + '</h4><hr/>';

        acadsData += '<span class="employerPara" style="display:inline;text-shadow:none;">';
        $.each(json.employers.employerNames, function(k, item2) {    //displays employers detail
            acadsData += json.employers.employerNames[k] + '&nbsp;&nbsp;&nbsp;';
        })

        acadsData += '</span></div>';

        acadsData += '<div class="acadsCol4" style="text-align:center;"><h4 class="careersTitle" style="color:orange; text-shadow:none;font-weight:bold;">' + json.careers.title + '</h4><hr/>';

        acadsData += '<span class="careerPara" style="display:inline;text-shadow:none;">';
        $.each(json.careers.careerNames, function(l, item3) {   //displays careers detail
            acadsData += json.careers.careerNames[l] + '&nbsp;&nbsp;&nbsp;';
        })

        acadsData += '</span></div>';
        $('#acads_row').append(acadsData);
    });


    //another xhr call to employement to get employement and coop detail to populate table in the popup
    xhr('get', {
        path: '/employment'
    }, '#employ_row').done(function(json) {
        
        var coopData = '';

        $('#employ_row').append('<br/><div class="emplCol" style="display:flex;flex-basis:40%;flex-wrap:nowrap;"><div class="coopCol1" style="padding:50px;"><h4 class="coopTitle">' + json.coopTable.title + '</h4><hr/></div></div>');

        $('.coopCol1').on('click', function() {
            var newcoopData = '';
            newcoopData += '<tbody>';
            $.each(json.coopTable.coopInformation, function(i, item) {
                newcoopData += '<tr><td>' + item.degree + '</td><td>' + item.employer + '</td><td>' + item.city + '</td><td>' + item.term + '</td></tr>';
            })
            newcoopData += '</tbody>';
            $.confirm({                        //displays coop data 
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:250px;color:red;text-shadow:none;">' + "Recent Student Coop Jobs (6/2013-9/2015)" + '</h3>',
                content: '<div class="coopEnvelop" style="text-align:center;color:#000;text-shadow:none;"><table class="coopTable" id="coopTableId"><thead><tr><th>DEGREE</th><th>EMPLOYER</th><th>LOCATION</th><th>TERM</th></tr></thead>' + newcoopData + '</table></div>',
                onContentReady: function() {
                    $('#coopTableId').dataTable();    //used data table plugin for pagination
                },
                buttons: {
                    close: function() {}
                }
            })

        });

        //used the employment xhr call to populate employmentTable
        $('.emplCol').append('<div class="empCol1" style="padding:50px;"><h4 class="empTitle">' + json.employmentTable.title + '</h4><hr/></div>');

        $('.empCol1').on('click', function() {
            var newempData = '';
            newempData += '<tbody>';
            $.each(json.employmentTable.professionalEmploymentInformation, function(j, item1) {
                newempData += '<tr><td>' + item1.degree + '</td><td>' + item1.employer + '</td><td>' + item1.city + '</td><td>' + item1.title + '</td><td>' + item1.startDate + '</tr>';
            })
            newempData += '</tbody>';

            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:250px;color:red;text-shadow:none;">' + "Graduating Student Employment (12/2010-11/2015)" + '</h3>',
                content: '<div class="empEnvelop" style="text-align:center;color:#000;text-shadow:none;"><table class="empTable" id="empTableId"><thead><tr><th>DEGREE</th><th>EMPLOYER</th><th>LOCATION</th><th>TITLE</th><th>START DATE</th></tr></thead>' + newempData + '</table></div>',
                onContentReady: function() {
                    $('#empTableId').dataTable();
                },
                buttons: {
                    close: function() {}
                }
            })
        });

    });

   //get people data by a xhr call
    xhr('get', {
        path: '/people'
    }, '#ourppl').done(function(json) {
        $('.headerTitle').append(json.title);
        $('.footerTitle').append(json.subTitle);

        $.each(json.faculty, function(i, item) {     //faculty function
            $('.pplCol1').append('<a class="pplTitle facultyEmp" href="#" onClick="return false;" style="text-decoration: none;"><span style="color:greenyellow;font-size:20px;">' + item.name + '</span><br/><span style="color:#fff;">' + item.title + '</span></a>')

            var facultyData = '';
            if (item.office != "" && item.office != null) {  //displays office,phone,email,twitter,facebook, and website only when present
                facultyData += '<p><i class="fas fa-map-marker-alt" style="font-size:20px;"></i>&nbsp;' + item.office + '</p>';
            }

            if (item.phone != "" && item.phone != null) {
                facultyData += '<p><i class="fas fa-phone"></i>&nbsp;' + item.phone + '</p>';
            }

            if (item.email != "" && item.email != null) {
                facultyData += '<p><i class="far fa-envelope"></i>&nbsp;<a href="mailto:' + item.email + '" title="email">' + item.email + '</a></p>';
            }

            if (item.twitter != "" && item.twitter != null) {
                facultyData += '<p><i class="fab fa-twitter"></i>&nbsp;' + item.twitter + '</p>';
            }

            if (item.facebook != "" && item.facebook != null) {
                facultyData += '<p><i class="fab fa-facebook-f"></i>&nbsp;' + item.facebook + '</p>';
            }

            if (item.website != "" && item.website != null) {
                facultyData += '<p><i class="fab fa-google"></i>&nbsp;<a target="_blank" href="' + item.website + '" title="website">' + item.website + '</a></p>';
            }

            $('.pplTitle').eq(i).click(function() {

                $.confirm({   //displays faculty data
                    columnClass: 'col-lg-12',
                    title: '<h3 style="margin-left:15px; color:rgb(207, 0, 15);text-shadow:none;">' + item.name + ', &nbsp;<desc style="font-size:smaller;color:rgba(0,0,0,0.4)">' + item.title + '</desc></h3><hr/>',
                    content: '<div class="facultyEnvelop"><div class="facRow1" style="display:flex;flex-basis:40%;flex-wrap:nowrap;margin-left:5em;"><div class="facCol1 col-md-7 col-sm-7 col-xs-7" style="text-shadow:none;padding:30px;"><img src="' + item.imagePath + '"alt="' + item.name + '" style="max-width:50vw;"></div><div class="facCol2 col-md-5 col-sm-5 col-xs-5" style="text-shadow:none; color:#000;font-family: geo-sans-light,sans-serif;font-size=14px;padding:30px; margin-top:5px;">' + facultyData + '</div></div></div>',
                    buttons: {
                        close: function() {}
                    }
                })
            })
        })



        $.each(json.staff, function(i, item) {    //staff function
            $('.pplCol2').append('<a class="pplTitle1 staffEmp" href="#" onClick="return false;" style="text-decoration: none;"><span style="color:greenyellow;font-size:20px;">' + item.name + '</span><br/><span style="color:#fff;">' + item.title + '</span></a>')

            var staffData = '';

            if (item.office != "" && item.office != null) {   //null check for each of the fields
                staffData += '<p><i class="fas fa-map-marker-alt" style="font-size:20px;"></i>&nbsp;' + item.office + '</p>';
            }

            if (item.phone != "" && item.phone != null) {
                staffData += '<p><i class="fas fa-phone"></i>&nbsp;' + item.phone + '</p>';
            }

            if (item.email != "" && item.email != null) {
                staffData += '<p><i class="far fa-envelope"></i>&nbsp;<a href="mailto:' + item.email + '" title="email">' + item.email + '</a></p>';
            }

            if (item.twitter != "" && item.twitter != null) {
                staffData += '<p><i class="fab fa-twitter"></i>&nbsp;' + item.twitter + '</p>';
            }

            if (item.facebook != "" && item.facebook != null) {
                staffData += '<p><i class="fab fa-facebook-f"></i>&nbsp;' + item.facebook + '</p>';
            }

            if (item.website != "" && item.website != null) {
                staffData += '<p><i class="fab fa-google"></i>&nbsp;<a target="_blank" href="' + item.website + '" title="website">' + item.website + '</a></p>';
            }


            $('.pplTitle1').eq(i).click(function() {

                $.confirm({                     //displays staffData
                    columnClass: 'col-lg-12',
                    title: '<h3 style="margin-left:15px; color:rgb(207, 0, 15);text-shadow:none;">' + item.name + ', &nbsp;<desc style="font-size:smaller;color:rgba(0,0,0,0.4)">' + item.title + '</desc></h3><hr/>',
                    content: '<div class="facultyEnvelop"><div class="facRow1" style="display:flex;flex-basis:40%;flex-wrap:nowrap;margin-left:5em;"><div class="facCol1 col-md-7 col-sm-7 col-xs-7" style="text-shadow:none;padding:30px;"><img src="' + item.imagePath + '"alt="' + item.name + '" style="max-width:50vw;"></div><div class="facCol2 col-md-5 col-sm-5 col-xs-5" style="text-shadow:none; color:#000;font-family: geo-sans-light,sans-serif;font-size=14px;padding:30px; margin-top:5px;">' + staffData + '</div></div></div>',
                    buttons: {
                        close: function() {}
                    }
                })
            })
        })
        $('.staffEmp').hide();   //hide staff div initially
    });
    
    
//get xhr call to show reaserch data
    xhr('get', {
        path: '/research'
    }, '#facResArea').done(function(json) {

        $.each(json.byInterestArea, function(i, item) {    //looping on interest area such as HCI,Education.
            $('#facRes1_row').append('<div class="circleDiv"><div class="facResCol1" style="margin-top: 50px;"><i class="fas fa-laptop" style="font-size:45px;color:#f8b64d;"></i><br/><h4 class="facRes1_Title" style="font-size:16px;text-align:center;">' + item.areaName + '</h4></div></div>');

            $('.circleDiv').eq(i).on('click', function() {
                var facResData1 = '';

                facResData1 += '<ul>'

                $.each(json.byInterestArea[i].citations, function(j, newItem) { //List all research of particular area
                    facResData1 += '<li style="color:#000;text-shadow:none;font-size:17px;">' + newItem + '</li>';
                })

                facResData1 += '</ul>';

                $.confirm({                      //display popup for citation details
                    columnClass: 'col-lg-12',
                    title: '<h3 style="margin-left:150px; color:red;text-shadow:none;">Research By Domain Area: ' + json.byInterestArea[i].areaName + '</h3><hr/>',
                    content: '<div class="facResEnvelop1"><p>' + facResData1 + '</div>',
                    buttons: {
                        close: function() {}
                    }
                })
            });

        })

         // for each faculty that exist in research gets the image from people
        $.each(json.byFaculty, function(j, item1) {
            var facImgPath = [];
            $('#facRes2_row').append('<div class="facResCol2"></div>');
            if (j >= 1) {
                //Get people - faculty
                xhr('get', {
                    path: '/people/faculty/username=' + item1.username
                }, '#facResLookup').done(function(jsonImg) {
                    //get image of all fac!
                    facImgPath[j] = jsonImg.imagePath;
                    $('.facResCol2').eq(j).css({
                        "background": "url(" + facImgPath[j] + ") 0% 0% / 100% 100% no-repeat",
                        "min-width": "10.6vw",
                        "min-height": "10.6vw",
                        "position": "relative",
                        "margin": ".51%",
                        "z-index": "4",
                        "overflow": "hidden"
                    });
                });

                $('.facResCol2').eq(j).on('click', function() {
                    var facResData2 = '';
                    facResData2 += '<ul>'
                    $.each(item1.citations, function(k, citItem) {  //displays research of the faculty who's picture is clicked
                        facResData2 += '<li style="color:#000;text-shadow:none;font-size:17px;">' + citItem + '</li>';
                    })
                    facResData2 += '</ul>';
                    $.confirm({
                        columnClass: 'col-lg-12',
                        title: '<h3 style="margin-left:10px; color:red;text-shadow:none;">' + item1.facultyName + '</h3><hr/>',
                        content: '<div class="facResEnvelop2"><p>' + facResData2 + '</div>',
                        buttons: {
                            close: function() {}
                        }
                    })
                });
            }
        })
    });

    //Get resource data through an xhr call 
    xhr('get', {
        path: '/resources'
    }, '#resource').done(function(json) {
        $('.headerTitle1').append(json.title);
        $('.footerTitle1').append(json.subTitle); 
        //displays current student data
        $('.currStudRow').append('<br/><div class="currStudCol" style="display:flex;flex-wrap:wrap;"><div class="curStudCol1" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle1" style="color:##fff;padding:10px;">' + json.coopEnrollment.title + '</h4></div></div></div>');

        $('.curStudCol1').css({
            "background": "url('assets/images/resources/current_co-op.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.curStudCol1').on('click', function() {   //on click displays co-op enrollment data 

            $.confirm({
                columnClass: 'col-lg-6',
                title: '<h3 style="margin-left:10px; color:red;text-shadow:none;">' + json.coopEnrollment.title + '</h3><hr/>',
                content: '<div class="currStudEnvelop1"><p style="color:#000;text-shadow:none;">Please refer to our <a target="_blank" href="http://ist.rit.edu/assets/pdf/ISTCooperativeEmployment%20PolicyandProcedures.pdf"><span style="color:blue">Co-op Guide!<span></a></p></div>',
                buttons: {
                    close: function() {}
                }
            })

        });

        $('.currStudCol').append('<br/><div class="curStudCol2" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle2" style="color:##fff;padding:10px;">Forms</h4></div></div>');

        $('.curStudCol2').css({
            "background": "url('assets/images/resources/current_forms.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        var formData = '';

        formData += '<h4 style="color:#000;text-shadow:none;">Undergraduates</h4><ul style="color:blue;text-shadow:none;">';

        $.each(json.forms.undergraduateForms, function(i, item) {
            formData += '<li><a href="http://ist.rit.edu/' + item.href + '">' + item.formName + '</a></li>';
        })

        formData += '</ul><h4 style="color:#000;text-shadow:none;">Graduates</h4><ul style="color:blue;text-shadow:none;">';

        $.each(json.forms.graduateForms, function(i, item) {
            formData += '<li><a href="http://ist.rit.edu/' + item.href + '">' + item.formName + '</a></li>';
        })

        formData += '</ul>';

        $('.curStudCol2').on('click', function() {  //on click displays form data, here user can download any form on a click
            $.confirm({
                columnClass: 'col-lg-6',
                title: '<h3 style="margin-left:7em;color:red;text-shadow:none;">Forms</h3>',
                content: formData,
                buttons: {
                    close: function() {}
                }
            })
        });

        $('.currStudCol').append('<br/><div class="curStudCol3" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle3" style="color:##fff;padding:10px;">' + json.tutorsAndLabInformation.title + '</h4></div></div>');

        $('.curStudCol3').css({
            "background": "url('assets/images/resources/current_tutors_lab.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.curStudCol3').on('click', function() {  //displays lab information
            $.confirm({
                columnClass: 'col-lg-6',
                title: '<h3 style="margin-left:3em;color:red;text-shadow:none;">' + json.tutorsAndLabInformation.title + '</h3>',
                content: '<div class="labEnvelop1"><p style="color:#000;text-shadow:none;">' + json.tutorsAndLabInformation.description + '</p><a target="_blank" href="' + json.tutorsAndLabInformation.tutoringLabHoursLink + '"><span style="color:blue;text-shadow:none;">Lab Hours and TA Schedule<span></a></p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });

        $('.currStudCol').append('<br/><div class="curStudCol4" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle4" style="color:##fff;padding:10px;">Course Enrollment</h4></div></div>');

        $('.curStudCol4').css({
            "background": "url('assets/images/resources/current_course_enroll.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.curStudCol4').on('click', function() {  //hardcoded course enrollment data since it is not present in the api call 
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:11em;color:red;text-shadow:none;">Course Enrollment</h3>',
                content: '<div class="EnrollEnvelop1" style="color:#000;text-shadow:none;"><h3>Course Enrollment</h3><p>Each semester has an enrollment period in which students use the Student Information System (SIS) to choose classes to take the following semester. Enrollment for spring courses typically happens in November, and enrollment for fall courses in April. Students are assigned a specific enrollment window during the enrollment period; this window is the only time (besides add/drop week) that students can enroll in courses. Check SIS for your personal enrollment window.</p><h3>Using Your Shopping Cart</h3><p>The shopping cart is designed to help students manage their course selections for the following term. It allows you to plan your schedule in advance, and makes registering for courses quicker and easier. Please note that placing a class in your shopping cart does not mean you are enrolled in that class, nor does it guarantee you a seat in that class. It is simply a tool for planning purposes.</p><p>Shopping carts become available a few weeks before the enrollment period, allowing you plenty of time to talk to your advisor and plan your courses. They open at the same time for all students, regardless of credit hours completed or if a student has an advising hold on their account.</p><p>We highly recommend students utilize their shopping cart. It can alert you ahead of time to things like time conflicts, advising holds, and other issues.</p><h3>Add/Drop Week</h3><p>The first week of each RIT semester is "Add/Drop Week," which allows students to tweak their schedules, adding and dropping courses without penalty. During Add/Drop week, IST academic advisors hold special walk-in hours for students to help them finalize their schedules. Specific walk-in hours are posted in the IST weekly newsletter (Rich Text), on IST social media, and are displayed in the IST main office in GOL-2100</p><p>The easiest way to drop a class during Add/Drop week is to use the "drop" function in SIS. Full instructions on how to drop a class in SIS can be found <a target="_blank" href="http://www.rit.edu/sistraining/sites/rit.edu.sistraining/files/files/student_enrollment_quick_reference_guide.pdf"><span style="color:blue">Online<span></a></p><p>Students may also drop classes in-person via an advising walk-in, or at the RIT Office of the Registrar. Remember, dropping a course during Add/Drop week leaves no record on your academic transcript.</p><h3>Withdrawing From a Course</h3><p>After the Add/Drop week ends, dropping a course results in a "drop with penalty," AKA "withdrawing" from a course. You can withdraw from a course on SIS the same way you drop a course, but withdrawing will result in a "W" penalty grade appearing on your academic transcript. If you are considering withdrawing from a class, we strongly encourage you to talk to your professor or academic advisor first. A withdrawal may also affect any financial aid you are receiving, so take that into account as well.</p><h3>Course Waitlists and Swapping</h3><p>Sometimes courses you want to take may be full before your enrollment window opens. This can happen with both required courses and electives. If this happens, you can join the waitlist for that course, which is also done via SIS. During the enrollment period, IST is constantly monitoring course enrollment and waitlist numbers, and we wll do everything we can to make sure students get into the courses they need.</p><p>That being said, waitlists do not guarantee enrollment, so we advise students to plan for backup courses if some of their first picks don not work out. This is especially true if the course you are waitlisted on is not offered by IST. We cannot override SIS and "push" our students into full classes that are offered by another department.</p><p>Another option is setting up a course swap, which means that if you enroll in your second choice course and then a seat opens up in your first choice, you can "swap" into that first choice course, effectively dropping your second choice without penalty. Course swaps are also done via SIS; for specific instructions, refer to the <a target="_blank" href="http://www.rit.edu/sistraining/sites/rit.edu.sistraining/files/files/student_enrollment_quick_reference_guide.pdf"><span style="color:blue">official RIT documentation.<span></a></p><h3>Auditing Courses</h3><p>Auditing a course means that a student may enroll in a course, but will not receive a grade or credit upon completion of the material. Students may choose to audit courses for various reasons, usually for academic exploration purposes or self-enrichment. At RIT, wellness classes make up the majority of audited courses. However, departments may allow students to audit an academic course on a case by case basis. Audits for non-wellness classes will need to be approved by the instructor using the Add/Drop Audit form, available on the <a target="_blank" href="https://www.rit.edu/academicaffairs/registrar/sites/rit.edu.academicaffairs.registrar/files/add-drop-audit_form_11-6-14.pdf"><span style="color:blue">Office of the Registrar"s Website.<span></a>Please note that audits cannot be officially processed until the first week of the academic term. If you wish to audit a course you�ve already taken, you must see your advisor before you enroll in the course.</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.currStudCol').append('<br/><div class="curStudCol5" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle5" style="color:##fff;padding:10px;">Minors & Immersions</h4></div></div>');

        $('.curStudCol5').css({
            "background": "url('assets/images/resources/current_minors_immersions.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        var libralData = '';


        $.each(json.studentServices.istMinorAdvising.minorAdvisorInformation, function(i, item) {
            libralData += '<li><span>' + item.title + ': Betty Hillman echics@rit.edu<span></li>'
        })

        $('.curStudCol5').on('click', function() {  //displays libral arts minor information
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h2 style="margin-left:10em;color:red;text-shadow:none;">Liberal Arts Minors & Immersions</h2>',
                content: '<div class="libralEnvelop1" style="color:#000;text-shadow:none;"><h2>Declaring a Minor in IST</h2><p>IST offers six minors for computing students. Descriptions and specific courses required can be found under the "Minors" section of this website. Speak to your academic advisor if you wish to declare an IST minor.</p><h4>Applying for a Minor in Another Department</h4><p>Adding a minor from another department requires a minor authorization form, which can be found in the IST office (GOL-2100) or on the <a target="_blank" href="https://www.rit.edu/academicaffairs/registrar/forms.html"><span style="color:blue">Registrar"s Website.<span></a> Students must also get signatures and approval from the minor"s advisor and from their home department head.</p><p>A full list of minors available at RIT can be found <a target="_blank" href="http://ist.rit.edu/index.php"><span style="color:blue">Online<span></a>. IST also recommends meeting with your academic advisor to discuss how a minor will fit into your academic plan.</p><h6>IST Minor Advisors</h6><ul>' + libralData + '</ul><p>*Designed for non-computing majors</p><p>**Designed for computing majors</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.currStudCol').append('<br/><div class="curStudCol6" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle6" style="color:##fff;padding:10px;">' + json.studentServices.title + '</h4></div></div>');

        $('.curStudCol6').css({   
            "background": "url('assets/images/resources/current_student_advising.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        var advisorData = '';
        $.each(json.studentServices.professonalAdvisors.advisorInformation, function(i, item) {
            advisorData += '<p class="featherlight-inner">Betty Hillman (<a href="' + item.email + '">' + item.email + '</a>): Undergraduate Computing &amp; Information Technologies and Human-Centered Computing</p>'
        })

        $('.curStudCol6').on('click', function() {  //onclick displays advising data
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h2 style="margin-left:12em;color:red;text-shadow:none;">' + json.studentServices.title + '</h2>',
                content: '<div class="advisorEnvelop1" style="color:#000;text-shadow:none;"><h3>Student Advising Services</h3><h4>Academic Advisors</h4><p>' + json.studentServices.academicAdvisors.description + '</p><h4>Who Is My Academic Advisor Advisor?</h4>' + advisorData + '<h4 class="featherlight-inner"><a href="http://ist.rit.edu/assets/pdf/IST_Enrollment_Helpful_Hints_Guide_2175.pdf" target="_blank">Enrollment Helpful Hints (.pdf)</a> </h4><h4>Faculty Advisors</h4><p>While faculty advisors are not formally assigned, we encourage students to talk with their professors about careers or research in their field of expertise. Many of our full-time faculty have extensive experience working in industry, while others are engaged in research projects (and they are always looking for student assistance). Check out the "People" and "Research" sections of this website to get a better understanding of what each faculty member specializes in, and swing by their office hours for a chat!</p><h4>Changing Your Major</h4><p>If you think you want to switch to a different major, either within IST or to another department, please review the "Change of Program Students" section of this website.</p><h4>Academic Alerts, Probation, and Suspension</h4><p>Academic alert emails are sent from your instructor when they feel you are doing poorly in their course. This email is a friendly warning that you may get into academic trouble - like receiving a low final grade or outright failing the course - if you do not act soon. You can respond to academic alerts by meeting with your professor to learn what you can do to improve in the course. All IST faculty want students to succeed in their classes, but they canot help you if you donot talk to them first. Additionally, you may want to meet with your academic advisor. RIT also offers many resources for students struggling academically, and your academic advisor can help you explore those resources.</p><p>Students that are unable to rectify their poor academic performance can be placed on academic probation or face suspension from RIT. Please read RITs<a target="_blank" href="https://www.rit.edu/academicaffairs/policiesmanual/d051"><span style="color:blue"> official policy <span></a>about academic probation/suspension, and contact your academic advisor with any specific questions.</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.currStudCol').append('<br/><div class="curStudCol7" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle7" style="color:##fff;padding:10px;">Student Ambassador</h4></div></div>');

        $('.curStudCol7').css({
            "background": "url('assets/images/resources/current_student_amb.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        var studAmbData = '';
        studAmbData += '<div style="text-align:center;"><img src="' + json.studentAmbassadors.ambassadorsImageSource + '" alt="Student Ambassadors" width="400px" height="350px"></div>'
        $.each(json.studentAmbassadors.subSectionContent, function(i, item) {
            studAmbData += '<h4>' + item.title + '</h4><p>' + item.description + '</p>';
        })

        $('.curStudCol7').on('click', function() {   //displays stundent ambassador data
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h2 style="margin-left:6em;color:red;text-shadow:none;">' + json.studentAmbassadors.title + '</h2>',
                content: '<div class="studambEnvelop1" style="color:#000;text-shadow:none;">' + studAmbData + '<a target="_blank" href="' + json.studentAmbassadors.applicationFormLink + '"><span style="color:blue"> Google Forms <span></a><p>' + json.studentAmbassadors.note + '</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });



        $('.currStudCol').append('<br/><div class="curStudCol8" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle8" style="color:##fff;padding:10px;">' + json.studyAbroad.title + '</h4></div></div>');

        $('.curStudCol8').css({
            "background": "url('assets/images/resources/current_study_abroad.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        var studyAbroadData = '';
        studyAbroadData += '<p>' + json.studyAbroad.description + '</p><p>While these two opportunities are exclusive to our department, we encourage students to explore the wealth of other <a target="_blank" href="http://studyabroad.rit.edu/"><span style="color:blue">offered by RIT.<span></a></p><div style="text-align:center;"><img src="/Project_2/assets/images/resources/croatia1.jpg" alt="Student Ambassadors" width="350px" height="250px"></div>';

        $.each(json.studyAbroad.places, function(i, item) {  //displays study abroad data for Croatia and Dubai 
            studyAbroadData += '<h4>' + item.nameOfPlace + '</h4><p>' + item.description + '</p>';
        })

        $('.curStudCol8').on('click', function() {
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h2 style="margin-left:12em;color:red;text-shadow:none;">' + json.studyAbroad.title + '</h2>',
                content: '<div class="studyAbrdEnvelop1" style="color:#000;text-shadow:none;">' + studyAbroadData + '</div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.currStudCol').append('<br/><div class="curStudCol9" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="curStudTitle9" style="color:##fff;padding:10px;">Commencement</h4></div></div>');

        $('.curStudCol9').css({
            "background": "url('assets/images/resources/current_commencement.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.curStudCol9').on('click', function() {  //displays current commencement data
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h2 style="margin-left:12em;color:red;text-shadow:none;">Commencement</h2>',
                content: '<div class="commenceEnvelop1" style="color:#000;text-shadow:none;"><h3>Commencement</h3><p>The spring commencement ceremony typically happens during the third week of May. Every student that wants to graduate at that time must apply to graduate before April 15. Applying for graduation sets in motion a process that ensures you have met all requirements to graduate. To apply:</p><ol><li>Log in to SIS</li><li>Go to student center and select "apply for graduation" in the drop down menu.</li><li>Select the earliest term in which you expect to have all requirements completed (both classes and co-ops)</li></ol><p>Once you have applied, you academic advisor will perform a degree audit and email you the results. The audit will let you know if you have any requirements remaining that will impede your graduation, and if you will be able to graduate in the timeframe you expect.</p><p>Failure to apply before the April 15 deadline has lasting consequences; talk to your academic advisor if you miss this important deadline.</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        //displays information for prospective students
        $('.prosStudRow').append('<br/><div class="prosStudCol" style="display:flex;flex-wrap:wrap;"><div class="prosStudCol1" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudColTitle1" style="color:##fff;padding:10px;">' + json.studyAbroad.title + '</h4></div></div></div>');

        $('.prosStudCol1').css({
            "background": "url('assets/images/resources/current_study_abroad.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol1').on('click', function() { //displays study abroad data for Crotia and Dubai

            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:13em;color:red;text-shadow:none;">' + json.studyAbroad.title + '</h3>',
                content: '<div class="studyAbrdEnvelop2" style="color:#000;text-shadow:none;">' + studyAbroadData + '</div>',
                buttons: {
                    close: function() {}
                }
            })

        });


        $('.prosStudCol').append('<br/><div class="prosStudCol2" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle2" style="color:##fff;padding:10px;">Student Success</h4></div></div>');

        $('.prosStudCol2').css({
            "background": "url('assets/images/resources/prospective_student_success.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol2').on('click', function() {   //displays information for student success like how in IST student can be successful
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:14em;color:red;text-shadow:none;">Student Success</h3>',
                content: '<div class="studSucEnvelop2" style="color:#000;text-shadow:none;"><h3>How to Succeed in IST</h3><p>Like most other university departments, students need to meet certain basic requirements to do well in IST: attend class, get to know your professors (visiting their office hours is a great way to do this) and meet your classmates. There are a few IST-specific topics however:</p><h5>Buying or Bringing a Computer to RIT</h5><p>The majority of IST students bring their own computer with them to RIT. While it is entirely possible to excell in IST classes and eventually graduate without owning your own computer, we find that most students enjoy the convenience of being able to take their work outside the labs. We also allow the use of personal computers in our classes, if students wish to do so. In fact, many of our professors prefer using open source software to teach, and our students like the convenience of being able to download the software and continue their work at home.</p><p>That being said, there are certain scenarios (in-class exams, for example) that require use of IST lab computers. If you are thinking about purchasing a computer to bring to RIT, our campus Information Technology Services Office has <a target="_blank" href="https://www.rit.edu/its/services/its_support_and_purchasing_guidelines"><span style="color:blue;text-shadow:none;">recommended support and purchasing guidelines.<span></a></p><h5>Prior knowledge of programming languages</h5><p>Many of our students enter our degree programs with some prior knowledge of code, whether it was from a high school class, online course, or other resource. This prior knowledge is great, but not required. Our introductory classes are designed to teach concepts from the ground up, meaning that a student with zero prior knowledge of class concepts is just as likely to succeed as a student that has experience with the material.</p><p>If you do however have access to computing courses through your high school, we encourage you to take them! You can also learn on your own through various free online resources; we like <a target="_blank" href="https://www.codecademy.com/"><span style="color:blue;text-shadow:none;">Code Academy<span></a>.For specific topics, we recommend learning the programming language Java.</p><h5>Getting involved in IST</h5><p>You will often hear that to make the most of your college experience, you need to "get involved" on campus. This axiom holds true in IST, and there are several ways to get involved in the department. We have 3 student-run clubs that cater to different interests:</p><ul><li><a target="_blank" href="https://www.codecademy.com/"><span style="color:blue;text-shadow:none;">Localhost </span></a>is for students interested in web and mobile application design & development, and user experience design.</li><li><a target="_blank" href="http://nexthop.network/"><span style="color:blue;text-shadow:none;">NextHop </span></a>is geared towards students that have an interest in computer networking and systems administration.</li><li><a target="_blank" href="https://www.facebook.com/RITHCI/timeline/"><span style="color:blue;text-shadow:none;">SIGCHI </span></a> at RIT is the local student chapter of an international organization that focuses on human computer interaction and how we interface with technology.</li></ul></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.prosStudCol').append('<br/><div class="prosStudCol3" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle3" style="color:##fff;padding:10px;">' + json.tutorsAndLabInformation.title + '</h4></div></div>');

        $('.prosStudCol3').css({
            "background": "url('assets/images/resources/current_tutors_lab.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol3').on('click', function() {  //displays tutoring an lab information
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:13em;color:red;text-shadow:none;">' + json.tutorsAndLabInformation.title + '</h3>',
                content: '<div class="labEnvelop2" style="color:#000;text-shadow:none;"><h4>Labs</h4><p>The IST department has 11 computing labs dedicated to student use. All labs feature industry standard equipment, and are open 7 days a week for student use. Students have access to both OSX and Windows, and all of the lab computers share the same software image, meaning you can pick up your work where you left off, no matter which lab you are in.</p><h4>Tutors</h4><p>Tutoring services are also available in our labs. Our tutors are more senior students, and are hired to help students struggling with introductory concepts or classes.</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.prosStudCol').append('<br/><div class="prosStudCol4" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle4" style="color:##fff;padding:10px;">Transfer Course Credit</h4></div></div>');

        $('.prosStudCol4').css({
            "background": "url('assets/images/resources/prospective_transfer_credit.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol4').on('click', function() {  //displays information about how course credit transfer works in IST
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:13em;color:red;text-shadow:none;">Transfer Course Credit</h3>',
                content: '<div class="transEnvelop2" style="color:#000;text-shadow:none;"><h4>Transferring Course Credit</h4><p>All course credit, whether it is from another college, AP, IB, or otherwise, must be submitted to the RIT Office of Admissions. More information about transferring credit can be found <a target="_blank" href="https://www.rit.edu/academicaffairs/registrar/transfer-credit/"><span style="color:blue;text-shadow:none;">online </span></a></p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.prosStudCol').append('<br/><div class="prosStudCol5" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle5" style="color:##fff;padding:10px;">Visit IST</h4></div></div>');

        $('.prosStudCol5').css({
            "background": "url('assets/images/resources/prospective_visit.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol5').on('click', function() {
            $.confirm({
                columnClass: 'col-lg-12',  //diplays information and contact detail of IST office
                title: '<h3 style="margin-left:13em;color:red;text-shadow:none;">Transfer Course Credit</h3>',
                content: '<div class="transEnvelop2" style="color:#000;text-shadow:none;"><h4>Visit Us!</h4><p>We are happy to accommodate you and your family, should you wish to visit our department. To make the most of your visit, we please ask that you first call ahead to the RIT Admissions Office (585-475-6736) and then to our office (585-475-2700). This will allow us to coordinate with the admissions office and prepare for your arrival. You can find more info about visiting RIT <a target="_blank" href="http://www.rit.edu/emcs/admissions/visit/"><span style="color:blue;text-shadow:none;">online </span></a></p><p>During your visit to our department, you will meet with one of our professional academic advisors, who will outline the curriculum and answer any questions you may have. You will also have the opportunity to take a tour of our department facilities, led by one of our current student ambassadors. We can also arrange for you to meet other members of staff or faculty, including our department chair, academic coordinators, and degree program curriculum leads. Just make sure to let us know who you want to meet before you visit! A full list of our faculty and staff can be found under the "People" section of this website.</p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.prosStudCol').append('<br/><div class="prosStudCol6" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle6" style="color:##fff;padding:10px;">How To Apply</h4></div></div>');

        $('.prosStudCol6').css({
            "background": "url('assets/images/resources/prospective_how_apply.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.prosStudCol6').on('click', function() { //onclick describes the process for application
            $.confirm({
                columnClass: 'col-lg-6',
                title: '<h3 style="margin-left:3em;color:red;text-shadow:none;">How To Apply</h3>',
                content: '<div class="applyEnvelop2" style="color:#000;text-shadow:none;"><h4>Interested?</h4><p>If you think one of our programs is right for you, apply via the <a target="_blank" href="https://www.rit.edu/emcs/admissions/"><span style="color:blue;text-shadow:none;">RIT Admissions website</span></a></p></div>',
                buttons: {
                    close: function() {}
                }
            })
        });


        $('.changePgmRow').append('<br/><div class="changePgmCol" style="display:flex;flex-wrap:wrap;"><div class="changePgmCol1" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="changePgmColTitle1" style="color:##fff;padding:10px;">Switching Majors Out of IST</h4></div></div></div>');

        $('.changePgmCol1').css({
            "background": "url('assets/images/resources/CoP_switching_out.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.changePgmCol1').on('click', function() {  //gives information on switching majors out of IST

            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h3 style="margin-left:12em; color:red;text-shadow:none;">Switching Majors Out of IST</h3>',
                content: '<div class="switchMajEnvelop2" style="color:#000;text-shadow:none;"><h3>Application Process</h3><p>If you wish to change your major to one outside of IST, your first step is to schedule an appointment with an advisor from the major you would like to enter. They will be the best resource to help you decide if the major is right for you. They will also alert you to any additional materials you will need to prepare in order to switch majors into their department. (For example, IST requires a written statement from all change of program applicants).</p><p>Next, meet with your current academic advisor in IST, and they will complete a Change of Program form with you. The form is then sent (along with your academic file) to your new department. Your new department will then review all materials and make the final decision. You will be notified of this decision via email from your new department.</p></div>',
                buttons: {
                    close: function() {}
                }
            })

        });


        $('.changePgmCol').append('<br/><div class="changePgmCol2" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle6" style="color:##fff;padding:10px;">Switching Majors into IST</h4></div></div>');

        $('.changePgmCol2').css({
            "background": "url('assets/images/resources/CoP_switching_in.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.changePgmCol2').on('click', function() {  // gives information on switching majors within IST
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h4 style="margin-left:13em;color:red;text-shadow:none;">Switching Majors into IST</h4>',
                content: '<div class="applyEnvelop2" style="color:#000;text-shadow:none;"><h4>Switching majors into one of our degrees</h4><h5>Attend one of our meetings</h5><ul><li>Wednesday, March 21; 1:00-2:00pm in GOL-2620</li><li>Thursday, March 29; 12:30-1:30pm in GOL-2650</li><li>Friday, April 20; 2:30-3:30pm in GOL-2590</li></ul><p>To request an interpreter, please go through Access Services:</p><p><a target="_blank" href="https://myaccess.rit.edu/2/"><span style="color:blue;text-shadow:none;">https://myaccess.rit.edu/2/</span></a></p><h5>Application Process</h5><p>Meet with your academic advisor in your current (home) department to complete a Change of Program Registrars form. You will need to submit a 1-2 page written statement that answers the following questions:</p><ul><li>Why are you applying to your chosen IST major?</li><li>What are you academic strengths and weaknesses?</li><li>What areas of computing are you passionate about?</li><li>What are you future goals and/or career interests?</li><li>Why do you believe this major is the right fit for your future goals?</li></ul><p>Your application & statement should be sent to the IST Department, GOL-2100.</p><h5>Deadlines, Dates & More</h5><ul><li>Fall Semester (2181) Change Of Program Deadline: Thursday, May 10th</li><li>Applications will be reviewed after fall semester (2175) final grades are posted</li><li>Students will receive an email of our decision 1 week after grades are posted</li><li>IST course restrictions lift two weeks after enrollment begins - please place yourself on the wait list by setting up a SWAP</li><li>The IST Department reserves the right to deny a change of program application based on the above criteria, academic standing, or students demonstrated ability to complete program requirements.</li><li>Recommended cumulative & term GPA: 2.5 + in courses relevant to IST</li></ul><h5>Suggested Courses</h5><ul><li>ISTE 120 Computational Problem Solving in the Information Domain (all majors)</li><li>ISTE 140 Web and Mobile I (all majors)</li><li>MATH 131 Discrete Math (WMC and CIT majors)</li><li>STAT 145 Intro to Statistics I (HCC and CIT majors)</li><li>PSYC 101 Intro to Psychology (HCC major)</li></ul><span>Steve Zilora; IST Department Chair</span><span>Daniel Bogaard; IST Undergraduate Program Director</span><span>Betty Hillman; Academic Advisor, CIT, HCC</span><span>Jeff Spain; Academic Advisor, WMC</span></div>',
                buttons: {
                    close: function() {}
                }
            })
        });



        $('.changePgmCol').append('<br/><div class="changePgmCol3" style="padding-top:200px;"><div style="background:orange;height:50px;"><h4 class="prosStudTitle6" style="color:##fff;padding:10px;">Switching Within IST</h4></div></div>');

        $('.changePgmCol3').css({
            "background": "url('assets/images/resources/CoP_switch_within_IST.jpg') 0% 0% / 100% 100% no-repeat",
            "min-width": "10.6vw",
            "min-height": "10.6vw",
            "position": "relative",
            "margin": ".51%",
            "z-index": "4",
            "overflow": "hidden"
        });

        $('.changePgmCol3').on('click', function() {  // displays the information on switching majors in IST
            $.confirm({
                columnClass: 'col-lg-12',
                title: '<h4 style="margin-left:13em;color:red;text-shadow:none;">Switching Majors into IST</h4>',
                content: '<div class="switchEnvelop3" style="color:#000;text-shadow:none;"><h4>Switching majors into one of our degrees</h4><h5>Attend one of our meetings</h5><ul><li>Wednesday, March 21; 1:00-2:00pm in GOL-2620</li><li>Thursday, March 29; 12:30-1:30pm in GOL-2650</li><li>Friday, April 20; 2:30-3:30pm in GOL-2590</li></ul><p>To request an interpreter, please go through Access Services:</p><p><a target="_blank" href="https://myaccess.rit.edu/2/"><span style="color:blue;text-shadow:none;">https://myaccess.rit.edu/2/</span></a></p><h5>Application Process</h5><p>Meet with your academic advisor in your current (home) department to complete a Change of Program Registrars form. You will need to submit a 1-2 page written statement that answers the following questions:</p><ul><li>Why are you applying to your chosen IST major?</li><li>What are you academic strengths and weaknesses?</li><li>What areas of computing are you passionate about?</li><li>What are you future goals and/or career interests?</li><li>Why do you believe this major is the right fit for your future goals?</li></ul><p>Your application & statement should be sent to the IST Department, GOL-2100.</p><h5>Deadlines, Dates & More</h5><ul><li>Fall Semester (2181) Change Of Program Deadline: Thursday, May 10th</li><li>Applications will be reviewed after fall semester (2175) final grades are posted</li><li>Students will receive an email of our decision 1 week after grades are posted</li><li>IST course restrictions lift two weeks after enrollment begins - please place yourself on the wait list by setting up a SWAP</li><li>The IST Department reserves the right to deny a change of program application based on the above criteria, academic standing, or students demonstrated ability to complete program requirements.</li><li>Recommended cumulative & term GPA: 2.5 + in courses relevant to IST</li></ul><h5>Suggested Courses</h5><ul><li>ISTE 120 Computational Problem Solving in the Information Domain (all majors)</li><li>ISTE 140 Web and Mobile I (all majors)</li><li>MATH 131 Discrete Math (WMC and CIT majors)</li><li>STAT 145 Intro to Statistics I (HCC and CIT majors)</li><li>PSYC 101 Intro to Psychology (HCC major)</li></ul><span>Steve Zilora; IST Department Chair</span><span>Daniel Bogaard; IST Undergraduate Program Director</span><span>Betty Hillman; Academic Advisor, CIT, HCC</span><span>Jeff Spain; Academic Advisor, WMC</span></div>',
                buttons: {
                    close: function() {}
                }
            })
        });

        //Get footer information such as how to apply now, news , about IST site, and about IST's social presence(twitter, facebook) 
        xhr('get', {
            path: '/footer'
        }, '#apply').done(function(json) {
            //console.log(json.quickLinks[0].title);
            $('.headerTitle3').append(json.social.title);  //displays the title
            $('.footerTitle3').append(json.social.tweet);   //display one of the tweets
            $('.social_row').append('<p style="font-size: 20px;color: #517989"><i>' + json.social.by + '</i></p>');
            $('.socialIcon_row').append('<a href="' + json.social.twitter + '" target="_blank"><img src="assets/images/social/twitter.png"></a>&nbsp;&nbsp;<a href="' + json.social.facebook + '" target="_blank"><img src="assets/images/social/facebook.png"></a>');
            $('.apply_row').append('<a href="' + json.quickLinks[0].href + '" target="_blank" style="text-decoration: none;"><button type="button" style="border-color: white;color: white;padding: 10px 15px;text-align: center; text-decoration: none;display: inline-block;font-size: 17px; margin: 6px 4px;cursor: pointer;" onclick="href()">' + json.quickLinks[0].title + '</button></a>');
            var quickLinksData = '';
            $.each(json.quickLinks, function(i, item) {  //gives links for apply now,about the site, IST support, and about lab hours
                quickLinksData += '<li><a href="' + item.href + '" target="_blank">' + item.title + '</a></li>';
            })

            $('.bottom-row').append('<div class="bottom_col1"><ul>' + quickLinksData + '<li><a href="http://ist.rit.edu/api/contactForm/" target="_blank">Contact US</a></li></ul></div>');
            $('.bottom-row').append('<div class="bottom_col2" style="color:#000;margin-left:21%"><p><i>' + json.copyright.title + '</i></p><p>' + json.copyright.html + '</p></div>');       //displays copyright information

            xhr('get', {
                path: '/news/older'              
            }, '#apply').done(function(json1) {
                $('.bottom-row').append('<br/><div class="bottom_col3" style="color:#f05f40;margin-left:21%"><h5>News Archives</h5><a href="" target="_blank" class="a_popup" onclick="return false">All News</a></div>');

                var newsData = '';

                $.each(json1.older, function(i, item3) {
                    newsData += '<h4 style="color:#517989;">' + item3.title + '(' + item3.date + ')<h4>';
                    if (item3.description != "" && item3.description != null) {   //null check for each of the fields
                    newsData += '<p style="font-size:14px;">' + item3.description + '</p>';
                  }
                })

                $('.a_popup').on('click', function() {    //displays news data related to IST
                    $.confirm({
                        columnClass: 'col-lg-12',
                        title: '<h3 style="margin-left:17em;color:red;text-shadow:none;">News</h3>',
                        content: '<div class="apopupEnvelop1" style="color:#000;text-shadow:none;">' + newsData + '</div>',
                        buttons: {
                            close: function() {}
                        }
                    })
                });

            });
        });
    });
});


//function to display course details
function courseDesc(getCrsDetail) {
    xhr('get', {
        path: '/course/courseID=' + getCrsDetail.id
    }, '#getCrsDetail').done(function(json) {
        $.confirm({
            columnClass: 'col-lg-12',
            title: '<h3 style="margin-left:250px;color:red;text-shadow:none;">' + json.title + '</h3>',
            content: '<div class="envelop" style="text-align:center;color:#000;text-shadow:none;"><p>' + json.description + '</p></div>',
            buttons: {
                close: function() {}
            }
        });
    });
}

//function to swap between faculty and staff div by fadeIn and fadeOut function
function swapDiv(empl) {
    if (empl === "faculty") {
        $('#facultyButtonId').removeClass('selected_ppl');  //add and remove class to display CSS on button
        $('#staffButtonId').addClass('selected_ppl');
        $('.staffEmp').fadeIn();
        $('.facultyEmp').fadeOut();
    } else {
        $('#staffButtonId').removeClass('selected_ppl');
        $('#facultyButtonId').addClass('selected_ppl');
        $('.staffEmp').fadeOut();
        $('.facultyEmp').fadeIn();
    }
}


// utilities....
//		getOrPost - get or a post
//		d - {path:'/about/'}
//		pId - '#parentId' (opt.title)
// function to hold common attribute of ajax call
// usage: xhr('get',{path:'/about/'},"#json.parentId").done(function(json){//deal...})

function xhr(getOrPost, d, pId) {
    return $.ajax({
        type: getOrPost,
        url: 'proxy.php',
        cache: false,
        async: true,
        dataType: 'json',
        data: d,
        beforeSend: function() {
            //put out a spinner if pId is defined...
            $(pId).append('<img src="assets/images/loading/gears.gif" class="gear"/>');
        }
    }).always(function() {
        //kill the spinner...
        $(pId).find('.gear').fadeOut(500, function() {
            $(this).remove();
        });
    }).fail(function(err) {
        console.log(err);
    });
}