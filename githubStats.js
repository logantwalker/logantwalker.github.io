function getRepoStats() {

    const onReject = (errThrown) => {
        console.log(errThrown);
        console.log(errThrown.responseText);
    }

    $.ajax({
    
        url:'https://api.github.com/users/logantwalker/repos?per_page=100'
    
    }).then(function (response) {
        getLangData(response);
    
    }, onReject);

}
getRepoStats();

var langDataArr=[];

function getLangData(data){
    // let repoCount = data.length;
    let langEndpoint = [];

    data.forEach(repo =>{
        let url = repo.languages_url
        langEndpoint.push(url);
    });

    const langDataRequest = (urls) =>{

        urls.forEach( (urlStr, i) =>{

            const onReject = (errThrown) => {
                console.log(errThrown);
                console.log(errThrown.responseText);
            }
        
            $.ajax({
            
                url: urlStr
            
            }).then(function (response) {
                console.log(response);
                langDataArr.push(response)
                // compileLangData(response);
            
            }, onReject);
        })

    }
    langDataRequest(langEndpoint);
    compileLangData(langDataArr);

}

var languagesList = '';
var langCount = [];

function compileLangData(data){
    
    const checkDupes = data =>{
        console.log(data); 
    }
    checkDupes(data);

    // languagesList = languagesList.split(', ');
    // languagesList.pop();

    // languagesList.forEach(()=>{
    //     langCount.push(0);
    // })
    // console.log(langCount);



    // const getLangNums = data =>{
    // }

    // getLangNums(data);
    // console.log(langCount);

}