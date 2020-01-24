var APIKey = "kwMGGaQMvMueg7o7vh0qYYXiEVmWX2Nk"

var query //Search terms
var NoRecords // number records to retrieve
var startYear
var endYear



$("#searchButton").on("click", function(){
    
    
    query = $("#search").val()
    NoRecords  = $("#noRecords").val()
    startYear = $("#startYear").val()
    endYear = $("#endYear").val()

    
})

function test(){
    query = "Obama"

    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+query+"&api-key="+APIkey,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
}
Test()