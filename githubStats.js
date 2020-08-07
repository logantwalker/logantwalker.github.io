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
                        
                    }
                    else{
                        return;
                    }
                })
            })
        })
    }


    getLangNums(data);

    const githubStats = {
        langs: languagesList,
        vals: langCount
    };

    dataViz(githubStats);
    
}

const finalDataArr= [];
function dataViz(stats){
    const langSum = stats.vals.reduce((a,b)=>{
        return a+b;
    });
    
    const percentArr = stats.vals.map((el)=>{
        return ((el/langSum)*100).toFixed(2);
    });

    console.log(percentArr);
    stats.percentage = percentArr;

    const createDataSet = (stats) =>{
        let langArr = stats.langs;
        let langPrct = stats.percentage;

        langArr.forEach((lang,i) =>{
            finalDataArr.push({
                language: lang,
                percent: langPrct[i]
            })
        })
    }
    createDataSet(stats);
    console.log(finalDataArr);
}