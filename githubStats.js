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


    // d3.js bar chart //

    // var svg = d3.select("svg"),
    //     margin = 200,
    //     width = svg.attr("width") - margin,
    //     height = svg.attr("height") - margin;


    // var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
    //     yScale = d3.scaleLinear().range ([height, 0]);

    // var g = svg.append("g")
    //            .attr("transform", "translate(" + 100 + "," + 100 + ")");

    console.log(window.innerHeight)
    console.log(window.innerWidth)

    const margin = 60;
    const width = (window.innerWidth/1.) - 2 * margin;
    const height = (window.innerHeight/2) - 2 * margin;
    console.log(height)
    console.log(width);

    const svg = d3.select('svg');
    const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 100]);

    chart.append('g')
        .call(d3.axisLeft(yScale));

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(finalDataArr.map((s) => s.language))
        .padding(1)

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

}