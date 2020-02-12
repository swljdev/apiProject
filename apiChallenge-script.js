const baseURL = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"

const clubName = document.querySelector("ul");
const searchForm = document.getElementById("clickButton");

searchForm.addEventListener('click', fetchTeam)

// fetch(baseURL)
//     .then(function(response) {
//         console.log(response)
//         return response.json();
//     }).then(function(json) {
//         console.log(json)
//     })

    // const request = async() => {
    //     const response = await fetch(baseURL);
    //     const json = await response.json()
    //     console.log(json);
    //     return 'this should print last'
    //   }
      
    //     request().then(Obj=>{
    //     console.log(Obj);
    //   })


    function fetchTeam(e) {
        e.preventDefault();
        fetch(baseURL)
            .then(function (results) {
                // console.log('being hit')
                return results.json();
            }).then(function (json) {
                // console.log(json)
                displayTeams(json)
            })
            
    }


function displayTeams(data) {
    console.log(data)
    console.log('test ', data.teams[4].strTeam);
    // data.forEach(team => {
    //     let teamName = document.createElement('li');
    //     teamName.innerText=team.team_strTeams;
    //     clubName.appendChild(teamName);
    //  } ) 
    }

