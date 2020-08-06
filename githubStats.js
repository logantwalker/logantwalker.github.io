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

        let stopCondition = urls.length;

        urls.forEach( (urlStr, i) =>{

            const onReject = (errThrown) => {
                console.log(errThrown);
                console.log(errThrown.responseText);
            }
        
            $.ajax({
            
                url: urlStr
            
            }).then(function (response) {
                
                dataCollect(response);
                
            }, onReject);
        })

    }
    langDataRequest(langEndpoint);
    
    

}

function dataCollect(res){
    langDataArr.push(res);
    if(langDataArr.length > 10){
        compileLangData(langDataArr);
    }
    else{
        return;
    }
}

var languagesList = '';
var langCount = [];

function compileLangData(data){
    
    const checkDupes = data =>{
        data.forEach(obj =>{
            let keys = Object.keys(obj);
            
            keys.forEach(key =>{
                if(languagesList.includes(key)){
                    return;
                }
                else{
                    languagesList = languagesList + key + ', ';
                }
            })
        })
    }
    checkDupes(data);
    

    languagesList = languagesList.split(', ');
    languagesList.pop();

    languagesList.forEach(()=>{
        langCount.push(0);
    })
    console.log(languagesList);



    const getLangNums = data =>{
        languagesList.forEach((lang, i) =>{
            data.forEach(obj =>{
                let keys = Object.keys(obj);
                keys.forEach(key =>{
                    if(key === lang){
                        langCount[i]+= obj[key];
                        console.log(langCount);
                    }
                    else{
                        return;
                    }
                })
            })
        })
    }


    getLangNums(data);
    // console.log(langCount);

}